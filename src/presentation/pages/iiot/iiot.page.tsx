"use client";

import { Button } from "@/presentation/components/ui/button.ui";
import Image from "next/image";
import { IIOT } from "@/data/domain/iiot_pages.data";
import { typography } from "@/shared/lib/typography";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp, fadeInDown } from "@/shared/lib/motion";
import Heading from "@/presentation/components/ui/heading.ui";
import { ProcessStepCard } from "@/presentation/components/productstemplate/process_step_card.section";
import { FeatuerCard } from "@/presentation/components/productstemplate/feature.section";
import { useRouter } from "next/navigation";
import { Card, Carousel } from "@/presentation/components/ui/products_card.component";
import TestimonialsCarousel from "@/presentation/components/testimonials.section";
import Faq from "@/presentation/components/faq.section";

export function HeroSectionIIot() {
  const router = useRouter();
  return (
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
              className={`${typography.display.large} `}
              variants={fadeInDown}
            >
              Introduction Meet Our IIoT Automation
            </motion.h1>
            <motion.p
              className={`${typography.body.large}  max-w-2xl `}
              variants={fadeInUp}
            >
              At VithSutra, we harness the power of Industrial Internet of
              Things (IIoT) to revolutionize factory operations. Our advanced
              services integrate with PLCs, VFDs, SCADA systems, and sensors to
              capture real-time data, transform it through intelligent analysis,
              and present it via intuitive dashboards—so you can optimize
              performance, reduce downtime, and increase operational efficiency.
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
  );
}

export default function IIOTPages() {
  return (
    <div className="flex flex-col justify-center">
      <section className=" flex flex-col justify-center ">
        {/* Hero Section */}
        {HeroSectionIIot()}
        
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
                    src={"/industry/iiot/heroimage/heroimage.svg"}
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
                    className={`${typography.display.large} `}
                    variants={fadeInDown}
                  >
                    What Is IIoT?
                  </motion.h1>
                  <motion.p
                    className={`${typography.body.large} max-w-2xl `}
                    variants={fadeInUp}
                  >
                    Industrial IoT, or Industrial Internet of Things, means
                    networking industrial machines and sensors to continuously
                    collect, exchange, and analyze data. This enables real-time
                    monitoring, predictive maintenance, automated alerts, and
                    data-driven decision-making across operations .
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="relative min-h-[70vh]  w-full  ">
            <div className="container mx-auto px-4 sm:px-0 w-company-section-width flex flex-wrap-reverse   justify-between items-end h-full py-20  md:gap-0">
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
                    Why Choose VithSutra&apos;s IIoT Solutions?
                  </motion.h1>
                  <motion.p
                    className={`${typography.body.large} md:max-w-2xl max-w-64  `}
                    variants={fadeInUp}
                  >
                    Our IIoT platform delivers comprehensive industrial
                    automation with seamless connectivity, real-time monitoring,
                    and intelligent analytics to transform your manufacturing
                    operations.
                  </motion.p>
                </motion.div>
              </div>

              <div className="md:w-1/2 mx-auto px-company-lg-24 ">
                <Heading heading="FEATURES" Display="Key Features" />
                <div className="pt-company-xl-48">
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
                                className={` ${typography.title.large} pb-company-xs-8 text-gray-900 `}
                              >
                                {whychose.title}
                              </h3>
                              {/* <p
                                className={`${typography.body.medium} text-sm text-gray-600 leading-relaxed`}
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

      <section>
        <div className="py-company-xl-48 mx-auto md:flex-row max-w-company-section-width  gap-company-xl-48 w-full  ">
          <Heading
            heading="Simple, secure, and streamlined - our four-step process ensures reliable communication access"
            Display="How It Works"
            className="flex flex-col-reverse"
          />
          <div className="flex flex-col py-company-xl-48 md:flex-row items-center justify-between gap-company-xl-48 w-full">
            {IIOT.howItWorks?.map((step, idx, arr) => (
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

      {/* builtinFeature */}
      <section className=" h-screen  flex items-center justify-center ">
        <div className="max-w-company-section-width mx-auto">
        <Heading
          heading="Designed for factories. Engineered for intelligence"
          Display="Built-in Features"
          className="flex flex-col-reverse"
        />
        <FeatuerCard features={IIOT.builtinFeature} />
        </div>
      </section>


      {/* Application section */}
      <section className="py-16 px-4 md:px-0 md:py-24 overflow-hidden relative flex justify-center items-center">
        <div className="mt-company-xl-48 w-company-section-width">
          <div className="md:py-company-lg-24">
            <div className="max-w-company-section-width mx-auto w-full">
              <Heading Display="APPLICATION" heading="Use Cases" />
              <div className="flex justify-center items-center w-full h-[400px] md:h-[750px] min-h-96 relative ">
                <Carousel
                  items={IIOT.applications.map((app, index) => (
                    <Card
                      key={index}
                      card={{
                        src: app.image,
                        title: app.industry || " ",
                        category: "Industry",
                        link:"#",
                        content: <div>{app.description}</div>,
                        
                      }}
                      index={index}
                    />
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial  */}
      <TestimonialsCarousel testimonials={IIOT.testimonials} key={`iiot-testimonials`}/>


      <Faq FaQ={IIOT.faq} key={`iiot-faq`}/>

    </div>
  );
}
