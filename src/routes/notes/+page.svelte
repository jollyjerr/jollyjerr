<script lang="ts">
	import Head from '$lib/seo/components/head.svelte';
	import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	export let data: PageData;
	let notes = data.notes;

	onMount(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		const emptyNodeDatum = {
			index: undefined,
			x: undefined,
			y: undefined,
			vx: undefined,
			vy: undefined,
			fx: undefined,
			fy: undefined
		};
		const nodes = d3.map(notes.nodes, (n) => ({ ...n, ...emptyNodeDatum }));
		const links = d3.map(notes.links, (l) => ({ ...l, ...emptyNodeDatum }));

		const container = d3.select('main').append('div');
		container.attr('style', 'position: absolute; top: 0; width: 100%; height: 100%; z-index: -1;');

		const root = container.insert('svg').attr('viewBox', [0, 0, width, height]);
		root.attr('style', 'width: 100%; height: 100%; background-color: #001215;');

		d3.forceSimulation(nodes)
			.force('charge', d3.forceManyBody().strength(-200))
			.force('center', d3.forceCenter(width / 2, height / 2).strength(1.08))
			.force(
				'link',
				d3
					.forceLink(links)
					.id((l) => (l as { id: string }).id)
					.strength(0.04)
			)
			.on('tick', handle_tick);

		const nodeObjects = root
			.append('g')
			.attr('fill', '#01b0d3')
			.attr('stroke', '#018da9')
			.selectAll('circle')
			.data(nodes)
			.join('circle')
			.attr('r', (n) => Math.max(n.linkCount * 4, 8))
			.attr('title', (n) => n.name);

		const linkObjects = root
			.append('g')
			.attr('stroke', '#fff')
			.attr('stroke-width', 1.5)
			.selectAll('line')
			.data(links)
			.join('line');

		function handle_tick() {
			nodeObjects.attr('cx', (n) => n.x || 0).attr('cy', (n) => n.y || 0);
			linkObjects
				.attr('x1', (l) => l.source.x)
				.attr('y1', (l) => l.source.y)
				.attr('x2', (l) => l.target.x)
				.attr('y2', (l) => l.target.y);
		}
	});
</script>

<Head title="Notes" />
<Navbar selected="notes" title="Notes" />
