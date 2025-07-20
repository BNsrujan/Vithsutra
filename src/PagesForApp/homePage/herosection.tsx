"use client";
import { text } from "@/lib/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/animations";
import Image from "next/image";
import FlipText from "@/components/ui/fliptext";


// ;


export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative w-full ">
      <div className="max-w-[1700px]  mx-auto   lg:px-company-lg-24 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8  min-h-[100vh] py-company-sm-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            className="relative z-20 flex flex-col py-company-md-16 justify-center h-full space-y-company-lg-24"
            variants={heroContent}
            initial="initial"
            animate="animate"
          >
            <motion.div className=" space-y-company-lg-24">
              <motion.div
                className="flex flex-col justify-center md:justify-start md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className={`${text.Sectionprefixtext} w-full text-center md:text-left flex-nowrap text-[var(--company-blue-black)]`}
                >
                  Our Expertise
                </span>
                <div className="w-full md:w-auto bg-company-white rounded-[8px] overflow-hidden md:min-w-[500px] lg:min-w-[490px] py-6 md:py-9 px-2 md:px-2 flex justify-center content-center h-[50px] md:h-[60px]">
                  <FlipText />
                </div>
              </motion.div>
              <motion.p
                className={`${text.Extratext} mt-[8px] md:mt-[8px] text-center md:text-left text-[var(--company-mid-gray)] max-w-4xl`}
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
          // masking 
            className="relative lg:absolute md:[mask-image:linear-gradient(to_left,white_20%,white_80%,transparent)] [mask-image:linear-gradient(to_bottom,white-20%,white_80%,transparent)] lg:right-0 lg:top-0 lg:w-1/2 lg:h-full z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%)] relative w-full h-[300px] sm:h-[400px] md:h-[500px] z-2 lg:h-full">
              <Image
                src="/home/herosection.jpg"
                alt="Vithsutra Hero"
                fill
                className="object-cover"
                priority
                sizes="max-w-[768px]  100vw, max-w-[1200px] 50vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
       */}
    </div>
  );
}
