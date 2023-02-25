<script lang='ts'>
    import type { CleanEvent } from "./calendarInterfaces";

    export let event: CleanEvent;
    
    const eventImage: string = (event.image) ? event.image : "event-placeholder.jpg";
</script>

<div class="card">
    <div id="img" style="background-image: url('/images/stock-people/{eventImage}');"></div>
    <div class="card-info">
        <div class="info-split"><h1>{event.title}</h1></div>
        <div class="info-split">
            <span>{event.date}</span>
            <span>{event.time}</span>
        </div>
        <div class="info-split"><div>
            <button>Learn More</button>
        </div></div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Montserrat Bold";
        src: url("/fonts/montserrat.bold.ttf");
    }
    .card {
        background-color: white;
        border-radius: 5px;
        transition: 0.3s;
        margin: 2.5%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
    .card:hover {
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .card #img {
        background-position: center;
        background-size: 50vh;
        height: 15vh;
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    .card .card-info {
        padding: 2% 4%;
        display: grid;
        height: 15vh;
        grid-template-columns: 1fr;
        text-align: left;
    }

    .card-info .info-split {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        text-align: left;
        width: 100%;
    }
    .info-split * {
        width: 100%;
        margin: 0;
    }
    .info-split h1 {
        font-size: 2.3vh;
        font-family: 'Montserrat Bold', 'Montserrat';
    }
    .info-split span {
        font-size: 2vh;
        font-weight: 700;
    }
    .info-split button {
        width: auto;
        font-size: 1.75vh;
        padding: 1.25% 2.5%;
        border: none;
        border-radius: 5px;
        background-color: var(--ds3-orange);
        color: white;
        font-family: 'Montserrat Bold', 'Montserrat';
        transition: 0.3s;
    }
    .info-split button:hover {
        cursor: pointer;
        background-color: var(--ds3-orange-lighten);
    }
</style>