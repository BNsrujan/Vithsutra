"use client";
import { typography } from "@/shared/lib/typography";
import { Button } from "@/presentation/components/ui/button.ui";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { heroContent } from "@/shared/lib/motion";
import FlipText from "@/presentation/components/ui/flip_text.ui";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  return (
    <div className=" w-full">
      <div className="max-w-[1700px] mx-auto h-full">
        <div className="relative  flex-col md:flex md:flex-row-reverse justify-center h-full items-center w-full min-h-[93vh] py-company-sm-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full md:w-1/2 h-[300px] md:h-[500px] md:py-0 py-company-xl-48"
          >
            <Image
              src="/home/herosection.png"
              alt="Company Logo"
              fill
              className=" object-contain"
            />
          </motion.div>

          <motion.div
            className="relative flex flex-col md:w-1/2  md:py-company-md-16 justify-center md:items-start   h-full space-y-company-lg-24"
            variants={heroContent}
            initial="initial"
            animate="animate"
          >
            <motion.div className=" md:space-y-company-xs-8 px-4 md:px-0  flex flex-col justify-center w-full  md:w-auto">
              <motion.div
                className="flex flex-col justify-center md:justify-start  md:items-start w-full md:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`${typography.display.large}  w-auto text-center md:text-left flex-nowrap text-[var(--company-blue-black)]`}
                >
                  Our Expertise
                </div>
                <div className="w-full md:w-auto overflow-hidden md:min-w-[500px] lg:min-w-[490px] py-6 md:py-9   flex justify-center content-center h-[50px] md:h-[60px]">
                  <FlipText />
                </div>
              </motion.div>

              <motion.p
                className={`${typography.title.large} mt-[8px] text-center md:text-left text-[var(--company-mid-gray)] max-w-4xl`}
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
        </div>
      </div>
    </div>
  );
}
