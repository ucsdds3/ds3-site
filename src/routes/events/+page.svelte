<script lang='ts'>
    import type { PageData } from './$types';

    export let data: PageData;
    console.log(data.calendarData)
</script>

<section>
    <div class="title-sec">
        <h1>EVENTS</h1>
    </div>
    <div id="event-sec">
        <div class="event-display">
            <h2>Upcomming Events</h2>
            <div class="event-grid">
            </div>
        </div>
        <div class="event-display">
            <h2>Past Events</h2>
            <div class="event-grid">
                
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

    #event-sec {
        height: 50vh;
    }
    .event-display {
        margin: 2vh auto;
    }
    .event-display h2 {
        font-size: 60px;
        font-family: 'Montserrat Bold', 'Montserrat';
        margin: 0;
    }
</style>