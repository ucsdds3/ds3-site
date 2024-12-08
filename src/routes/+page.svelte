<!-- +page.svelte - Home Page Component -->

<script lang="ts">
	// Imports
	import type { PageData } from './$types';
	import Card from './card.svelte'; // Component for "What We Do" cards
	import cardData from '$web-config/landing-cards.json'; // Data for the cards
	import { onMount, onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing'; //Easing function for smooth animation, for numbers in stats section
	import EventReminder from './EventReminder.svelte';
	export let data: PageData;

	// Page metadata
	export const title = "DS3 at UCSD";
	export const description = "DS3 is the largest interdisciplinary data science organization on campus, comprising of 100+ passionate undergraduate students. We offer resources, events, and opportunities for career development and community building.";

	// Animated counters with updated easing and increased duration for smoother animation
	const count1 = tweened(0, { duration: 2000, easing: cubicInOut });
	const count2 = tweened(0, { duration: 2000, easing: cubicInOut });
	const count3 = tweened(0, { duration: 2000, easing: cubicInOut });
	const count4 = tweened(0, { duration: 2000, easing: cubicInOut });
	const count5 = tweened(0, { duration: 2000, easing: cubicInOut });
	const count6 = tweened(0, { duration: 2000, easing: cubicInOut });
	let isLoading = true;

	let statsSection: HTMLElement;
	let observer: IntersectionObserver;

	// counters
	function startCounters() {
		count1.set(1700);
		count2.set(700);
		count3.set(100);
		count4.set(100);
		count5.set(35);
		count6.set(20);
	}

	// The following function is used to animate the stats section when it is visible, not when the page is immediately loaded
	function observeStatsSection() {
		// Ensure IntersectionObserver exists (it won't on the server)
		if (typeof IntersectionObserver === 'undefined') {
			// Fallback: start counters immediately
			startCounters();
			return;
		}

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startCounters();
						if (observer && entry.target) {
							observer.unobserve(entry.target); // Stop observing after counters have started
						}
					}
				});
			},
			{
				threshold: 0.3, // Start animation when 30% of the section is visible
			}
		);
		if (statsSection) {
			observer.observe(statsSection);
		}
	}

	// Initialize observer on component mount
	onMount(() => {
		observeStatsSection();
	});

	// Clean up observer on component destroy
	onDestroy(() => {
		if (observer && statsSection) {
			observer.unobserve(statsSection);
			observer.disconnect();
		}
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
	<!-- Google Fonts Import for Montserrat Bold -->
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
</svelte:head>

<!-- Title Section -->
<EventReminder 
    eventName="Project Application Deadline 12/9" 
    eventDate={new Date('2024-12-09T23:59:00')}
    eventDetails="Click here to apply by 12/9 by 11:59 PM"
    eventUrl="https://docs.google.com/forms/d/e/1FAIpQLSfLqG-Sl4oDnuveVPutz9mMddTYZCRUh9vN2NU1C0EF0QIbNA/viewform"
/>
<!--note event url is optional-->
<section id="title-section">
	<div class="seperator">
		<h1 id="title">Expanding the Data Science Community at UCSD</h1>
		<img src="svgs/splash.svg" alt="computer splash" />
	</div>
</section>

<!-- Info Section -->
<section id="info-section" bind:this={statsSection}>
	<div class="seperator">
		<img src="/images/logos/big-logo-light.png" alt="DS3 logo big" loading="lazy"/>
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
			<!-- Third row of statistics -->
			<div id="countbox-row">
				<div class="countbox">
					<p class="number-display">{Math.floor($count5)}+</p>
					<p class="stat-title">Articles <br /> Written</p>
				</div>
				<div class="countbox">
					<p class="number-display">{Math.floor($count6)}+</p>
					<p class="stat-title">Industry <br /> Partners</p>
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
					alt={`${imageURL
						.replace('.png', '')
						.replace('/static/images/company-logos/', '')} company logo`}
					class="company-logo"
					loading="lazy"
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Google Font - Montserrat Bold */
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

	/* Global Styles */
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
		min-height: 75vh;
		display: flex;
		align-items: center;
		background: white;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	#title-section .seperator {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
	}

	#title {
		font-family: 'Montserrat', sans-serif; 
		font-size: 2.5rem;
		color: #333333;
		font-weight: 700; 
		margin: 0;
		display: flex;
		align-items: center;
		opacity: 0;
		text-align: center;
		transform: translateY(-50px);
		animation: fadeAndSlideDownTitle 0.3s ease-in-out 0.3s forwards;
	}

	#title-section img {
		max-width: 600px;
		opacity: 0;
		transform: translateY(-100%);
		animation: fadeInSplash 1s ease-in-out forwards, MoveUpDown 5s infinite linear 0.5s;
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

	#info-paragraph {
		font-size: 1.1rem;
		line-height: 1.6;
		padding: 1.5rem;
		border: 2px solid white;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		margin: 0 auto 2rem;
		width: 80%; 
	}

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
		flex-wrap: wrap; /* Added to allow wrapping on smaller screens */
	}

	.countbox {
		flex: 1;
		text-align: center;
		padding: 1rem;
		position: relative;
		min-height: 6rem; 
	}

	.number-display {
		font-family: 'Montserrat', sans-serif; 
		font-weight: 700; 
		font-size: 4rem; 
		margin: 1vh 0;
		color: var(--ds3-orange);
		text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
		/* Prevent layout shift by setting a fixed height */
		line-height: 1;
		height: 4rem; /* Same as font-size */
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

	#events-section {
		background-color: var(--base-bg);
	}

	.lower-title {
		font-family: 'Montserrat', sans-serif;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
		margin-bottom: 2rem;
	}

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

	/* Movement Animation */
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

	/* Prevent layout shifts by setting fixed height */
	.countbox {
		flex: 1;
		text-align: center;
		padding: 1rem;
		position: relative;
		min-height: 6rem; /* Ensure enough space for number */
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


	@media screen and (max-width: 760px) {
		#logo-grid {
			grid-template-columns: repeat(3, 30%);
		}
		#info-paragraph {
			font-size: 18px;
		}
		#countbox-row .countbox {
			font-size: 30px;
		}
		#title {
			max-width: 100%;
			font-size: 40px;
		}
		.number-display { 
			font-size: 80px;
		}

		/* Added Styles for Mobile Responsiveness */

		/* Stack title and SVG vertically */
		#title-section .seperator {
			flex-direction: column;
		}

		#title-section img {
			max-width: 100%;
			margin-bottom: 80px; 
			transform: translateY(0); 
			animation: fadeInSplash 1s ease-in-out forwards; 
		}

		/* Prevent overflow in stats section */
		#countbox-container {
			width: 100%;
			padding: 0 1rem;
		}

		#countbox-row {
			flex-direction: column;
			align-items: center;
		}

		#countbox-row .countbox {
			width: 80%;
			margin-bottom: 1rem;
		}

		/* Remove the white line between countboxes on mobile */
		#countbox-row .countbox::after {
			display: none;
		}
	}
</style>
