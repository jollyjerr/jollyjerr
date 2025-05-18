<script lang="ts">
	import { safeFormat } from '$lib/date';
	import { onMount } from 'svelte';

	import { getHighlighter } from './highlight';

	onMount(() => {
		getHighlighter().highlightAll();
	});

	interface Props {
		html: string;
		date?: string | undefined;
		tags?: string[] | undefined;
	}

	let { html, date = undefined, tags = undefined }: Props = $props();
</script>

<div class="space-y-6">
	<div>
		{#if tags}
			<ul class="flex">
				{#each tags as tag (tag)}
					<li class="text-sm">#{tag}</li>
				{/each}
			</ul>
		{/if}
		{#if date}
			<p class="text-sm opacity-40">{safeFormat(date)}</p>
		{/if}
	</div>
	<article
		class="prose-img:aspect-video prose dark:prose-invert prose-img:object-cover mx-auto max-w-4xl"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</article>
</div>
