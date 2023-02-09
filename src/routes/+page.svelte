<script lang='ts'>
    import Card from "./card.svelte";
    import cardData from "./landing-cards.json"

    const imageGlob: Object = import.meta.glob("/static/images/company-logos/*.png");
    const imageURLs: string[] = Object.keys(imageGlob);
</script>



<section id="title-section">
    <div class="seperator">
        <h1 id="title">Expanding the Data Science Community at UCSD</h1>
        <img src="svgs/splash.svg" alt="computer splash">
    </div>
</section>
<section id="info-section">
    <div class="seperator">
        <img src="/images/logos/big-logo-light.png" alt="ds3 logo big">
        <p id="info-paragraph">The Data Science Student Society (DS3) is the premiere interdisciplinary data science organization on campus, composed of over 100+ undergraduate students passionate about all facets of Data Science. As the largest data science organization, we offer many resources, events, and opportunities, designed to encourage career development amongst all of our members, as well as provide a strong student community. Organized by over 45 students, we offer professional development events, technical workshops, fully-fledged projects, Hackathons, and online articles and podcasts.</p>
        <div id="countbox-row">
            <div class="countbox"><p>35</p> Articles Written</div>
            <div class="countbox"><p>500+</p> Hackathon Attendees</div>
            <div class="countbox"><p>28</p> Projects Completed</div>
            <div class="countbox"><p>78</p> Workshops Hosted</div>
        </div>
    </div>
</section>
<section id="companies-section">
    <div class="seperator">
        <h2 class="lower-title">Where We've been</h2>
        <div id="logo-grid">
            {#each imageURLs as imageURL}
                <img 
                    src="{imageURL.replace("/static", "")}" 
                    alt={`${(imageURL.replace(".png", "")
                                     .replace("/static/images/company-logos/", "")
                            )} company logo`}
                    class="company-logos"
                >
            {/each}
        </div>
    </div>
</section>
<section id="events-section">
    <div class="seperator">
        <h2 class="lower-title">What We Do</h2>
        {#each cardData as card}
            <Card {...card}/>
        {/each}
    </div>
</section>



<style>
    /* Meta Styling */
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    section {
        font-family: 'Montserrat', 'Poppins';
        padding: 10vh 0;
        /* height: 100vh; */
    }
    @media (min-height: 1200px) {
        .seperator {
            margin: 0 17.5vw;
        }
    }
    @media (max-height: 1199px) {
        .seperator {
            margin: 0 10vw;
        }
    }
    .lower-title {
        font-size: 75px;
        font-weight: 1000;
        text-align: center;
    }

    /* Individual section styling */
    @media (min-height: 1200px) {
        #title {
            font-size: 8vh;
            color: #333333;
            font-weight: bolder;
            width: 35vw;
            margin: 0;
            display: flex;
            align-items: center;
        }
    }
    @media (max-height: 1199px) {
        #title {
            font-size: 10vh;
            color: #333333;
            font-weight: bolder;
            width: 45vw;
            margin: 0;
            display: flex;
            align-items: center;
        }
    }
    #title-section {
        height: 75vh;
        display: flex;
        align-items: center;
    }
    #title-section div {
        display: flex;
        justify-content: space-between;
        margin-top: 5vh;
    }
    #title-section img {
        height: 60vh;
        -webkit-animation: MoveUpDown 5s infinite linear;
        animation: MoveUpDown 5s infinite linear;
    }

    #info-section {
        background-image: url("/images/stock-people/librarywalk.png");
        color: white;
    }
    #info-section img {
        height: 20vh;
        margin: 10vh 0 4vh;
    }
    #info-section #info-paragraph {
        font-size: 30px;
    }
    #info-section #countbox-row {
        display: flex;
        flex-direction: row;
        font-size: 4vh;
        text-align: center;
        justify-content: space-between;
        width: 100%;
        margin: 7vh auto;
    }
    #countbox-row .countbox {
        flex: 1;
        margin: 0;
        font-size: 5vh;
    }
    .countbox p {
        font-size: 100px;
        margin: 1vh 0;
        color: var(--ds3-orange);
        font-weight: bold;
    }

    #logo-grid {
        display: grid;
        grid-template-columns: repeat(5, 19%);
        grid-auto-rows: 0.5fr;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
    }
    .company-logos {
        max-width: 50%;
        margin: 0 auto;
    }


    /* Animation */
    @keyframes MoveUpDown {
        0%, 50%, 100% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-10px);
        }
        75% {
            transform: translateY(10px);
        }
    }
</style>