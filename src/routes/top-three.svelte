<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';

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
		<li
			class="max-w-2xl mx-auto group rounded lg:p-6 p-2 transform duration-200 hover:bg-primary-3 hover:bg-opacity-10"
		>
			<a href={`/blog/${post.slug}`} class="flex justify-between">
				<div class="h-full">
					<a
						href={`/blog/${post.slug}`}
						class="text-2xl font-bold transform duration-200 group-hover:text-primary-2"
						>{post.title}</a
					>
					<p class="text-lg mt-5">{post.subtitle}</p>
					<ul class="flex gap-2 text-primary-4">
						{#each post.tags as tag}
							<li class="text-sm">#{tag}</li>
						{/each}
					</ul>
				</div>
				<img
					src={post.image}
					alt={post.title}
					class="object-cover aspect-video w-1/2 lg:pl-24 pl-12 rounded"
				/>
			</a>
		</li>
	{/each}
</ul>
