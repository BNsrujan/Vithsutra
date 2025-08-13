'use client';

import { useState } from 'react';
import { config, isDevelopment } from '@/infrastructure/config/environment';
import { apiClient } from '@/shared/utils/api';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactFormWithEnv = () => {
  const [formData, setFormData] = useState<ContactFormData >({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using environment-aware API client
      const response = await apiClient.post('/contact', formData);
      
      if (isDevelopment) {
        console.log('✅ Contact form submitted:', response);
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      if (isDevelopment) {
        console.error('❌ Contact form error:', error);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Contact {config.app.name}
      </h2>
      
      {isDevelopment && (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-sm text-yellow-800">
            🚧 Development Mode - API Base: {config.api.baseUrl}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            ✅ Message sent successfully! We&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            ❌ Failed to send message. Please try again.
          </div>
        )}
      </form>

      {isDevelopment && (
        <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
          <p className="text-xs text-gray-600">
            App: {config.app.name} v{config.app.version} | 
            Timeout: {config.api.timeout}ms
          </p>
        </div>
      )}
    </div>
  );
};