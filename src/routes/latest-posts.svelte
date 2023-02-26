<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';

	export let posts: PostMetadata[];
	const latestPosts = posts.filter((post) => post.featured !== 'true').slice(0, 5);
</script>

<div class="lg:max-w-xl w-full">
	<h1 class="w-full text-center text-3xl py-4 bg-primary-7 rounded font-bold">Latest Posts</h1>
	<ul class="w-full space-y-2 py-2">
		{#each latestPosts as post}
			<li class="max-w-2xl mx-auto rounded transform duration-200 hover:bg-primary-6 bg-primary-7">
				<a href={`/blog/${post.slug}`} class="block p-6">
					<div class="h-full">
						<a href={`/blog/${post.slug}`} class="text-2xl font-bold">{post.title}</a>
						<p class="text-lg">{post.subtitle}</p>
						<ul class="flex gap-2 text-primary-4">
							{#each post.tags as tag}
								<li class="text-sm">#{tag}</li>
							{/each}
						</ul>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
