<script>
	import TeagueMark from '$lib/svg/TeagueMark.svelte';
	import TeagueLogotype from '$lib/svg/TeagueLogotype.svelte';

	export let currentY = 0;
	export let previousY = 0;

	const links = [
		{
			text: 'Work',
			href: '/'
		},
		{
			text: 'About',
			href: '/'
		},
		{
			text: 'Latest',
			href: '/'
		},
		{
			text: 'Careers',
			href: '/'
		},
		{
			text: 'Contact',
			href: '/'
		}
	];

	let isOpen = false;
	let hasScrolled = false;
	let down = true;
	let dark = true;

	$: currentY >= 200 ? (hasScrolled = true) : (hasScrolled = false);
	$: previousY <= currentY ? (down = true) : (down = false);
</script>

<!-- Offscreen nav -->
<nav
	class="fixed top-0 left-0 w-screen h-screen pt-32 px-4 pointer-events-none z-50"
	class:pointer-events-auto={isOpen}
>
	<div
		class="absolute top-0 left-0 w-full h-full bg-black border-b border-white border-opacity-20 origin-top -translate-y-full transition-transform duration-700 delay-700 ease-out-quart mix"
		class:isOpen-offscreen={isOpen}
	/>
	<div
		class="fixed top-0 left-0 flex justify-between items-center w-screen h-16 bg-black bg-opacity-0 border-b border-white border-opacity-0 px-4 transition-colors duration-500"
		class:hasScrolled-bg={hasScrolled}
	/>
	<ul class="flex flex-col items-start">
		{#each links as link, i}
			<div
				class="relative w-full border-t border-white border-opacity-30 origin-left scale-x-0 transition-transform duration-700 ease-out-quart"
				class:isOpen-border={isOpen}
				style="transition-delay: {75 * i}ms;"
			/>
			<div class="overflow-hidden mb-6">
				<li
					class="relative pt-2 -translate-y-full transition-transform duration-700 delay-100 ease-out-quart"
					class:isOpen-link={isOpen}
				>
					<a class="group" href={link.href}>
						<p class="relative font-semibold text-white text-4xl uppercase">
							{link.text}
						</p>
					</a>
				</li>
			</div>
		{/each}
	</ul>
	<!-- social icons -->
	<div
		class="absolute bottom-8 left-4 flex gap-x-4 opacity-0 transition-opacity duration-500 delay-0"
		class:isOpen-social={isOpen}
	>
		<div class="w-8 h-8 bg-white rounded-full" />
		<div class="w-8 h-8 bg-white rounded-full" />
		<div class="w-8 h-8 bg-white rounded-full" />
	</div>
</nav>
<!-- logo and nav trigger -->
<div
	class="fixed top-0 left-0 flex justify-between items-center w-screen h-16 px-4 z-50"
	class:isOpen-nav={isOpen}
>
	<a class="absolute top-0 left-0 flex items-center h-full px-4 text-magenta" href="/">
		<div class="w-12 transition-opacity duration-500" class:opacity-0={!hasScrolled}>
			<TeagueMark />
		</div>
	</a>
	<a class="relative text-magenta" href="/">
		<div class="w-20 text-white transition-opacity duration-500" class:opacity-0={hasScrolled}>
			<TeagueLogotype />
		</div>
	</a>
	<button
		class="relative flex justify-center items-center w-10 h-10 text-magenta border border-white border-opacity-20 rounded-full"
		on:click={() => {
			isOpen = !isOpen;
		}}
	>
		<div class="relative w-5 h-[2px]">
			<div
				class="absolute top-0 left-0 w-full h-full bg-white -translate-y-1.5 transition-transform duration-700 ease-out-quart"
				class:isOpen-iconTop={isOpen}
			/>
			<div
				class="w-full h-full bg-white origin-center scale-x-75 transition-transform duration-700 ease-out-quart"
				class:isOpen-iconMid={isOpen}
			/>
			<div
				class="absolute top-0 left-0 w-full h-full bg-white translate-y-1.5 transition-transform duration-700 ease-out-quart"
				class:isOpen-iconBot={isOpen}
			/>
		</div>
	</button>
</div>

<style>
	.isOpen-offscreen {
		@apply translate-y-0 delay-0;
	}
	.isOpen-border {
		@apply scale-x-100;
	}
	.isOpen-link {
		@apply -translate-y-0 delay-500;
	}
	.isOpen-iconTop {
		@apply translate-y-0 -rotate-45;
	}
	.isOpen-iconMid {
		@apply scale-x-0;
	}
	.isOpen-iconBot {
		@apply translate-y-0 rotate-45;
	}
	.isOpen-social {
		@apply opacity-100 delay-700;
	}
	.hasScrolled-bg {
		@apply bg-opacity-70 border-opacity-20 backdrop-blur-sm;
	}
</style>
