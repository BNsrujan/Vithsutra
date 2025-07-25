// Core Entity: Blog

// javaScript does not have a buit-in interface type like java or C++
// An interface in TypeScript is a syntactical contract that defines the expected structure of an object.
// It provides a way to describe the shape of objects, including their properties and methods, without implementing any functionality.

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  imageUrl: string;
  tags: string[];
  category: string;
  publishedAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  readTime: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}