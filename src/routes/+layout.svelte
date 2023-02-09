
<nav>
    <a href='/'>
        <div id="img-wrapper"><img src="/images/logos/logo-dark.png" alt="ds3 logo"/></div>
    </a>
    <div id="routes">
        <a class="nav-item" href="/">Home</a>
        <a class="nav-item" href="/events">Events</a>
        <a class="nav-item" href="/">Workshops</a>
        <a class="nav-item" href="/board">Board</a>
        <a class="nav-item" href="/">Consulting</a>
        <a class="nav-item" href="/">Get Involved</a>
    </div>
</nav>
<slot></slot>

<style global>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    :global(body) {
        box-sizing: border-box;
        margin: 0%;
    }
  
    nav {
        background-color: #f8f8f8;
        width: 100%;
        height: 5vh;
        font-family: 'Montserrat', Verdana, Geneva, Tahoma, sans-serif;
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
        font-size: 19px;
        text-decoration: none;
        padding-right: 1.75vw;
        color: black;
    }
</style>