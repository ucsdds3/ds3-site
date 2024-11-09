<!-- +page.svelte - Home Page Component -->

<script lang="ts">
	// Imports
	import type { PageData } from './$types';
	import Card from './card.svelte'; // Component for individual cards
	import cardData from '$web-config/landing-cards.json'; // Data for the cards

	export let data: PageData;

	// Page metadata
	export const title = "DS3 at UCSD";
	export const description = "DS3 is the largest interdisciplinary data science organization on campus, comprising of 100+ passionate undergraduate students. We offer resources, events, and opportunities for career development and community building.";
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
		<img src="/images/logos/big-logo-light.png" alt="DS3 logo" loading="lazy" />
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
			<div class="countbox">
				<p class="number-display">35</p>
				Articles Written
			</div>
			<div class="countbox">
				<p class="number-display">500+</p>
				Hackathon Attendees
			</div>
			<div class="countbox">
				<p class="number-display">28</p>
				Projects Completed
			</div>
			<div class="countbox">
				<p class="number-display">78</p>
				Workshops Hosted
			</div>
		</div>
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
					alt="{imageURL
						.replace('.png', '')
						.replace('/static/images/company-logos/', '')} company logo"
					class="company-logo"
					loading="lazy"
				/>
			{/each}
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

<style>
	/* Global Styles */
	@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

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
	}

	/* Title Section */
	#title-section {
		min-height: 75vh;
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

	#title-section img {
		max-width: 100%;
		height: auto;
		margin-top: 2rem;
		animation: MoveUpDown 5s infinite linear;
		opacity: 0;
		transform: translateY(-50%);
		animation: fadeInSplash 1s ease-in-out forwards, MoveUpDown 5s infinite linear 0.5s;
	}

	#title {
		font-family: 'Montserrat', sans-serif;
		font-size: 2.5rem;
		color: #333333;
		font-weight: bold;
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
		margin-bottom: 2rem;
	}

	/* Statistics Boxes */
	#countbox-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}

	.countbox {
		flex: 1 1 200px;
		text-align: center;
	}

	.number-display {
		font-family: 'Montserrat Bold', sans-serif;
		font-size: 3rem;
		margin: 0.5rem 0;
		color: var(--ds3-orange);
	}

	/* Companies Section */
	#companies-section {
		background-color: #fff;
	}

	.lower-title {
		font-family: 'Montserrat Bold', sans-serif;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
		margin-bottom: 2rem;
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

	/* Events Section */
	#events-section {
		background-color: var(--base-bg);
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

	@keyframes fadeInSplash {
		0% {
			opacity: 0;
			transform: translateY(-50%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
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

	Card {
		width: 100%;
	}

	/* Removed unnecessary media queries and rely on flex and grid for responsiveness */
</style>
