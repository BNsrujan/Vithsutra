import { Product, ProductCategory } from '../entities/product';

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByCategory(categoryId: string): Promise<Product[]>;
  create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
  update(id: string, product: Partial<Product>): Promise<Product>;
  delete(id: string): Promise<void>;
}

export interface ProductCategoryRepository {
  findAll(): Promise<ProductCategory[]>;
  findById(id: string): Promise<ProductCategory | null>;
  findBySlug(slug: string): Promise<ProductCategory | null>;
}

export class ProductUseCases {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: ProductCategoryRepository
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async getFeaturedProducts(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products.filter(product => product.featured);
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async getRelatedProducts(productId: string, limit: number = 3): Promise<Product[]> {
    const product = await this.productRepository.findById(productId);
    if (!product) {
      return [];
    }
    
    // Get products from the same category, excluding the current product
    const relatedProducts = await this.productRepository.findByCategory(product.categoryId);
    return relatedProducts
      .filter(p => p.id !== productId)
      .slice(0, limit);
  }

  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    const category = await this.categoryRepository.findBySlug(categorySlug);
    if (!category) {
      throw new Error('Category not found');
    }
    return this.productRepository.findByCategory(category.id);
  }

  async getAllCategories(): Promise<ProductCategory[]> {
    return this.categoryRepository.findAll();
  }

  async getCategoryBySlug(slug: string): Promise<ProductCategory | null> {
    return this.categoryRepository.findBySlug(slug);
  }
}