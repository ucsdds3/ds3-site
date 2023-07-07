<script lang='ts'>
    import Modal, {getModal} from '$lib/client/Modal.svelte'

    export let name: string;
    export let title: string;
    export let linkedin: string;
    export let email: string;
    export let img: string;
    export let resume: string;
    export let description: string;
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
    <div class="modal">
        <img id="modal-bg" src="/images/backgrounds/placeholder.jpg" alt="board bg">
        <div class="modal-info">
            <img id="modal-pfp" src="/images/people/{img}" alt="{name} pfp">
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <div class="modal-links">
                <a class="orange" href="{linkedin}" rel="noreferrer" target="_blank">LinkedIn</a>
                <a class="blue" href="{resume}" rel="noreferrer" target="_blank">Resume</a>
                <a class="grey" href="mailto:{email}" rel="noreferrer" target="_blank">Email</a>
            </div>
        </div>
    </div>
</Modal>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
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
    .modal {
        position: relative;
        height: 75vh;
    }
    .modal #modal-bg {
        max-width: 80vw;
        width: 100%;  
    }
    .modal #modal-pfp {
        width: 25vh;
        height: 25vh;
        position: absolute;
        z-index: 100001;
        text-align: center;
        top: -21vh;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 2px;
    }
    .modal-info {
        position: absolute; 
        background-color: white; 
        z-index: 10000;
        width: 100%;
        height: 40vh;
        bottom: 0;
        text-align: center;
        /* display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column; */
        font-family: 'Montserrat';
    }
    .modal-info h1 {
        font-size: 40px;
        margin: 5vh 0 1vh;
    }
    .modal-info h2 {
        margin: 0;
    }
    .modal-info p {
        width: 75%;
        margin: 2.5vh auto;
    }
    .modal-links {
        display: grid;
        margin: auto;
        grid-template-columns: repeat(3, 33%);
        grid-auto-rows: 0.5fr;
        width: 75%;
    }
    .modal-links a {
        font-size: 20px;
        text-decoration: none;
        color: white;
        font-weight: bold;
        text-align: center;
        margin: 0 3%;
        padding: 3%;
    }

    @media (min-height: 1200px) {
        .modal #modal-pfp {
            width: 30vh;
            height: 30vh;
            top: -27vh;
        }
        .modal-info p {
            font-size: 1.75vh;
        }
        .modal-info h1 {
            font-size: 4vh;
        }
        .modal-info h2 {
            font-size: 2.5vh;
        }
        .modal-links {
            height: 30%;
        }
        .modal-links a {
            font-size: 2vh;
            padding: 6%;
        }
    }

    .orange { background-color: var(--ds3-orange); }
    .blue { background-color: var(--ds3-blue); }
    .grey { background-color: var(--ds3-gray); }
    


</style>