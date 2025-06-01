// pages/index.js
"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

  const texts = ["We Offer", "IIT", "Robotics"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[300vh] relative bg-gray-50 w-screen">
      {/* This sticky container stays centered in viewport */}
      <div className="sticky top-1/2 -translate-y-1/2 w-full h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute text-5xl font-bold text-gray-900"
          >
            {texts[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* filler content so you can scroll */}
      <div className="space-y-96 pt-96">
        <p className="text-center text-gray-500">Watch the text transition</p>
        <p className="text-center text-gray-500">…and again…</p>
        <p className="text-center text-gray-500">…and once more!</p>
      </div>
    </div>
  );
}
