<script lang="ts">
	import type { PostMetadata } from '$lib/blog/common/types';

	export let post: PostMetadata;
</script>

<div>
	<a href="/blog/about">{post.title}</a>
	<p>{post.subtitle}</p>
	<img src={post.image} alt={post.title} />
</div>
