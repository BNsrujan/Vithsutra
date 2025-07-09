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
    <main className="min-h-screen   space-y-company-xl-48">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:h-[93vh] w-full bg-gradient-to-b from-blue-100 to-company-white  ">
        <div className="container mx-auto px-4 flex flex-wrap-reverse items-center justify-between w-full h-full py-20 gap-company-xl-48 md:gap-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-black flex flex-col justify-center h-full items-center lg:items-start ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className=" space-y-company-md-16 md:space-y-company-lg-24 text-center lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} `}
                variants={fadeInDown}
              >
                {product.tagline}
              </motion.h1>
              <motion.p
                className={`${text.cardBodytext} max-w-2xl `}
                variants={fadeInUp}
              >
                {product.description}
              </motion.p>
              <div className="flex justify-center lg:justify-start">
                <Button  variant={"neumorphic"}>Book a Demo</Button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px] md:h-[350px] lg:h-[400px] flex justify-center items-center">
            <div className="absolute h-4 -bottom-2 md:-bottom-8 w-3/5 justify-center rounded-full bg-gradient-to-t from-transparent to-gray-600/10 blur-xs backdrop-blur-3xl" />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=" px-company-md-16 flex min-h-screen flex-col justify-center  ">
        <div className="max-w-7xl mx-auto">
          <Heading heading="FEATURES" Display="Key Features" />
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-company-xl-48">
              {product.features.map((feature, idx) => {
                const IconComponent = feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={50}
                    height={50}
                  />
                ) : typeof feature.icon === "function" ? (
                  React.createElement(feature.icon, {
                    className: " text-gray-700",
                  })
                ) : null;

                return (
                  <div
                    key={feature.title + idx}
                    className="flex items-start gap-company-xs-8 justify-center "
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-white border border-gray-200 rounded-company-button-8  flex items-center justify-center">
                        {IconComponent}
                      </div>
                    </div>
                    <div className="flex-1 justify-center h-full">
                      <h3
                        className={` ${text.cardHeadingsmall} pb-company-xs-8 text-gray-900 `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`${text.cardBodytextlight}text-sm text-gray-600 leading-relaxed`}
                      >
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
        <section className="px-company-md-16 md:px-8  min-h-screen">
          <div className="max-w-7xl mx-auto">
            <Heading heading="PROCESS" Display="How It Works" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-company-xl-48 w-full">
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
      <section className="flex  justify-center  h-screen ">
        <div className=" w-full h-full">
        <div className=" w-full h-full flex justify-center  items-center bg-company-litest-gray mx-auto ">
          <Image
            src={product.tecnicalimage}
            alt={product.name}
            width={1000}
            height={1000}
          />
        </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 md:py-24 md:px-8 bg-gray-50 relative flex justify-center items-center">
        <div className="w-full  max-w-7xl">
          <Application applications={product.applications} />
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
      <section className="py-24 p- px-4 md:px-8 flex justify-center">
        <div className="max-w-7xl w-full">
          <Heading heading="Have any Q&A" Display="Your Query" />
          <Accordion type="single" collapsible>
            {product.FaQ &&
              product.FaQ.length > 0 &&
              product.FaQ.map(({ qution, answer }) => (
                <AccordionItem key={qution} value={qution}>
                  <AccordionTrigger
                    className={`${text.cardBodytext} font-bold text-company-primary-royalBlue`}
                  >
                    {qution}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`${text.cardBodytext} text-company-dark-gray `}
                  >
                    {answer}
                  </AccordionContent>
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
          <div className="max-w-7xl">{product.gallery}</div>
        </section>
      )}

      {/* Our Track */}
      {product.facts && (
        <section className="py-24 flex justify-center">
          <div className="max-w-7xl ">
            <QuickFacts facts={product.facts} />
          </div>
        </section>
      )}
    </main>
  );
}
