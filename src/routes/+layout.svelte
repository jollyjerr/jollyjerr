<script>
	import Socials from './socials.svelte';
	import Algolia from './algolia.svelte';
	import '../app.css';
	import '../highlight.css';
</script>

<main class="min-h-screen overflow-x-hidden text-primary-1 font-common antialiased">
	<Algolia />
	<div class="container mx-auto lg:py-8 py-3 px-3">
		<slot />
	</div>
	<Socials />
</main>
