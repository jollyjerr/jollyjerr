<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';
	import FeaturedPost from './featured-post.svelte';
	import LatestPosts from './latest-posts.svelte';

	export let posts: PostMetadata[];

	const featuredPost = posts.find((post) => post.featured === 'true');
</script>

<article>
	<div class="mb-10 grid gap-2 space-y-6 lg:grid-cols-6 lg:space-y-0">
		<section class="col-span-3 flex justify-center">
			<FeaturedPost post={featuredPost} />
		</section>
		<section class="col-span-3 flex justify-center">
			<LatestPosts {posts} />
		</section>
	</div>
</article>
