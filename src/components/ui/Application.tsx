import React, { useState } from "react";
import Image from "next/image";
import Heading from "./heading";
import { text } from "@/lib/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ProductApplication } from "@/data/products";



const ApplicationCarouselArrows = ({ onNext, onPrevious }: { onNext: () => void; onPrevious: () => void }) => (
  <div className="flex gap-2 justify-center mt-6">
    <Button
      variant="outline"
      size="icon"
      onClick={onPrevious}
      className="w-12 h-12 rounded-full bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600"
    >
      <ChevronLeft className="w-5 h-5" />
      <span className="sr-only">Previous application</span>
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={onNext}
      className="w-12 h-12 rounded-full bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600"
    >
      <ChevronRight className="w-5 h-5" />
      <span className="sr-only">Next application</span>
    </Button>
  </div>
);

interface ApplicationProps {
  applications: ProductApplication[];
}

function Application({ applications }: ApplicationProps) {
  // Filter out any string entries for safety
  const filteredApplications = applications.filter(
    (app): app is { industry: string; image: string; description: string } =>
      typeof app === 'object' && app !== null && 'industry' in app && 'image' in app && 'description' in app
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredApplications.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === filteredApplications.length - 1 ? 0 : prevIndex + 1));
  };

  const currentApp = filteredApplications[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  if (filteredApplications.length === 0) return null;

  return (
    <div className="md:py-16">
      <div className="max-w-company-section-width mx-auto pb-company-xl-48 w-full">
        <Heading Display="Application" heading="Use Cases" />
        <div className="flex justify-center items-center w-full min-h-96 relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentApp.industry}
              className="relative flex w-full h-[80vh] flex-col overflow-hidden items-center text-center bg-white rounded-company-section-24 shadow-lg "
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 400, damping: 40, duration: 0.4 }}
            >
              <Image
                src={currentApp.image}
                alt={currentApp.industry}
                fill
                className="rounded-company-section-24 w-full h-full object-cover bg-gray-200"
              />
              <div className=" absolute bottom-0  p-company-lg-24 text-start w-full">
                <h2 className={`${text.cardHeadingtext} mt-2 text-black`}>{currentApp.industry}</h2>
                <p className={`${text.cardBodytext} text-gray-500 mt-2`}>{currentApp.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-full flex justify-end">
          <ApplicationCarouselArrows onNext={goToNext} onPrevious={goToPrevious} />
        </div>
      </div>
    </div>
  );
}

export default Application;
