"use client";
import { text } from "@/lib/typography";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { heroContent, fadeInUp, fadeInDown } from "@/lib/animations";
import Image from "next/image";
import FlipText from "../ui/fliptext";


export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-[90vh] bg-[var(--company-litest-gray)]">
      <div className="max-w-[1400px] mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-center content-center space-y-8 py-16 lg:py-0"
            variants={heroContent}
            initial="initial"
            animate="animate"
          >
            <motion.p 
              variants={fadeInDown}
              className={`${text.DisplayPrefixtext} text-[var(--company-primary-royalBlue)]`}
            >
              Welcome to
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className={`${text.Displaytext} text-[var(--company-blue-black)]`}
            >
              Vithsutra
            </motion.h1>
            <div className="font-bold border-2 border-[var(--company-primary-royalBlue)] rounded-[8px] p-4 bg-white/50 backdrop-blur-sm">
              <FlipText/>
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex gap-4"
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
            className="relative h-[500px] lg:h-[600px]"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/hero/hero-image.png"
              alt="Vithsutra Hero"
              fill
              className="object-contain"
              priority
            />
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
