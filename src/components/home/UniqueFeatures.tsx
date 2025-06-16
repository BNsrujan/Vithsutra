"use client";

import React from "react";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { containerVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";
import { Skeleton } from "../ui/Skeleton";



export default function UniqueFeatures() {
  return (
    <section className="">
      <motion.div
        className="h-full mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader label="UNIQUE" title="What Makes Us Unique" />
        <div className="flex flex-col gap-[24px] h-full md:h-screen">
          <div className="w-full flex flex-wrap  gap-[24px] md:h-1/2">
            <div className="w-full md:w-7/12 ">
            <Skeleton/>
            </div>
            <div className="w-full md:w-4/12">
            <Skeleton/>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-[24px] md:h-1/2">
            <div className="md:w-4/12 w-full ">
            <Skeleton/>
            </div>
            <div className="md:w-7/12 w-full ">
            <Skeleton/>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
