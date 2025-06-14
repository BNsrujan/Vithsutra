import { ArrowUpRightIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { text } from "@/lib/typography";
import React, { useState, useCallback } from 'react'

function Largecard({index,feature}:{
    index:number,
    feature:{
        bgImage:string,
        title:string
        description:string
    }
}) {
  const [isTouched, setIsTouched] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleTouchStart = useCallback(() => {
    if (touchTimeout) {
      clearTimeout(touchTimeout);
    }
    setIsTouched(true);
  }, [touchTimeout]);

  const handleTouchEnd = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsTouched(false);
    }, 300); 
    setTouchTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`group relative aspect-video border border-company-litest-gray rounded-[8px] sm:rounded-16px sm:rounded-[24px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden bg-company-white transition-all duration-700 ease-in-out ${isTouched ? 'touch-active' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-company-black/80 opacity-0 ${isTouched ? 'opacity-100' : 'group-hover:opacity-100'} transition-all duration-700 ease-in-out`} />
              <Image
                src={feature.bgImage}
                alt={feature.title}
                width={1296}
                height={850}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isTouched ? 'scale-105' : 'group-hover:scale-105'}`}
              />
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
                >
                  <h3 className={`${text.cardHeadingtext} text-company-white-text ${isTouched ? 'text-company-white-text' : 'group-hover:text-company-white-text'} transition-all duration-700 ease-in-out`}>
                    {feature.title}
                  </h3>
                  <p className={`${text.DisplaySaportingtext} text-clip h-4 md:h-full md:w-full w-80 sm:w-full text-company-light-gray ${isTouched ? 'text-company-white-text' : 'group-hover:text-company-white-text'} transition-all duration-700 ease-in-out`}>
                    {feature.description}
                  </p>
                </motion.div>
                <button className={`absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 bg-company-white rounded-full p-4 sm:p-5 md:p-6 transition-all duration-700 ease-in-out ${isTouched ? 'bg-company-primary-royalBlue text-company-white-text' : 'group-hover:bg-company-primary-royalBlue group-hover:text-company-white-text'}`}>
                    <ArrowUpRightIcon
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${isTouched ? 'text-company-white-text' : 'text-company-text-gray group-hover:text-company-white-text'} transition-all duration-700 ease-in-out`}
                      strokeWidth={2.5}
                    />
                </button>
              </div>
            </motion.div>
    </div>
  )
}

export default Largecard