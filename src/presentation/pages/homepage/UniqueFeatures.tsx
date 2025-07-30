"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/shared/lib/animations";
 import Image from "next/image";
import { text } from "@/shared/lib/typography";
import Heading from "@/presentation/components/ui/heading";

const FeatureCard = ({
  title,
  description,
  image,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  delay?: number;
}) => (
  <motion.div
    className="relative bg-white/5 backdrop-blur-sm border rounded-2xl p-company-lg-24 h-full flex flex-col justify-end overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: 0.1,
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: delay + 0.2, duration: 1 }}
      className="gap-5 justify-center"
    >
      <div className="relative w-full h-64 md:h-72 mb-6 rounded-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div>
        <h3
          className={`${text.cardHeadingtext}  mb-company-xs-8 text-company-primary-royalBlue`}
        >
          {title}
        </h3>
        <p className={`${text.cardBodytext} text-company-dark-gray`}>
          {description}
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export default function UniqueFeatures() {
  return (
    <section className="relative py-16 md:py-24">
      <motion.div
        className="relative z-10 max-w-company-section-width mx-auto px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Heading heading="UNIQUE" Display="What Makes Us Unique" />
        </motion.div>

        <div className="flex flex-col gap-company-lg-24 mt-12 ">
          <div className="flex flex-wrap gap-company-lg-24">
            <div className="w-full md:w-7/12 h-[50vh]">
              <FeatureCard
                title="24/7 Support"
                description="Round-the-clock assistance ensuring your business never stops. Our dedicated team is always ready to help you succeed."
                delay={0.2}
                image="/home/what_makes_us_unique/image 50.svg"
              />
            </div>
            <div className="w-full md:w-4/12 h-[50vh]">
              <FeatureCard
                title="Latest Technology"
                description="Stay ahead with cutting-edge solutions and innovative approaches to modern business challenges."
                delay={0.4}
                image="/home/what_makes_us_unique/image 48.svg"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-company-lg-24">
            <div className="w-full md:w-4/12 h-[50vh]">
              <FeatureCard
                title="Cloud-Based Service"
                description="Access your data and services from anywhere, anytime. Secure, scalable, and reliable cloud infrastructure."
                delay={0.6}
                image="/home/what_makes_us_unique/image 49.svg"
              />
            </div>
            <div className="w-full md:w-7/12 h-[50vh]">
              <FeatureCard
                title="Customizable Software"
                description="Tailored solutions that adapt to your specific needs. We build software that grows with your business."
                delay={0.8}
                image="/home/what_makes_us_unique/image 51.svg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
