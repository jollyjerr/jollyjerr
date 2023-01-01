<script lang="ts">
	import CoverPhoto from './cover-photo.svelte';

	export let image: string;
	export let title: string;
	export let html: string;
</script>

<div class="space-y-6">
	<CoverPhoto src={image} alt={title} />
	<article class="prose prose-invert prose-lg mx-auto max-w-4xl prose-headings:text-primary-3">
		{@html html}
	</article>
</div>
