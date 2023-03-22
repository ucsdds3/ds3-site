
<nav>
    <a href='/'>
        <div id="img-wrapper"><img src="/images/logos/logo-dark.png" alt="ds3 logo"/></div>
    </a>
    <div id="routes">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="/events">Events</a>
        <a class="nav-item" href="/board">Board</a>
        <a class="nav-item" href="/sponsors">Sponsors</a>
        <a class="nav-item" href="https://ds3.ucsd.edu/consulting" target="_blank" referrerpolicy="no-referrer" rel="noreferrer">Consulting</a>
        <a class="nav-item last" href="/get-involved">Get Involved</a>
    </div>
</nav>
<slot></slot>
<footer>
    <h2 id="footer-title">Connect with us</h2>
    <div id="socials-section">
        <a href="https://www.facebook.com/DS3UCSD/" rel="noreferrer" target="_blank"><img src="/svgs/icons/facebook_icon.svg" alt="facebook icon"></a>
        <a href="https://discord.gg/NqHx8h3" rel="noreferrer" target="_blank"><img src="/svgs/icons/discord_icon.svg" alt="discord icon"></a>
        <a href="https://www.instagram.com/ds3.ucsd/?hl=en" rel="noreferrer" target="_blank"><img src="/svgs/icons/instagram_icon.svg" alt="instagram icon"></a>
        <a href="https://medium.com/ds3ucsd" rel="noreferrer" target="_blank"><img src="/svgs/icons/medium_icon.svg" alt="medium icon"></a>
        <a href="mailto:ds3@ucsd.edu" rel="noreferrer" target="_blank"><img src="/svgs/icons/email_icon.svg" alt="email icon"></a>
        <a href="https://open.spotify.com/show/7yHiQn4eqjy2EAzRNEmQdf" rel="noreferrer" target="_blank"><img src="/svgs/icons/spotify_icon.svg" alt="spotify icon"></a>
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
        background-color: #fff;
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
        }
        footer {
            width: 100%;
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
        }
        footer {
            width: 100%;
            height: 15vh;
            display: flex;
            padding: 2% 0;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
        }
    }
</style>
