import { useState, useEffect, useCallback } from 'react';
import { Industry, CaseStudy } from '../../core/entities/Industry';
import { getIndustryUseCases } from '../../infrastructure/di/Container';

export const useIndustries = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const industryUseCases = getIndustryUseCases();

  const fetchIndustries = useCallback(async () => {
    try {
      setLoading(true);
      const data = await industryUseCases.getAllIndustries();
      setIndustries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch industries');
    } finally {
      setLoading(false);
    }
  }, [industryUseCases]);

  useEffect(() => {
    fetchIndustries();
  }, [fetchIndustries]);

  return { industries, loading, error };
};

export const useIndustry = (slug: string) => {
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const industryUseCases = getIndustryUseCases();

  const fetchIndustry = useCallback(async () => {
    try {
      setLoading(true);
      const data = await industryUseCases.getIndustryBySlug(slug);
      setIndustry(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch industry');
    } finally {
      setLoading(false);
    }
  }, [industryUseCases, slug]);

  useEffect(() => {
    if (slug) {
      fetchIndustry();
    }
  }, [slug, fetchIndustry]);

  return { industry, loading, error };
};

export const useCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const industryUseCases = getIndustryUseCases();

  const fetchCaseStudies = useCallback(async () => {
    try {
      setLoading(true);
      const data = await industryUseCases.getAllCaseStudies();
      setCaseStudies(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch case studies');
    } finally {
      setLoading(false);
    }
  }, [industryUseCases]);

  useEffect(() => {
    fetchCaseStudies();
  }, [fetchCaseStudies]);

  return { caseStudies, loading, error };
};

export const useCaseStudiesByIndustry = (industrySlug: string) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const industryUseCases = getIndustryUseCases();

  const fetchCaseStudies = useCallback(async () => {
    try {
      setLoading(true);
      const data = await industryUseCases.getCaseStudiesByIndustry(industrySlug);
      setCaseStudies(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch case studies');
    } finally {
      setLoading(false);
    }
  }, [industryUseCases, industrySlug]);

  useEffect(() => {
    if (industrySlug) {
      fetchCaseStudies();
    }
  }, [industrySlug, fetchCaseStudies]);

  return { caseStudies, loading, error };
};