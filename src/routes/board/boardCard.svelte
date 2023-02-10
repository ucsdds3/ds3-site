<script lang='ts'>
    export let name: string;
    export let title: string;
    export let linkedin: string;
    export let email: string;
    export let img: string;
</script>

<div class="card">
    <div class="image-wrapper">
        <img class="pfp" src=/images/people/{img} alt="{name} pfp">
        <div class="contact">
            <a href="{linkedin}" rel="noreferrer" target="_blank"><img src="/svgs/icons/linkedin_icon.svg" alt="linkedin icon"></a>
            <a href="mailto:{email}" rel="noreferrer" target="_blank"><img src="/svgs/icons/email_icon2.svg" alt="email icon"></a>
        </div>
    </div>
    <div class="info">
        <h1>{name}</h1>
        <h2>{title}</h2>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        height: 50vh;
        margin: 2.5%;
        border-radius: 5px;
        background: white;
        transition: 0.3s;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
    .card:hover {
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .card .image-wrapper {
        width: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .image-wrapper .pfp {
        display: block;
        margin: auto;
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    .image-wrapper .contact {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .info {
        padding: 2.5%;
    }
</style>