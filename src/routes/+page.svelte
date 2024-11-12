<!-- +page.svelte - Home Page Component -->

<script lang="ts">
	// Imports
	import type { PageData } from './$types';
	import Card from './card.svelte'; // Component for individual cards
	import cardData from '$web-config/landing-cards.json'; // Data for the cards
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { quintOut } from 'svelte/easing'; // Easing function for smooth animation

	export let data: PageData;

	// Page metadata
	export const title = "DS3 at UCSD";
	export const description = "DS3 is the largest interdisciplinary data science organization on campus, comprising of 100+ passionate undergraduate students. We offer resources, events, and opportunities for career development and community building.";

	// Animated counters
	const count1 = tweened(0, { duration: 2000, easing: quintOut });
	const count2 = tweened(0, { duration: 2000, easing: quintOut });
	const count3 = tweened(0, { duration: 2000, easing: quintOut });
	const count4 = tweened(0, { duration: 2000, easing: quintOut });

	// Set final values on component mount
	onMount(() => {
		count1.set(1700);
		count2.set(700);
		count3.set(100);
		count4.set(100);
	});
</script>

<!-- Page head metadata -->
<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>{title}</title>
	<meta name="description" content="{description}" />
	<!-- Graph meta tags -->
	<meta property="og:title" content="{title}" />
	<meta property="og:description" content="{description}" />
	<meta property="og:image" content="/favicon.png" />
	<meta property="og:url" content="https://www.ds3ucsd.com/" />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Title Section -->
<section id="title-section">
	<div class="seperator">
		<h1 id="title">Expanding the Data Science Community at UCSD</h1>
	</div>
</section>

<!-- Info Section -->
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
		<div id="countbox-container">
			<!-- First row of statistics -->
			<div id="countbox-row">
				<div class="countbox">
					<p class="number-display">{Math.floor($count1)}+</p>
					<p class="stat-title">Discord <br /> Members</p>
				</div>
				<div class="countbox">
					<p class="number-display">{Math.floor($count2)}+</p>
					<p class="stat-title">Hackathon <br /> Attendees</p>
				</div>
			</div>
			<!-- Second row of statistics -->
			<div id="countbox-row">
				<div class="countbox">
					<p class="number-display">{Math.floor($count3)}+</p>
					<p class="stat-title">Projects <br /> Mentored</p>
				</div>
				<div class="countbox">
					<p class="number-display">{Math.floor($count4)}+</p>
					<p class="stat-title">Workshops <br /> Hosted</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Events Section -->
<section id="events-section">
	<div class="seperator">
		<h2 class="lower-title">What We Do</h2>
		<!-- Iterative card display -->
		{#each cardData as card}
			<Card {...card} />
		{/each}
	</div>
</section>

<!-- Companies Section -->
<section id="companies-section">
	<div class="seperator">
		<h2 class="lower-title">Where We've Been</h2>
		<div id="logo-grid">
			{#each data.imagePaths as imageURL}
				<img
					src={imageURL.replace('/static', '')}
					alt="{imageURL.replace('.png', '').replace('/static/images/company-logos/', '')} company logo"
					class="company-logo"
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Global Styles */
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
	@font-face {
		font-family: 'Montserrat Bold';
		src: url('/fonts/montserrat.bold.ttf');
	}

	:global(body) {
		font-family: 'Montserrat', 'Poppins', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		/* Colors */
		--ds3-orange: #f58134;
		--ds3-blue: #11b3c9;
		--ds3-gray: #2e2e2e;
		--ds3-orange-lighten: #f29c62;
		--ds3-blue-lighten: #75c8d3;
		--ds3-gray-lighten: #575757;
		--base-bg: #f8f8f8;
	}

	/* Reset box-sizing for all elements */
	*, *::before, *::after {
		box-sizing: inherit;
	}

	/* Base styles */
	section {
		padding: 10vh 2vw;
		background-color: var(--base-bg);
	}

	.seperator {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2vw;
	}

	/* Title Section */
	#title-section {
		min-height: 50vh; /* Adjusted height */
		display: flex;
		align-items: center;
		background-color: white;
		overflow: hidden;
	}

	#title-section .seperator {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	#title {
		font-family: 'Montserrat Bold';
		font-size: 2.5rem;
		color: #333333;
		font-weight: bolder; /* Ensuring bold font */
		margin: 0;
		opacity: 0;
		transform: translateY(-50px);
		animation: fadeAndSlideDownTitle 0.3s ease-in-out 0.3s forwards;
	}

	/* Info Section */
	#info-section {
		background-image: linear-gradient(
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5)
			),
			url('/images/stock-people/librarywalk.png');
		background-size: cover;
		background-position: center;
		color: white;
	}

	#info-section img {
		height: 20vh;
		margin: 5vh 0 4vh;
	}

	#info-paragraph {
		font-size: 1.1rem;
		line-height: 1.6;
		padding: 1.5rem;
		border: 2px solid white;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		margin: 0 auto 2rem;
		width: 100%;
	}

	/* Statistics Boxes */
	#countbox-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	#countbox-row {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.countbox {
		flex: 1;
		text-align: center;
		padding: 1rem;
		position: relative;
	}

	/* Styling for the numbers */
	.number-display {
		font-family: 'Montserrat Bold';
		font-size: 4rem;
		margin: 1vh 0;
		color: var(--ds3-orange);
		font-weight: bold;
		text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
	}

	/* Emphasize text under numbers */
	.stat-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		margin: 0;
	}

	/* White line between numbers */
	#countbox-row .countbox:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 10%;
		right: 0;
		transform: translateY(0);
		width: 1px;
		height: 80%;
		background-color: white;
	}

	/* Events Section */
	#events-section {
		background-color: var(--base-bg);
	}

	.lower-title {
		font-family: 'Montserrat Bold', sans-serif;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
		margin-bottom: 2rem;
	}

	/* Companies Section */
	#companies-section {
		background-color: #fff;
	}

	#logo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1.5rem;
		align-items: center;
	}

	.company-logo {
		max-width: 100%;
		height: auto;
		margin: 0 auto;
	}

	/* Animations */
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

	/* Responsive font sizes */
	h1, h2 {
		margin: 0.5rem 0;
	}

	h1 {
		font-size: 2.5rem;
	}

	h2 {
		font-size: 2rem;
	}

	p {
		margin: 0.5rem 0;
	}

	/* Responsive Images */
	img {
		max-width: 100%;
		height: auto;
	}

	/* Cards Responsiveness */
	#events-section .seperator {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

</style>
