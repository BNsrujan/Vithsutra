"use client";

import React from "react";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";
import { Skeleton } from "../ui/Skeleton";

const features = [
  {
    title: "Innovation First",
    description:
      "Pioneering cutting-edge solutions in industrial automation and IoT",
    icon: "🚀",
  },
  {
    title: "Expert Team",
    description:
      "Highly skilled professionals with decades of industry experience",
    icon: "👥",
  },
  {
    title: "Global Reach",
    description:
      "Delivering solutions across multiple continents and industries",
    icon: "🌍",
  },
  {
    title: "Future Ready",
    description:
      "Constantly evolving with emerging technologies and market trends",
    icon: "⚡",
  },
];

export default function UniqueFeatures() {
  return (
    <section className="py-24 h-screen">
      <motion.div
        className="h-full mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader label="UNIQUE" title="What Makes Us Unique" />
        <div className=" flex flex-col gap-[24px] h-full">
          <div className="w-full flex gap-[24px] h-1/2">
            <div className="w-2/3 ">
            <Skeleton/>
            </div>
            <div className="w-1/3">
            <Skeleton/>
            </div>
          </div>
          <div className="w-full flex gap-[24px] h-1/2">
            <div className="w-1/3 ">
            <Skeleton/>
            </div>
            <div className="w-2/3">
            <Skeleton/>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
