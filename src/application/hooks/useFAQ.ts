import { useState, useEffect, useCallback } from 'react';
import { FAQ, FAQCategory } from '../../core/entities/FAQ';
import { getFAQUseCases } from '../../infrastructure/di/Container';

export const useFAQs = () => {
  const [faqs, setFAQs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const faqUseCases = getFAQUseCases();

  const fetchFAQs = useCallback(async () => {
    try {
      setLoading(true);
      const data = await faqUseCases.getAllFAQs();
      setFAQs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch FAQs');
    } finally {
      setLoading(false);
    }
  }, [faqUseCases]);

  useEffect(() => {
    fetchFAQs();
  }, [fetchFAQs]);

  return { faqs, loading, error };
};

export const useFAQCategories = () => {
  const [categories, setCategories] = useState<FAQCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const faqUseCases = getFAQUseCases();

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const data = await faqUseCases.getAllCategoriesWithFAQs();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch FAQ categories');
    } finally {
      setLoading(false);
    }
  }, [faqUseCases]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return { categories, loading, error };
};

export const useFAQSearch = () => {
  const [searchResults, setSearchResults] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const faqUseCases = getFAQUseCases();

  const searchFAQs = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const results = await faqUseCases.searchFAQs(query);
      setSearchResults(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search FAQs');
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchResults([]);
    setError(null);
  };

  return { searchResults, searchFAQs, clearSearch, loading, error };
};