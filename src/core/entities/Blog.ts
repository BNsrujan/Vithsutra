// Core Entity: Blog
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