<script lang="ts">
	import type { PageData } from './$types';
	import PostPage from './post.svelte';
	import Head from '$lib/seo/components/head.svelte';
	import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

	export let data: PageData;
	export const { post } = data;
</script>

<Head title={post.metadata.title} description={post.metadata.subtitle} />
<Navbar selected="blog" />
<PostPage {post} />
