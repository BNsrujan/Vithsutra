"use client";

import { text } from "@/lib/typography";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function WeOfferSection() {
  const texts = ["We Offer", "IIT", "Robotics"]
  const { scrollYProgress } = useScroll()
  const [currentIndex, setCurrentIndex] = useState(0)

  const features = [
    {
      title: "IoT Solutions",
      description:
        "Smart, connected systems that provide real-time insights and control",
      bgImage: "/iot.png",
    },
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgImage: "/robotics.png",
    },
  ];
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      texts.length - 1,
      Math.floor(latest * texts.length)
    )
    setCurrentIndex(newIndex)
  })

  return (
    <section className="relative min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className={`${text.displaySectiontext} text-gray-900 mb-12`}>
          We Offer
        </h2>
        
        <div className="relative h-[300vh]">
          <div className="sticky top-1/2 -translate-y-1/2 h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`${text.Displaytext} text-gray-900 font-bold`}
              >
                {texts[currentIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden bg-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
              <img
                src={feature.bgImage}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-200">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
