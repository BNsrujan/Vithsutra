"use client";
import {  typography } from "@/shared/lib/typography";
import { Button } from "@/presentation/components/ui/button.ui";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { heroContent } from "@/shared/lib/motion";
import FlipText from "@/presentation/components/ui/flip_text.ui";
import Backgroundimagelogo from "@/presentation/components/ui/background_image_logo.component";


export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative w-full">
      <div className="max-w-[1700px] mx-auto h-full">
        <div className="flex justify-center  h-full items-center w-full gap-8 min-h-[93vh] py-company-sm-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            className="relative flex flex-col py-company-md-16 justify-center md:items-start w-full  h-full space-y-company-lg-24"
            variants={heroContent}
            initial="initial"
            animate="animate"
          >
            <motion.div className=" space-y-company-xs-8 px-4 md:px-0 ">
              <motion.div
                className="flex flex-col justify-center md:justify-start md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className={`${typography.display.large}  w-auto text-center md:text-left flex-nowrap text-[var(--company-blue-black)]`}
                >
                  Our Expertise
                </span>
                <div className="w-full md:w-auto overflow-hidden md:min-w-[500px] lg:min-w-[490px] py-6 md:py-9 px-4  flex justify-center content-center h-[50px] md:h-[60px]">
                  <FlipText />
                </div>
              </motion.div>
              <motion.p
                className={`${typography.title.large} mt-[8px] md:mt-[8px] text-center md:text-left text-[var(--company-mid-gray)] max-w-4xl`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                At VithSutra, we build next-gen IoT and Robotics products that
                turn big ideas into practical solutions. From affordable
                automation tools to cutting-edge robotics training, our
                innovations bring Industry 4.0 to the masses.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant={"neumorphic"}
                onClick={() => router.push("/contact")}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
          >
          <Backgroundimagelogo />
          </motion.div>
            
        </div>
      </div>
    </div>
  );
}
