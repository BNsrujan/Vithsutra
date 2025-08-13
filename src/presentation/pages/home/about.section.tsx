"use client";

import { typography } from "../../../shared/lib/typography";
import { motion } from "framer-motion";
import { aboutSection, aboutContent, aboutVideo } from "@/shared/lib/motion";
import Heading from "@/presentation/components/ui/heading.ui";

export default function About() {
  return (
    <section className="h-full md:h-[750px] flex justify-center max-w-company-section-width items-center ">
      <div className="mx-auto">
        <motion.div
          className="flex md:flex-row flex-col items-center gap-company-lg-24 w-full"
          variants={aboutSection}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="w-full lg:w-2/3"
            variants={aboutContent}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Heading heading="" Display="Why Choose Vithsutra" />

            <motion.p
              className={`${typography.title.large}  text-[var(--company-mid-gray)]`}
              variants={aboutContent}
              viewport={{ once: true, margin: "-100px" }}
            >
              To be a global leader in IoT and robotics, delivering
              precision-engineered products that seamlessly blend advanced
              technology with elegant design. We envision a world where
              simplicity drives innovation, and every solution we create
              empowers businesses and individuals through reliable, beautifully
              crafted technology.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/3 h-full"
            variants={aboutVideo}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-video w-full overflow-hidden rounded-company-card-16  shadow-xl">
              <video
                className="w-full h-full object-cover m-0 p-0"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
