<script lang='ts'>
    //importing for TypeScript support
    import type { PageData } from './$types';
    // imports for event card display
    import EventCard from './eventCard.svelte';

    export let data: PageData;
    export const title = "Events | DS3 at UCSD";
    // creates labels for page title and description
    export const description = "Check out our upcoming events! Join us to learn from industry professionals and network with like-minded individuals.";
</script>

<svelte:head>
    <meta charset="utf-8">
    <!-- matches width of wiewport to the width of user's device -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- sets the page title -->
    <title>{title}</title>
    <!-- sets a description for the page -->
    <meta name="description" content="{description}">
    <!-- provides Open Graph tags -->
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="/favicon.png">
    <!-- states the url for the site -->
    <meta property="og:url" content="https://www.ds3ucsd.com/">
    <meta property="og:type" content="website">
</svelte:head>

<section>
    <!-- Displays event info -->
    <div class="title-sec">
        <!-- Main title for the page -->
        <h1>EVENTS</h1>
    </div>
    <!-- Centers the text -->
    <div id="centralizer">
        <!-- Contains all event content -->
        <div id="event-sec">
            <div class="event-display">
                <h2>Upcoming Events</h2>
                <!-- If there are upcoming events, iterate over each and display -->
                {#if data.calendarData}
                    <div class="event-grid">
                        <!-- Create a new card for each event -->
                        {#each data.calendarData as event}
                            <EventCard {event} />
                        {/each}
                    </div>
                <!-- If no upcoming events, display message -->
                {:else}
                    <div>
                        <h3>No Upcoming Events</h3>
                    </div>
                {/if}
            </div>
            <!-- <div class="event-display">
                <h2>Past Events</h2>
                <-- Need to add past events here ->
                {#if data.pastEvents}
                <div class="event-grid">
                    {#each data.pastEvents as event}
                        ...
                    {/each}
                </div>
                {:else}
                    <div>
                        <h3>Temporarily Unavailable</h3>
                    </div>
                {/if}
            </div> -->
        </div>
    </div>
</section>


<style>
    /* Media query for smaller screens */
    @media screen and (max-width: 768px){
        .event-grid {
            margin-top: 1vh;
            display: block;
            grid-template-columns: repeat(4, 25%);
            grid-auto-rows: 1fr;
            justify-content: space-between;
            align-items: center;
        }
    }
    /* Media query for larger screens */
    @media screen and not (max-width: 768px){
        .event-grid {
            margin-top: 1vh;
            display: grid;
            grid-template-columns: repeat(4, 25%);
            grid-auto-rows: 1fr;
            justify-content: space-between;
            align-items: center;
            vertical-align: middle;
        }
    }
    /* Defines the font for the page, taken from local file */
    @font-face {
        font-family: "Montserrat Bold";
        src: url("/fonts/montserrat.bold.ttf");
    }
    section {
        margin-top: 10vh;
        font-family: 'Montserrat';
        background-color: var(--base-bg);
    }
    #centralizer {
        width: 90%;
        margin: auto;
    }
    /* Defines the background image for section header */
    .title-sec {
        height: 40vh;
        font-family: 'Montserrat Bold', 'Montserrat';
        background-image: url("/images/backgrounds/events.png");
        background-size: cover;
        background-position: center;
        background-position: center;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
    }
    .title-sec h1 {
        color: white;
        font-size: 80px;
        font-weight: bold;
        font-family: 'Montserrat Bold';
    }

    .event-display {
        margin: 2vh auto;
    }
    .event-display h2 {
        font-size: 60px;
        font-family: 'Montserrat Bold', 'Montserrat';
        margin: 0;
    }
    @media (max-width: 768px) {
    .event-display h2 {
        text-align:center;
    }
    }
    
    h3 {
        margin-left: 0.75vw;
        padding-bottom: 10vh;
        width: 100%;
        font-size: 30px;
    }
</style>