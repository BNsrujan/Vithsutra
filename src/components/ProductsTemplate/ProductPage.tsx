"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { text } from "@/lib/typography";
import Heading from "@/components/ui/heading";
import { containerVariants, fadeInUp, fadeInDown } from "@/lib/motion";
import { Carousel, Card } from "@/components/ui/productscard";
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
        <div className="container mx-auto px-4 flex flex-wrap-reverse md:items-center justify-start w-full h-full py-20 gap-company-xl-48 md:gap-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-black flex flex-col md:justify-center h-full items-center lg:items-start ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className=" space-y-company-lg-24 md:space-y-company-lg-24  lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} `}
                variants={fadeInDown}
              >
                {product.tagline}
              </motion.h1>
              <motion.p
                className={`${text.Extratext}  max-w-2xl `}
                variants={fadeInUp}
              >
                {product.description}
              </motion.p>
              <div className="flex md:justify-center lg:justify-start">
                <Button
                  onClick={() => router.push("/contact")}
                  variant={"neumorphic"}
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px] md:h-[350px] lg:h-[700px] flex justify-center items-center">
            <div className="absolute h-4 -bottom-2 md:-bottom-8 w-3/5 justify-center rounded-full bg-gradient-to-t from-transparent to-gray-600/10 blur-xs backdrop-blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-[90vw] sm:w-full md:w-[500px] lg:w-[700px] max-w-full overflow-visible rounded-[28px]"
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain md:object-contain overflow-visible rounded-4xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {product.name == "Hydroponic Controller" && (
        <div>
          <section className="relative min-h-[70vh]     ">
            <div className="container mx-auto px-4 sm:px-0 w-company-section-width flex flex-wrap-reverse items-center justify-between  h-full py-20 gap-company-xl-48 md:gap-0">
              {/* Right side - Image */}
              <div className="relative w-full lg:w-1/2 h-[260px] min-h-[400px] pr-7  flex justify-center   overflow-hidden items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative h-full   w-full max-w-full  rounded-company-section-24"
                >
                  <Image
                    src={"/Products/vithnet/CEA1.png"}
                    alt={product.name}
                    fill
                    className="object-contain md:object-cover overflow-hidden rounded-company-section-24 "
                    priority
                  />
                </motion.div>
              </div>

              {/* Left side - Text Content */}
              <div className="w-full lg:w-1/2 text-black flex  flex-col justify-center h-full items-center lg:items-start ">
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
                    What is Controlled Environment Farming?
                  </motion.h1>
                  <motion.p
                    className={`${text.Extratext} max-w-2xl `}
                    variants={fadeInUp}
                  >
                    Controlled Environment Farming (CEF) is the practice of
                    growing crops in enclosed spaces with precise control over
                    environmental factors. It enhances crop yield and resource
                    efficiency by managing temperature, humidity, pH, and
                    nutrients.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="relative min-h-[70vh]  w-full  ">
            <div className="container mx-auto px-4 sm:px-0 w-company-section-width flex flex-wrap-reverse items-center justify-between  h-full py-20  md:gap-0">
              {/* Left side - Text Content */}
              <div className="w-full lg:w-1/2 text-black flex  flex-col justify-center h-full items-center lg:items-start ">
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
                    What is Controlled Environment Farming?
                  </motion.h1>
                  <motion.p
                    className={`${text.Extratext} md:max-w-2xl max-w-64  `}
                    variants={fadeInUp}
                  >
                    Controlled Environment Farming (CEF) is the practice of
                    growing crops in enclosed spaces with precise control over
                    environmental factors. It enhances crop yield and resource
                    efficiency by managing temperature, humidity, pH, and
                    nutrients.
                  </motion.p>
                </motion.div>
              </div>

              <div className="md:w-1/2 mx-auto px-company-lg-24 ">
                <Heading heading="FEATURES" Display="Key Features" />
                <div className=" ">
                  <div className="grid grid-cols-1 gap-company-sm-12  ">
                    {product.whychose &&
                      Array.isArray(product.whychose) &&
                      product.whychose.map((whychose, idx) => {
                        let IconComponent = null;
                        if (
                          typeof whychose.image === "string" &&
                          whychose.image.length > 0
                        ) {
                          IconComponent = (
                            <Image
                              src={whychose.image}
                              alt={whychose.title || `icon-${idx}`}
                              width={50}
                              height={50}
                            />
                          );
                        } else if (
                          whychose.icon &&
                          typeof whychose.icon === "function"
                        ) {
                          IconComponent = React.createElement(whychose.icon, {
                            className: " text-gray-700",
                          });
                        }

                        return (
                          <div
                            key={whychose.title ? whychose.title + idx : idx}
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
                                {whychose.title}
                              </h3>
                              <p
                                className={`${text.cardBodytextlight}text-sm text-gray-600 leading-relaxed`}
                              >
                                {whychose.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Features Section */}
      <section className=" px-4 md:px-0  flex py-company-xl-48 flex-col justify-center  ">
        <div className="max-w-company-section-width mx-auto">
          <Heading heading="Why Choose Us" Display="EXPLORE WHAT WE OFFER" />
          <div className="py-company-xl-48">
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
        <section className="px-company-md-16 md:px-8  min-h-screen flex  justify-center items-center w-full">
          <div className="max-w-company-section-width mx-auto w-full">
            <Heading
              heading="Simple, secure, and streamlined - our four-step process ensures reliable communication access"
              Display="How It Works"
              className="flex flex-col-reverse"
            />
            <div className="flex flex-col py-company-xl-48 md:flex-row items-center justify-between gap-company-xl-48 w-full">
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
      <section className="flex p-company-xs-8 md:p-0  contain-content justify-center  ">
        <div className="max-w-company-section-width   w-full h-full">
          <Heading
            heading="Detailed technical information for system integration and deployment"
            Display="Technical Specifications"
            className="flex flex-col-reverse mb-company-xl-48 "
          />
          <div className=" relative h-[38rem] flex justify-center py-company-xl-48  items-center bg-company-litest-gray rounded-company-section-24 border z-100 mx-auto ">
           <div className="  grid grid-cols-2  p-company-lg-24 justify-between w-full "> 
           {product.productspecification && product.productspecification.map((feature, idx) => {
                const IconComponent = feature.icon ? (
                  <Image
                    src={feature.icon}
                    alt={feature.heading}
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
                    key={ idx}
                    className="flex items-start gap-company-xs-8 justify-center py-company-md-16 w-[400px]"
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
                        {feature.heading}
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
            <Image
              src={product.tecnicalimage}
              alt={product.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {product.productspecification &&
        product.productspecification.length > 0 && <div></div>}

      {/* Applications Section */}
      <section className="py-16 px-4 md:px-0 md:py-24  relative flex justify-center items-center">
        <div className=" mt-company-xl-48 w-company-section-width">
          <Application applications={product.applications} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="">
        <div className="max-w-company-section-width w-full mx-auto md:rounded-4xl bg-company-primary-royalBlue h-[300px] flex flex-col justify-center  items-center  text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className={`${text.cardHeadingtext} text-white mb-company-md-16`}
            >
              Ready to Get Started?
            </h2>
            <p
              className={`${text.Extratext} text-company-litest-gray  mb-company-md-16 max-w-2xl mx-auto`}
            >
              Contact us today to learn more about {product.name} and how it can
              benefit your business.
            </p>
            <div className="md:flex  space-y-4 md:space-y-0  w-fll justify-center content-center md:gap-company-md-16 ">
              <Button
                onClick={() => router.push("/Contact")}
                variant={"neumorphicYellow"}
              >
                Request a Demo
              </Button>
              <DialogDemo />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {product.testimonials && product.testimonials.length > 0 && (
        <section className="py-24 w-full flex justify-center m">
          <TestimonialsCarousel testimonials={product.testimonials} />
        </section>
      )}

      {/* F&Q */}
      <section className=" px-4 md:px-0 flex justify-center">
        <div className="max-w-company-section-width w-full">
          <Heading heading="HAVE ANY Q&A" Display="Your Query" />
          <Accordion type="single" collapsible>
            {product.FaQ &&
              product.FaQ.length > 0 &&
              product.FaQ.map(({ qution, answer }) => (
                <AccordionItem key={qution} value={qution}>
                  <AccordionTrigger
                    className={`${text.cardBodytext} font-bold text-company-primary-royalBlue px-company-lg-24`}
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
          <div className="max-w-company-section-width mx-auto px-4 md:px-0">
            <Heading heading="BEST SELLING PRODUCT" Display="Other Products" />
            <motion.div
              className=""
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Carousel
                items={otherProducts
                  .filter((p): p is Product => !!p && !!p.id && !!p.name)
                  .map((p, index) => (
                    <Card
                      key={p.id}
                      card={{
                        src: p.productSectionImage,
                        title: p.name,
                        category: p.tagline || "",
                        link: `/products/${p.id}`,
                        content: (
                          <div className="space-y-4">
                            <p className={`${text.cardBodytext} text-gray-600`}>
                              {p.description}
                            </p>
                            <a
                              href={`/products/${p.id}`}
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
        <section className=" w-full flex  justify-center">
          <div className="max-w-company-section-width w-full">
            <Heading Display="Gallery" heading="" className="pb-1" />
            <div className="flex flex-wrap gap-company-lg-24">
              {product.gallery.map((image) => (
                <div
                  key={image}
                  className="w-[12rem] rounded-company-button-8 border "
                >
                  <Image src={image} alt="" width={150} height={150} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Track */}
      {product.facts && (
        <section className=" md:px-0 py-24 flex justify-center w-full">
          <div className="max-w-company-section-width w-full ">
            <QuickFacts facts={product.facts} />
          </div>
        </section>
      )}
    </main>
  );
}
