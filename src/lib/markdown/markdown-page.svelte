<script lang="ts">
	import { safeFormat } from '$lib/date';
	import { onMount } from 'svelte';

	import { getHighlighter } from './highlight';
	import CoverPhoto from './cover-photo.svelte';

	onMount(() => {
		getHighlighter().highlightAll();
	});

	interface Props {
		image: string;
		title: string;
		html: string;
		date?: string | undefined;
		tags?: string[] | undefined;
	}

	let { image, title, html, date = undefined, tags = undefined }: Props = $props();
</script>

<div class="space-y-6">
	<CoverPhoto src={image} alt={title} />
	<div>
		{#if tags}
			<ul class="text-primary-4 flex">
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
		class="prose-img:aspect-video prose prose-invert prose-img:object-cover mx-auto max-w-4xl"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</article>
</div>
