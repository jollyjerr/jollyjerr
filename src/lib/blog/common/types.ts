export interface Post {
	html: string;
	metadata: PostMetadata;
}

export interface PostMetadata {
	title: string;
	subtitle: string;
	date: string;
	tags: string[];
	/** Can only have 1 featured post */
	featured: boolean;
	image: string;
}
