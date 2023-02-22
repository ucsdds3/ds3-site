import type { PageLoad } from "./$types"


export const load = (async ({params}) => {

    return {
        helw: "Hello World"
    }

}) satisfies PageLoad