<script lang='ts'>
    import sponsors from "./../sponsor-data.json"
</script>

<section>
    <div class="title-sec">
        <h1>Sponsors & Partners</h1>
    </div>
    <div class= "sponsor-sec">
        <h2>Our Sponsors</h2>
        <div id= "sponsor-grid">
            {#each sponsors as sponsor}
            <img src="{sponsor.logo_src}" alt="{sponsor.name}" class='company-logos'>
            {/each}
        </div>
    </div>
    <div class= "sponsor-sec">
        <h2>Our Partners</h2>
        <div id= "partner-grid">
            {#each sponsors as sponsor}
            <img src="{sponsor.logo_src}" alt="{sponsor.name}" class='company-logos'>
            {/each}
        </div>
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
        background-image: url("/images/people-backgrounds/placeholder.jpg");
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
        margin-left: 150px;
        margin-right: 150px;
    }
    .sponsor-sec h2 {
        text-align: center;
        font-family: 'Montserrat Bold';
        font-size: 60px;
    }
    #sponsor-grid {
        display: grid;
        grid-template-columns: repeat(5, 19%);
        grid-auto-rows: 0.5fr;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
    }

    #partner-grid {
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
</style>


