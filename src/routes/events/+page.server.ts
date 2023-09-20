import { prisma } from "$lib/server/prisma";

async function fetchEvents() {
    try {
        let dbres = await prisma.event.findMany()
        return {
            msg: dbres
        }
    } catch {
        return {
            error: "DB Fetch Failed"
        }
    }
}

export async function load()  {

    let eventData = await fetchEvents()
    return {...eventData}
}