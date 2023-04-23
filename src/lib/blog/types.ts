export interface Post {
	html: string;
	metadata: PostMetadata;
}

export interface PostMetadata {
	title: string;
	subtitle: string;
	date: string;
	tags: string[];
	/** only 1 featured post allowed */
	featured: string;
	image: string;
	slug: string;
	/** 'true' || 'false' */
	draft?: string;
}
