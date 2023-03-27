<script lang='ts'>
	import InfoCard from "./infoCard.svelte";
    import infoCardData from "../../web-config/infoCardData.json";
</script>

<section>
    <div class="title-sec">
        <h1>GET INVOLVED</h1>
    </div>
    <div class= "info-sec">
        <h2>Get Involved</h2>
        <p>
            As a not-for-profit student organization, the Data Science Student Society (DS3) is funded largely through donations. 
            You can support our cause by donating, which allows us to increase the extent to which we can achieve our mission. 
            Each donation goes a long way and makes a huge difference.
            <br><br>
            In addition, you can also support us by joining our family or connecting with us online through our social media pages!
        </p>
        <div class="card-container">
            {#each infoCardData as info}
                <InfoCard {...info}/>
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

    .info-sec {
        padding-bottom: 5vh;
        margin-left: 15vw;
        margin-right: 15vw;
    }
    .info-sec h2 {
        text-align: center;
        font-family: 'Montserrat Bold';
        font-size: 50px;
    }
    .info-sec p {
        text-align: left;
        font-family: 'Montserrat';
        font-size: 25px;
    }

    .card-container {
        display: flex;
        justify-content: space-around;
    }
</style>