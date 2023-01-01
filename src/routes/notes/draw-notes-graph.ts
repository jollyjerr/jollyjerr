import type { NotesGraph } from '$lib/notes/types';
import * as d3 from 'd3';
import colors from '$lib/colors.module.css';

type SimulationNode = d3.SimulationNodeDatum & NotesGraph['nodes'][0];
type NodeClickCallback<TReturn = void> = (node: SimulationNode) => TReturn;
type NodeClickEvent = { layerX: number; layerY: number };

let ZOOM_TRANSFORM = d3.zoomIdentity;

export function drawNotesGraph(
	notes: NotesGraph,
	canvasElement: HTMLCanvasElement,
	onNodeClick?: NodeClickCallback
) {
	const resources = initialize_graph_resources(notes, canvasElement);
	const graphSelections = create_graph_selections(resources);
	const simulation = create_simulation(resources, graphSelections);

	simulation.on('tick', () => handle_tick(resources, graphSelections));
	resources.canvas.on('click', (event: NodeClickEvent) =>
		handle_click(event, resources, graphSelections, onNodeClick)
	);
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

	const deviceScale = window.devicePixelRatio;

	const canvas = d3
		.select(canvasElement)
		.attr('width', width * deviceScale)
		.attr('height', height * deviceScale);
	const canvasContext = canvas.node()?.getContext('2d');
	canvasContext?.scale(deviceScale, deviceScale);

	const clickMapCanvas = d3.create('canvas').attr('width', width).attr('height', height);
	const clickMapContext = clickMapCanvas.node()?.getContext('2d');

	const nodeColors = generate_unique_node_colors(nodes.length);

	return {
		nodes,
		links,
		width,
		height,
		root,
		canvas,
		canvasContext,
		clickMapCanvas,
		clickMapContext,
		nodeColors
	};
}

type GraphResources = ReturnType<typeof initialize_graph_resources>;

function create_simulation(resources: GraphResources, graphSelections: GraphSelections) {
	const { nodes, width, height, links, canvas } = resources;

	canvas.call(
		d3
			.zoom<HTMLCanvasElement, unknown>()
			.extent([
				[0, 0],
				[width, height]
			])
			.scaleExtent([0.4, 16])
			.on('zoom', (e: { transform: d3.ZoomTransform }) => {
				ZOOM_TRANSFORM = e.transform;
				handle_tick(resources, graphSelections);
			})
	);

	return d3
		.forceSimulation(nodes)
		.force('charge', d3.forceManyBody().strength(-400))
		.force('center', d3.forceCenter(width / 2, height / 2).strength(0.28))
		.force(
			'link',
			d3
				.forceLink(links)
				.id((l) => (l as SimulationNode).id)
				.strength(0.06)
		);
}

function create_graph_selections({ root, links, nodes }: GraphResources) {
	const linkObjects = root.append('g').selectAll('line').data(links).join('line');

	const nodeObjects = root
		.append('g')
		.selectAll('circle')
		.data(nodes)
		.join('circle')
		.attr('r', (n) => 4 + (n.linkCount || 1) ** 0.95)
		.attr('title', (n) => n.name);

	return { linkObjects, nodeObjects };
}

type GraphSelections = ReturnType<typeof create_graph_selections>;

const node_title_padding = 12;
function handle_tick({ canvasContext, canvas }: GraphResources, selections: GraphSelections) {
	if (!canvasContext) return;

	selections.nodeObjects.attr('cx', (n) => n.x || 0).attr('cy', (n) => n.y || 0);
	selections.linkObjects
		.attr('x1', (l) => l.source.x || 0)
		.attr('y1', (l) => l.source.y || 0)
		.attr('x2', (l) => l.target.x || 0)
		.attr('y2', (l) => l.target.y || 0);

	draw_canvas({ canvas, canvasContext, selections });
}

function handle_click(
	{ layerX, layerY }: NodeClickEvent,
	{ clickMapCanvas, clickMapContext, nodeColors }: GraphResources,
	selections: GraphSelections,
	onNodeClick?: NodeClickCallback
) {
	if (!clickMapContext || typeof onNodeClick !== 'function') return;

	const colorToNode = draw_canvas({
		canvas: clickMapCanvas,
		canvasContext: clickMapContext,
		selections: selections,
		nodeColor: nodeColors
	});
	const node = colorToNode[
		rgb_array_to_style(Array.from(clickMapContext.getImageData(layerX, layerY, 1, 1).data))
	] as SimulationNode | undefined;

	if (node) {
		onNodeClick(node);
	}
}

type DrawCanvasArgs = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- d3 types here are silly
	canvas: d3.Selection<HTMLCanvasElement, any, any, any>;
	canvasContext: CanvasRenderingContext2D;
	selections: GraphSelections;
	nodeColor?: string | string[];
};
function draw_canvas({
	canvas,
	canvasContext,
	selections: { nodeObjects, linkObjects },
	nodeColor = colors.primary4
}: DrawCanvasArgs) {
	canvasContext.save();

	canvasContext.clearRect(0, 0, Number(canvas.attr('width')), Number(canvas.attr('height')));
	canvasContext.translate(ZOOM_TRANSFORM.x, ZOOM_TRANSFORM.y);
	canvasContext.scale(ZOOM_TRANSFORM.k, ZOOM_TRANSFORM.k);

	linkObjects.each(function (link) {
		if (link.source.x && link.source.y && link.target.x && link.target.y) {
			canvasContext.beginPath();
			canvasContext.strokeStyle = colors.primary6;

			canvasContext.moveTo(link.source.x, link.source.y);
			canvasContext.lineTo(link.target.x, link.target.y);

			canvasContext.stroke();
			canvasContext.closePath();
		}
	});

	const mapColorToNode = !(typeof nodeColor === 'string');
	const nodeColorMap: Record<string, SimulationNode> = {};
	nodeObjects.each(function (n, i) {
		if (n.x && n.y) {
			const radius = Number(d3.select(this).attr('r'));
			const nodeFill = typeof nodeColor === 'string' ? nodeColor : nodeColor[i];

			canvasContext.beginPath();
			canvasContext.fillStyle = nodeFill;
			canvasContext.arc(n.x, n.y, radius, 0, Math.PI * 2);
			canvasContext.fill();
			canvasContext.closePath();

			const name = n.name.split('.md')[0];

			canvasContext.beginPath();
			canvasContext.fillStyle = colors.primary1;
			canvasContext.fillText(
				name,
				n.x - canvasContext.measureText(name).width / 2,
				n.y + radius + node_title_padding
			);
			canvasContext.fill();
			canvasContext.closePath();

			if (mapColorToNode) {
				nodeColorMap[nodeFill] = n;
			}
		}
	});

	canvasContext.restore();

	return nodeColorMap;
}

function generate_unique_node_colors(nodeCount: number) {
	// https://stackoverflow.com/questions/15804149/rgb-color-permutation/15804183#15804183
	return [...Array(nodeCount).keys()].map((i) =>
		rgb_array_to_style([(i + 1) & 0xff, ((i + 1) & 0xff00) >> 8, ((i + 1) & 0xff0000) >> 16])
	);
}

function rgb_array_to_style(rgbArray: number[]) {
	return `rgb(${rgbArray.slice(0, 3).join(',')})`;
}
