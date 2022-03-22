<script>
	import '../app.css';
	import Nav from '$lib/globals/Nav.svelte';

	let y;
</script>

<svelte:window bind:scrollY={y} />

<Nav offset={y} />
<slot />
