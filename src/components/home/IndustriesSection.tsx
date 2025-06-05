"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const industries = [
  {
    title: "Automotive",
    description: "Smart manufacturing and automation solutions for the automotive industry.",
    link: "/industries/automotive",
    image: "/industry/automotive.avif"
  },
  {
    title: "Logistics",
    description: "Intelligent logistics and supply chain management solutions.",
    link: "/industries/logistics",
    image: "/industry/istockphoto-1149575577-612x612.webp"
  },
  {
    title: "FMOG",
    description: "Fast Moving Consumer Goods automation and optimization solutions.",
    link: "/industries/fmog",
    image: "/industry/fmog.avif"
  },
  {
    title: "Chemical & Pharma",
    description: "Advanced automation and compliance solutions for chemical and pharmaceutical industries.",
    link: "/industries/chemical-pharma",
    image: "/industry/chemicalanharmadp.avif"
  },
  {
    title: "Plastics & Polymers",
    description: "Smart manufacturing and quality control solutions for plastics and polymers.",
    link: "/industries/plastics-polymers",
    image: "/industry/plastic and polymer.webp"
  },
  {
    title: "Metal & Machining",
    description: "Precision manufacturing and automation solutions for metal and machining industries.",
    link: "/industries/metal-machining",
    image: "/industry/metal and machining.avif"
  },
  {
    title: "New Energy",
    description: "Renewable energy and smart grid management solutions.",
    link: "/industries/new-energy",
    image: "/industry/newenery.avif"
  },
  {
    title: "Healthcare",
    description: "Healthcare automation and patient care management solutions.",
    link: "/industries/healthcare",
    image: "/industry/healthcare.webp"
  },
  {
    title: "Retail",
    description: "Retail automation and customer experience solutions.",
    link: "/industries/retail",
    image: "/industry/retail.avif"
  },
  {
    title: "Manufacturing",
    description: "Industry 4.0 and smart manufacturing solutions.",
    link: "/industries/manufacturing",
    image: "/industry/manufactureing.avif"
  },
  {
    title: "Education",
    description: "Smart learning and campus management solutions.",
    link: "/industries/education",
    image: "/industry/educationlab.avif"
  }
];

export default function IndustriesSection() {
  return (
    <div className="py-16 max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <div className="mt-1 font-medium text-sm tracking-wider text-company-text-gray">
          INDUSTRIES
        </div>
        <h2 className="text-4xl font-bold text-company-black mb-4">
          Industry Solutions
        </h2>
        <p className="text-company-text-gray max-w-2xl mx-auto">
          Discover our comprehensive solutions tailored for various industries, designed to drive efficiency, innovation, and growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, idx) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <Link href={industry.link}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-company-black mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-company-text-gray text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 