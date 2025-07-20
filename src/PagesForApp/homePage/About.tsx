"use client"

import { text } from "../../lib/typography";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { aboutSection, aboutContent, aboutVideo } from "@/lib/animations";

export default function About() {
  return (
    <section className="h-full md:h-screen flex justify-center items-center">
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
            <SectionHeader 
              label="ABOUT US"
              title="Why Choose Vithsutra"
            />
            
            <motion.p 
              className={`${text.Extratext} text-[var(--company-mid-gray)]`}
              variants={aboutContent}
              viewport={{ once: true, margin: "-100px" }}
            >
              To be a global leader in IoT and robotics, delivering precision-engineered products that seamlessly blend advanced technology with elegant design. We envision a world where simplicity drives innovation, and every solution we create empowers businesses and individuals through reliable, beautifully crafted technology.
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
