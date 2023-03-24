<script lang='ts'>
    import boardMembers from "$web-config/board.json"
    import BoardCard from "./boardCard.svelte";
</script>

<section>
    <div class="title-sec">
        <h1>BOARD</h1>
    </div>
    <div class="board-sec">
        <h2>Meet Our Team!</h2>
        <div id="people-grid">
            {#each boardMembers as boardMember}
                <BoardCard {...boardMember} />
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
        background-image: url("/images/backgrounds/placeholder.jpg");
        background-size: cover;
        background-position: center;
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

    .board-sec {
        padding-bottom: 5vh;
    }
    .board-sec h2 {
        text-align: center;
        font-family: 'Montserrat Bold';
        font-size: 60px;
    }
    #people-grid {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 1fr;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
        width: 75%;
        margin: auto;
    }
</style>