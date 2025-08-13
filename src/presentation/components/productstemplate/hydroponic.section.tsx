import { containerVariants } from "@/shared/lib/motion";
import { motion } from "motion/react";
import Image from "next/image";
import Heading from  "@/presentation/components/ui/heading.ui";
import { typography } from "@/shared/lib/typography";
import { fadeInDown, fadeInUp } from "@/shared/lib/motion";
import { Product } from "@/core/entities/product";
import { createElement } from "react";

export default function Hydroponic(product : Product) {
  return (
    <div>
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
                    src={"/products/vithnet/CEA1.png"}
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
                    className={`${typography.display.large} `}
                    variants={fadeInDown}
                  >
                    What is Controlled Environment Farming?
                  </motion.h1>
                  <motion.p
                    className={`${typography.body.large} max-w-2xl `}
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
                    className={`${typography.display.large} `}
                    variants={fadeInDown}
                  >
                    What is Controlled Environment Farming?
                  </motion.h1>
                  <motion.p
                    className={`${typography.body.large} md:max-w-2xl max-w-64  `}
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
                          IconComponent = createElement(whychose.icon, {
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
                                className={` ${typography.title.large} pb-company-xs-8 text-gray-900 `}
                              >
                                {whychose.title}
                              </h3>
                              <p
                                className={`${typography.body.medium} text-sm text-gray-600 leading-relaxed`}
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
    </div>
  )
}
