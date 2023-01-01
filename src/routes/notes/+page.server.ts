import type { PageServerLoad } from './$types';
import fs from 'fs';
import readline from 'node:readline';
import type { NotesGraph } from '$lib/notes/types';
import { pathToNotes } from '$lib/notes/constants';

const md_file = '.md';

export const load: PageServerLoad = async () => {
	const graph = await build_graph(pathToNotes);
	return {
		notes: graph
	};
};

const hidden_files = /^\./;
const link_content = /\]\((.*?)\)/g;

async function build_graph(
	path: string,
	graph: NotesGraph = { nodes: [], links: [] }
): Promise<NotesGraph> {
	const dir = await fs.promises.opendir(path);

	for await (const dirent of dir) {
		await add_dirent_to_graph(path, dirent, graph);
	}

	return graph;
}

async function add_dirent_to_graph(path: string, dirent: fs.Dirent, graph: NotesGraph) {
	if (hidden_files.test(dirent.name)) return;

	const direntPath = `${path}/${dirent.name}`;

	if (dirent.isDirectory()) {
		await build_graph(direntPath, graph);
	} else if (dirent.isFile()) {
		const linkCount = await add_links_to_graph(direntPath, graph);
		graph.nodes.push({
			id: direntPath,
			name: dirent.name,
			slug: direntPath.split(`${pathToNotes}/`)[1],
			linkCount
		});
	}
}

async function add_links_to_graph(filePath: string, graph: NotesGraph): Promise<number> {
	let linkCount = 0;

	const fileStream = fs.createReadStream(filePath);
	const lines = readline.createInterface({ input: fileStream });

	for await (const line of lines) {
		const links = line.match(link_content) || [];

		for (const link of links) {
			const path = link_content.exec(link)?.at(1);

			if (is_valid_link_path(path)) {
				linkCount++;

				const linkDirections = path.split('/');
				const pathToTargetFile = filePath.split('/');

				pathToTargetFile.pop();

				for (const direction of linkDirections) {
					switch (direction) {
						case '.':
							break;
						case '..':
							pathToTargetFile.pop();
							break;
						default:
							pathToTargetFile.push(direction);
					}
				}

				graph.links.push({
					source: filePath,
					target: pathToTargetFile.join('/')
				});
			}
		}
	}

	return linkCount;
}

function is_valid_link_path(path: string | undefined): path is string {
	return !!(path && !path.includes('://') && path.includes(md_file));
}
