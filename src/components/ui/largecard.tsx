import { ArrowUpRightIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { text } from "@/lib/typography";
import React, { useState, useCallback } from 'react'

interface ArrowButtonProps {
  onClick?: () => void;
  className?: string;
  isTouched?: boolean;
}

export function ArrowButton({ onClick, className = '', isTouched = false }: ArrowButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 bg-company-white rounded-full p-4 sm:p-5 md:p-8 transition-all duration-700 ease-in-out ${isTouched ? 'bg-company-primary-royalBlue text-company-white-text' : 'group-hover:bg-company-primary-royalBlue group-hover:text-company-white-text'} ${className}`}
    >
      <ArrowUpRightIcon
        className={`h-4 w-4 sm:h-6 sm:w-6 ${isTouched ? 'text-company-white-text' : 'text-company-text-gray group-hover:text-company-white-text'} transition-all duration-700 ease-in-out`}
        strokeWidth={3}
      />
    </button>
  );
}

interface LargecardProps {
  index: number;
  feature: {
    bgImage: string;
    title: string;
    description: string;
    link?: string;
  };
  onCardClick?: () => void;
  className?: string;
}

function Largecard({ index, feature, onCardClick, className = "" }: LargecardProps) {
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

  const handleClick = useCallback(() => {
    if (onCardClick) {
      onCardClick();
    }
  }, [onCardClick]);

  return (
    <div 
      className={`relative  rounded-2xl cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`group relative aspect-video border border-company-litest-gray rounded-[8px] sm:rounded-16px sm:rounded-[24px] sm:min-h-[350px] md:min-h-[500px] overflow-hidden bg-company-white transition-all duration-700 ease-in-out ${isTouched ? 'touch-active' : ''}`}
      >
        <Image
          src={feature.bgImage}
          alt={feature.title}
          width={1296}
          height={850}
          className={`w-full h-full object-cover transition-all z-0 duration-700 ease-in-out ${isTouched ? 'scale-105' : 'group-hover:scale-105'}`}
        />
        {/* Gradient Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-700 ease-in-out ${
            isTouched ? 'opacity-90' : 'opacity-70 group-hover:opacity-90'
          }`}
        />
        <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-[90%] sm:max-w-[80%] z-10 md:max-w-[70%]"
          >
            <h3 className={`${text.SectionHeader} text-company-white-text ${isTouched ? 'text-company-white-text' : 'group-hover:text-company-white-text'} transition-all duration-700 ease-in-out`}>
              {feature.title}
            </h3>
            <p className={`${text.cardBodytextwrape} text-clip h-4 md:h-full md:w-full w-80 sm:w-full text-company-light-gray  ${isTouched ? 'text-company-white-text' : 'group-hover:text-company-white-text'} transition-all duration-700 ease-in-out`}>
              {feature.description}
            </p>
          </motion.div>
          <ArrowButton isTouched={isTouched} />
        </div>
      </motion.div>
    </div>
  )
}

export default Largecard