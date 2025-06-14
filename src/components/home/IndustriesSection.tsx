"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "motion/react";
import { text } from '@/lib/typography';
import { containerVariants, itemVariants } from '@/lib/motion';
import { SectionHeader } from '../ui/section-header';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

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
      <motion.div 
        className="max-w-[1400px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader 
          label="INDUSTRIES"
          title="Industry Solutions"
        />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industries.map((industry, idx) => (
          <motion.div
            key={industry.title}
            variants={itemVariants}
            custom={idx}
            className="group"
          >
            <Link href={industry.link}>
              <Card className="overflow-hidden transition-all duration-300 border-2 group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={140}
                    height={140}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-[var(--company-blue-black)] mb-2">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--company-mid-gray)]">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 