import { GCP_API_KEY } from '$env/static/private'

const CALENDAR_ID: string = "c_c83a571b383773c89c57f2a6c39b9619759bce4c2e8d7f3f6e5e558aa1b9fb32@group.calendar.google.com"

async function fetchGoogleCalendar(calenderID: string, APIkey: string): Promise<JSON> {
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

function handleGoogleCalendarResponse(raw: JSON) {
    return raw
}


export async function load()  {

    const rawCalendarData: JSON = await fetchGoogleCalendar(CALENDAR_ID, GCP_API_KEY)
    const cleanedData: any = handleGoogleCalendarResponse(rawCalendarData)

    return {
        calendarData: cleanedData
    }
}