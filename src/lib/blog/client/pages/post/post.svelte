<script lang="ts">
	import type { Post } from '$lib/blog/common/types';

	export let post: Post;
</script>

<div>
	<article class="prose prose-invert mx-auto max-w-4xl prose-headings:text-primary-3">
		{@html post.html}
	</article>
</div>
