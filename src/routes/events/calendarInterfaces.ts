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
    location?: string,
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
    date: string,
    time: string,
    location: {
        mapsLocation?: string,
        roomLocation?: string
    },
    presenters?: string,
    description?: string
    registerFormURL?: string
}

interface parseDescription {
    hosts?: string ;
    trueDescription: string;
    roomLocation?: string;
    regForm?: string;
}

export type { GoogleCalendarEvent, GoogleCalendarResponse, CleanEvent, parseDescription }