import { GCP_API_KEY } from '$env/static/private'
import { GoogleCalenderID } from '$web-config/master-config.json'
import type { GoogleCalendarEvent, GoogleCalendarResponse, CleanEvent, parseDescription } from './calendarInterfaces'


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
        // Parsing information
        const event: GoogleCalendarEvent = eventsList[i]
        const parsed: parseDescription | undefined = (event["description"]) ? parseDescriptionInformation(event["description"]): undefined
        const dtString: string[] = parseDTInfo(event["start"], event["end"])

        const cleanEvent: CleanEvent = {
            title: event['summary'].replaceAll("[autogen]", ""),
            date: dtString[0],
            time: dtString[1],
            datetime: (event["start"]["dateTime"]) ? dateToRFC5545(event["start"]["dateTime"],event["end"]["dateTime"]) : undefined,
            location: {
                mapsLocation: (event["location"]) ? event["location"].trim() : undefined,
                roomLocation: (parsed) ? parsed["roomLocation"] : undefined
            },
            presenters: (parsed) ? parsed["hosts"] : undefined,
            description: (parsed) ? parsed["trueDescription"] : undefined,
            registerFormURL: (parsed) ? parsed["regForm"] : undefined
        }
        
        cleanedEvents.push(cleanEvent)
    }

    return cleanedEvents
}

function dateToRFC5545(start: string, end: string): string {
    start = new Date(start).toISOString().replace(/-|:/g, "")
    end = new Date(end).toISOString().replace(/-|:/g, "")

    return start + "/" + end
}


export async function load()  {

    const rawCalendarData: GoogleCalendarResponse = await fetchGoogleCalendar(GoogleCalenderID, GCP_API_KEY)
    const cleanedData: any = handleGoogleCalendarResponse(rawCalendarData)

    return {
        calendarData: cleanedData,
        pastEvents: []
    }
}


// Helpers
function parseDescriptionInformation(body: string): parseDescription {
    // Description Regex
    const roomLocation: RegExp = /(?<=Location:)(.*?)(?=<br>)/gi
    const hosts: RegExp = /(?<=<br>).*?(?=<br>)/
    const trueDescription: RegExp = /([^>]*)$/
    const registrationForm: RegExp = /href="(.*form.*)"|(https:.+typeform.+)/gm
    
    // Finding matches
    const rL = body.match(roomLocation)
    const hS = body.match(hosts)
    const rF = body.match(registrationForm)

    const parsedData: parseDescription = {
        roomLocation: (rL) ? rL[0].replace(/<b>/g, '').replace(/<\/b>/g, '').trim() : undefined,
        trueDescription: body.match(trueDescription)![0].trim(),
        hosts: (hS) ? hS[0].replace(/<b>/g, '').replace(/<\/b>/g, '').trim() : undefined,
        regForm: (rF) ? rF[0].replace("href=", "").replaceAll('"', "") : undefined
    }
    return parsedData
}

function parseDTInfo(start: any, end: any): string[] {
    const monthHash: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const startObject: Date = new Date(start["dateTime"])
    const endObject: Date = new Date(end["dateTime"])

    const date: string = `${monthHash[startObject.getMonth()]} ${startObject.getDate() - 1}`
    const startTime: string = startObject.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" })
    const endTime: string = endObject.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZone: "America/Los_Angeles" })

    return [date, `${startTime} - ${endTime}`]
}
