<script lang="ts">
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<Search />
<div class="relative flex h-full flex-col">
	<div class="container mx-auto w-full grow px-4">
		{@render children()}
	</div>
	<Footer />
</div>
