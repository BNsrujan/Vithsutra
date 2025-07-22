"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "motion/react";
import { containerVariants, itemVariants } from '@/lib/motion';
import Image from 'next/image';
import { Card, CardContent,  CardTitle, CardDescription } from '@/components/ui/card';
import { industries } from '@/data/products';
import Heading from '@/components/ui/heading';

export default function IndustriesSection() {
  return (
    <div className="max-w-company-section-width  py-4 w-full">
      <motion.div 
        className="max-w-company-section-width mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Heading 
          heading="INDUSTRIES"
          Display="Industry Solutions"
        />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-company-lg-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industries.map((industry, idx) => (
          <motion.div
            key={industry.title}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            viewport={{once:true,margin:"-100px"}}
            className="group md:min-h-96 w-full "
          >
            <Link href={industry.link}>
              <Card className="relative h-full min-h-[400px] overflow-hidden w-full  duration-300  ">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority
                    className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <CardContent className="relative  p-company-lg-24 w-full z-10 h-full  flex flex-col justify-end">
                  <CardTitle className="text-[var(--company-white)]  font-bold">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--company-litest-gray)]  text-wrap w-full ">
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