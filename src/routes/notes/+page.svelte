<script lang="ts">
	import { MindGraph } from '@mindgraph/draw';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import { goto } from '$app/navigation';
	import colors from '$lib/colors.module.css';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { pathToNotes } from '$lib/notes/constants';

	export let data: PageData;
	let notes = data.notes;
	let nodes = notes.nodes;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		const mg = new MindGraph({
			data: notes,
			styles: {
				nodeColor: colors.primary4,
				linkColor: colors.primary6,
				titleColor: colors.primary1,
				activeLinkColor: colors.primary5,
				activeNodeColor: colors.primary3
			},
			simulationConfig: {
				chargeStrength: -175,
				randomizeStartingPoints: false
			},
			canvas
		});

		mg.onClick((node) => {
			goto(`/notes/${getNodeSlug(node.id)}`);
		});

		mg.draw();
	});

	function getNodeSlug(id: string) {
		return id.split(`${pathToNotes}/`)[1];
	}
</script>

<Head title="Notes" />
<canvas bind:this={canvas} class="absolute left-0 top-0 h-full w-full" />
<Navbar selected="notes" title="Notes" />

<!-- hack to get prerendering to work - TODO: do this another way -->
{#each nodes as note}
	<a href={`/notes/${getNodeSlug(note.id)}`} class="hidden">{note.name}</a>
{/each}
