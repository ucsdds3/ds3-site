
<nav>
    <a href='/'>
        <div id="img-wrapper"><img src="/images/logos/logo-dark.png" alt="ds3 logo"/></div>
    </a>
    <div id="routes">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="/events">Events</a>
        <!-- <a class="nav-item" href="/workshops">Workshops</a> -->
        <a class="nav-item" href="/board">Board</a>
        <a class="nav-item" href="https://ds3.ucsd.edu/528491.html">Consulting</a>
        <a class="nav-item" href="/">Get Involved</a>
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
    }
  
    nav {
        background-color: #f8f8f8;
        width: 100%;
        height: 10vh;
        font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
        position: fixed;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
    #img-wrapper {
        display: flex;
        height: 100%;
        float: left;
        align-items: center;
        margin-left: 1vw;
    }
    img {
        height: 75%;
    }  
    #routes {
        text-align: right;
        float: right;
        height: 100%;
        display: table;
    }
    .nav-item {
        display: table-cell;
        vertical-align: middle;
        font-size: 23px;
        text-decoration: none;
        padding-right: 1.75vw;
        color: black;
    }

    footer {
        background-color: #ccc;
        width: 100%;
        height: 20vh;
        display: flex;
        padding: 2.5% 0;
        flex-direction: column;
        align-items: center;
        font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
    }
    #footer-title {
        font-size: 33px;
        font-weight: bold;
    }
    #socials-section {
        display: flex;
        width: 30%;
        justify-content: space-evenly;
    }
    #socials-section img {
        max-height: 55px;
        color: red;
        fill: red;
        /* filter: invert(0%) sepia(100%) saturate(20%) hue-rotate(39deg) brightness(0%) contrast(107%); */
    }
    #socials-section img:hover {
    }
</style>