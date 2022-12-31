<script>
	import Socials from './socials.svelte';
	import '../app.css';
</script>

<main class="min-h-screen overflow-x-hidden text-primary-1 font-common antialiased">
	<div class="container mx-auto lg:py-8 py-3 px-3">
		<slot />
	</div>
	<Socials />
</main>
