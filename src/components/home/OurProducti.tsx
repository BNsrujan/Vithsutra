"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";
import React from "react";
import { Carousel, type CarouselItem } from "../ui/carousel";

// Define the card data type
type Card = {
  id: number;
  title: string;
  description: string;
  image?: string;
  tag: string;
  category: "Featured" | "IIoT" | "Robotics" | "Automation";
};

// Sample data
const cards: Card[] = [
  {
    id: 1,
    title: "Smart Factory Solutions",
    description:
      "Revolutionizing manufacturing through advanced IIoT sensors and real-time monitoring systems.",
    image: "/robotics/Smart_Manufacturing.png",
    tag: "IIoT",
    category: "IIoT",
  },
  {
    id: 2,
    title: "Industrial Robotics",
    description:
      "State-of-the-art robotic systems for precision manufacturing and assembly operations.",
    image: "/appli_image_iiot/Smart-robots.jpg",
    tag: "Robotics",
    category: "Robotics",
  },
  {
    id: 3,
    title: "Process Automation",
    description:
      "Streamlining industrial processes with cutting-edge automation technologies.",
    image: "/appli_image_iiot/Industrial-Automation.jpg",
    tag: "Automation",
    category: "Automation",
  },
  {
    id: 4,
    title: "Predictive Maintenance",
    description:
      "AI-powered systems for predictive maintenance and equipment optimization.",
    image: "/robotics/The-Future-of-Industrial-IoT.png",
    tag: "IIoT",
    category: "IIoT",
  },
];

export default function CardSection() {
  const [activeFilter, setActiveFilter] = useState<string>("Featured");

  const filters = ["Featured", "IIoT", "Robotics", "Automation"];

  const filteredCards = cards.filter((card) =>
    activeFilter === "Featured" ? true : card.category === activeFilter
  );

  // Convert cards to carousel items
  const carouselItems: CarouselItem[] = filteredCards.map(card => ({
    image: card.image || "",
    caption: card.title,
    link: `/${card.title}`,
    description: card.description,
    tag: card.tag
  }));

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-[1800px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader 
          label="FEATURED"
          title="Our Products"
        />

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 md:overflow-x-auto pb-2 sm:pb-0"
          variants={containerVariants}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              variants={itemVariants}
              custom={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full ${text.Buttontext} transition-all border-2 border-company-litest-gray duration-300 whitespace-nowrap
                ${
                  activeFilter === filter
                    ? "bg-[var(--company-primary-royalBlue)] text-[var(--company-white)] "
                    : "bg-company-white text-company-mid-gray hover:bg-[var(--company-litest-gray)] border border-[var(--company-light-gray)]"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative md:overflow-hidden">
          <Carousel 
            items={carouselItems}
            variant="product"
            autoPlay={true}
            interval={5000}
            showIndicators={true}
            showNavigation={true}
          />
        </div>
      </motion.div>
    </section>
  );
}
