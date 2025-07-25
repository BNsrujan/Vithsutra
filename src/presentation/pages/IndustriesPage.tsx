'use client';

import React from 'react';
import { useIndustries } from '../hooks/useIndustries';
import { IndustryCard } from '../components/IndustryCard';
import { Skeleton } from '../../components/ui/Skeleton';

export const IndustriesPage: React.FC = () => {
  const { industries, loading, error } = useIndustries();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Industries</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide tailored technology solutions across various industries, helping businesses overcome unique challenges and achieve their goals.
          </p>
        </div>

        {/* Industries Grid */}
        {industries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Industries Found</h2>
            <p className="text-gray-500">We&apos;re expanding our industry coverage. Please check back soon!</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-gray-600 mb-6">
            We work with businesses across many sectors. Contact us to discuss how we can help your specific industry.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};