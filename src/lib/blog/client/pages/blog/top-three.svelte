<script lang="ts">
	import type { PostMetadata } from '$lib/blog/common/types';

	export let posts: PostMetadata[];
	const topThree = posts.filter((post) => post.featured !== 'true');
</script>

<svelte:head>
	{#each topThree as post}
		<link rel="preload" as="image" href={post.image} />
	{/each}
</svelte:head>

<ul class="w-full lg:space-y-12 space-y-2 lg:bg-primary-8 bg-primary-7 rounded">
	{#each topThree as post}
		<li class="max-w-2xl mx-auto hover:bg-primary-6 rounded lg:p-6 p-2 transform duration-200">
			<a href={`/blog/${post.slug}`} class="flex justify-between">
				<span>
					<a href={`/blog/${post.slug}`} class="text-2xl font-bold">{post.title}</a>
					<p>{post.subtitle}</p>
				</span>
				<img
					src={post.image}
					alt={post.title}
					class="object-cover aspect-video w-1/2 lg:pl-24 pl-12 rounded"
				/>
			</a>
		</li>
	{/each}
</ul>
