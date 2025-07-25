// Core Entity: Product
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  features: string[];
  specifications: Record<string, string>;
  price?: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}