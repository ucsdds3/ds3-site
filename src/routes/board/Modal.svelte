<script context="module" lang="ts">
    export interface hmap { [details: string] : any; }
	let onTop: any;   //keeping track of which open modal is on top
	const modals: hmap = {}  //all modals get registered here for easy future access
	
	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id=''){
		return modals[id]
	}
</script>

<script lang="ts">
    import {onDestroy} from 'svelte'
        
    let topDiv: any;
    let visible: boolean = false;
    let prevOnTop: any;
    let closeCallback: any;

    export let id=''

    function keyPress(ev: KeyboardEvent){
        //only respond if the current modal is the top one
        if(ev.key=="Escape" && onTop==topDiv) close() //ESC
    }

    /**  API **/
    function open(callback: Function){
        closeCallback=callback
        if(visible) return
        prevOnTop=onTop
        onTop=topDiv
        window.addEventListener("keydown",keyPress)
        
        //this prevents scrolling of the main window on larger screens
        document.body.style.overflow="hidden" 

        visible=true
        //Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
        document.body.appendChild(topDiv)
    }
        
    function close(retVal?: any){
        if(!visible) return
        window.removeEventListener("keydown",keyPress)
        onTop=prevOnTop
        if(onTop==null) document.body.style.overflow=""
        visible=false
        if(closeCallback) closeCallback(retVal)
    }
        
    //expose the API
    modals[id] = { open,close }
        
    onDestroy(()=>{
        delete modals[id]
        window.removeEventListener("keydown",keyPress)
    })    
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<div id="topModal" class:visible bind:this={topDiv} on:click={()=>close()} on:keydown={()=>close()}>
	<div id='modal' on:click|stopPropagation={()=>{}} on:keydown|stopPropagation={()=>{}}>
		<span class="material-symbols-outlined" on:click={()=>close()} on:keydown={()=>close()}>close</span>
		<div id='modal-content'>
			<slot></slot>
		</div>
	</div>
</div>

<style>
	#topModal {
		visibility: hidden;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(48, 48, 48, 0.533);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#modal {
		position: relative;
		border-radius: 5px;
		background: white;
	}

	.visible {
		visibility: visible !important;
	}
	#modal-content {
		overflow: hidden;
	}
	.material-symbols-outlined {
		position: absolute;
		font-size: 5vh;
		top: 1vh;
		left: 1vh;
		z-index: 10002;
	}
	.material-symbols-outlined:hover {
		cursor: pointer;
	}
</style>