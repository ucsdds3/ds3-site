import { GCP_API_KEY } from '$env/static/private'

const CALENDAR_ID: string = "c_c83a571b383773c89c57f2a6c39b9619759bce4c2e8d7f3f6e5e558aa1b9fb32@group.calendar.google.com"
interface GoogleCalendarResponse {
    error?: string,
    items?: GoogleCalendarEvent[]
}
interface GoogleCalendarEvent {
    kind: string,
    etag: string,
    id: string,
    status: string,
    htmlLink: string,
    created: string,
    updated: string,
    summary: string,
    description: string,
    creator: {
        email: string
    },
    organizer: {
        email: string,
        displayName: string,
        self: boolean
    },
    start: {
        dateTime?: string,
        date?: string,
        timeZone: string
    },
    end: {
        dateTime?: string,
        date?: string
        timeZone: string
    },
    iCalUID: string,
    sequence: number,
    eventType: string
}
interface CleanEvent {
    title: string,
    datetime: string,
    location: {
        mapsLocation: string,
        roomLocation: string
    },
    presenters: string,
    description: string
    registerFormURL?: string
}
interface parseDescription {
    hosts: string ;
    trueDescription: string;
    roomLocation: string;
    regForm?: string;
}

async function fetchGoogleCalendar(calenderID: string, APIkey: string): Promise<GoogleCalendarResponse> {
    const calendarEndpoint: string = `https://www.googleapis.com/calendar/v3/calendars/${calenderID}/events`
    const params: string = `?key=${APIkey}&timeMin=${new Date().toISOString()}&maxResults=9&singleEvents=true&orderBy=startTime`
    
    let response: Response = await fetch(
        calendarEndpoint + params,
        {
            method: 'GET',
            cache: 'no-cache',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }
    )

    return response.json()
}

function handleGoogleCalendarResponse(raw: GoogleCalendarResponse): CleanEvent[] | undefined {
    // If json error
    if (raw['error']) {
        return
    }

    // If no events
    if (raw["items"] && raw['items'].length == 0) {
        return
    }

    // Parsing response to be passed to front end
    var cleanedEvents: CleanEvent[] = new Array;
    const eventsList: GoogleCalendarEvent[] = raw['items']!;
    for (var i: number = 0; i < eventsList.length; i ++) {
        const event: GoogleCalendarEvent = eventsList[i]

        let parsed: parseDescription = parseDescriptionInformation(event["description"])


        const cleanEvent: event = {
            title: event['summary'].replaceAll("[autogen]", ""),
            datetime: datetimeString,
            location: {
                mapsLocation: event["location"].trim(),
                roomLocation: parsed["roomLocation"]
            },
            presenters: parsed["hosts"],
            description: parsed["trueDescription"],
            registerFormURL: string
        }
        
        cleanedEvents.push(cleanEvent)
    }

    return cleanedEvents
}


export async function load()  {

    const rawCalendarData: GoogleCalendarResponse = await fetchGoogleCalendar(CALENDAR_ID, GCP_API_KEY)
    const cleanedData: any = handleGoogleCalendarResponse(rawCalendarData)

    return {
        calendarData: cleanedData
    }
}

// Helpers
function parseDescriptionInformation(body: string): parseDescription {
    // Description Regex
    const roomLocation: RegExp = /(?<=Location:)(.*?)(?=<br>)/gi
    const hosts: RegExp = /(?<=<br>).*?(?=<br>)/
    const trueDescription: RegExp = /([^>]*)$/
    
    
    const parsedData: parseDescription = {
        roomLocation: body.match(roomLocation)[0].replace(/<b>/g, '').replace(/<\/b>/g, '').trim(),
        trueDescription: body.match(trueDescription)[0].trim(),
        hosts: body.match(hosts)[0].replace(/<b>/g, '').replace(/<\/b>/g, '').trim()
    }
    return parsedData
}