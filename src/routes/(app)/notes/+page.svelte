<script lang="ts">
	import { Graph } from '@notree/ui';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import { goto } from '$app/navigation';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { pathToNotes } from '$lib/notes/constants';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let notes = data.notes;
	let nodes = notes.nodes;
	let canvas: HTMLCanvasElement = $state() as HTMLCanvasElement;

	onMount(() => {
		const graph = new Graph({
			data: notes,
			styles: {
				// todo: notree updates to handle theme switching
				nodeColor: '#4A90E2',
				linkColor: '#888888',
				titleColor: '#333333',
				activeLinkColor: '#FF6347',
				activeNodeColor: '#7ED321',
				nodeScaleFactor: 0.67
			},
			simulationConfig: {
				chargeStrength: -175,
				randomizeStartingPoints: false
			},
			canvas
		});

		graph.onClick((node) => {
			goto(`/notes/${getNodeSlug(node.id)}`);
		});

		graph.draw();
	});

	function getNodeSlug(id: string) {
		return id.split(`${pathToNotes}/`)[1];
	}
</script>

<Head title="Notes" />
<canvas bind:this={canvas} class="absolute top-0 left-0 h-full w-full"></canvas>
<Navbar selected="notes" title="Notes" />

<!-- hack to get prerendering to work - TODO: do this another way -->
{#each Object.values(nodes) as note (note.id)}
	<a href={`/notes/${getNodeSlug(note.id)}`} class="hidden">{note.title}</a>
{/each}
