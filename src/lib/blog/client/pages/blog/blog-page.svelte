<script lang="ts">
	import type { PostMetadata } from '$lib/blog/common/types';
	import FeaturedPost from './featured-post.svelte';

	export let posts: PostMetadata[];

	const featuredPost = posts.find((post) => post.featured);
</script>

<article>
	<div class="grid lg:grid-cols-6 space-y-6">
		<section class="col-span-4">
			<FeaturedPost post={featuredPost} />
		</section>
		<section />
	</div>
</article>
