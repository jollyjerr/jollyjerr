<script lang="ts">
	import type { Post } from '$lib/blog/common/types';

	export let post: Post;
</script>

<div class="space-y-6">
	<img
		class="rounded h-32 opacity-80 object-cover w-full max-w-4xl mx-auto"
		src={post.metadata.image}
		alt={post.metadata.title}
	/>
	<article class="prose prose-invert mx-auto max-w-4xl prose-headings:text-primary-3">
		{@html post.html}
	</article>
</div>
