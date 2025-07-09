"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/components/ui/heading";
import { text } from "@/lib/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ProductApplication } from "@/data/products";

interface ApplicationProps {
  applications: ProductApplication[];
}

const categories = [
  "Manufacturing",
  "Energy & Utilities",
  "Healthcare",
  "Agriculture",
  "Smart Cities",
  "Mining & Construction",
];

export default function Application({ applications }: ApplicationProps) {
  const [selectedCategory, setSelectedCategory] = useState("Manufacturing");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredApps = applications.filter(
    (app) => app.industry === selectedCategory
  );

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredApps.length / itemsPerPage);
  const paginatedApps = filteredApps.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Heading Display="Application" heading="High Quality Product" />

        {/* Category Tabs */}
        <div className="flex gap-3 flex-wrap mt-6 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? "default" : "outline"}
              className="rounded-xl px-4 py-2"
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(0);
              }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[320px]">
          <AnimatePresence mode="wait">
            {paginatedApps.map((app, i) => (
              <motion.div
                key={app.description + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden shadow-md group"
              >
                <Image
                  src={app.image}
                  alt={app.industry}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-sm font-medium">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-6">
            <Button
              size="icon"
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronLeft />
            </Button>
            <Button
              size="icon"
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
