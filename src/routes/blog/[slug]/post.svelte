<script lang="ts">
	import type { Post } from '$lib/blog/types';
	import CoverPhoto from './cover-photo.svelte';

	export let post: Post;
</script>

<div class="space-y-6">
	<CoverPhoto src={post.metadata.image} alt={post.metadata.title} />
	<article class="prose prose-invert prose-lg mx-auto max-w-4xl prose-headings:text-primary-3">
		{@html post.html}
	</article>
</div>
