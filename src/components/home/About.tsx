"use client"

import { TextReveal } from "../magicui/text-reveal";
import { text } from "../../lib/typography";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function About() {
  return (
    <section className="relative py-24 bg-company-light-light-gray">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-block px-4 py-1.5 rounded-full bg-company-white mb-6"
              >
                <span className="text-sm font-medium tracking-wider text-company-text-gray">
                  ABOUT US
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className={`${text.Sectiontext} text-company-black mb-6`}
              >
                Why Choose Vithsutra
              </motion.h2>
            </motion.div>
            
            <TextReveal className="text-company-text-gray text-base leading-relaxed">
              To revolutionize how businesses interact with technology by creating
              intelligent, integrated solutions that anticipate future challenges
              and place our clients at the forefront of digital transformation. By
              2030, we aim to be a global leader in technological innovation,
              empowering organizations across continents to achieve unprecedented
              efficiency, growth, and competitive advantage.
            </TextReveal>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10"
            >
              <a 
                href="/about" 
                className="inline-flex items-center gap-2 bg-company-blue text-white px-8 py-3.5 rounded-full hover:bg-company-blue-dark transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Video Content */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-[28px] bg-company-white shadow-xl group">
                <video 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay 
                  loop 
                  muted
                  playsInline
                >
                  <source src="/video/video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
