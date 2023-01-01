export type NotesGraph = {
	nodes: {
		id: string;
		name: string;
        slug: string;
		linkCount: number;
	}[];
	links: {
		source: string;
		target: string;
	}[];
};
