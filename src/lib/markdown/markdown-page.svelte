<script lang="ts">
	import { onMount } from 'svelte';

	import { getHighlighter } from './highlight';
	import CoverPhoto from './cover-photo.svelte';

	onMount(() => {
		getHighlighter().highlightAll();
	});

	export let image: string;
	export let title: string;
	export let html: string;
</script>

<div class="space-y-6">
	<CoverPhoto src={image} alt={title} />
	<article
		class="prose prose-invert mx-auto max-w-4xl prose-img:aspect-video prose-img:object-cover"
	>
		{@html html}
	</article>
</div>
