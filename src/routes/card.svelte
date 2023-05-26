<script lang='ts'>
    export let title: string;
    export let description: string;
    export let imageURL: string;
    export let imageDirection: boolean;
    export let link: any;
</script>


<div class="card">
    {#if !imageDirection}
        <img class="left" src="{imageURL}" alt="ds3 demo" loading="lazy">
        <div class="card-information">
            <h3 class="card-title">{title}</h3>
            <p class="card-description">{description}</p>
            <a href="{link}">
                <button>Learn More</button>
            </a>
        </div>
        <div class="dots rs">
            <div class="circle orange"></div>
            <div class="circle blue"></div>
            <div class="circle gray"></div>
        </div>
    {:else}
        <div class="dots lf">
            <div class="circle orange"></div>
            <div class="circle blue"></div>
            <div class="circle gray"></div>
        </div>
        <div class="card-information">
            <h3 class="card-title">{title}</h3>
            <p class="card-description">{description}</p>
            <a href="{link}" target="_blank" rel="noreferrer">
                <button>Learn More</button>
            </a>
        </div>
        <img class="right" src="{imageURL}" alt="ds3 demo" loading="lazy">
    {/if}
</div>

<style>
    .card {
        border-radius: 7.5px;
        margin-bottom: 7.5vh;
        height: 50vh;
        display: flex;
        position: relative;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    img {
        flex: 1;
        height: 100%;
    }
    .left { border-radius: 7.5px 0 0 7.5px; }
    .right { border-radius: 0 7.5px 7.5px 0; }
    .card-information {
        flex: 1;
        padding: 2.5% 5%;
        display: flex;
        vertical-align: middle;
        flex-direction: column;
        justify-content: space-evenly;
    }
    @media (min-height: 1200px) {
        .card-title {
            font-size: 4vh;
            margin: 0;
        }
        .card-description {
            font-size: 29px;
            margin: 0;
        }
        button {
            background-color: var(--ds3-orange);
            color: white;
            padding: 1.5% 5%;
            border-style: none;
            font-size: 27.5px;
            font-weight: bold;
            transition: 0.3s;
        }
    }
    @media (max-height: 1199px) {
        .card-title {
            font-size: 3.5vh;
            margin: 0;
        }
        .card-description {
            font-size: 22px;
            margin: 0;
        }
        button {
            background-color: var(--ds3-orange);
            color: white;
            padding: 1.5% 5%;
            border-style: none;
            font-size: 20px;
            font-weight: bold;
            transition: 0.3s;
        }
    }
    
    button:hover {
        background-color: var(--ds3-orange-lighten);
        cursor: pointer;
    }

    
    .dots {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 1vh;
    }
    .lf { left: 1vh; }
    .rs { right: 1vh; }
    .circle {
        border-radius: 100px;
        height: 12.5px;
        width: 12.5px;
        background-color: black; /* backup color */
        margin: 5px 2.5px; 
    }
    .orange { background-color: var(--ds3-orange);} 
    .blue { background-color: var(--ds3-blue);} 
    .gray { background-color: var(--ds3-gray);} 
</style>