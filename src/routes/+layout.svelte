<script lang="ts">
	import { useSearch } from '$lib/search/api.svelte';
	import '../app.css';

	let { children } = $props();

	const search = useSearch();
</script>

<main class="h-full overflow-x-hidden" class:pt-20={!search.open}>
	{@render children()}
</main>
