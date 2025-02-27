<script lang='ts'>
    import type { PageData } from './$types';
    
    // Creates variable data to store PageData
    export let data: PageData;
    // Declares title and description for page
    export const title = "Sponsors | DS3 at UCSD";
    export const description = "Discover the organizations powering DS3's mission - meet our esteemed sponsors, including CSE UCSD, Halıcıoğlu Data Science Institute, and Palantir.";
</script>

<svelte:head>
    <!-- Meta tags for character set, viewport settings, dynamic title, and description. -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <meta name="description" content="{description}">
    <!-- Open Graph meta tags meant for link presentation -->
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="/favicon.png">
    <meta property="og:url" content="https://www.ds3ucsd.com/">
    <meta property="og:type" content="website">
</svelte:head>

<section>
    <div class="title-sec">
        <!-- Section title -->
        <h1>Sponsors</h1>
    </div>
    <div class= "sponsor-sec">
    <!-- Sponsor subheading -->
        <h2>Thank you to our current Sponsors!</h2>
        <div id= "sponsor-grid">
            <!-- Iterate through each image in data.imageURLS -->
            {#each data.imageURLs as filepath}
                <img src="{filepath.replace("/static", "")}"
                    alt="{filepath
                    // Removes the directory path, leaving the filename and extension
                    .replaceAll("/static/images/sponsors/", "")
                    // Removes file extension, leaving the sponsor name
                    .replace(".png", "")}"
                    class='company-logos'
                />
            {/each}
        </div>
    </div>
    <div id="sponsor-info">
        <!-- Contact and sponsor info -->
        <h5 class="sponsor-msg">Interested in hearing how we can help you? Contact us at&nbsp;</h5>
        <!-- Creates a hyperlink that links to ds3 email -->
        <a class="sponsor-msg" href="mailto:ds3@ucsd.edu">ds3@ucsd.edu</a>
        <h5 class="sponsor-msg">or view our sponsor packet&nbsp;</h5>
        <!-- Links to a sponsor packet -->
        <a class="sponsor-msg" href="/documents/DS3_Sponsors_23-24.pdf" target = '_blank'>here</a>
        <h5 class="sponsor-msg">.</h5>
    </div>
</section>

<style>
    /* Imports Google Font */
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    @font-face {
        font-family: "Montserrat Bold";
        src: url("/fonts/montserrat.bold.ttf");
    }
    /* Background settings and text formatting */
    section {
        margin-top: 10vh;
        font-family: 'Montserrat';
        background-color: var(--base-bg);
    }
    /* Declares height, background image, other visual settings */
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


