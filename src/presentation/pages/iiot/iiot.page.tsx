"use client";

import { Button } from "@/presentation/components/ui/button.ui";
import Image from "next/image";
import { IIOT } from "@/infrastructure/data/domain/iiot_pages.data";
import { typography } from "@/shared/lib/typography";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp, fadeInDown } from "@/shared/lib/motion";
import Heading from "@/presentation/components/ui/heading.ui";
import { ProcessStepCard } from "@/presentation/components/productstemplate/process_step_card.section";
import { FeatuerCard } from "@/presentation/components/productstemplate/feature.section";
import { useRouter } from "next/navigation";
import {
  Card,
  Carousel,
} from "@/presentation/components/ui/application_card.component";
import TestimonialsCarousel from "@/presentation/components/testimonials.section";
import Faq from "@/presentation/components/faq.section";
import QuickFacts from "@/presentation/components/quick_factes.section";

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
              className={`${typography.title.large}  max-w-2xl `}
              variants={fadeInUp}
            >
              At VithSutra, we harness the power of Industrial Internet of
              Things (IIoT) to revolutionize factory operations. Our advanced
              services integrate with PLCs, VFDs, SCADA systems, and sensors to
              capture real-time data, transform it through intelligent analysis,
              and present it via intuitive dashboards - so you can optimize
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-[90vw] sm:w-full md:w-[500px] lg:w-[700px] max-w-full overflow-hidden rounded-[28px]"
          >
            <Image
              src="/industry/iiot/heroimage/iiotindustry.png"
              alt={"iiot image"}
              fill
              className="object-contain md:object-contain overflow-hidden rounded-4xl"
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

        {/* About Section */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] flex">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-company-section-width w-full flex flex-col lg:flex-row-reverse items-center justify-between h-full py-12 md:py-20 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-[200px] sm:h-[260px] md:h-[350px] lg:h-[400px] flex justify-center items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative h-full w-full max-w-md lg:max-w-none rounded-company-section-24 overflow-hidden"
              >
                <Image
                  src={"/industry/iiot/heroimage/heroimage.svg"}
                  alt={"iiot image"}
                  fill
                  className="object-contain lg:object-cover rounded-company-section-24"
                  priority
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-black flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 md:space-y-6 lg:space-y-8 max-w-2xl"
              >
                <motion.h1
                  className={`${typography.display.medium}`}
                  variants={fadeInDown}
                >
                  What Is IIoT?
                </motion.h1>
                <motion.p
                  className={`${typography.title.large} text-base sm:text-lg md:text-xl leading-relaxed`}
                  variants={fadeInUp}
                >
                  Industrial IoT, or Industrial Internet of Things, means
                  networking industrial machines and sensors to continuously
                  collect, exchange, and analyze data. This enables real-time
                  monitoring, predictive maintenance, automated alerts, and
                  data-driven decision-making across operations.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* why Choose VithSutra's IIoT Solutions Section  */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] w-full ">
          <div className="mx-auto px-4 sm:px-0 max-w-company-section-width w-full flex flex-col lg:flex-row items-center justify-between h-full py-12 md:py-20 gap-8 lg:gap-12">
            <div className="w-full  text-black flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 md:space-y-6"
              >
                <motion.h1
                  className={`${typography.display.large}`}
                  variants={fadeInDown}
                >
                  Why Choose VithSutra&apos;s IIoT Solutions?
                </motion.h1>
                <motion.p
                  className={`${typography.title.large}`}
                  variants={fadeInUp}
                >
                  Our IIoT platform delivers comprehensive industrial automation
                  with seamless connectivity, real-time monitoring, and
                  intelligent analytics to transform your manufacturing
                  operations.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div>{IIOT.whychose && <FeatuerCard features={IIOT.whychose} />}</div>
        </section>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-company-section-width w-full">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <Heading
              heading="Real-time data. Smarter decisions. Seamless automation."
              Display="How VithSutra's IIoT Automation Works"
              className="flex flex-col-reverse"
            />
          </div>
          <div className="grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 Ptp">
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
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-company-section-width w-full">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <Heading
              heading="Designed for factories. Engineered for intelligence"
              Display="Built-in Features"
              className="flex flex-col-reverse"
            />
          </div>
          <FeatuerCard features={IIOT.builtinFeature} />
        </div>
      </section>

      {/* Application section */}
      <section className="py-12 md:py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto px-4 sm:px-6  w-full">
          <div className="mb-8">
            <Heading Display="APPLICATION" heading="Use Cases"/>
          </div>

          <div className="flex justify-center items-center w-full h-[350px] sm:h-[400px] md:h-[820px] relative">
            <Carousel
              items={IIOT.applications.map((app, index) => (
                <Card
                  key={index}
                  card={{
                    src: app.image,
                    title: app.industry || " ",
                    category: "Industry",
                    content: <div>{app.description}</div>,
                  }}
                  index={index}
                />
              ))}
            />
          </div>
        </div>
      </section>

      {/* Testimonial  */}
      <TestimonialsCarousel
        testimonials={IIOT.testimonials}
        key={`iiot-testimonials`}
      />

      <Faq FaQ={IIOT.faq} key={`iiot-faq`} />

      <QuickFacts facts={IIOT.facts} key={`iiot-facts`}/>
    </div>
  );
}
