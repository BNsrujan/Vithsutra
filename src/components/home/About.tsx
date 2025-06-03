"use client"

import { TextReveal } from "../magicui/text-reveal";
import { text } from "../../lib/typography";
import { motion } from "motion/react"
import { containerVariants, itemVariants } from "../../lib/motion";

export default function About() {
  return (
    <section className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-6 sm:mb-8"
            >
              <motion.h2 
                variants={itemVariants}
                className={`${text.cardHeadingtext} text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
              >
                Why Choose Vithsutra.
              </motion.h2>
            </motion.div>
            
            <TextReveal className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Ton revolutionize how businesses interact with technology by creating
              intelligent, integrated solutions that anticipate future challenges
              and place our clients at the forefront of digital transformation. By
              2030, we aim to be a global leader in technological innovation,
              empowering organizations across continents to achieve unprecedented
              efficiency, growth, and competitive advantage.
            </TextReveal>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <a 
                href="/about" 
                className="inline-block bg-company-blue text-white px-6 py-3 rounded-lg hover:bg-company-blue-dark transition-colors shadow-lg text-sm sm:text-base"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Video Content */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">
              <div className="aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-xl bg-gray-100 shadow-xl">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                >
                  <source src="/video/video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
