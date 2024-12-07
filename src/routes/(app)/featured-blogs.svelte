<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';
	import FeaturedPost from './featured-post.svelte';
	import LatestPosts from './latest-posts.svelte';

	interface Props {
		posts: PostMetadata[];
	}

	let { posts }: Props = $props();

	const featuredPost = posts.find((post) => post.featured === 'true');
</script>

<article class="border-b border-b-primary-6">
	<div class="mb-2 grid lg:grid-cols-6">
		<section class="col-span-3 border-b border-b-primary-6 pb-4 lg:border-b-0">
			<FeaturedPost post={featuredPost} />
		</section>
		<section class="col-span-3">
			<LatestPosts {posts} />
		</section>
	</div>
</article>
