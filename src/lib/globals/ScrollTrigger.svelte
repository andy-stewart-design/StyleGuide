<script>
	import { onMount } from 'svelte';
	export let left = '0px';
	export let right = '0px';
	export let top = '0px';
	export let bottom = '0px';
	let wrapper;
	let options = { rootMargin: `${top} ${right} ${bottom} ${left}` };

	function obsCallback(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.classList.contains('bg-black')) {
					console.log('dark');
				}
			}
		});
	}

	onMount(() => {
		const els = wrapper.querySelectorAll('.oberved');
		const observer = new IntersectionObserver(obsCallback, options);

		els.forEach(function (el) {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<div bind:this={wrapper}>
	<slot />
</div>
