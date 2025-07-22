"use client";

import React from "react";
// import { Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import { ProductGrid } from "../../components/ProductGrid";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { Button } from "../../components/ui/button";
import { containerVariants, itemVariants } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "../../components/CarouselWithL&RArrow";
import Heading from "@/components/ui/heading";


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
  if (!data || !data.title) {
    return <div>Sector data not found or incomplete.</div>;
  }
  return (
    <div className="min-h-screen bg-company-blue-white">
      {/* Introduction Section */}
      <motion.section 
        className="relative px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48 h-screen sm:py-company-xl-48 lg:py-company-xl-48"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className=" justify-end mx-auto w-full max-w-company-section-width">
          <motion.h1 
            className={`${text.Sectiontexthead} font-semibold mb-company-md-16 sm:mb-company-lg-24`}
            variants={itemVariants}
          >
            {data.title}
          </motion.h1>
          <motion.p 
            className={`${text.Extratext} md:w-9/12 text-company-mid-gray`}
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
        className="px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48 bg-company-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-company-section-width">
          <Heading 
            heading="FEATURED"
            Display="Key Highlights"
          />
          <div className="mt-company-lg-24 sm:mt-company-xl-48">
            <Carousel 
              items={data.carouselItems}
            />
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        className="px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-company-section-width">
          <Heading 
            heading="PRODUCTS"
            Display="Our Solutions"
          />
          <div className="mt-company-lg-24 sm:mt-company-xl-48">
            <ProductGrid products={data.products} />
          </div>
        </div>
      </motion.section>

      {/* Applications Section */}
      <motion.section 
        className="px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48 bg-company-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-company-section-width">
          <Heading 
            heading="APPLICATIONS"
            Display="Industry Applications"
          />
          <div className="mt-company-lg-24 sm:mt-company-xl-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-company-lg-24 sm:gap-company-xl-48">
            {data.applications.map((app, index) => {
              if (typeof app === "string") {
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="bg-company-blue-white p-company-lg-24 sm:p-company-xl-48 rounded-card"
                  >
                    <h3 className={`${text.cardHeadingtext} text-company-gray mb-company-md-16 sm:mb-company-lg-24`}>
                      {app}
                    </h3>
                  </motion.div>
                );
              } else {
                // Type guard for image property
                const hasImage = Object.prototype.hasOwnProperty.call(app, 'image');
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="bg-company-blue-white p-company-lg-24 sm:p-company-xl-48 rounded-card"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                      <Image
                        src={app.icon || (hasImage ? (app as unknown as { image: string }).image : "/placeholder.png")}
                        alt={app.title}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className={`${text.cardHeadingtext} text-company-gray mb-company-md-16 sm:mb-company-lg-24`}>
                      {app.title}
                    </h3>
                    <p className={`${text.cardBodytextlight} text-company-mid-gray`}>
                      {app.description}
                    </p>
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section 
        className="px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-company-section-width">
          <Heading 
            heading="SOLUTIONS"
            Display="Our Approach"
          />
          <div className="mt-company-lg-24 sm:mt-company-xl-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-company-lg-24 sm:gap-company-xl-48">
            {data.solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="bg-company-white p-company-lg-24 sm:p-company-xl-48 rounded-card shadow-sm"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                  <Image src={solution.icon} alt={solution.title} fill className="w-full h-full object-contain" />
                </div>
                <h3 className={`${text.Sectiontexthead} text-company-gray mb-company-md-16 sm:mb-company-lg-24`}>
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
        className="px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48 bg-company-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-company-section-width">
          <Heading 
            heading="INDUSTRIES"
            Display="Related Industries"
          />
          <div className="mt-company-lg-24 sm:mt-company-xl-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-company-lg-24 sm:gap-company-xl-48">
            {data.relatedIndustries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="bg-company-blue-white p-company-lg-24 sm:p-company-xl-48 rounded-card hover:shadow-md transition-shadow duration-300"
              >
                <Link href={industry.href} className="block">
                  <h3 className={`${text.Sectiontexthead} text-company-gray mb-company-md-16 sm:mb-company-lg-24 hover:text-company-primary-royalBlue transition-colors`}>
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
        className="px-company-md-16 sm:px-company-lg-24 lg:px-company-xl-48 py-company-xl-48 bg-company-primary-royalBlue"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-company-section-width text-center">
          <motion.h2 
            className={`${text.Displaytext} text-company-white mb-company-md-16 sm:mb-company-lg-24`}
            variants={itemVariants}
          >
            Ready to Transform Your Industry?
          </motion.h2>
          <motion.p 
            className={`${text.Extratext} text-company-white/80 mb-company-lg-24 sm:mb-company-xl-48 max-w-2xl mx-auto`}
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

export default SectorLayout ; 