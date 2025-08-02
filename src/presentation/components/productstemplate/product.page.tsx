"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/presentation/components/ui/button.ui";
import { text } from "@/shared/lib/typography";
import Heading from "@/presentation/components/ui/heading.ui";
import { containerVariants, fadeInUp, fadeInDown } from "@/shared/lib/motion";
import ProcessStepCard from "@/presentation/components/productstemplate/processtepcard.section";
import TestimonialsCarousel from "@/presentation/components/testimonials.section";
import Application from "@/presentation/components/Application.section";
import { useRouter } from "next/navigation";
import { Product } from "@/core/entities/product";
import QuickFacts from "@/presentation/components/quickfactes.section";
import Faq from "@/presentation/pages/training/FAndQ";
import ProductsSection from "../products.section";
import Technicalspecification from "./technicalspecification.section";
import Cta from "./cta.section";
import Gallery from "./gallery.section";
import Howitworks from "@/presentation/components/productstemplate/processtepcard.section";
import { Feather } from "lucide-react";

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
      <Feather {...product.features}/>

     
      {product.howItWorks && product.howItWorks.length > 0 && (<Howitworks {...product.howItWorks}/>)}
      <Technicalspecification {...product} />
      <Application applications={product.applications} />
      <Cta {...product}/>
      {product.testimonials && product.testimonials.length > 0 && (<TestimonialsCarousel testimonials={product.testimonials} />)}
      <Faq/>
      {otherProducts.length > 0 && (<ProductsSection otherProducts={otherProducts} />)}
      {product.gallery && product.gallery.length > 0 && (<Gallery {...product.gallery}/>)}
      {product.facts && (<QuickFacts facts={product.facts} />)}
    </main>
  );
}
