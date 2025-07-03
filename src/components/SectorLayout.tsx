"use client";

import React from "react";
// import { Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import { ProductGrid } from "./ProductGrid";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { Button } from "./ui/button";
import { SectionHeader } from "./ui/section-header";
import { containerVariants, itemVariants } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "./Carousel";
interface CarouselItem {
  image: string;
  caption: string;
  link: string;
}
interface SectorData {
  title: string;
  description: string;
  carouselItems: CarouselItem[];
  products: {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
  }[];
  applications: {
    title: string;
    description: string;
    icon: string;
  }[];
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
  relatedIndustries: {
    title: string;
    description: string;
    href: string;
  }[];
}

interface SectorLayoutProps {
  data: SectorData;
}

const SectorLayout: React.FC<SectorLayoutProps> = ({ data }) => {
  return (
    <div className="min-h-screen bg-company-blue-white">
      {/* Introduction Section */}
      <motion.section 
        className=" relative px-4 sm:px-6 lg:px-8 py-12 h-screen sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className=" justify-end mx-auto w-full max-w-[1800px]">
          <motion.h1 
            className={`${text.Sectiontexthead}font-semibold mb-4 sm:mb-6`}
            variants={itemVariants}
          >
            {data.title}
          </motion.h1>
          <motion.p 
            className={`${text.Extratext} md:w-9/12 text-company-mid-gray `}
            variants={itemVariants}
          >
            {data.description}
          </motion.p>
        </div>
        <div className="">
          <Image 
          src={"/"}
          width={150}
          height={150}
          alt="image"
          className=" absolute "
          />
        </div>
      </motion.section>

      {/* Carousel Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-company-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-[1800px]">
          <SectionHeader 
            label="FEATURED"
            title="Key Highlights"
          />
          <div className="mt-8 sm:mt-12">
            <Carousel 
              items={data.carouselItems}
              // variant="default"
              // autoPlay={true}
              // interval={5000}
              // showIndicators={true}
              // showNavigation={true}
            />
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-[1800px]">
          <SectionHeader 
            label="PRODUCTS"
            title="Our Solutions"
          />
          <div className="mt-8 sm:mt-12">
            <ProductGrid products={data.products} />
          </div>
        </div>
      </motion.section>

      {/* Applications Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-company-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-[1800px]">
          <SectionHeader 
            label="APPLICATIONS"
            title="Industry Applications"
          />
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.applications.map((app, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="bg-company-blue-white p-6 sm:p-8 rounded-lg"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                  <Image src={app.icon} alt={app.title}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain" />
                </div>
                <h3 className={`${text.cardHeadingtext} text-company-gray mb-2 sm:mb-3`}>
                  {app.title}
                </h3>
                <p className={`${text.cardBodytext} text-company-mid-gray`}>
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-[1800px]">
          <SectionHeader 
            label="SOLUTIONS"
            title="Our Approach"
          />
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="bg-company-white p-6 sm:p-8 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                  <Image src={solution.icon} alt={solution.title} className="w-full h-full object-contain" />
                </div>
                <h3 className={`${text.Sectiontexthead} text-company-gray mb-2 sm:mb-3`}>
                  {solution.title}
                </h3>
                <p className={`${text.Extratext} text-company-mid-gray`}>
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Related Industries Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-company-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-[1800px]">
          <SectionHeader 
            label="INDUSTRIES"
            title="Related Industries"
          />
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.relatedIndustries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="bg-company-blue-white p-6 sm:p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <Link href={industry.href} className="block">
                  <h3 className={`${text.Sectiontexthead} text-company-gray mb-2 sm:mb-3 hover:text-company-primary-royalBlue transition-colors`}>
                    {industry.title}
                  </h3>
                  <p className={`${text.Extratext} text-company-mid-gray`}>
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-company-primary-royalBlue"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-[1800px] text-center">
          <motion.h2 
            className={`${text.Displaytext} text-company-white mb-4 sm:mb-6`}
            variants={itemVariants}
          >
            Ready to Transform Your Industry?
          </motion.h2>
          <motion.p 
            className={`${text.Extratext} text-company-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto`}
            variants={itemVariants}
          >
            Let&apos;s discuss how our solutions can help you achieve your goals.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export { SectorLayout }; 