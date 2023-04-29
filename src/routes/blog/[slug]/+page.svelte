<script lang="ts">
	import { onMount } from 'svelte';
	import highlight from 'highlight.js';
	import type { PageData } from './$types';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import MarkdownPage from '$lib/markdown/markdown-page.svelte';

	onMount(() => {
		highlight.highlightAll();
	});

	export let data: PageData;
	const { post } = data;
</script>

<Head title={post.metadata.title} description={post.metadata.subtitle} />
<Navbar selected="blog" />
<MarkdownPage title={post.metadata.title} image={post.metadata.image} html={post.html} />
