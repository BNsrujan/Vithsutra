"use client";
import { motion } from "motion/react";
import { typography } from "@/shared/lib/typography";
import Components from "./Components";
// import ShareButton from "@/components/ui/smooth-button";
import { Button } from "@/presentation/components/ui/button.ui";
import { Input } from "@/presentation/components/ui/input.ui";

export default function Testing() {
  const box1 = [1];
  const box2 = [1, 2];
  const box3 = [1, 2, 3];
  const box4 = [1, 2, 3, 4, 5, 6];
  const box5 = Array.from({ length: 12 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };




  return (
    <div className="flex justify-center w-full bg-blue-50">
      <div className="flex justify-center content-center items-center w-full flex-col max-w-[1296px] gap-y-96">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="h-screen flex justify-center items-center"
        >
          {box1.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="h-[497px] w-[1296px] rounded-[28px] flex text-6xl justify-center items-center text-company-blue-black bg-company-white"
            >
              Hello
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-[24px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {box2.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="h-[350px] w-[636px] rounded-[28px] flex text-6xl justify-center items-center text-company-blue-black bg-company-white"
            >
              Hello
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-[24px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {box3.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="h-[350px] w-[416px] rounded-[28px] flex text-5xl justify-center items-center text-company-blue-black bg-company-white"
            >
              Hello
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-[24px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {box4.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="h-[196px] w-[196px] rounded-[16px] flex text-4xl justify-center items-center text-company-blue-black bg-company-white"
            >
              Hello
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-[24px] flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {box5.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="h-[86px] w-[86px] rounded-[16px] flex text-2xl justify-center items-center text-company-blue-black bg-company-white"
            >
              Hello
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-[24px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {box4.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="h-[86px] w-[196px] rounded-[16px] flex text- justify-center items-center text-company-blue-black bg-company-white"
            >
              Hello
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full p-6   mx-auto  ">
          <div className={text.Displaytext}>
            Display Text - The quick brown fox jumps over the lazy dog.
          </div>

          <h1 className={text.Sectiontexthead}>
            Section Heading - The quick brown fox jumps over the lazy dog.
          </h1>
          

          <p className={text.Sectionprefixtext}>
            Section Prefix Text - The quick brown fox jumps over the lazy dog.
          </p>

          <p className={text.Sectionbodytext}>
            Section Body Text (Bold) - The quick brown fox jumps over the lazy
            dog.
          </p>
          <h2 className={text.cardHeadingtext}>
            Card Heading - The quick brown fox jumps over the lazy dog.
          </h2>
          <p className={text.Extratext}>
            Section Body Text - The quick brown fox jumps over the lazy dog.
          </p>
          <div className={text.midtext}>
            Mid Text - The quick brown fox jumps over the lazy dog.
          </div>
          <div className={text.DisplaySupportingtext}>
            Display Supporting Text - The quick brown fox jumps over the lazy
            dog.
          </div>

          <div className={text.DisplayPrefixtext}>
            Display Prefix Text - The quick brown fox jumps over the lazy dog.
          </div>
          <p className={text.Sectionbodytexts}>
            Section Body Text (Alt) - The quick brown fox jumps over the lazy
            dog.
          </p>

        
          <p className={text.cardBodytext}>
            Card Body Text - The quick brown fox jumps over the lazy dog.
          </p>

          <footer className="">
            <h3 className={text.labelHeadingText}>
              LableHeading Text - The quick brown fox jumps over the lazy dog.
            </h3>
            <a href="#" className={text.labelText}>
              Label Text - The quick brown fox jumps over the lazy dog.
            </a>
          </footer>
          <TypographyPreview/>

          <div>

    </div>


          <div className="flex space-x-4 w-full  mt-40">
            <Button variant="neumorphic" className={text.Buttontext}>
              Primary Button
            </Button>
            <Button variant="secondary" className={text.secondaryButtontext}>
              Secondary Button
            </Button>
          </div>

          
        </div>

        <Components />

        <Button variant={"neumorphic"} className="mb-4">
          share
        </Button>
        <Input
            type="text"
            label="Email"
            placeholder="Input Placeholder Text"
            className={text.inputplaceholdertext}
          />


      </div>
    
      
    </div>
  );
}

 function TypographyPreview() {
  return (
    <div className="space-y-6 p-8">
      {Object.entries(typography).map(([section, sizes]) => (
        <div key={section}>
          <h2 className="text-xl font-bold capitalize mb-4">{section}</h2>
          <div className="space-y-2">
            {Object.entries(sizes).map(([size, className]) => (
              <p key={size} className={className}>
                {`${section}-${size}`}: The quick brown fox jumps over the lazy dog
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export const typography = {
  display: {
    large: "text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-light leading-tight",
    medium: "text-[2rem] sm:text-[2.5rem] md:text-[2.813rem] font-light leading-snug",
    small: "text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-normal leading-normal",
  },
  headline: {
    large: "text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-semibold",
    medium: "text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-semibold",
    small: "text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-semibold",
  },
  title: {
    large: "text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] font-medium",
    medium: "text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] font-medium",
    small: "text-[0.875rem] sm:text-[1rem] font-medium",
  },
  body: {
    large: "text-[0.9375rem] sm:text-[1rem] font-normal",
    medium: "text-[0.8125rem] sm:text-[0.875rem] font-normal",
    small: "text-[0.75rem] font-normal",
  },
  label: {
    large: "text-[0.75rem] sm:text-[0.875rem] font-medium uppercase",
    medium: "text-[0.6875rem] sm:text-[0.75rem] font-medium uppercase",
    small: "text-[0.625rem] sm:text-[0.6875rem] font-medium uppercase",
  },
};

