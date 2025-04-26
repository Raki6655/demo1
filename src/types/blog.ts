export interface Author {
	name: string;
	image?: string;
	avatar?: string;
	role: string;
}

export interface BlogPost {
	title: string;
	slug: string;
	excerpt: string;
	image: string;
	categories: string[];
	author: Author;
	date: string;
	content: string; // Markdown content
}
