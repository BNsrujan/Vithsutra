"use client"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function Testingground() {
  const texts = ["We Offer", "IIT", "Robotics"]
  const { scrollYProgress } = useScroll()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Listen to scroll changes and update currentIndex
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      texts.length - 1,
      Math.floor(latest * texts.length)
    )
    setCurrentIndex(newIndex)
  })

  return (
    <div className="h-[300vh] relative bg-gray-50 w-screen">
      <div className="sticky top-1/2 -translate-y-1/2 w-full h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute text-9xl font-bold text-gray-900"
          >
            {texts[currentIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      
    </div>
  )
}

//   industries: {
//   title: "Industry Solutions",
//   description: "Discover our comprehensive solutions tailored for various industries.",
//   href: "/industries",
//   items: [
//     { title: "Automotive", description: "Smart manufacturing and automation solutions", href: "/industries/automotive" },
//     { title: "Logistics", description: "Intelligent logistics and supply chain solutions", href: "/industries/logistics" },
//     { title: "FMOG", description: "Fast Moving Consumer Goods solutions", href: "/industries/fmog" },
//     { title: "Chemical & Pharma", description: "Advanced automation and compliance solutions", href: "/industries/chemical-pharma" },
//     { title: "Plastics & Polymers", description: "Smart manufacturing and quality control", href: "/industries/plastics-polymers" },
//     { title: "Metal & Machining", description: "Precision manufacturing solutions", href: "/industries/metal-machining" },
//     { title: "New Energy", description: "Renewable energy and smart grid solutions", href: "/industries/new-energy" },
//     { title: "Healthcare", description: "Healthcare automation and patient care", href: "/industries/healthcare" },
//     { title: "Retail", description: "Retail automation and customer experience", href: "/industries/retail" },
//     { title: "Manufacturing", description: "Industry 4.0 and smart manufacturing", href: "/industries/manufacturing" },
//     { title: "Education", description: "Smart learning and campus management", href: "/industries/education" },
//   ]
// },