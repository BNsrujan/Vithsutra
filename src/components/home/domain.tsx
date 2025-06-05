"use client";

import { text } from "@/lib/typography";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

export default function WeOfferSection() {
  const texts = ["We Offer", "IIoT", "Robotics"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate through texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "IoT Solutions",
      description:
        "Smart, connected systems that provide real-time insights and control",
      bgImage: "/iot_images/image.png",
    },
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgImage: "/robotics/image.png",
    },
  ];

  return (
    <section className="relative py-24 bg-company-light-light-gray overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-company-white mb-6">
            <span className="text-sm font-medium tracking-wider text-company-text-gray">
              OUR SOLUTIONS
            </span>
          </div>
          <h2 className={`${text.Sectiontext} text-company-black mb-6`}>
            We Offer
          </h2>
        </motion.div>

        {/* Animated Text Section */}
        <div className="relative h-[50vh] flex items-center justify-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-20"
          >
            {texts.map((text, index) => (
              <motion.h3
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : 20
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="text-4xl md:text-5xl lg:text-6xl text-company-blue font-bold absolute inset-0 flex items-center justify-center"
              >
                {text}
              </motion.h3>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group relative aspect-video rounded-[28px] overflow-hidden bg-company-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-company-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={feature.bgImage}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-company-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-company-text-gray text-sm leading-relaxed group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
