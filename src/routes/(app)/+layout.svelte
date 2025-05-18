<script lang="ts">
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<Search />
<div class="container mx-auto px-3 py-3 lg:py-8">
	{@render children()}
</div>
<Footer />
