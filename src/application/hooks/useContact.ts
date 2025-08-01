import { useState } from "react";
import { ContactForm } from "@/core/entities/contact";
import { getContactUseCases } from "@/infrastructure/di/Container";

export default function useContact() {
  const [formData, setFormData] = useState<Omit<ContactForm, 'id' | 'createdAt' | 'status'>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const contactUseCases = getContactUseCases();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const contact = await contactUseCases.submitContactForm(formData);
      
      // Reset form on success
      setFormData({ name: "", email: "", phone: "", message: "" });
      return { success: true, data: contact };
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContactInfo = async () => {
    try {
      return await contactUseCases.getContactInfo();
    } catch (err) {
      console.error('Failed to get contact info:', err);
      return null;
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    handleChange,
    handleSubmit,
    getContactInfo,
    setFormData
  };
}