import * as motion from "motion/react-client";
import Image from "next/image";
import { typography } from "@/shared/lib/typography";
import { useState, useCallback } from "react";
import ArrowButtons from "./arrow_up_button.ui";

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

function Largecard({
  index,
  feature,
  onCardClick,
  className,
}: LargecardProps) {
  const [isTouched, setIsTouched] = useState(false);
  const [touchTimeout, setTouchTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleTouchStart = useCallback(() => {
    if (touchTimeout) clearTimeout(touchTimeout);
    setIsTouched(true);
  }, [touchTimeout]);

  const handleTouchEnd = useCallback(() => {
    const timeout = setTimeout(() => setIsTouched(false), 300);
    setTouchTimeout(timeout);
  }, []);

  const handleClick = useCallback(() => {
    onCardClick?.();
  }, [onCardClick]);

  return (
    <div
      className={`rounded-2xl cursor-pointer w-full ${className ?? ""}`}
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
        className={`group relative aspect-video border border-company-litest-gray rounded-[8px] sm:rounded-[24px] sm:min-h-[350px] md:min-h-[500px] overflow-hidden bg-company-white transition-all duration-700 ease-in-out ${isTouched ? "touch-active" : ""}`}
      >
        <Image
          src={feature.bgImage}
          alt={feature.title}
          width={1296}
          height={850}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out z-0 ${
            isTouched ? "scale-105" : "group-hover:scale-105"
          }`}
          quality={100}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70  via-transparent to-transparent transition-all duration-700 ease-in-out ${
            isTouched ? "opacity-90" : "group-hover:opacity-90"
          }`}
        />
        <div className="absolute inset-0 p-4 sm:p-8 md:p-company-lg-24 flex flex-col justify-end w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] z-10"
          >
            <h3
              className={`${typography.headline.large} text-company-white-text transition-all duration-700 ease-in-out`}
            >
              {feature.title}
            </h3>
            <p
              className={`${typography.title.large} hidden md:block text-clip h-4 md:h-full w-80 sm:w-full md:w-full text-company-light-gray transition-all duration-700 ease-in-out ${
                isTouched ? "text-company-white-text" : "group-hover:text-company-white-text"
              }`}
            >
              {feature.description}
            </p>
          </motion.div>
        </div>
        <ArrowButtons isTouched={isTouched} />
      </motion.div>
    </div>
  );
}

export default Largecard;
