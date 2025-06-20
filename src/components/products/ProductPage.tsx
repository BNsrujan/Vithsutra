"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { text } from "@/lib/typography";
import Heading from "@/components/ui/heading";
import {
  containerVariants,
  itemVariants,
  fadeInUp,
  fadeInDown,
} from "@/lib/motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import TestimonialsCarousel from "@/components/ui/testimonials-carousel";
import Application from "../ui/Application";
import { useRouter } from "next/navigation";
import { DialogDemo } from "../Dialog";


// Define the product feature type
type ProductFeature = {
  title: string;
  description: string;
  icon?: string;
};

// Define the product specification type
type ProductSpec = {
  name: string;
  value: string;
};

// Define the main product type
type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainImage: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  Howitworks:howitworks[];
  benefits: string[];
  applications: string[];
  gallery?: string[];
};

interface howitworks{
  image:string;
  title:string;
  description:string
}

interface ProductPageProps {
  product: Product;
  otherProducts?: Product[];
}

export default function ProductPage({
  product,
  otherProducts = [],
}: ProductPageProps) {

  const router = useRouter();

  return (
    <main className="min-h-screen  ">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[80vh] lg:h-[93vh] w-full bg-gradient-to-b from-company-primary-royalBlue to-company-white flex flex-col lg:flex-row justify-center items-center ">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full py-12 md:py-20 lg:py-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center h-full items-center lg:items-start mt-8 lg:mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 text-center lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} text-3xl md:text-4xl lg:text-5xl`}
                variants={fadeInDown}
              >
                {product.tagline}
              </motion.h1>
              <motion.p
                className={`${text.cardBodytext} max-w-2xl mx-auto lg:mx-0 text-base md:text-lg`}
                variants={fadeInUp}
              >
                {product.description}
              </motion.p>
              <div className="flex justify-center lg:justify-start">
                <Button>Book a Demo</Button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px] md:h-[350px] lg:h-[400px] flex justify-center items-center">
            <div className="absolute h-4 -bottom-8 w-3/5 justify-center rounded-full bg-gradient-to-t from-transparent to-gray-600/10 blur-xs backdrop-blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-full overflow-visible rounded-[28px]"
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain md:object-cover overflow-visible rounded-4xl"
                priority
              />
              {/* Hovering Cards */}
              <motion.div
                className="hidden md:block absolute -top-18 -left-5 bg-white/10 backdrop-blur-lg w-[200px] md:w-[260px] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -15, 0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">Secure</h3>
                <p className="text-company-black text-xs md:text-base">
                  RFID authentication ensures secure access and usage tracking
                </p>
              </motion.div>

              <motion.div
                className="hidden md:block absolute -right-19 top-1/2 w-[200px] md:w-[260px] bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, 15, 0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">Fast</h3>
                <p className="text-company-black text-xs md:text-base">
                  Quick and efficient call connection with tap-and-go
                  functionality
                </p>
              </motion.div>

              <motion.div
                className="hidden md:block absolute -bottom-19 -left-19 w-[200px] md:w-[260px] bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">Smart</h3>
                <p className="text-company-black text-xs md:text-base">
                  Intelligent tracking and management of call duration and usage
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Heading heading="FEATURES" Display="Key Features" />
          <motion.div
            className="grid md:grid-cols-3 gap-6  md:gap-12 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className=" flex flex-col items-center h-full "
              >
                {feature.icon && (
                  <div className=" relative border rounded-[24px] p-4 overflow-hidden  w-full   md:h-[400px] md:mb-6 ">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={164}
                      height={164}
                      className="w-full h-2/3  rounded-3xl border  bg-company-litest-gray "
                    />

                    <div className="pt-4  ">
                      <h3 className={`${text.cardHeadingtext} mb-4`}>
                        {feature.title}
                      </h3>
                      <p className={`${text.cardsubtext} text-gray-600`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="md:p-[20px] ">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Heading heading="PROCESS" Display="How It Works" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
            {product.Howitworks.map((step, idx, arr) => (
              <ProcessStepCard
                key={step.title}
                image={step.image}
                title={step.title}
                description={step.description}
                showArrow={idx < arr.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Heading heading="SPECS" Display="Technical Specifications" />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 md:py-24 md:px-8 bg-gray-50 relative flex justify-center items-center">
        <div className="w-full  max-w-7xl">
          <Application />
        </div>
      </section>

      {/* CTA Section */}
      <section className="">
        <div className="max-w-7xl mx-auto md:rounded-4xl bg-company-primary-royalBlue h-[300px] flex flex-col justify-center px-2 md:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={`${text.cardHeadingtext} text-white mb-2`}>
              Ready to Get Started?
            </h2>
            <p
              className={`${text.Sectionbodyteexts} text-company-litest-gray  mb-10 max-w-2xl mx-auto`}
            >
              Contact us today to learn more about {product.name} and how it can
              benefit your business.
            </p>
            <div className="md:flex  space-y-4 md:space-y-0  w-fll justify-center content-center md:gap-8 ">
              <Button
                onClick={() => router.push("/Contact")}
                className="bg-company-secondary-yello text-black hover:text-black hover:bg-company-secondary-yello/80"
              >
                <span className={text.Buttontext}>Request a Demo</span>
              </Button>
              <DialogDemo />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <TestimonialsCarousel />
      </section>

      {/* Other Products Section */}
      {otherProducts.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Heading heading="MORE" Display="Other Products" />
            <motion.div
              className=""
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Carousel
                items={otherProducts.map((p, index) => (
                  <Card
                    key={p.id}
                    card={{
                      src: p.mainImage,
                      title: p.name,
                      category: p.tagline,
                      content: (
                        <div className="space-y-4">
                          <p className={`${text.cardsubtext} text-gray-600`}>
                            {p.description}
                          </p>
                          <a
                            href={`/projects/${p.id}`}
                            className="inline-block text-blue-600 hover:text-blue-800"
                          >
                            Learn more →
                          </a>
                        </div>
                      ),
                    }}
                    index={index}
                  />
                ))}
              />
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
