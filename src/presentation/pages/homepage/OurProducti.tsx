"use client";

import { motion } from "framer-motion";
import { containerVariants } from "@/shared/lib/animations";
 import React from "react";
import { Carousel, Card } from "@/presentation/components/ui/productscard";
import { biometricProduct, rfidProduct, hydroponicProduct } from "@/data/prodcuts-data/prodcut";
import Heading from "@/presentation/components/ui/heading";

// Create an array of products
const products = [biometricProduct, rfidProduct, hydroponicProduct];

export default function CardSection() {
  return (
    <section className=" ">
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
          <Heading 
            heading="FEATURED"
            Display="Our Products"
          />
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className=""
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
          <Carousel items={products.map((card, index) => (
            <Card
              key={card.id}
              card={{
                src: card.tecnicalimage,
                title: card.name,
                category: card.tagline || "",
                content: (
                  <div className=" grid  gap-company-lg-24">
                    <p className="text-lg text-gray-600 dark:text-gray-300">{card.description}</p>
                    <a 
                      href={card.link}
                      className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Learn more →
                    </a>
                  </div>
                ),
                link: card.link
              }}
              index={index}
            />
          ))} />
        </motion.div>
      </motion.div>
    </section>
  );
}
