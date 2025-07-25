'use client';

import React, { useState } from 'react';
import { useFAQCategories, useFAQSearch } from '../hooks/useFAQ';
import { FAQAccordion } from '../components/FAQAccordion';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Search, X } from 'lucide-react';
import { Skeleton } from '../../components/ui/Skeleton';

export const FAQPage: React.FC = () => {
  const { categories, loading, error } = useFAQCategories();
  const { searchResults, searchFAQs, clearSearch, loading: searchLoading } = useFAQSearch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await searchFAQs(searchQuery.trim());
      setIsSearchMode(true);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setIsSearchMode(false);
    clearSearch();
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          
          <div className="max-w-md mx-auto">
            <Skeleton className="h-10 w-full" />
          </div>
          
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="border rounded-lg p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
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
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading FAQs</h1>
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
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, solutions, and processes.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSearch} className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit" disabled={searchLoading}>
              {searchLoading ? 'Searching...' : 'Search'}
            </Button>
            {isSearchMode && (
              <Button type="button" variant="outline" onClick={handleClearSearch}>
                <X className="w-4 h-4" />
              </Button>
            )}
          </form>
        </div>

        {/* Content */}
        {isSearchMode ? (
          /* Search Results */
          <Card>
            <CardHeader>
              <CardTitle>
                Search Results for &quot;{searchQuery}&quot; ({searchResults.length} found)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FAQAccordion faqs={searchResults} />
            </CardContent>
          </Card>
        ) : (
          /* Categories */
          <div className="max-w-4xl mx-auto">
            {categories.length > 0 ? (
              <Tabs defaultValue={categories[0]?.id} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{category.name}</CardTitle>
                        <p className="text-gray-600">{category.description}</p>
                      </CardHeader>
                      <CardContent>
                        <FAQAccordion faqs={category.faqs} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-600 mb-4">No FAQs Available</h2>
                <p className="text-gray-500">We&apos;re working on adding frequently asked questions. Please check back soon!</p>
              </div>
            )}
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Our team is here to help you with any questions or concerns.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};