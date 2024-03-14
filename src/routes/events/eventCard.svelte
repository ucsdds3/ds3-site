<script lang='ts'>
    import type { CleanEvent } from "$lib/calendarInterfaces";
    import Modal, {getModal} from "$lib/client/Modal.svelte";
    export let event: CleanEvent;

    // GCP key can be exposed because reqeuests are restricted from the domain request
    // See the ds3-site GCP project under ds3@ucsd.edu for more information
    const GCP_MAPS_KEY: string = "AIzaSyBzh2sTgUsP1KpuzOlI1OiYgg--qXn41ak";  
    const eventImage: string = (event.image) ? event.image : "event-placeholder.jpg";

    // Process Google Maps Location Query
    let eventGoogleMapLocation: string;
    if (event.location.mapsLocation) {
        eventGoogleMapLocation = event.location.mapsLocation;
    } else if (event.location.roomLocation) {
        eventGoogleMapLocation = `UCSD ${event.location.roomLocation}`;
    } else {
        eventGoogleMapLocation = `UCSD, La Jolla, CA`;
    }

    // Process Room Number information
    let eventRoomLocation: string;
    if (event.location.roomLocation && event.location.roomLocation != "undefined") {
        eventRoomLocation = event.location.roomLocation;
    } else if (event.location.mapsLocation && event.location.mapsLocation != "undefined") {
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

    const redirect = (url: string | undefined) => window.open(url, '_blank', 'noopener')

    console.log(event.date)
</script>

<div class="card" on:click={()=>getModal(event.title).open()} on:keydown={()=>getModal(event.title).open()}>
    <div id="img" style="background-image: url('/images/stock-people/{eventImage}');"></div>
    <div class="card-info">
        <div class="info-split"><h1>{event.title}</h1></div>
        <div class="info-split">
            {#if event.date !== 'undefined NaN'}
            <span>{event.date}</span>
            <span>{event.time}</span>
            {:else}
            <span>All Day</span>
            {/if}
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
                <div id="modal-info">
                    <h1 id="modal-title">{event.title}</h1>
                    {#if event.date !== 'undefined NaN'}
                    <span>{event.date}, {event.time}</span>
                    {:else}
                    <span>All Day</span>
                    {/if}
                    <span>{eventRoomLocation}</span>
                    {#if eventDescription != ""}
                        <p id="desc">{eventDescription}</p>
                    {/if}
                    {#if event.presenters}
                        <h2 id="hosts">{event.presenters}</h2>
                    {/if}
                    {#if event.registerFormURL}
                        <div id="button-wrapper">
                            <button on:click={() => redirect(event.registerFormURL)}>Register</button>
                        </div>
                    {:else}
                        <div id="button-wrapper">
                            <button class="reg disabled" disabled>Register</button>
                        </div>
                    {/if}
                    <div id="modal-spacer">.</div>
                </div>
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
        font-size: 1.8vh;
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
    .left::-webkit-scrollbar { size: 0; }
    .left * {
        margin: 0;
        margin-bottom: 0.75vh;
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 100%;
    }
    .left #modal-title {
        font-family: 'Montserrat Bold', 'Montserrat';
        font-size: 4vh;
        margin-top: 0;
    }
    #modal-info {
        display: relative;
    }
    #modal-info::after {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        height: 10%;
        width: 100%;
        background: linear-gradient(transparent, white);
    }
    #modal span {
        font-size: 2vh;
        font-weight: 1000;
        width: 100%;
    }
    #desc {
        font-size: 1.5vh;
    }
    #hosts {
        font-size: 1.5vh;
        font-weight: 400;
    }
    #button-wrapper {
        width: 100%;
        display: inline-block;
    }
    #button-wrapper button {
        background-color: var(--ds3-orange);
        display: inline-block;
        border: none;
        font-size: 1.5vh;
        font-weight: bold;
        padding: 1.5% 4%;
        color: white;
        border-radius: 5px;
        text-align: center; 
        display: inline-block;
        align-items: center;
        width: auto;
        margin-top: 1.5vh;
    }
    button:hover {
        cursor: pointer;
        background-color: var(--ds3-orange-lighten);
    }
    .disabled {
        opacity: 0.5;
    }
    .disabled:hover {
        cursor: not-allowed;
        background-color: var(--ds3-orange);
    }
    .right {
        display: flex;
        align-items: center;
        padding: 2%;
    }
    .right iframe {
        background: transparent url("gifs/loading.gif") no-repeat center center;
        background-size: contain;
        width: 45%;
        height: 100%;
        margin: auto;
        border: none;
        border-radius: 5px;
    }
    #modal-spacer {
        height: 2vh;
        color: white;
    }
</style>
