<script lang='ts'>
    import Analytics from "$lib/client/analytics.svelte";
	import { onMount } from "svelte";

    export const title = "DS3 at UCSD";
    export const description = "Data Science Student Society";

    let isMobile = false;
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    onMount(() => {
        const mql = window.matchMedia('(max-width: 768px)');
        isMobile = mql.matches;

        function updateMobileState(e: MediaQueryListEvent) {
            isMobile = e.matches;
        }

        mql.addEventListener('change', updateMobileState);

        return () => {
            mql.removeEventListener('change', updateMobileState);
        };
    });
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <meta name="description" content="{description}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="/favicon.png">
    <meta property="og:url" content="https://www.ds3ucsd.com/">
    <meta property="og:type" content="website">
</svelte:head>
<Analytics />

{#if isMobile}
    <nav>
        <a href='/'>
            <div id="img-wrapper"><img src="/images/logos/logo-dark.png" alt="ds3 logo"/></div>
        </a>
        <div class="burger-menu {isMenuOpen ? 'open' : ''}" on:click={toggleMenu} on:keydown={toggleMenu}>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
        </div>

        <div class="side-drawer {isMenuOpen ? 'open' : ''}"> 
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/" on:click={toggleMenu}>Home</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/events" on:click={toggleMenu}>Events</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/board" on:click={toggleMenu}>Board</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/sponsors" on:click={toggleMenu}>Sponsors</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="https://ds3.ucsd.edu/consulting" target="_blank" referrerpolicy="no-referrer" rel="noreferrer" on:click={toggleMenu}>Consulting</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item last" href="/get-involved" on:click={toggleMenu}>Get Involved</a>
        </div>
    </nav>
{:else}
    <nav>
        <a href='/'>
            <div id="img-wrapper"><img src="/images/logos/logo-dark.png" alt="ds3 logo"/></div>
        </a>
        <div id="routes">
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/">Home</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/events">Events</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/board">Board</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="/sponsors">Sponsors</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item" href="https://ds3.ucsd.edu/consulting" target="_blank" referrerpolicy="no-referrer" rel="noreferrer">Consulting</a>
            <a data-sveltekit-preload-data = 'hover' class="nav-item last" href="/get-involved">Get Involved</a>
        </div>
    </nav>
{/if}


<slot></slot>
<footer>
    <h2 id="footer-title">Connect with us</h2>
    <div id="socials-section">
        <a href="https://www.facebook.com/DS3UCSD/" rel="noreferrer" target="_blank"><img src="/svgs/icons/facebook_icon.svg" alt="facebook icon"></a>
        <a href="https://discord.gg/fbnAP848V9" rel="noreferrer" target="_blank"><img src="/svgs/icons/discord_icon.svg" alt="discord icon"></a>
        <a href="https://www.instagram.com/ds3.ucsd/?hl=en" rel="noreferrer" target="_blank"><img src="/svgs/icons/instagram_icon.svg" alt="instagram icon"></a>
        <a href="https://medium.com/ds3ucsd" rel="noreferrer" target="_blank"><img src="/svgs/icons/medium_icon.svg" alt="medium icon"></a>
        <a href="mailto:ds3@ucsd.edu" rel="noreferrer" target="_blank"><img src="/svgs/icons/email_icon.svg" alt="email icon"></a>
        <a href="https://open.spotify.com/show/7yHiQn4eqjy2EAzRNEmQdf" rel="noreferrer" target="_blank"><img src="/svgs/icons/spotify_icon.svg" alt="spotify icon"></a>
        <a href="https://www.linkedin.com/company/data-science-student-society-at-ucsd/mycompany/" rel="noreferrer" target="_blank"><img src="/svgs/icons/linkedin_icon2.svg" alt="email icon"></a>
        <a href="https://www.youtube.com/@data-science-student-society" rel="noreferrer" target="_blank"><img src="/svgs/icons/youtube_icon.svg" alt="spotify icon"></a>
    </div>
</footer>


<style global>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    @font-face {
        font-family: "Montserrat SemiBold";
        src: url("/fonts/montserrat.semibold.ttf");
    }
    :global(body) {
        /* General Styling */
        box-sizing: border-box;
        margin: 0%;

        /* Color vars */
        --ds3-orange: #f58134;
        --ds3-blue: #11b3c9;
        --ds3-gray: #2e2e2e;
        --ds3-orange-lighten: #f29c62;
        --ds3-blue-lighten: #75c8d3;
        --ds3-gray-lighten: #575757;

        --facebook: #1877f2;
        --discord: #8C9EFF;
        --instagram: url(#SVGID_1_);
        --spotify: #10BC4C;

        --base-bg: #f8f8f8;
    }
  
    nav {
        background-color: white;
        width: 100%;
        height: 10vh;
        z-index: 1;
        top: 0;
        display: flex;
        align-items: right;
        justify-content: flex-end;
        font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
        position: fixed;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
    #img-wrapper {
        display: flex;
        height: 100%;
        position: absolute;
        left: 2vh;
        align-items: center;
    }
    img {
        height: 45%;
    }  
    #routes {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .nav-item {
        vertical-align: middle;
        font-size: 23px;
        text-decoration: none;
        margin-right: 2vw;
        color: black;
        text-align: right;
    }
    .last {
        font-family: "Montserrat SemiBold";
        color: white;
        padding: 1%;
        border-radius: 5px;
        background-color: var(--ds3-orange);
        width: auto;
        white-space: nowrap;
        transition: 0.3s;
    }
    .last:hover {
        background-color: var(--ds3-orange-lighten);
    }

    
    
    @media (min-height: 1200px) {
        #footer-title {
            font-size: 45px;
            font-weight: bold;
            margin: 0;
        }
        #socials-section {
            display: flex;
            width: 20%;
            justify-content: space-evenly;
        }
        #socials-section img {
            height: 50px;
            vertical-align: middle;
            margin: 0.5rem;
        }
        footer {
            max-width: 100%;
            height: 15vh;
            display: flex;
            padding: 1% 0;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
        }
    }

    @media (max-height: 1199px) {
        #footer-title {
            font-size: 33px;
            font-weight: bold;
            text-align: center;
            margin: 0;
        }
        #socials-section {
            display: flex;
            width: 25%;
            justify-content: space-evenly;
        }
        #socials-section img {
            height: 30px;
            vertical-align: middle;
            align-items: center;
        }
        footer {
            max-width: 100%;
            height: 15vh;
            display: flex;
            padding: 2% 0;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
        }
    }

    .burger-menu {
        display: none;
        cursor: pointer;
        padding: 10px;
        z-index: 200; 
        position: fixed; 
        top: 20px; 
        right: 20px; 
    }

    .burger-line {
        width: 30px;
        height: 4px;
        background-color: #333;
        margin: 5px 0;
        transition: all 0.3s ease;
    }

    .side-drawer {
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100%;
        background-color: white;
        box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
        z-index: 150;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column; 
        padding-top: 60px;
    }

    .side-drawer.open {
        right: 0; 
    }

    .side-drawer .nav-item {
        font-family: 'Montserrat';
        vertical-align: middle;
        font-size: 23px;
        text-decoration: none;
        margin-left: 2vw;
        margin-top: 2.5%;
        color: black;
        text-align: left;
    }

    .side-drawer .nav-item.last {
        font-family: "Montserrat SemiBold";
        color: white;
        padding: 1%;
        border-radius: 5px;
        background-color: var(--ds3-orange);
        width: auto;
        white-space: nowrap;
    }

    .burger-menu.open .burger-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
    }

    .burger-menu.open .burger-line:nth-child(2) {
        opacity: 0;
    }

    .burger-menu.open .burger-line:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
    }

    @media (max-width: 768px) {
        .burger-menu {
            display: block;
        }

    }
</style>
