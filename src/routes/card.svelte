<script lang='ts'>
    export let title: string
    export let description: string
    export let imageURL: string
    export let imageDirection: boolean
    export let link: any
</script>


<div class="card">
    {#if !imageDirection}
        <img src="{imageURL}" alt="ds3 demo">
        <div class="card-information">
            <h3 class="card-title">{title}</h3>
            <p class="card-description">{description}</p>
            <a href="{link}" target="_blank" rel="noreferrer">
                <button>Learn More</button>
            </a>
        </div>
    {:else}
        <div class="card-information">
            <h3 class="card-title">{title}</h3>
            <p class="card-description">{description}</p>
            <a href="{link}" target="_blank" rel="noreferrer">
                <button>Learn More</button>
            </a>
        </div>
        <img src="{imageURL}" alt="ds3 demo">
    {/if}
</div>

<style>
    .card {
        border-radius: 5px;
        border: 1px solid black;
        margin-bottom: 2vh;
        height: 50vh;
        display: flex;
    }
    img {
        flex: 1;
        height: 100%;
    }
    .card-information {
        flex: 1;
        padding: 5%;
        
    }
    .card-title {
        font-size: 50px;
        margin-bottom: 0;
    }
    .card-description {
        font-size: 25px;
    }
    button {
        background-color: var(--ds3-orange);
        color: white;
        padding: 1.25% 4%;
        border-style: none;
        font-size: 25px;
    }
</style>