<script lang="ts">
	import Socials from './socials.svelte';
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Search />
<div class="container mx-auto px-3 py-3 lg:py-8">
	{@render children?.()}
</div>
<Socials />
