"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  image?: string;
  link: string;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <Link
          key={index}
          href={product.link}
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            {product.image && (
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}; 