<script>
	import TeagueMark from '$lib/svg/TeagueMark.svelte';
	import Menu from '$lib/svg/Menu.svelte';
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
</script>

<nav
	class="fixed flex justify-between items-center md:hidden top-0 right-0 w-screen h-16 px-4 bg-black bg-opacity-70 border-b border-white border-opacity-20 backdrop-blur-sm z-50"
>
	<a class="w-12 text-magenta" href="/">
		<TeagueMark />
	</a>
	<button class="w-12 text-magenta p-2 border border-white border-opacity-20 rounded-full">
		<Menu />
	</button>
</nav>

<nav class="fixed top-8 right-0 mix-blend-difference z-50 hidden md:block">
	<ul class="flex flex-col items-end">
		{#each links as link}
			<li class="relative mb-2 border-r-12 border-white">
				<a class="group" href={link.href}>
					<div
						class="absolute top-0 right-0 h-full w-full bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-quart"
					/>
					<p
						class="relative font-semibold text-white text-sm text-right py-1.5 pr-2 pl-4 mix-blend-difference"
					>
						{link.text}
					</p>
				</a>
			</li>
		{/each}
	</ul>
</nav>
