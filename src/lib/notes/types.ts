export type NotesGraph = {
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
