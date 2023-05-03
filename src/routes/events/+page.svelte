<script>
  import EventsPreviewCard from '../components/EventsPreviewCard.svelte';
  export let endpoint = 'events';
</script>

<main>
  {#if endpoint === 'events'}
    <EventsPreviewCard title="My Events Page" description="Check out my latest events!" image="/events-preview.jpg" />
</main>

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
                {#if data.calendarData}
                    <div class="event-grid">
                        {#each data.calendarData as event}
                            <EventCard {event} />
                        {/each}
                    </div>
                {:else}
                    <div>
                        <h3>No Upcoming Events</h3>
                    </div>
                {/if}
            </div>
            <div class="event-display">
                <h2>Past Events</h2>
                <!-- Need to add past events here -->
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
        padding-bottom: 10vh;
        width: 100%;
        font-size: 30px;
    }
</style>
