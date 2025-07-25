import { Product, ProductCategory } from '../entities/Product';

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

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findById(id);
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