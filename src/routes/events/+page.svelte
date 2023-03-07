<script lang='ts'>
    import type { PageData } from './$types';
    import EventCard from './eventCard.svelte';

    export let data: PageData;
</script>

<section>
    <div class="title-sec">
        <h1>EVENTS</h1>
    </div>
    <div id="centralizer">
        <div id="event-sec">
            <div class="event-display">
                <h2>Upcoming Events</h2>
                <div class="event-grid">
                    {#each data.calendarData as event}
                        <EventCard {event} />
                    {/each}
                </div>
            </div>
            <div class="event-display">
                <h2>Past Events</h2>
                <div class="event-grid">
                    <h3>Temporarily Unavailable</h3>
                </div>
            </div>
        </div>
    </div>
</section>


<style>
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
    .title-sec {
        height: 40vh;
        font-family: 'Montserrat Bold', 'Montserrat';
        background-image: url("/images/backgrounds/event.png");
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

    .event-grid {
        margin-top: 1vh;
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 1fr;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
    }
    
    h3 {
        margin-left: 0.75vw;
        width: 100%;
        font-size: 30px;
    }
</style>