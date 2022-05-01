<script lang="ts">
	import type { Post } from '$lib/blog/common/types';
	import CoverPhoto from '$lib/shared/client/components/cover-photo.svelte';

	export let post: Post;
</script>

<div class="space-y-6">
	<CoverPhoto src={post.metadata.image} alt={post.metadata.title} />
	<article class="prose prose-invert mx-auto max-w-4xl prose-headings:text-primary-3">
		{@html post.html}
	</article>
</div>
