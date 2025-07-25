import { useState, useEffect, useCallback } from 'react';
import { ContactForm, ContactInfo } from '../../core/entities/Contact';
import { getContactUseCases } from '../../infrastructure/di/Container';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactUseCases = getContactUseCases();

  const submitForm = async (formData: Omit<ContactForm, 'id' | 'createdAt' | 'status'>) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await contactUseCases.submitContactForm(formData);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setError(null);
  };

  return {
    submitForm,
    resetForm,
    loading,
    success,
    error
  };
};

export const useContactInfo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const contactUseCases = getContactUseCases();

  const fetchContactInfo = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contactUseCases.getContactInfo();
      setContactInfo(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch contact info');
    } finally {
      setLoading(false);
    }
  }, [contactUseCases]);

  // Fetch on mount
  useEffect(() => {
    fetchContactInfo();
  }, [fetchContactInfo]);

  return { contactInfo, loading, error, refetch: fetchContactInfo };
};