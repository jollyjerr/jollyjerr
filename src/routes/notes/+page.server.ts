import type { PageServerLoad } from './$types';
import fs from 'fs';
import readline from 'node:readline';

const path_to_notes = 'knowledge';

export const load: PageServerLoad = async () => {
	const graph = await build_graph(path_to_notes);
	return {
		notes: graph
	};
};

const hidden_files = /^\./;
const link_content = /\]\((.*?)\)/g;

type NotesGraph = {
	nodes: {
		id: string;
		name: string;
		linkCount: number;
	}[];
	links: {
		source: string;
		target: string;
	}[];
};

async function build_graph(
	path: string,
	graph: NotesGraph = { nodes: [], links: [] }
): Promise<NotesGraph> {
	const dir = await fs.promises.opendir(path);
	for await (const dirent of dir) {
		if (hidden_files.test(dirent.name)) continue;

		const direntPath = `${path}/${dirent.name}`;
		if (dirent.isDirectory()) await build_graph(direntPath, graph);
		if (dirent.isFile()) {
			let linkCount = 0;

			const fileStream = fs.createReadStream(direntPath);
			const lines = readline.createInterface({ input: fileStream });
			for await (const line of lines) {
				const links = line.match(link_content);
				if (links) {
					for (const link of links) {
						const path = link_content.exec(link)?.at(1);
						if (path && !path.includes('://') && path.includes('.md')) {
							linkCount++;

							const linkPath = path.split('/');
							const filePath = direntPath.split('/');

							filePath.pop();

							for (const direction of linkPath) {
								switch (direction) {
									case '.':
										break;
									case '..':
										filePath.pop();
										break;
									default:
										filePath.push(direction);
								}
							}

							graph.links.push({
								source: direntPath,
								target: filePath.join('/')
							});
						}
					}
				}
			}

			graph.nodes.push({
				id: direntPath,
				name: dirent.name,
				linkCount
			});
		}
	}

	return graph;
}
