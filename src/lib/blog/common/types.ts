export interface Post {
	html: string;
	metadata: PostMetadata;
}

export interface PostMetadata {
	title: string;
	subtitle: string;
	date: string;
	tags: string[];
}
