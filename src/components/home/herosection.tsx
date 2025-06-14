"use client";
import { text } from "@/lib/typography";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { heroContent, fadeInUp, fadeInDown } from "@/lib/animations";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
   
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <motion.section 
        className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10"
        variants={heroContent}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.p 
            variants={fadeInDown}
            className={`${text.DisplayPrefixtext} text-[var(--company-white)]`}
          >
            Experience The
          </motion.p>
          <motion.h1 
            variants={fadeInUp}
            className={`${text.Displaytext} text-[var(--company-white)]`}
          >
            Vithsutra 
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className={`${text.midtext} text-[var(--company-white)] max-w-7xl mx-auto`}
          >
            We create tailored solutions designed to meet your organization&apos;s
            unique needs and goals. Our team is committed to delivering projects
            on time, without compromising on quality. With a strong focus on
            detail and excellence.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button 
              onClick={() => router.push('/contact')} 
              className={`${text.Buttontext} bg-[var(--company-primary-royalBlue)] hover:bg-[var(--company-primary-royalBlue)]/90 text-[var(--company-white)]`}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
