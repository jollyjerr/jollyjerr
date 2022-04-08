<script context="module" lang="ts">
	import type { Post } from '$lib/blog/shared/types';

	/** @type {import('./[slug]').Load} */
	export async function load({ params: { slug }, fetch }) {
		const post: Post = await fetch(`/blog/${slug}.json`).then((response) => response.json());
		return {
			props: {
				post
			}
		};
	}
</script>

<script lang="ts">
	import PostPage from '$lib/blog/client/pages/post/post.svelte';

	export let post: Post;
</script>

<PostPage {post} />
