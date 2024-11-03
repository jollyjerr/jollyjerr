<script>
	import Socials from './socials.svelte';
	import Algolia from '$lib/algolia/algolia.svelte';
	import '../../highlight.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Algolia />
<div class="container mx-auto px-3 py-3 lg:py-8">
	{@render children?.()}
</div>
<Socials />
