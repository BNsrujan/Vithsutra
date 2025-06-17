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
    title: "Food Processing",
    description: "Automating packaging, sorting, and quality control with robotics and smart sensors to boost hygiene and efficiency.",
    link: "/industries/food-processing",
    image: "/industry/food-processing.avif"
  },
  {
    title: "Healthcare & Medical",
    description: "Secure patient access, sample inspection, and hospital automation powered by biometrics, robotics, and IIoT.",
    link: "/industries/healthcare-medical",
    image: "/industry/healthcare.webp"
  },
  {
    title: "Education & Research",
    description: "Providing institutions with IIoT labs and robotics training kits for real-world learning and innovation.",
    link: "/industries/education-research",
    image: "/industry/educationlab.avif"
  },
  {
    title: "Farming & Agriculture",
    description: "Empowering modern farmers with hydroponics automation, sensor-based monitoring, and precision farming tech.",
    link: "/industries/farming-agriculture",
    image: "/industry/farming.avif"
  },
  {
    title: "Manufacturing",
    description: "Streamlining industrial operations through PLC-based automation, SCADA systems, and robotic integration.",
    link: "/industries/manufacturing",
    image: "/industry/manufactureing.avif"
  }
];

export default function IndustriesSection() {
  return (
    <div className="py-16 max-w-[1400px] mx-auto md:px-4">
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
          className='pb-0'
        />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
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
            className="group md:min-h-96 w-full "
          >
            <Link href={industry.link}>
              <Card className="relative h-full min-h-[400px] overflow-hidden w-full transition-all duration-300 border-2 group-hover:-translate-y-1">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <CardContent className="relative p-[16px] md:p-[24px] w-full z-10 h-full flex flex-col justify-end">
                  <CardTitle className="text-[var(--company-white)] mb-1 md:mb-2 text-2xl font-bold">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--company-litest-gray)]  text-wrap w-full text-base">
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