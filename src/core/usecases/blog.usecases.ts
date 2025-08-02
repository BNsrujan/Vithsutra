import { BlogPost, BlogCategory } from '../entities/blog';

export interface BlogRepository {
  findAllPosts(): Promise<BlogPost[]>;
  findPostById(id: string): Promise<BlogPost | null>;
  findPostBySlug(slug: string): Promise<BlogPost | null>;
  findPostsByCategory(categoryId: string): Promise<BlogPost[]>;
  findPostsByTag(tag: string): Promise<BlogPost[]>;
}

export interface BlogCategoryRepository {
  findAll(): Promise<BlogCategory[]>;
  findById(id: string): Promise<BlogCategory | null>;
  findBySlug(slug: string): Promise<BlogCategory | null>;
}

export class BlogUseCases {
  constructor(
    private blogRepository: BlogRepository,
    private categoryRepository: BlogCategoryRepository
  ) {}

  async getAllPublishedPosts(): Promise<BlogPost[]> {
    const posts = await this.blogRepository.findAllPosts();
    return posts
      .filter(post => post.isPublished)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const post = await this.blogRepository.findPostBySlug(slug);
    return post?.isPublished ? post : null;
  }

  async getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
    const category = await this.categoryRepository.findBySlug(categorySlug);
    if (!category) {
      throw new Error('Category not found');
    }

    const posts = await this.blogRepository.findPostsByCategory(category.id);
    return posts
      .filter(post => post.isPublished)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    const posts = await this.blogRepository.findPostsByTag(tag);
    return posts
      .filter(post => post.isPublished)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getAllCategories(): Promise<BlogCategory[]> {
    return this.categoryRepository.findAll();
  }

  async getCategoryBySlug(slug: string): Promise<BlogCategory | null> {
    return this.categoryRepository.findBySlug(slug);
  }

  async getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
    const posts = await this.getAllPublishedPosts();
    return posts.slice(0, limit);
  }

  async getRelatedPosts(postId: string, limit: number = 3): Promise<BlogPost[]> {
    const currentPost = await this.blogRepository.findPostById(postId);
    if (!currentPost) return [];

    const allPosts = await this.getAllPublishedPosts();
    
    // Find posts with similar tags or same category
    const relatedPosts = allPosts
      .filter(post => post.id !== postId)
      .map(post => {
        let score = 0;
        
        // Same category gets higher score
        if (post.category === currentPost.category) {
          score += 3;
        }
        
        // Common tags get points
        const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
        score += commonTags.length;
        
        return { post, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.post);

    return relatedPosts;
  }
}