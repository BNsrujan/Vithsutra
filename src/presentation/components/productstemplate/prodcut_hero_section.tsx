import React from 'react'
import { Product } from "@/core/entities/product";
import { containerVariants } from "@/shared/lib/motion";
import { fadeInDown, fadeInUp } from "@/shared/lib/motion";
import { text } from "@/shared/lib/typography";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button.ui";


export default function ProductHeroSection(product : Product) {
  const router = useRouter();
  return (
    <div>
      <section className="relative min-h-[80vh] lg:h-[93vh] w-full bg-gradient-to-b from-blue-100 to-company-white  ">
        <div className="container mx-auto px-4 flex flex-wrap-reverse md:items-center justify-start w-full h-full py-20 gap-company-xl-48 md:gap-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-black flex flex-col md:justify-center h-full items-center lg:items-start ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className=" space-y-company-lg-24 md:space-y-company-lg-24  lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} `}
                variants={fadeInDown}
              >
                {product.tagline}
              </motion.h1>
              <motion.p
                className={`${text.Extratext}  max-w-2xl `}
                variants={fadeInUp}
              >
                {product.description}
              </motion.p>
              <div className="flex md:justify-center lg:justify-start">
                <Button
                  onClick={() => router.push("/contact")}
                  variant={"neumorphic"}
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px] md:h-[350px] lg:h-[700px] flex justify-center items-center">
            <div className="absolute h-4 -bottom-2 md:-bottom-8 w-3/5 justify-center rounded-full bg-gradient-to-t from-transparent to-gray-600/10 blur-xs backdrop-blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-[90vw] sm:w-full md:w-[500px] lg:w-[700px] max-w-full overflow-visible rounded-[28px]"
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain md:object-contain overflow-visible rounded-4xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

