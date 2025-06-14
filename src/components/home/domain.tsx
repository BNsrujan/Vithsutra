"use client";

import { text } from "@/lib/typography";
import { ArrowUpRightIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
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
    {
      title: "Robotics & Automation",
      description:
        "Advanced robotics solutions that optimize, automate operations and improve efficiency",
      bgImage: "/robotics/image.png",
    },
  ];

  return (
    <section className="relative py-24 bg-company-light-light-gray overflow-hidden">
      <div className="max-w-[1400px] mx-auto px">
        <div className="mx-auto  pb-12">
              <div className="inline-block   rounded-full bg-company-light-light-gray ">
                <span className="text-sm font-medium tracking-wider text-company-text-gray">
                  FEATURED
                </span>
              </div>
        
              <h1 className={`${text.Sectiontext} text-company-black mb-6`}>
                Automation at All Levels
              </h1>
            </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols- gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative aspect-video  rounded-[28px] overflow-hidden bg-company-white transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-company-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={feature.bgImage}
                alt={feature.title}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-5xl font-bold text-white mb-3  group-hover:text-company-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-company-light-gray text-md leading-relaxed group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                 
                </motion.div>
                <button className="absolute  right-8 bg-company-white rounded-full p-5 transition-all duration-300 group-hover:bg-company-primary-royalBlue group-hover:text-white">
                    <ArrowUpRightIcon
                      className="h-5 w-5 text-company-text-gray group-hover:text-white transition-colors"
                      strokeWidth={2.5}
                    />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );


}
