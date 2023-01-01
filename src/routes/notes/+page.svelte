<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import { goto } from '$app/navigation';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { drawNotesGraph } from './draw-notes-graph';

	export let data: PageData;
	let notes = data.notes;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		drawNotesGraph(notes, canvas, (note) => {
			goto(`/notes/${note.slug}`);
		});
	});
</script>

<Head title="Notes" />
<canvas bind:this={canvas} class="w-full h-full absolute top-0 left-0" />
<Navbar selected="notes" title="Notes" />
