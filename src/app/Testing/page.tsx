"use client";
import { motion } from "motion/react";
import { text } from "@/lib/typography";
import Components from "./Components";

export default function typ() {
  const box1 = [1];
  const box2 = [1, 2];
  const box3 = [1, 2, 3];
  const box4 = [1, 2, 3, 4, 5, 6];
  const box5 = Array.from({ length: 12 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex  justify-center w-full bg-company-litest-gray ">
      <div className="flex justify-center  content-center   items-center w-full flex-col max-w-[1296px] gap-y-96 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="h-screen flex justify-center   items-center"
        >
          {box1.map((_, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
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

        <div className="div">
          <div>
            <div className="p-6 space-y-10 max-w-4xl mx-auto">
              <div className={text.Displaytext}>
                Display Text - The quick brown fox jumps over the lazy dog.
              </div>

              <div className={text.DisplaySaportingtext}>
                Display Supporting Text - The quick brown fox jumps over the
                lazy dog.
              </div>

              <div className={text.DisplayPrefixtext}>
                Display Prefix Text - The quick brown fox jumps over the lazy
                dog.
              </div>

              <h1 className={text.Sectiontext}>
                Section Heading - The quick brown fox jumps over the lazy dog.
              </h1>

              <p className={text.Sectionbodytext}>
                Section Body Text - The quick brown fox jumps over the lazy dog.
              </p>

              <p className={text.Sectionprefixtext}>
                Section Prefix Text - The quick brown fox jumps over the lazy
                dog.
              </p>

              <h2 className={text.cardHeadingtext}>
                Card Heading - The quick brown fox jumps over the lazy dog.
              </h2>

              <p className={text.cardBodytext}>
                Card Body Text - The quick brown fox jumps over the lazy dog.
              </p>

              

              <nav className={text.Navtext}>
                Navigation Text - The quick brown fox jumps over the lazy dog.
              </nav>

              <footer>
                <a href="#" className={text.Footerlinktext}>
                  Footer Link Text
                </a>
                <h3 className={text.FooterHeadingtext}>Footer Heading Text</h3>
              </footer>

              <button className={text.Buttontext}>Primary Button</button>
              <button className={text.secondaryButtontext}>
                Secondary Button
              </button>
            </div>
          </div>
        </div>

        <Components/>
      </div>
    </div>
  );
}
