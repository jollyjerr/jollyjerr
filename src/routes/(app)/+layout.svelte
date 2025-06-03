<script lang="ts">
	import { useSearch } from '$lib/search/api.svelte';
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';
	import Footer from './footer.svelte';

	let { children } = $props();

	const search = useSearch();
</script>

<Search />
<main class="container mx-auto grow px-4" class:pt-20={!search.open}>
	{@render children()}
</main>
<Footer />
