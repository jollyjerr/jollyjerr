+++
+++

# Graph

A collection of nodes with some amount of directed or non-directed connections.

cycle: three or more nodes linked together in a loop

connected: every node can reach every other node

directed: one way connections between nodes

weight: the cost of a link between nodes

dag: directed acyclic graph

node === vertex

## Representation

Normally represented with:

### Adjacency List

Stored in a 2d array. An index is a node and the array at that index is a list of edges.

```ts
[
	[
		{ to: 3, weight: 10 },
		{ to: 5, weight: 4 }
	],
	[{ to: 1, weight: 1 }]
];
```

### Adjacency Matrix (O(V^2))

Like an adjacency list but each subarray shows the weight of connections to all other nodes. No
connection is represented with a 0.

```ts
[
	[0, 0, 10, 0, 4],
	[0, 1, 0, 0, 0]
];
```

## Search

All [trees](./trees.md) are graphs, so just use DFS or BFS.

BFS on adjacency matrix:

```ts
function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | undefined {
	const seen = new Array(graph.length).fill(false);
	const prev = new Array(graph.length).fill(-1);
	const queue: number[] = [source];

	seen[source] = true;

	do {
		const curr = queue.shift() as number;
		if (curr === needle) {
			break;
		}

		const adjs = graph[curr];
		for (let i = 0; i < adjs.length; i++) {
			if (adjs[i] === 0) {
				continue;
			}

			if (seen[i]) {
				continue;
			}

			seen[i] = true;
			prev[i] = curr;
			queue.push(i);
		}
	} while (queue.length);

	let curr = needle;
	const out: number[] = [];
	while (prev[curr] !== -1) {
		out.push(curr);
		curr = prev[curr];
	}

	return out.length ? [source].concat(out.reverse()) : undefined;
}
```

DFS on adjacency list:

```ts
function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | undefined {
	const seen: boolean[] = new Array(graph.lenght).fill(false);
	const path: number[] = [];

	walk(graph, source, needle, seen, path);

	return path.length ? path : undefined;
}
function walk(
	graph: WeightedAdjacencyList,
	curr: number,
	needle: number,
	seen: boolean[],
	path: number[]
): boolean {
	if (seen[curr]) {
		return false;
	}

	// pre
	seen[curr] = true;
	path.push(curr);
	if (curr === needle) {
		return true;
	}

	const adjs = graph[curr];
	for (let i = 0; i < adjs.length; i++) {
		const edge = adjs[i];

		if (walk(graph, edge.to, needle, seen, path)) {
			return true;
		}
	}

	// post
	path.pop();

	return false;
}
```

## Dijkstra's shortest path

The most ultimate classic graph problem is finding the shortest path between nodes.
Dijkstra got that on lock with a greedy algorithm.

Make sure to use an adjacency list to maintain O(V^2 + E) in naive implementation or O(logv(v+e))
if you use a min heap rather than a seen array to keep track of the smallest unseen next step.

https://github.com/jollyjerr/algorithms-specialization-notebook/blob/main/course2/week2/dijkstra/dijkstra.go
