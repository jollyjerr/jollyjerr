<script>
	import Socials from './socials.svelte';
	import Algolia from './algolia.svelte';
	import '../app.css';
	import '../highlight.css';
</script>

<main class="min-h-screen overflow-x-hidden font-common text-primary-1 antialiased">
	<Algolia />
	<div class="container mx-auto px-3 py-3 lg:py-8">
		<slot />
	</div>
	<Socials />
</main>
