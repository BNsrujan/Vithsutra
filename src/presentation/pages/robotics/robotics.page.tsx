"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/presentation/components/ui/button.ui";
import { typography } from "@/shared/lib/typography";
import { motion } from "motion/react";
import { containerVariants, fadeInUp, fadeInDown } from "@/shared/lib/motion";
import { useRouter } from "next/navigation";
import Heading from "@/presentation/components/ui/heading.ui";
import { Robotics } from "@/data/domain/robotics_page.data";
import {
  Carousel,
  Card as CarouselCard,
} from "@/presentation/components/ui/application_card.component";
import TestimonialsCarousel from "@/presentation/components/testimonials.section";
import Faq from "@/presentation/components/faq.section";
import IndustrySkillsHighlights from "@/presentation/components/industrialskills.component";
import Training from "../training/training.page";

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
              Robotics: Beyond the Basics
            </motion.h1>
            <motion.p
              className={`${typography.title.large}  max-w-2xl `}
              variants={fadeInUp}
            >
              Robotics is the science of designing and controlling machines that
              can perform tasks with precision, often replicating human actions.
              While most students are introduced to basic robots using sensors
              or Arduino kits, industrial robotics involves advanced robotic
              arms used in real-world sectors like manufacturing, logistics, and
              healthcare.
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
              src="/industry/robotics/herosection/image.png"
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

export default function RoboticsPage() {
  return (
    <div className="">
      {/* hero section */}
      <HeroSectionIIot />

      <section className="relative min-h-[70vh]     ">
        <div className="mx-auto px-4 sm:px-0 max-w-company-section-width flex flex-wrap-reverse items-center justify-between  h-full py-20 gap-company-xl-48 md:gap-0">
          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px]  md:min-h-[400px] md:pr-7  flex justify-center   overflow-hidden items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative h-full   w-full max-w-full  rounded-company-section-24"
            >
              <Image
                src={"/industry/robotics/herosection/why.svg"}
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
                Why Introduce Industrial Robotics Training?
              </motion.h1>
              <IndustrySkillsHighlights />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative min-h-[70vh]  w-full  ">
        <div className="container mx-auto px-4 sm:px-0 max-w-company-section-width flex flex-wrap   justify-between items-end h-full py-20  md:gap-0">
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
                How Vithsutra’s Robotics Training Can Help You?
              </motion.h1>
              <motion.p
                className={`${typography.body.large} md:max-w-2xl w-full  `}
                variants={fadeInUp}
              >
                At Vithsutra, we offer customized industrial robotics training
                programs tailored specifically for colleges and schools. Our
                core goal is to introduce real industrial automation to students
                from an early stage - making them industry-ready before they
                graduate.
              </motion.p>
            </motion.div>
          </div>

          <div className="md:w-1/2 mx-auto pt-company-xl-48 md:pt-0 px-company-lg-24 w-full">
            <Heading heading="FEATURES" Display="Key Features" />
            <div className="pt-company-xl-48">
              <div className="grid grid-cols-1 gap-company-sm-12  ">
                {Robotics.whychose &&
                  Array.isArray(Robotics.whychose) &&
                  Robotics.whychose.map((whychose, idx) => {
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
                          <div className="w-20 h-20 bg-blue-50 border border-blue-200 rounded-company-button-8  flex items-center justify-center">
                            {IconComponent}
                          </div>
                        </div>
                        <div className="flex-1 justify-center h-full">
                          <h3
                            className={` ${typography.title.large}  text-gray-900 `}
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

      {/* Application */}
      <section className="py-16 px-4 md:px-0 md:py-24 overflow-hidden relative ">
        <div className="mt-company-xl-48 ">
          <div className="md:py-company-lg-24">
            <div className="max-w-company-section-width mx-auto w-full">
              <Heading Display="APPLICATION" heading="Use Cases" />
              <div className="flex justify-center items-center w-full h-[400px] md:h-[750px] min-h-96 relative ">
                <Carousel
                  items={Robotics.application.map((app, index) => (
                    <CarouselCard
                      key={index}
                      card={{
                        src: app.image,
                        title: app.title || " ",
                        category: "Industry",
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
      <TestimonialsCarousel
        testimonials={Robotics.testimonials}
        key={`robotics-testimonials`}
      />
      <Training />

      <Faq FaQ={Robotics.faq} key={`robotics-faq`} />
    </div>
  );
}
