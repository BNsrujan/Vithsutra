"use client"

import { TextReveal } from "../magicui/text-reveal";
import { text } from "../../lib/typography";
import { motion } from "motion/react"
import { containerVariants, itemVariants } from "../../lib/motion";


export default function About() {
  return (
    <section
      id=""
      className="flex h-screen flex-wrap-reverse mt-[1500px] lg:mt-[900px] justify-center lg:flex-row  lg:justify-between "
    >
      <div className=" ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${text.cardHeadingtext} dark:text-white  text-company-black -mb-24 pl-15`}
        >
          <motion.span variants={itemVariants}>
            Why Choose Vithsutra.
          </motion.span>
        </motion.div>
        <TextReveal className="dark:text-company-blue-black ">
          Ton revolutionize how businesses interact with technology by creating
          intelligent, integrated solutions that anticipate future challenges
          and place our clients at the forefront of digital transformation. By
          2030, we aim to be a global leader in technological innovation,
          empowering organizations across continents to achieve unprecedented
          efficiency, growth, and competitive advantage.
        </TextReveal>
      </div>

      <div className=" h-[100vh]  lg:h-[200vh]">
        <div className="sticky top-0 mx-auto w-full flex max-w-4xl items-center bg-transparent  py-[6rem]  p-1 lg:mt-0 ">
          <div className="w-full h-full md:w-96  md:h-96  overflow-hidden rounded-lg bg-company-light-light-gray">
            <video width="380" height="240" autoPlay loop controls>
              <source src="video/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
