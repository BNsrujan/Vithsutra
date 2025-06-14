// components/FlipText.tsx
"use client";

import { text } from "@/lib/typography";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Low Cost automation ", "IIOT", "Robotics"];

export default function FlipText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${text.Sectionbodytext} relative h-16 w-full text-center text-4xl font-bold text-[var(--company-blue-black)]`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
