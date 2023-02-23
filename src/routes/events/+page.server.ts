import { GCP_API_KEY } from '$env/static/private'

const CALENDAR_ID: string = "c_6a154893689d6a0906f6311d88adf4ca5c125aa6de0dc09e95375593071ff40b@group.calendar.google.com"


function fetchGoogleCalendar(calenderID: string, api_key: string): Object[] {
    return [{ md: "md5hash"}, { md: "md5hash"}]
}


export const load = (async ({}) => {

    fetchGoogleCalendar(CALENDAR_ID, GCP_API_KEY)

    return {
        helw: "Hello World"
    }

})