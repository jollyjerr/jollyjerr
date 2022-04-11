<script lang="ts">
	import type { Post } from '$lib/blog/common/types';

	export let post: Post;
</script>

<div>
	<h1>{post.metadata.title}</h1>
	{@html post.html}
</div>
