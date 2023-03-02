<script lang='ts'>
    import type { CleanEvent } from "./calendarInterfaces";
    import Modal, {getModal} from "$modules/Modal.svelte";
    export let event: CleanEvent;

    const GCP_MAPS_KEY: string = "AIzaSyBzh2sTgUsP1KpuzOlI1OiYgg--qXn41ak";  
    const eventImage: string = (event.image) ? event.image : "event-placeholder.jpg";

    // Get Google Maps Location Query
    let eventGoogleMapLocation: string;
    if (event.location.mapsLocation) {
        eventGoogleMapLocation = event.location.mapsLocation;
    } else if (event.location.roomLocation) {
        eventGoogleMapLocation = `UCSD ${event.location.roomLocation}`;
    } else {
        eventGoogleMapLocation = `UCSD, La Jolla, CA`;
    }

    // Get Room Number information
    let eventRoomLocation: string;
    if (event.location.roomLocation && event.location.roomLocation != "undefined") {
        eventRoomLocation = event.location.roomLocation;
    } else if (event.location.mapsLocation  && event.location.mapsLocation != "undefined") {
        eventRoomLocation = event.location.mapsLocation;
    } else {
        eventRoomLocation = "Location TBD";
    }

    // Display Logical Description
    let eventDescription: string;
    if (event.description && event.description != "&lt;AWAITING DESCRIPTION&gt;") {
        eventDescription = event.description
    } else {
        eventDescription = ""
    }


</script>

<div class="card" on:click={()=>getModal(event.title).open()} on:keydown={()=>getModal(event.title).open()}>
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
<Modal id="{event.title}">
    <div id="modal">
        <div id="modal-img" style="background-image: url('/images/stock-people/{eventImage}');"></div>
        <div id="modal-information">
            <div class="left">
                <h1 id="modal-title">{event.title}</h1>
                <div id="modal-info-split">
                    <span>{event.date}, {event.time}</span><br>
                    <span>{eventRoomLocation}</span>
                </div>
                {#if eventDescription != ""}
                    <p>{eventDescription}</p>
                {/if}
                {#if event.presenters}
                    <h2>{event.presenters}</h2>
                {/if}
                {#if event.registerFormURL}
                    <a href="{event.registerFormURL}" target="_blank" rel="noreferrer">Register</a>
                {/if}
            </div>
            <div class="right">
                <iframe
                    title="{event.title} location"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key={GCP_MAPS_KEY}
                    &q={eventGoogleMapLocation}}">
                </iframe>
            </div>
        </div>
    </div>
</Modal>

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
        background-size: cover;
        height: 17vh;
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

    /* Modal Styling */
    #modal {
        height: 70vh;
        width: 65vw;
    }
    #modal #modal-img {
        background-position: center;
        background-size: cover;
        height: 30vh;
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    #modal #modal-information {
        width: 100%;
        font-family: 'Montserrat';
        display: flex;
        flex-direction: row;
        height: 40vh;
    }
    #modal-information * {
        flex: 1;
    }
    .left {
        padding: 2%;
        overflow: auto;
    }
    .left #modal-title {
        font-family: 'Montserrat Bold', 'Montserrat';
        font-size: 30px;
    }
    .left span {
        font-size: 20px;
        font-weight: 700;
        width: 100%;

    }
    .right {
        display: flex;
        align-items: center;
        padding: 2%;
    }
    .right iframe {
        background: transparent url("gifs/loading.gif") no-repeat center center;
        background-size: contain;
        width: 100%;
        height: 100%;
        margin: auto;
        border: none;
        border-radius: 5px;
    }
</style>