
<nav>
    <a href='/'>
        <div id="img-wrapper"><img src="/images/logos/logo-dark.png" alt="ds3 logo"/></div>
    </a>
    <div id="routes">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="/events">Events</a>
        <a class="nav-item" href="/workshops">Workshops</a>
        <a class="nav-item" href="/board">Board</a>
        <a class="nav-item" href="https://ds3.ucsd.edu/528491.html">Consulting</a>
        <a class="nav-item" href="/">Get Involved</a>
    </div>
</nav>
<slot></slot>
<footer>
    <h2 id="footer-title">Connect with us</h2>
    <div id="socials-section">

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
    }
  
    nav {
        background-color: #f8f8f8;
        width: 100%;
        height: 6vh;
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
</style>