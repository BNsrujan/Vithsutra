"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm border rounded-[28px] p-6 h-full flex flex-col justify-end"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div>
      <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

export default function UniqueFeatures() {
  return (
    <section className="">
      <motion.div
        className="h-full mx-auto md:px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader label="UNIQUE" title="What Makes Us Unique" />
        <div className="flex flex-col gap-[24px] h-full">
          <div className="w-full flex flex-wrap gap-[24px]">
            <div className="w-full md:w-7/12 h-[50vh]">
              <FeatureCard 
                title="24/7 Support"
                description="Round-the-clock assistance ensuring your business never stops. Our dedicated team is always ready to help you succeed."
              />
            </div>
            <div className="w-full md:w-4/12 h-[50vh]">
              <FeatureCard 
                title="Latest Technology"
                description="Stay ahead with cutting-edge solutions and innovative approaches to modern business challenges."
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-[24px]">
            <div className="w-full md:w-4/12 h-[50vh]">
              <FeatureCard 
                title="Cloud-Based Service"
                description="Access your data and services from anywhere, anytime. Secure, scalable, and reliable cloud infrastructure."
              />
            </div>
            <div className="w-full md:w-7/12 h-[50vh]">
              <FeatureCard 
                title="Customizable Software"
                description="Tailored solutions that adapt to your specific needs. We build software that grows with your business."
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
