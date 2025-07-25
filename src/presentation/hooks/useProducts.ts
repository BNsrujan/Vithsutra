import { useState, useEffect, useCallback } from 'react';
import { Product, ProductCategory } from '../../core/entities/Product';
import { getProductUseCases } from '../../infrastructure/di/Container';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productUseCases = getProductUseCases();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productUseCases.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, [productUseCases]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productUseCases = getProductUseCases();

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productUseCases.getProductById(id);
      setProduct(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
    } finally {
      setLoading(false);
    }
  }, [productUseCases, id]);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id, fetchProduct]);

  return { product, loading, error };
};

export const useProductCategories = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productUseCases = getProductUseCases();

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productUseCases.getAllCategories();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  }, [fetchCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error };
};

export const useProductsByCategory = (categorySlug: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productUseCases = getProductUseCases();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [productsData, categoryData] = await Promise.all([
        productUseCases.getProductsByCategory(categorySlug),
        productUseCases.getCategoryBySlug(categorySlug)
      ]);
      setProducts(productsData);
      setCategory(categoryData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [productUseCases, categorySlug]);

  useEffect(() => {
    if (categorySlug) {
      fetchData();
    }
  }, [categorySlug, fetchData]);

  return { products, category, loading, error };
};