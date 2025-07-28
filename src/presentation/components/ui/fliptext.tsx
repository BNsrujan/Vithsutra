// components/FlipText.tsx
"use client";

import { text } from "@/shared/lib/typography";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "Idea to Product",
  "Industrial Automation",
  "IIoT Solutions",
  "Industrial Robotics",
  "Training & Projects",
];

export default function FlipText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex  justify-center w-full  content-center    ">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ 
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1]
          }}
          className=" flex items-center justify-center md:justify-start p-0 m-0 w-full md:min-w-[390px]"
        >
          <span className={`${text.Sectionprefixtext}  text-[var(--company-primary-royalBlue)]`}>
            {words[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
