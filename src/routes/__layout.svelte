<script>
	import '../app.css';
	import Nav from '$lib/globals/Nav.svelte';

	let currentY;
	let previousY;
	function compute() {
		previousY = currentY;
		currentY = window.scrollY;
	}
</script>

<svelte:window on:scroll={compute} />

<Nav {currentY} {previousY} />
<slot />
