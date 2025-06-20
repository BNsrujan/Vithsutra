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
import { Skeleton } from "../ui/Skeleton";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import { useRef } from "react";
import TestimonialsCarousel from '@/components/ui/testimonials-carousel';

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
  benefits: string[];
  applications: string[];
  gallery?: string[];
};

interface ProductPageProps {
  product: Product;
  otherProducts?: Product[];
}

export default function ProductPage({
  product,
  otherProducts = [],
}: ProductPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen  ">
      {/* Hero Section */}
      <section className="relative h-[93vh] w-full bg-gradient-to-b from-company-primary-royalBlue to-company-white flex justify-center items-center ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between ">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-white pr-8 flex flex-col justify-center h-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.h1
                className={`${text.Sectiontexthead} `}
                variants={fadeInDown}
              >
                RFID-Based Telephone
              </motion.h1>
              <motion.p
                className={`${text.cardBodytext} max-w-2xl`}
                variants={fadeInUp}
              >
                This RFID-based telephone is made for hostels, schools, and
                campuses. It replaces coin phones with smart, secure RFID cards.
                Each call is tracked, timed, and easy to manage.
              </motion.p>
              <Button>Book a Demo</Button>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className=" relative  w-full lg:w-1/2  h-[400px] flex justify-center  items-center ">
            <div className="absolute h-4  -bottom-38 w-3/5 justify-center rounded-full  bg-gradient-to-t from-transparent to-gray-600/10  blur-xs backdrop-blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-[600px]   overflow-visible rounded-[28px] "
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-cover overflow-visible  rounded-4xl"
                priority
              />
              {/* Hovering Cards */}

              <motion.div
                className=" absolute -top-18 -left-5 bg-white/10 backdrop-blur-lg w-[260px] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -15, 0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p className="text-company-black">
                  RFID authentication ensures secure access and usage tracking
                </p>
              </motion.div>

              <motion.div
                className=" absolute -right-19 top-1/2 w-[260px] bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, 15, 0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Fast</h3>
                <p className="text-company-black">
                  Quick and efficient call connection with tap-and-go
                  functionality
                </p>
              </motion.div>

              <motion.div
                className=" absolute -bottom-19 -left-19 w-[260px] bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Smart</h3>
                <p className="text-company-black">
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
            className="grid md:grid-cols-3 gap-12 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className=" flex flex-col items-center "
              >
                {feature.icon && (
                  <div className=" relative border rounded-[24px] overflow-hidden border-company-litest-gray  w-full md:h-[400px] mb-6 ">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="bg-gray-400 w-full h-full "
                    />

                    <div className=" absolute   bottom-0 p-[24px]">
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
      <section className="md:p-[20px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Heading heading="PROCESS" Display="How It Works" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
            {[
              {
                image: "/Products/rfid-tel/setp1.png",
                title: "Tap to Recharge",
                description: "User taps card on VithSutra's recharge machine",
              },
              {
                image: "/Products/rfid-tel/step2.png",
                title: "Insert Card",
                description: "Insert RFID card into the telephone unit",
              },
              {
                image: "/Products/rfid-tel/step3.png",
                title: "Dial and Talk",
                description: "Dial the number and start your call",
              },
              {
                image: "/Products/rfid-tel/step4.png",
                title: "Auto Deduction",
                description: "Amount is deducted from the card",
              },
            ].map((step, idx, arr) => (
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
          <motion.div
            className="grid md:grid-cols-2 gap-8 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {product.specifications.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-between  border-b border-gray-200 py-4"
              >
                <span className={`${text.midtext} text-black `}>
                  {spec.name}
                </span>
                <span className={`${text.Sectionbodytext} italic font-medium`}>
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Heading heading="USE CASES" Display="Applications" />
          <motion.div
            className="mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Scrollable container */}
              <div
                ref={scrollRef}
                className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollBehavior: "smooth" }}
              >
                {[
                  {
                    title: "Educational Institutions",
                    image: "/appli_image_iiot/Smart-robots.jpg",
                    description:
                      "Secure access control and communication systems for schools and universities",
                  },
                  {
                    title: "Healthcare Facilities",
                    image: "/robotics/Smart_Manufacturing.png",
                    description:
                      "Patient monitoring and facility management solutions",
                  },
                  {
                    title: "Industrial Facilities",
                    image: "/appli_image_iiot/Industrial-Automation.jpg",
                    description:
                      "Automated control systems for manufacturing and production",
                  },
                  {
                    title: "Commercial Buildings",
                    image: "/robotics/The-Future-of-Industrial-IoT.png",
                    description:
                      "Smart building management and security solutions",
                  },
                  {
                    title: "Research Facilities",
                    image: "/appli_image_iiot/Smart-robots.jpg",
                    description:
                      "Advanced monitoring and control systems for research environments",
                  },
                ].map((app, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex-none w-[400px] bg-white rounded-lg overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                      />
                      <Skeleton />
                    </div>
                    <div className="p-6">
                      <h3 className={`${text.cardHeadingtext} mb-2`}>
                        {app.title}
                      </h3>
                      <p className={`${text.cardsubtext} text-gray-600`}>
                        {app.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Left Arrow */}
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({
                      left: -400,
                      behavior: "smooth",
                    });
                  }
                }}
                className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg z-10"
                aria-label="Scroll left"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {/* Right Arrow */}
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({
                      left: 400,
                      behavior: "smooth",
                    });
                  }
                }}
                className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg z-10"
                aria-label="Scroll right"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Bottom-right floating arrow */}
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: scrollRef.current.scrollWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className="fixed md:absolute bottom-8 right-8 md:bottom-8 md:right-8 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-20"
                aria-label="Scroll to end"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={`${text.cardHeadingtext} mb-6`}>
              Ready to Get Started?
            </h2>
            <p
              className={`${text.cardsubtext} text-gray-600 mb-8 max-w-2xl mx-auto`}
            >
              Contact us today to learn more about {product.name} and how it can
              benefit your business.
            </p>
            <div className="flex w-fll justify-center content-center gap-8 ">
              <Button className="bg-[var(--company-primary-royalBlue)] hover:bg-[var(--company-primary-royalBlue)]/90">
                <span className={text.Buttontext}>Request a Demo</span>
              </Button>
              <Button className="bg-[var(--company-primary-royalBlue)] hover:bg-[var(--company-primary-royalBlue)]/90">
                <span className={text.Buttontext}>Download Brochure</span>
              </Button>
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
