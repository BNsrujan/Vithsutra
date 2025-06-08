"use client"

import { TextReveal } from "../magicui/text-reveal";
import { text } from "../../lib/typography";
import * as motion from "motion/react-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <section className="relative py-24 bg-company-light-light-gray">
      <div className=" mx-auto ">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2 p-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <motion.div 
                variants={itemVariants}
                className="inline-block rounded-full bg-company-white "
              >
                <span className="text-sm font-medium tracking-wider text-company-text-gray">
                  ABOUT US
                </span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className={`${text.Sectiontext} text-company-black `}
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

          </div>

          {/* Video Content */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2  relative z-0 h-[190vh] "
          >
            <div className="sticky top-0 mx-auto flex  max-w-4xl items-center bg-transparent px-[1rem] py-[5rem] ">
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

               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
