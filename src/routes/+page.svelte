<script lang="ts">
	import type { PageData } from './$types';
	import Card from './card.svelte';
	import cardData from '$web-config/landing-cards.json';

	export let data: PageData;
	export const title = "DS3 at UCSD";
	export const description = "DS3 is the largest interdisciplinary data science organization on campus, comprising of 100+ passionate undergraduate students. We offer resources, events, and opportunities for career development and community building.";
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <meta name="description" content="{description}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="/favicon.png">
    <meta property="og:url" content="https://www.ds3ucsd.com/">
    <meta property="og:type" content="website">
</svelte:head>

<section id="title-section">
	<div class="seperator">
		<h1 id="title">Expanding the Data Science Community at UCSD</h1>
		<img src="svgs/splash.svg" alt="computer splash"/>
	</div>
</section>
<section id="info-section">
	<div class="seperator">
		<img src="/images/logos/big-logo-light.png" alt="ds3 logo big" loading="lazy"/>
		<p id="info-paragraph">
			The Data Science Student Society (DS3) is the premier interdisciplinary data science
			organization on campus, composed of over 400+ undergraduate students passionate about all
			facets of Data Science. As the largest data science organization, we offer many resources,
			events, and opportunities, designed to encourage career development amongst all of our
			members, as well as provide a strong student community. Organized by over 45 students, we
			offer professional development events, technical workshops, fully-fledged projects,
			Hackathons, and online articles and podcasts.
		</p>
		<div id="countbox-row">
			<div class="countbox">
				<p class="number-display">35</p>
				 Articles <br> Written
			</div>
			<div class="countbox">
				<p>500+</p>
				 Hackathon <br> Attendees
			</div>
		</div>
		<div id="countbox-row">
			<div class="countbox">
				<p>28</p>
				 Projects <br> Completed
			</div>
			<div class="countbox">
				<p>78</p>
				 Workshops <br> Hosted
			</div>
		</div>
	</div>
</section>
<section id="companies-section">
	<div class="seperator">
		<h2 class="lower-title">Where We've Been</h2>
		<div id="logo-grid">
			{#each data.imagePaths as imageURL}
				<img
					src={imageURL.replace('/static', '')}
					alt={`${imageURL
						.replace('.png', '')
						.replace('/static/images/company-logos/', '')} company logo`}
					class="company-logos"
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</section>
<section id="events-section">
	<div class="seperator">
		<h2 class="lower-title">What We Do</h2>
		{#each cardData as card}
			<Card {...card} />
		{/each}
	</div>
</section>

<style>
	/* Meta Styling */
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
	@font-face {
		font-family: 'Montserrat Bold';
		src: url('/fonts/montserrat.bold.ttf');
	}
	section {
		font-family: 'Montserrat', 'Poppins';
		padding: 10vh 0;
		background-color: var(--base-bg);
		/* height: 100vh; */
	}
	@media (min-height: 1200px) {
		.seperator {
			margin: 0 17.5vw;
		}
	}
	@media (max-height: 1199px) {
		.seperator {
			margin: 0 10vw;
		}
	}
	.lower-title {
		font-family: 'Montserrat Bold';
		font-size: 67.5px;
		font-weight: 1000;
		text-align: center;
	}
	/* Individual section styling */
	@media (min-height: 1200px) {
		#title {
			font-weight: bold;
			width: 35vw;
		}
	}
	@media (max-height: 1199px) {
		#title {
			font-weight: bolder;
		}
	}
	#title-section {
		min-height: 75vh;
		display: flex;
		align-items: center;
		background: white;
		max-width: 100%;
		overflow-x: hidden;
	}
	#title-section div {
		display: flex;
		justify-content: space-between;
		margin-top: 5vh;
	}
	#title-section img {
		width: 60vw;
		-webkit-animation: MoveUpDown 5s infinite linear;
		animation: MoveUpDown 5s infinite linear;
	}
	@media screen and (max-width: 1000px) {
		#title { 
			font-size: 60px;
		}
		#title-section div {
			flex-direction: column;
		}
		#title-section img {
			margin: 0 auto;
		}
	}

	#info-section {
		background-image: url('/images/stock-people/librarywalk.png');
		background-color: rgba(255, 255, 255, 0.9);
		background-size: cover;
		background-position: center;
		color: white;
	}
	#info-section img {
		height: 20vh;
		margin: 10vh 0 4vh;
	}
	#info-section #info-paragraph {
		font-size: 30px;
		text-align: left;
		background-color: rgba(40, 10, 0, 0.5);
		padding: 10px;
		border: 0.1px solid white;
		box-shadow: 40px;
	}
	#info-section #countbox-row {
		display: flex;
		flex-direction: row;
		font-size: 4vh;
		text-align: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 2vh auto;
		margin-bottom: 0;
		
	}
	#countbox-row .countbox {
		flex: 1;
		margin: 0;
		font-size: 5vh;
		font-weight: bolder;
		border-top: 2.5px solid white;
		border-bottom: 2.5px solid white;
		padding: 5px;
		max-width: 100%;
		text-shadow: 2px 2px 4px rgba(255, 165, 0, 0.7);
	}
	.countbox p {
		font-family: 'Montserrat Bold';
		font-size: 100px;
		margin: 1vh 0;
		color: var(--ds3-orange);
		font-weight: bold;
		text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
	}
	#logo-grid {
		display: grid;
		grid-template-columns: repeat(4, 25%);
		grid-auto-rows: 0.5fr;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		vertical-align: middle;
	}
	.company-logos {
		max-width: 50%;
		margin: 0 auto;
	}

	#title {
		font-family: 'Montserrat Bold';
		font-size: 70px;
		color: #333333;
		font-weight: bolder;
		margin: 0;
		display: flex;
		align-items: center;
		opacity: 0;
		text-align: center;
		transform: translateY(-50px);
		animation: fadeAndSlideDownTitle 0.3s ease-in-out 0.3s forwards;
	}

	#title-section img {
		height: 60vw;
		opacity: 0;
		transform: translateY(-100%);
		animation: fadeInSplash 1s ease-in-out forwards, MoveUpDown 5s infinite linear 0.5s;
	}

	/* Animation for Title */
	@keyframes fadeAndSlideDownTitle {
		0% {
			opacity: 0;
			transform: translateY(-80px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Animation for Splash */
	@keyframes fadeInSplash {
		0% {
			opacity: 0;
			transform: translateY(-50%);
		}
		100% {
			opacity: 1;
			transform: translateY(50%);
		}
	}

	@keyframes MoveUpDown {
		0%,
	    50%,
		100% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-10px);
		}
		75% {
			transform: translateY(10px);
		}
	}

	@media screen and (max-width: 760px) {
		#logo-grid {
        	grid-template-columns: repeat(3, 30%);
    	}
		#info-section #info-paragraph {
			font-size: 24px;
		}
		#info-section #countbox-row {
			flex-direction: column;
		}
		#countbox-row .countbox {
			font-size: 40px;
		}
	}
</style>
