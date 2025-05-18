<script lang="ts">
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<div class="relative flex flex-col h-full">
	<Search />
	<div class="mx-auto grow px-4">
		{@render children()}
	</div>
	<Footer />
</div>
