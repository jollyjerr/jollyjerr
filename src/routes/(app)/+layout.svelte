<script>
	import Socials from './socials.svelte';
	import Algolia from '$lib/algolia/algolia.svelte';
	import '../../highlight.css';
</script>

<Algolia />
<div class="container mx-auto px-3 py-3 lg:py-8">
	<slot />
</div>
<Socials />
