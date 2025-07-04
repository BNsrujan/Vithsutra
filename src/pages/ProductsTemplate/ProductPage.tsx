"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { text } from "@/lib/typography";
import Heading from "@/components/ui/heading";
import { containerVariants, fadeInUp, fadeInDown } from "@/lib/motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import TestimonialsCarousel from "@/components/ui/testimonials-carousel";
import Application from "../../components/ui/Application";
import { useRouter } from "next/navigation";
import { DialogDemo } from "../../components/BrochureDialog";
import { Product } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuickFacts from "@/components/QuickFacts";

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
      <section className="relative min-h-[80vh] md:min-h-[80vh] lg:h-[93vh] w-full bg-gradient-to-b from-blue-200 to-company-white flex flex-col lg:flex-row justify-center items-center ">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full py-12 md:py-20 lg:py-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-black flex flex-col justify-center h-full items-center lg:items-start mt-8 lg:mt-0">
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
              {/* <motion.div
                className="hidden md:block absolute -top-18 -left-5 bg-white/10 backdrop-blur-lg w-[200px] md:w-[260px] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -15, 0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Secure
                </h3>
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
              </motion.div> */}

            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24  flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Heading heading="FEATURES" Display="Key Features" />
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, idx) => {
                const IconComponent = feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                ) : typeof feature.icon === "function" ? (
                  React.createElement(feature.icon, {
                    className: "w-6 h-6 text-gray-700",
                  })
                ) : null;

                return (
                  <div
                    key={feature.title + idx}
                    className="flex items-start gap-4  border p-2  justify-center  rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                        {IconComponent}
                      </div>
                    </div>
                    <div className="flex-1 justify-center h-full">
                      <h3
                        className={` ${text.cardHeadingsmall}  text-gray-900 `}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {product.howItWorks && product.howItWorks.length > 0 && (
        <section className="py-16 px-4 md:py-24 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Heading heading="PROCESS" Display="How It Works" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {product.howItWorks.map((step, idx, arr) => (
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
      )}

      {/* Technical Specifications Section */}
      <section className="py-24 justify-center flex ">
        <Image
          src={product.tecnicalimage}
          alt={product.name}
          width={1000}
          height={1000}
        />
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
              className={`${text.Sectionbodytexts} text-company-litest-gray  mb-10 max-w-2xl mx-auto`}
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
      {product.testimonials && product.testimonials.length > 0 && (
        <section className="py-24 flex justify-center">
          <TestimonialsCarousel testimonials={product.testimonials} />
        </section>
      )}

      {/* F&Q */}
      <section className="py-24 flex justify-center">
        <div className="max-w-7xl w-full">
        <Heading heading="Have any Q&A" Display="Your Query" />
        <Accordion type="single" collapsible>
          {product.FaQ &&
            product.FaQ.length > 0 &&
            product.FaQ.map(({ qution, answer }) => (
              <AccordionItem  key={qution} value={qution}>
                <AccordionTrigger className={`${text.cardBodytext}`} >{qution}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
        </div>
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
                      src: p.productSectionImage,
                      title: p.name,
                      category: p.tagline,
                      content: (
                        <div className="space-y-4">
                          <p className={`${text.cardBodytext} text-gray-600`}>
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

      {/*our Galry*/}
      {product.gallery && product.gallery.length > 0 && (
        <section>
        <div className="max-w-7xl">
          {product.gallery}
        </div>
      </section>
      )}


      {/* Our Track */}
      {product.facts  && (
        <section className="py-24 flex justify-center">
          <div className="max-w-7xl ">
              <QuickFacts facts={product.facts}/>
          </div>
        </section>
      )}

    </main>
  );
}
