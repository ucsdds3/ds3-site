<script lang='ts'>
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<section>
    <div class="title-sec">
        <h1>Sponsors</h1>
    </div>
    <div class= "sponsor-sec">
        <h2>Thank you to our current Sponsors!</h2>
        <div id= "sponsor-grid">
            {#each data.imageURLs as filepath}
                <img src="{filepath.replace("/static", "")}"
                    alt="{filepath
                    .replaceAll("/static/images/sponsors/", "")
                    .replace(".png", "")}"
                    class='company-logos'
                />
            {/each}
        </div>
    </div>
    <div id="sponsor-info">
        <h5 class="sponsor-msg">Interested in hearing how we can help you? Contact us at&nbsp;</h5>
        <a class="sponsor-msg" href="mailto:ds3@ucsd.edu">ds3.ucsd.edu</a>
        <h5 class="sponsor-msg">or view our sponsor packet&nbsp;</h5>
        <a class="sponsor-msg" href="/">here</a>
        <h5 class="sponsor-msg">.</h5>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
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
        background-image: url("/images/backgrounds/city_skyline.jpg");
        background-position: center;
        background-size: cover;
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
    
    .sponsor-sec {
        padding-bottom: 5vh;
        margin-left: 15vw;
        margin-right: 15vw;
    }
    .sponsor-sec h2 {
        text-align: center;
        font-family: 'Montserrat Bold';
        font-size: 50px;
    }
    #sponsor-grid {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        grid-auto-rows: 1fr;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
        margin: auto;
    }

    .company-logos {
        max-width: 50%;
        margin: 0 auto;
    }

    #sponsor-info {
        text-align: center;
        width: 60%;
        margin: auto;
        padding: 5%;
    }
    #sponsor-info .sponsor-msg {
        font-weight: 650;
        font-size: 30px;
        display: inline;
        width: auto;
        margin: 0;
    }
    #sponsor-info a {
        color: black;
        transition: 0.15s;
    }
    #sponsor-info a:visited { color: black;}
    #sponsor-info a:hover { color: var(--ds3-orange); }
</style>


