<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';
	import FeaturedPost from './featured-post.svelte';
	import LatestPosts from './latest-posts.svelte';

	export let posts: PostMetadata[];

	const featuredPost = posts.find((post) => post.featured === 'true');
</script>

<article>
	<div class="grid lg:grid-cols-6 space-y-6 lg:space-y-0 mb-10 gap-2">
		<section class="col-span-3 flex justify-center">
			<FeaturedPost post={featuredPost} />
		</section>
		<section class="col-span-3 flex justify-center">
			<LatestPosts {posts} />
		</section>
	</div>
	<div class="w-full h-1 bg-gradient-to-r from-primary-8 via-primary-2 to-primary-8" />
</article>
