import React, { useState } from "react";
import Image from "next/image";
import Heading from "./heading";
import { text } from "@/lib/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ApplicationType {
  image: string;
  name: string;
  subtext: string;
}

const applications: ApplicationType[] = [
  {
    image: "/image/robotic.png",
    name: "College & Hostel Laboratories",
    subtext: "Easy to use and integrate",
  },
  {
    image: "/image/you.png",
    name: "Collection & Hosting",
    subtext: "A bit hard to configure initially",
  },
];

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

function ApplicationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? applications.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === applications.length - 1 ? 0 : prevIndex + 1));
  };

  const currentApp = applications[currentIndex];

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

  return (
    <div className="md:py-16">
      <div className="max-w-7xl mx-auto">
        <Heading Display="Application" heading="Use Cases" />
        <div className="flex justify-center items-center w-full min-h-[40vh] relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentApp.name}
              className="relative flex w-full h-[40vh] flex-col items-center text-center bg-white rounded-[24px] shadow-lg "
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 400, damping: 40, duration: 0.4 }}
            >
              <Image
                src={currentApp.image}
                alt={currentApp.name}
                width={300}
                height={180}
                className="rounded-lg w-full h-full object-cover bg-gray-200"
              />
              <div className=" absolute bottom-0  p-12 text-start w-full">
                <h2 className={`${text.cardHeadingtext} mt-2`}>{currentApp.name}</h2>
                <p className={`${text.cardsubtext} text-gray-600 mt-2`}>{currentApp.subtext}</p>
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

export default ApplicationCarousel;
