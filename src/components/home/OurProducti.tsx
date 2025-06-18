"use client";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Define the card data type
type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
  caption: string;
  link: string;
};

// Sample data
const cards: Card[] = [
  {
    id: 1,
    title: "Biometric Product",
    description:
      "Affordable biometric access with cloud dashboard & real-time monitoring.",
    image: "/robotics/Smart_Manufacturing.png",
    tag: "Security",
    caption: "Biometric Access",
    link: "/solutions/biometric"
  },
  {
    id: 2,
    title: "RFID-Based Telephone",
    description:
      "Secure RFID calling system with student-specific digital balance recharge.",
    image: "/appli_image_iiot/Smart-robots.jpg",
    tag: "Communication",
    caption: "RFID Telephone",
    link: "/solutions/rfid-telephone"
  },
  {
    id: 3,
    title: "Hydroponic Controller",
    description:
      "Smart farming with sensor-driven precision and real-time farm stats display.",
    image: "/appli_image_iiot/Industrial-Automation.jpg",
    tag: "Agriculture",
    caption: "VIthNet Device",
    link: "/solutions/hydroponic"
  },
  {
    id: 4,
    title: "Robotics Training Kit",
    description:
      "Hands-on robotics education using real industrial cobots like IGUS ReBeL.",
    image: "/robotics/The-Future-of-Industrial-IoT.png",
    tag: "Education",
    caption: "Training Kit",
    link: "/solutions/robotics-training"
  },
];

export default function CardSection() {
  return (
    <section className="py-16 md:py-24 md:px-4 sm:px-4 lg:px-8">
      <motion.div 
        className="mx-auto "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <SectionHeader 
            label="FEATURED"
            title="Our Products"
          />
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className="relative md:overflow-hidden "
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
          <Carousel items={cards.map((card) => (
            <Card
              key={card.id}
              card={{
                src: card.image,
                title: card.title,
                category: card.tag,
                content: (
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 dark:text-gray-300">{card.description}</p>
                    <a 
                      href={card.link}
                      className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Learn more →
                    </a>
                  </div>
                )
              }}
              index={card.id - 1}
            />
          ))} />
        </motion.div>
      </motion.div>
    </section>
  );
}
