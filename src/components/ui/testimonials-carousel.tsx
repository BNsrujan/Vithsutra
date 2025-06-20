"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "./heading";
import TestimonialCard from "./TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    title: "CEO",
    company: "Tech Solutions Inc.",
    quote:
      "The implementation of our new system has transformed our operations. The system's reliability and ease of use have exceeded our expectations. It's truly a game-changer for our business.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Digital Innovations Ltd.",
    quote:
      "Working with this team has been exceptional. Their attention to detail and commitment to delivering results has helped us achieve a 300% increase in our conversion rates.",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "CTO",
    company: "StartupFlow",
    quote:
      "The technical expertise and innovative solutions provided have streamlined our entire development process. We've reduced our deployment time by 75% and improved our system reliability significantly.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Operations Manager",
    company: "Global Logistics Co.",
    quote:
      "The customer support is outstanding, and the platform is incredibly intuitive. Our team was able to get up and running in just a few days, which exceeded all our expectations.",
  },
];

// Arrow navigation component
const TestimonialCarouselArrows = ({ onNext, onPrevious, className = "" }: { onNext: () => void; onPrevious: () => void; className?: string }) => (
  <div className={`flex gap-2 ${className}`}>
    <Button
      variant="outline"
      size="icon"
      onClick={onPrevious}
      className="w-12 h-12 rounded-full bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600"
    >
      <ChevronLeft className="w-5 h-5" />
      <span className="sr-only">Previous testimonial</span>
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={onNext}
      className="w-12 h-12 rounded-full bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600"
    >
      <ChevronRight className="w-5 h-5" />
      <span className="sr-only">Next testimonial</span>
    </Button>
  </div>
);

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

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
    <section className=" px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="">
        {/* Header */}
        <div className="">
          <Heading heading="TESTIMONIALS" Display="What Our Clients Say" />
        </div>

        {/* Testimonial Card with Transition */}
        
        <div className="relative  ">
          <div className="min-h-[320px] md:min-h-[230px] lg:min-h-[300px]">
          <AnimatePresence custom={direction} mode="wait" >
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 400, damping: 40, duration: 0.4 }}
              className="w-full"
            >
              <TestimonialCard
                name={currentTestimonial.name}
                title={currentTestimonial.title}
                company={currentTestimonial.company}
                quote={currentTestimonial.quote}
                avatar={currentTestimonial.avatar}
              />
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center mt-6">
            <TestimonialCarouselArrows onNext={goToNext} onPrevious={goToPrevious} />
          </div>
        </div>
      </div>
    </section>
  );
}
