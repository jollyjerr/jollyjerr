<script lang="ts">
	import { safeFormat } from '$lib/date';
	import { onMount } from 'svelte';

	import { getHighlighter } from './highlight';
	import CoverPhoto from './cover-photo.svelte';

	onMount(() => {
		getHighlighter().highlightAll();
	});

	export let image: string;
	export let title: string;
	export let html: string;
	export let date: string | undefined = undefined;
	export let tags: string[] | undefined = undefined;
</script>

<div class="space-y-6">
	<CoverPhoto src={image} alt={title} />
	<div>
		{#if tags}
			<ul class="flex text-primary-4">
				{#each tags as tag}
					<li class="text-sm">#{tag}</li>
				{/each}
			</ul>
		{/if}
		{#if date}
			<p class="text-sm opacity-40">{safeFormat(date)}</p>
		{/if}
	</div>
	<article
		class="prose prose-invert mx-auto max-w-4xl prose-img:aspect-video prose-img:object-cover"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</article>
</div>
