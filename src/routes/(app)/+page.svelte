<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';
	import { safeFormat } from '$lib/date';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const posts = data.posts;

	function groupByYear(posts: PostMetadata[]) {
		return posts.reduce<Record<string, PostMetadata[]>>((acc, article) => {
			const year = article.date.split('-')[0];

			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(article);

			return acc;
		}, {});
	}

	const groupedPosts = Object.entries(groupByYear(posts)).sort(([year_a], [year_b]) =>
		year_a > year_b ? -1 : 1
	);
</script>

<Head />
<Navbar selected="blog" />

<div class="flex justify-center px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-3xl">
		{#each groupedPosts as [year, postsInYear] (year)}
			<section class="mb-14">
				<h2 class="mb-6 border-b border-gray-200 pb-2 text-2xl font-semibold sm:text-3xl">
					{year}
				</h2>
				<ul class="m-0 list-none p-0">
					{#each postsInYear as post (post.slug)}
						<li class="mb-4">
							<a
								href={`/blog/${post.slug}`}
								class="group flex flex-col items-start justify-between transition-colors duration-200 sm:flex-row sm:items-baseline"
							>
								<span
									class="mr-0 mb-1 min-w-[70px] text-base tabular-nums sm:mr-8 sm:mb-0 sm:min-w-[90px]"
								>
									{safeFormat(post.date, 'MMM D')}
								</span>
								<span class="flex-grow text-lg font-medium group-hover:underline sm:text-xl">
									{post.title}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</div>
