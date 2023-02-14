<script lang='ts'>
    import Modal, {getModal} from './Modal.svelte'

    export let name: string;
    export let title: string;
    export let linkedin: string;
    export let email: string;
    export let img: string;

</script>

<div class="card" on:click={()=>getModal(name).open()} on:keydown={()=>getModal(name).open()}>
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
<Modal id="{name}">
    <h1>{name}</h1>
</Modal>

<style>
    /* Page Cards */
    .card {
        display: flex;
        flex-direction: column;
        height: 45vh;
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
    .contact a img {
        height: 5vh;
        width: 5vh;
    }
    
    @media (min-height: 1200px) {
        .info {
            padding: 5%;
            display: flex;
            align-items: left;
            flex-direction: column;
            margin: 0;
        }
        .info h1 {
            font-size: 35px;
            margin: 1% 0;
        }
        .info h2 {
            font-size: 23px;
            margin: 1% 0;
        }
    }
    @media (max-height: 1200px) {
        .info {
            padding: 5%;
            display: flex;
            align-items: left;
            flex-direction: column;
            margin: 0;
        }
        .info h1 {
            font-size: 20px;
            margin: 1% 0;
        }
        .info h2 {
            font-size: 15px;
            margin: 1% 0;
        }
    }


    /* Popup Modal */

</style>