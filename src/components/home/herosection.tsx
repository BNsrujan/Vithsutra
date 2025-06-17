"use client";
import { text } from "@/lib/typography";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { heroContent, fadeInUp } from "@/lib/animations";
import Image from "next/image";
import FlipText from "../ui/fliptext";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative w-full  justify-center content-center bg-transparent">
      <div className="max-w-[1700px]  mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 items-center min-h-[100vh] py-16 lg:py-0">
          {/* Left Content */}
          <motion.div 
            className="relative z-20 flex flex-col justify-center h-full space-y-8 md:space-y-[24px]"
            variants={heroContent}
            initial="initial"
            animate="animate"
          >
            

            <div className="space-y-3">
              <div className="flex flex-col justify-start md:flex-row items-center ">
                <span className={`${text.Sectionprefixtext} md:pr-[px] text-center md:text-left text-[var(--company-blue-black)]`}>
                  Our Expertise
                </span>
                <div className="w-full md:w-auto bg-company-white rounded-[8px] overflow-hidden md:min-w-[300px] lg:min-w-[500px] py-6 md:py-9 px-4 md:px-6 flex justify-center content-center h-[50px] md:h-[60px]">
                  <FlipText />
                </div>
              </div>
              <p className={`${text.cardBodytext} mt-[8px] md:mt-[8px] text-center md:text-left text-[var(--company-mid-gray)] max-w-4xl`}>
                Tailored solutions designed to meet your organization&apos;s unique needs and goals. 
                Our team is committed to delivering excellence in every project.
              </p>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center md:justify-start"
            >
              <Button 
                onClick={() => router.push('/contact')} 
                className={`${text.Buttontext} bg-[var(--company-primary-royalBlue)] hover:bg-[var(--company-primary-royalBlue)]/90 text-[var(--company-white)]`}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative lg:absolute [mask-image:linear-gradient(to_left,white_20%,white_80%,transparent)]  lg:right-0 lg:top-0 lg:w-1/2 lg:h-full z-10"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className=" [mask-image:linear-gradient(to_top,transparent,white_20%,white_80%)] relative w-full h-[300px] sm:h-[400px] md:h-[500px] z-2 lg:h-full">
              <Image
                src="/images/herosection.jpg"
                alt="Vithsutra Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}
