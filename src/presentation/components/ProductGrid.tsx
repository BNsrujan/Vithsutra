"use client";


// just the cards in Grid formate

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { containerVariants, itemVariants } from "@/lib/animations";

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
    <motion.div 
      className="grid sm:grid-cols-2 gap-6 sm:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {products.map((product, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          custom={index}
        >
          <Link
            href={product.link}
            className="group block bg-company-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {product.image && (
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-4 sm:p-6">
              <h3 className={`${text.cardHeadingtext} text-company-blue mb-2 group-hover:text-company-primary-royalBlue transition-colors`}>
                {product.name}
              </h3>
              <p className={`${text.cardBodytext} text-company-gray line-clamp-2 sm:line-clamp-3`}>
                {product.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}; 