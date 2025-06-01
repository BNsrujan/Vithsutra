"use client";

import { text } from "@/lib/typography";
import { VideoText } from "@/components/magicui/video-text";
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
    <div className="relative justify-center contain-content">
      <h2 className={`${text.displaySectiontext} sticky top-20 `}>we offer</h2>
    <div className="relative h-[300vh] z-20   ">
      <div className="sticky top-1/2 -translate-y-1/2  h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={` ${text.Displaytext} absolute font-bold text-gray-900`}
          >
            {texts[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}
