<script lang="ts">
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<div class="relative flex h-full flex-col">
	<Search />
	<div class="container mx-auto w-full grow px-4">
		{@render children()}
	</div>
	<Footer />
</div>
