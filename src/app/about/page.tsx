"use client";

import React from 'react';
import { motion ,useScroll, useTransform} from 'framer-motion'; 

const variation = {
  initial: {
    opacity: 0,
    scale: 0,
    rotate: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 180,
  },
};

function Page() {
  
  const {scrollYProgress} = useScroll();
  // console.log(scrollYProgress,scrollX,scrollY)
  const rotate = useTransform(scrollYProgress,[0,1],[0,360]);



  return (
    <div className="flex justify-center items-center w-full h-[300vh] bg-company-primary-royalBlue text-4xl">
      <motion.div
        variants={variation}
        initial="initial"
        animate="animate"
        className="bg-amber-400 flex justify-center items-center rounded-full"
        transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
        whileHover={{ scale: 1.2 }}
        style={{
          rotate,
          width: 'calc(10vw + 50px)',
          height: 'calc(10vw + 50px)',
        }}
      >
        <h1>Hello</h1>
      </motion.div>
    </div>
  );
}

export default Page;
