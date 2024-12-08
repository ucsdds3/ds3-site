<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount, onDestroy } from 'svelte';

	export let 
		eventName = 'Upcoming Conference', 
		eventDate = new Date('2024-08-20T09:00:00'), 
		eventDetails = 'Annual gathering of tech innovators',
		eventUrl = '';

	let isVisible = false;
	let countdown = '';
	let countdownInterval: ReturnType<typeof setInterval> | null = null;

	function calculateCountdown() {
		const now = new Date();
		const difference = eventDate.getTime() - now.getTime();

		if (difference <= 0) {
			countdown = 'Event is happening now!';
			if (countdownInterval) {
				clearInterval(countdownInterval);
				countdownInterval = null;
			}
			return;
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 1000); // makes the reminder delay by a sec

		calculateCountdown();
		countdownInterval = setInterval(calculateCountdown, 1000);
	});

	onDestroy(() => {
		if (countdownInterval) {
			clearInterval(countdownInterval);
			countdownInterval = null;
		}
	});

	function dismissReminder() {
		isVisible = false;
	}
</script>

{#if isVisible}
	<div class="reminder-container" transition:fly="{{ y: -100, duration: 800, easing: quintOut }}">
		<div class="reminder-wrapper" style="--event-color: {"#f58134"};">
			<div class="reminder-accent"></div>
			
			<div class="reminder-content">
				<div class="reminder-text">
					<h3 class="reminder-title">{eventName}</h3>
					<p class="reminder-details">
						<span class="reminder-date">{eventDate.toLocaleDateString()}</span>
						<span class="reminder-separator">•</span>
						{#if eventUrl}
							<a 
								href={eventUrl} 
								target="_blank" 
								rel="noopener noreferrer" 
								class="reminder-link"
							>
								{eventDetails}
							</a>
						{:else}
							{eventDetails}
						{/if}
					</p>
				</div>

				<div class="reminder-countdown">
					{countdown}
				</div>

				<button 
					on:click={dismissReminder}
					class="reminder-close-btn"
					aria-label="Dismiss reminder"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.reminder-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 50;
		display: flex;
		justify-content: center;
		padding: 0.5rem 1rem;
	}

	.reminder-wrapper {
		width: 100%;
		max-width: 44rem;
		background-color: white;
		box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.2);
		border-radius: 0.75rem;
		overflow: hidden;
		border: 2px solid rgba(var(--event-color-rgb, 59, 130, 246), 0.2);
		position: relative;
	}

	.reminder-accent {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 0.5rem;
		background-color: var(--event-color, #3B82F6);
		opacity: 0.8;
	}

	.reminder-content {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		gap: 1rem;
	}

	.reminder-text {
		flex-grow: 1;
	}

	.reminder-title {
		font-size: 1.1rem;
		font-weight: bold;
		margin-bottom: 0.2rem;
		color: var(--event-color, #3B82F6);
	}

	.reminder-details {
		color: #4B5563;
		font-size: 0.8rem;
	}

	.reminder-link {
		color: var(--event-color, #3B82F6);
		text-decoration: underline;
		transition: opacity 0.3s;
	}

	.reminder-link:hover {
		opacity: 0.8;
	}

	.reminder-date {
		font-weight: 600;
	}

	.reminder-separator {
		margin: 0 0.5rem;
		color: #9CA3AF;
	}

	.reminder-countdown {
		background-color: var(--event-color, #3B82F6);
		color: white;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 0.9rem;
		font-weight: bold;
		min-width: 120px;
		text-align: center;
	}

	.reminder-close-btn {
		margin-left: 0.5rem;
		color: #6B7280;
		transition: color 0.3s, transform 0.3s;
	}

	.reminder-close-btn:hover {
		color: #1F2937;
		transform: rotate(90deg);
	}

	.reminder-close-btn svg {
		height: 1.5rem;
		width: 1.5rem;
	}

	.reminder-wrapper::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: inherit;
		filter: blur(10px);
		z-index: -1;
		opacity: 0.7;
	}
</style>