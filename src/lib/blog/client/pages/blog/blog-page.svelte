<script lang="ts">
	import type { PostMetadata } from '$lib/blog/common/types';
	import FeaturedPost from './featured-post.svelte';

	export let posts: PostMetadata[];

	const featuredPost = posts.find((post) => post.featured);
</script>

<FeaturedPost post={featuredPost} />
