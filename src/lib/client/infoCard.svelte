<script lang='ts'>
    export let title: string;
    export let description: string;
    export let cardType: string;
    export let link: string;
    export let button_name: string;
</script>


<div class="card">
    <h3 class="card-header">{title}</h3>
    <p class="card-description">{description}</p>
    {#if cardType === "button"}
    <a href = "{link}"><button class="card-button">{button_name}</button></a>
    {:else}
    <div class = 'outside'>
        <div class="socials">
            <a href="https://www.facebook.com/DS3UCSD/" rel="noreferrer" target="_blank"><img src="/svgs/icons/facebook_icon.svg" alt="facebook icon"></a>
            <a href="https://discord.gg/NqHx8h3" rel="noreferrer" target="_blank"><img src="/svgs/icons/discord_icon.svg" alt="discord icon"></a>
            <a href="https://www.instagram.com/ds3.ucsd/?hl=en" rel="noreferrer" target="_blank"><img src="/svgs/icons/instagram_icon.svg" alt="instagram icon"></a>
            <a href="https://medium.com/ds3ucsd" rel="noreferrer" target="_blank"><img src="/svgs/icons/medium_icon.svg" alt="medium icon"></a>
            <a href="mailto:ds3@ucsd.edu" rel="noreferrer" target="_blank"><img src="/svgs/icons/email_icon.svg" alt="email icon"></a>
            <a href="https://open.spotify.com/show/7yHiQn4eqjy2EAzRNEmQdf" rel="noreferrer" target="_blank"><img src="/svgs/icons/spotify_icon.svg" alt="spotify icon"></a>
        </div>
    </div>
    {/if}
</div>

<style>
    .card {
        border-radius: 7.5px;
        margin-top: 7.5vh;
        margin-bottom: 7.5vh;
        height: 35vh;
        padding-inline: 2vh;
        word-break: break-word;
        position: relative;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    @media (min-width: 769px) {
        .card {
            width: 30vw;
        }
    }       
    .card-header {
        font-size: 2.5vmin;
        font-family: "Montserrat Bold";
        margin-bottom: 1vh;
        margin-top: 4vh;
    }
    .card-description {
        font-size: 2vmin;
        margin-top: 1vh;
        margin-bottom: auto;
        
    }

    .card-button {
        margin-bottom: 4vh;
        background-color: var(--ds3-orange);
        color: white;
        padding: 1.5% 5%;
        border-style: none;
        font-size: 2.5vmin;
        font-weight: bold;
        transition: 0.3s;
    }
    
    .card-button:hover {
        background-color: var(--ds3-orange-lighten);
        cursor: pointer;
    }
    .socials {
        display: flex;
        justify-content: space-around;
        position: relative;
        margin-bottom: 4vh;
    } 
    .socials img {
        height: 5vh;
        vertical-align: middle;
        width: 2.5vw;
    }
    @media (max-width: 768px) {
        .card-description {
            font-size: 1.5vh;
        }
        .card-button {
            width: 20vw;
            height: 5vh;
        }
        .socials img {
            width: 6vw;
            height: 6vh
        }
        .card {
            width: 50vw;
        }
        .card-header {
            font-size: 2vh;
        }
    }

</style>