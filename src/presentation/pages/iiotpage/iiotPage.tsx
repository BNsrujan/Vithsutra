"use client"

import { Button } from "@/presentation/components/ui/button";
import Image from "next/image";
import { IIOT } from "@/data/domain/iiotpages-data";
import { text } from "@/shared/lib/typography";
import {motion} from 'framer-motion'
import { containerVariants, fadeInUp, fadeInDown } from "@/shared/lib/motion";
import Heading from "@/presentation/components/ui/heading";
import { useRouter } from "next/router";


export default function IIOTPages() {
  const router = useRouter();
  
  return (
    <div>
      <section className=" flex justify-center ">
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
                {}
              </motion.h1>
              <motion.p
                className={`${text.Extratext}  max-w-2xl `}
                variants={fadeInUp}
              >
                {}
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
                src="/industry/iiot/heroimage/iiotindustry.png"
                alt={"iiot image"}
                fill
                className="object-contain md:object-contain overflow-visible rounded-4xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

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
                    alt={"iiot image"}
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
                    {IIOT.whychose &&
                      Array.isArray(IIOT.whychose) &&
                      IIOT.whychose.map((whychose, idx) => {
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
                              {/* <p
                                className={`${text.cardBodytextlight}text-sm text-gray-600 leading-relaxed`}
                              >
                                {whychose.description}
                              </p> */}
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

      </section>
    </div>
  );
}


