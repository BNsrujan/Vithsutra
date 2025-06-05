"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./Carousel";
import { ProductGrid } from "./ProductGrid";
import { Footer } from "./Footer";

interface SectorData {
  title: string;
  description: string;
  carouselItems: {
    image: string;
    caption: string;
    link: string;
  }[];
  products: {
    name: string;
    description: string;
    image?: string;
    link: string;
  }[];
  applications: string[];
  solutions: {
    overview: string;
    categories: {
      title: string;
      description: string;
    }[];
  };
  relatedIndustries: string[];
}

interface SectorLayoutProps {
  data: SectorData;
}

export const SectorLayout: React.FC<SectorLayoutProps> = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Intro Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{data.description}</p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Carousel items={data.carouselItems} />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
          <ProductGrid products={data.products} />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <ul className="space-y-4">
            {data.applications.map((app, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {app}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Solutions</h2>
          <p className="text-lg text-gray-600 mb-8">{data.solutions.overview}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {data.solutions.categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Industries</h2>
          <div className="flex flex-wrap gap-4">
            {data.relatedIndustries.map((industry, index) => (
              <Link
                key={index}
                href={`/industries/${industry.toLowerCase().replace(/ /g, "-")}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                → {industry}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact our team today to discuss your {data.title} project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}; 