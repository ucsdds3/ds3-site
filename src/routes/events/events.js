
fetch("config/gcp_info.json")
    .then(response => response.json())
    .then(json => request_calendar(json))

// Requests calendar api via gcp api key
function request_calendar(json_creds) {
    DS3_CALENDAR_ID = json_creds['cid']
    API_KEY = json_creds['api_key']
    GCP_API_ENDPOINT = `https://www.googleapis.com/calendar/v3/calendars/${DS3_CALENDAR_ID}/events`
    PARAM = `?key=${API_KEY}&timeMin=${new Date().toISOString()}&maxResults=9&singleEvents=true&orderBy=startTime`
    
    // Request
    $.ajax({
        url: GCP_API_ENDPOINT + PARAM,
        type: 'GET',
        dataType: 'jsonp',
        success: function(res) {
            handleCalenderResponse(res);
        }
    });
}

// Handle Response
function handleCalenderResponse(json) {
    // Obtain key vars
    var response_area = document.getElementById("card-array")
    var msg = document.getElementById('noti-message')
    var loader = document.getElementById('loader-event')
    var events_data = json['items']
    var events_parsed_data = []

    // If json error
    if (json['error']) {
        loader.remove()
        msg.innerHTML = `Error: ${json['error']['code']}`
        return
    }

    // If no events
    if (events_data.length == 0) {
        loader.remove()
        msg.innerHTML = "No Upcomming Events"
        return
    }

    // Parse data from json response
    for (i = 0; i < events_data.length; i ++) {
        //  Init loop vars
        var event = events_data[i]
        var event_data = {}

        // Parse data
        var start = get(event['start'], 'dateTime', event['start']['date'])
        event_data["month_date"] = parse_date(start)
        if (start.includes('T')) {
            event_data["start_time"] = parse_time(start)
            event_data["end_time"] = parse_time(event['end']['dateTime'])
        }
        var location = get(event, 'location', 'Location TBA')
        var sec_location = parse_location(get(event, 'description', 'Bad Form'))
        if (sec_location === 'Bad Location') {
            event_data['location'] = location;
        } else {
            event_data['location'] = sec_location;
        }
        event_data["title"] = event['summary']
        event_data["register_form"] = parse_reg_form(get(event, 'description', 'Form Missing')) 

        // Save parsed data
        events_parsed_data.push(event_data)
    }
    
    // Using parsed data impute into HTML
    loader.remove()
    for (i = 0; i < events_parsed_data.length; i ++) {
        const event = events_parsed_data[i]
        if (get(event, 'start_time', 0) == 0) {
            time_span = '<span class=c-card-time">Time TBA</span>'
        } else {
            time_span = `<span class="c-card-time">${event['start_time']} - ${event['end_time']}</span>`
        }
        if (event['register_form'] == "Form Missing") {
            reg_button = `<button class="c-card-button unclickable" disabled>Register</button>`
        } else {
            reg_button = `<button class="c-card-button" onclick="window.open('${event['register_form']}')", target='_blank')">Register</button>`
        }
        html = `
        <div class="c-card">
                <h2 class="c-card-title">${event['title'].replace("[autogen]", "")}</h2>
                <h1 class="c-card-date">${event['month_date'][0]} ${event['month_date'][1]}</h1>
                ${time_span}
                <p class="c-card-desc">${event['location']}</p>
                ${reg_button}
        </div>
        `
        response_area.innerHTML += html
    }
}

// --------------------
//       Helpers
// --------------------

function get(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}

function parse_date(str_encoding) {
    const month_hash = {'01':'Jan', '02':'Feb', '03':'Mar', '04':'Apr', '05':'May', '06':'Jun', '07':'Jul', '08':'Aug', '09':'Sep', '10':'Oct', '11':'Nov', '12':'Dec'}
    // Regex matching
    const regex = /\d{4}-\d{2}-\d{2}/g
    const month_date = str_encoding.match(regex)[0].split('-')

    // Parsing
    const month = month_hash[month_date[1]]
    const date = month_date[2]
    return [month, date]
}

function parse_time(str_encoding) {
    // Regex matching
    const regex = /(\d{2}:\d{2}):\d{2}/g
    var uncleaned_time = str_encoding.match(regex)[0]
    const hour = parseInt(uncleaned_time.slice(0,2))
    const minutes = uncleaned_time.slice(3, 5)

    // Building time string
    var time = "ERROR"
    if (hour == 12) {
        time = `12:${minutes}pm`
    } else if (hour == 0) {
        time = `12:${minutes}am`
    } else if (hour > 12) {
        time = `${hour - 12}:${minutes}pm`
    } else {
        time = `${hour}:${minutes}am`
    }
    return time
}

function parse_reg_form(str_encoding) {
    if (str_encoding == "Form Missing") { return "Form Missing" }
    const regex = /href="(.*form.*)"|(https:.+typeform.+)/gm
    data = str_encoding.match(regex)
    return (!data || data.length === 0) ? "Form Missing" : data[0].replace("href=", "").replaceAll('"', "")
}

function parse_location(str_encoding) {
    const regex = /Location:(.+)Hosted/g
    const data = str_encoding.match(regex)
    if (!data || data.length === 0) {
        return "Bad Location"
    } else {
        const location = data.toString()
            .replace("Location:", "").replace("&lt;AWAITING ROOM&gt;", "Location TBA")
            .replaceAll('<b>', "").replaceAll("<br>", "")
            .replaceAll("</b>", "").replace("Hosted", "")
            .trim();
        return location
    }
}