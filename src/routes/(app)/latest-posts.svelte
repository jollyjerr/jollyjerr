<script lang="ts">
	import { safeFormat } from '$lib/date';
	import type { PostMetadata } from '$lib/blog/types';
	import { imageSizes, sizedImage } from '$lib/image';

	interface Props {
		posts: PostMetadata[];
	}

	let { posts }: Props = $props();
	const latestPosts = posts
		.filter((post) => post.featured !== 'true')
		.slice(0, 3)
		.map((p) => ({ ...p, image: sizedImage(p.image, imageSizes.sm) }));

	const lastPost = latestPosts.length - 1;
</script>

<svelte:head>
	{#each latestPosts as post}
		<link rel="preload" as="image" href={post.image} />
	{/each}
</svelte:head>

<div class="w-full">
	<ul class="flex w-full flex-col gap-2 lg:px-16">
		{#each latestPosts as post, i}
			<li
				class={`grid grid-cols-2 gap-3 py-4 ${i < lastPost ? 'border-b-primary-6 border-b' : ''}`}
			>
				<div class="flex w-full justify-center">
					<a href={`/blog/${post.slug}`}>
						<img
							src={post.image}
							alt={post.subtitle}
							class="aspect-square w-52 rounded rounded-xs object-cover"
						/>
					</a>
				</div>
				<div>
					<ul class="text-primary-4 flex">
						{#each post.tags as tag}
							<li class="text-sm">#{tag}</li>
						{/each}
					</ul>
					<a
						href={`/blog/${post.slug}`}
						class="hover:text-primary-4 text-2xl font-bold hover:underline">{post.title}</a
					>
					<p class="opacity-80">{post.subtitle}</p>
					<p class="text-sm opacity-40">{safeFormat(post.date)}</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
