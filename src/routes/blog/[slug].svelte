<script context="module" lang="ts">
	import type { Post } from '$lib/blog/common/types';

	/** @type {import('./[slug]').Load} */
	export async function load({ params: { slug }, fetch }) {
		const response = await fetch(`/blog/${slug}.json`);
		return {
			status: response.status,
			props: {
				post: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	import PostPage from '$lib/blog/client/pages/post/post.svelte';

	export let post: Post;
</script>

<PostPage {post} />
