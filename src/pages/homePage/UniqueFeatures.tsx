"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";

const FeatureCard = ({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) => (
  <motion.div
    className="relative bg-white/5 backdrop-blur-sm border rounded-[28px] p-6 h-full flex flex-col justify-end"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      type: "spring",
      stiffness: 50,
      damping: 20,
      delay: 0.2
    }}
  >
    <div className=" absolute  blur-[2px] z-10 md:hiddden md:top-80 top-20 right-0  w-full h-full">
        <Image 
          src="/logo/company_logo_without_text.png" 
          alt="Company Logo" 
          width={5000} 
          height={5000}
          className="opacity-10"
        />
      </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: delay + 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-company-gray-text">{description}</p>
    </motion.div>
  </motion.div>
);

export default function UniqueFeatures() {
  return (
    <section className="relative  md:py-24">
      <div className="hidden md:absolute md:top-80 w-full h-full">
        <Image 
          src="/logo/company_logo_without_text.png" 
          alt="Company Logo" 
          width={5000} 
          height={5000}
          className="opacity-10"
        />
      </div>
      <motion.div
        className="h-full mx-auto md:px-4 max-w-[1400px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader label="UNIQUE" title="What Makes Us Unique" />
        </motion.div>
        
        <div className="flex flex-col gap-[24px] h-full mt-12">
          <div className="w-full flex flex-wrap gap-[24px]">
            <div className="w-full md:w-7/12 h-[50vh]">
              <FeatureCard 
                title="24/7 Support"
                description="Round-the-clock assistance ensuring your business never stops. Our dedicated team is always ready to help you succeed."
                delay={0.2}
              />
            </div>
            <div className="w-full md:w-4/12 h-[50vh]">
              <FeatureCard 
                title="Latest Technology"
                description="Stay ahead with cutting-edge solutions and innovative approaches to modern business challenges."
                delay={0.4}
              />
            </div>
          </div>
          
          <div className="w-full flex flex-wrap gap-[24px]">
            <div className="w-full md:w-4/12 h-[50vh]">
              <FeatureCard 
                title="Cloud-Based Service"
                description="Access your data and services from anywhere, anytime. Secure, scalable, and reliable cloud infrastructure."
                delay={0.6}
              />
            </div>
            <div className="w-full md:w-7/12 h-[50vh]">
              <FeatureCard 
                title="Customizable Software"
                description="Tailored solutions that adapt to your specific needs. We build software that grows with your business."
                delay={0.8}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
