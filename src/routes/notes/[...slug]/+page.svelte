<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import MarkdownPage from '$lib/markdown/markdown-page.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	const { note } = data;

	onMount(() => {
		// hack for internal relative routes
		// https://kit.svelte.dev/docs/link-options#data-sveltekit-reload
		document.querySelectorAll('a').forEach((n) => n.setAttribute('rel', 'external'));
	});
</script>

<Head title={note.title} description={`Learn about ${note.title}`} />
<Navbar selected="notes" title="Notes" />
<MarkdownPage
	title={note.title}
	image={'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80'}
	html={note.html}
/>
