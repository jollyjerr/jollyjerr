<script lang="ts">
	import type { PageData } from './$types';
	import PostPage from './post.svelte';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	export let data: PageData;
	export const { post } = data;
</script>

<Head title={post.metadata.title} description={post.metadata.subtitle} />
<Navbar selected="blog" />
<PostPage {post} />
