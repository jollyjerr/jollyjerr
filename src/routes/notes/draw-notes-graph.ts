import type { NotesGraph } from '$lib/notes/types';
import * as d3 from 'd3';

type SimulationNode = d3.SimulationNodeDatum & NotesGraph['nodes'][0];

export function drawNotesGraph(notes: NotesGraph, canvasElement: HTMLCanvasElement) {
	const resources = initialize_graph_resources(notes, canvasElement);
	const simulation = create_simulation(resources);
	const graphSelections = create_graph_selections(resources);

	// handle user pan and zoom
	let zoomTransformState = d3.zoomIdentity;
	resources.canvas.call(
		d3.zoom<HTMLCanvasElement, unknown>().scaleExtent([0.8, 16]).on('zoom', handle_zoom)
	);
	function handle_zoom(e: { transform: d3.ZoomTransform }) {
		zoomTransformState = e.transform;
		handle_tick(resources, graphSelections, zoomTransformState);
	}

	simulation.on('tick', () => handle_tick(resources, graphSelections, zoomTransformState));
}

const empty_node_datum = {
	index: undefined,
	x: undefined,
	y: undefined,
	vx: undefined,
	vy: undefined,
	fx: undefined,
	fy: undefined
};

function initialize_graph_resources(notes: NotesGraph, canvasElement: HTMLCanvasElement) {
	const nodes = d3.map(notes.nodes, (n) => ({
		...n,
		...empty_node_datum
	})) as SimulationNode[];
	const links = d3.map(notes.links, (l) => ({
		...l,
		...empty_node_datum
	})) as unknown as (d3.SimulationNodeDatum & {
		source: SimulationNode;
		target: SimulationNode;
	})[];

	const width = window.innerWidth;
	const height = window.innerHeight;

	const root = d3.create('svg');

	const canvas = d3.select(canvasElement).attr('width', width).attr('height', height);
	const canvasContext = canvas.node()?.getContext('2d');

	return {
		nodes,
		links,
		width,
		height,
		root,
		canvas,
		canvasContext
	};
}

type GraphResources = ReturnType<typeof initialize_graph_resources>;

function create_simulation({ nodes, width, height, links }: GraphResources) {
	return d3
		.forceSimulation(nodes)
		.force('charge', d3.forceManyBody().strength(-200))
		.force('center', d3.forceCenter(width / 2, height / 2).strength(1.08))
		.force(
			'link',
			d3
				.forceLink(links)
				.id((l) => (l as SimulationNode).id)
				.strength(0.04)
		);
}

function create_graph_selections({ root, links, nodes }: GraphResources) {
	const linkObjects = root.append('g').selectAll('line').data(links).join('line');

	const nodeObjects = root
		.append('g')
		.selectAll('circle')
		.data(nodes)
		.join('circle')
		.attr('r', (n) => Math.max(n.linkCount * 4, 8))
		.attr('title', (n) => n.name);

	return { linkObjects, nodeObjects };
}

type GraphSelections = ReturnType<typeof create_graph_selections>;

function handle_tick(
	{ canvasContext, canvas }: GraphResources,
	{ nodeObjects, linkObjects }: GraphSelections,
	transform: d3.ZoomTransform
) {
	nodeObjects.attr('cx', (n) => n.x || 0).attr('cy', (n) => n.y || 0);
	linkObjects
		.attr('x1', (l) => l.source.x || 0)
		.attr('y1', (l) => l.source.y || 0)
		.attr('x2', (l) => l.target.x || 0)
		.attr('y2', (l) => l.target.y || 0);

	if (!canvasContext) return;

	canvasContext.save();
	canvasContext.clearRect(0, 0, Number(canvas.attr('width')), Number(canvas.attr('height')));
	canvasContext.translate(transform.x, transform.y);
	canvasContext.scale(transform.k, transform.k);

	linkObjects.each(function (link) {
		if (link.source.x && link.source.y && link.target.x && link.target.y) {
			canvasContext.beginPath();
			canvasContext.strokeStyle = '#01586a';

			canvasContext.moveTo(link.source.x, link.source.y);
			canvasContext.lineTo(link.target.x, link.target.y);

			canvasContext.stroke();
			canvasContext.closePath();
		}
	});

	nodeObjects.each(function (n) {
		const node = d3.select(this);

		canvasContext.beginPath();

		canvasContext.fillStyle = '#01b0d3';
		canvasContext.arc(
			Number(node.attr('cx')),
			Number(node.attr('cy')),
			Number(node.attr('r')),
			0,
			Math.PI * 2
		);

		if (n.x && n.y) {
			canvasContext.fill();
			canvasContext.closePath();

			canvasContext.beginPath();
			canvasContext.fillStyle = '#fff';
			canvasContext.fillText(n.name.split('.md')[0], n.x, n.y);
			canvasContext.fill();
			canvasContext.closePath();
		}
	});

	canvasContext.restore();
}
