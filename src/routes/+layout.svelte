<script>
	import Socials from '$lib/shared/client/components/socials.svelte';
	import '../app.css';
</script>

<main
	class="min-h-screen overflow-x-hidden text-primary-1 font-common antialiased pointer-events-none"
>
	<div class="container mx-auto lg:py-8 py-3 px-3 pointer-events-none">
		<slot />
	</div>
	<Socials />
</main>
