"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { text } from "@/lib/typography";
import { ArrowUpRightIcon } from "lucide-react";

// Define the card data type
type Card = {
  id: number;
  title: string;
  description: string;
  image?: string;
  tag: string;
  category: "Featured" | "IIoT" | "Robotics" | "Automation";
};

// Sample data
const cards: Card[] = [
  {
    id: 1,
    title: "Smart Factory Solutions",
    description:
      "Revolutionizing manufacturing through advanced IIoT sensors and real-time monitoring systems.",
    image: "/robotics/Smart_Manufacturing.png",
    tag: "IIoT",
    category: "IIoT",
  },
  {
    id: 2,
    title: "Industrial Robotics",
    description:
      "State-of-the-art robotic systems for precision manufacturing and assembly operations.",
    image: "/appli_image_iiot/Smart-robots.jpg",
    tag: "Robotics",
    category: "Robotics",
  },
  {
    id: 3,
    title: "Process Automation",
    description:
      "Streamlining industrial processes with cutting-edge automation technologies.",
    image: "/appli_image_iiot/Industrial-Automation.jpg",
    tag: "Automation",
    category: "Automation",
  },
  {
    id: 4,
    title: "Predictive Maintenance",
    description:
      "AI-powered systems for predictive maintenance and equipment optimization.",
    image: "/robotics/The-Future-of-Industrial-IoT.png",
    tag: "IIoT",
    category: "IIoT",
  },
];

export default function CardSection() {
  const [activeFilter, setActiveFilter] = useState<string>("Featured");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filters = ["Featured", "IIoT", "Robotics", "Automation"];

  const filteredCards = cards.filter((card) =>
    activeFilter === "Featured" ? true : card.category === activeFilter
  );

  const slideWidth = 600; // Updated width for cards
  const gap = 24; // Gap between cards

  const nextSlide = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className=" bg-company-light-light-gray ">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mx-auto pb-12">
          <div className="inline-block   rounded-full bg-company-light-light-gray ">
            <span className="text-sm font-medium tracking-wider text-company-text-gray">
              FEATURED
            </span>
          </div>

          <h1 className={`${text.Sectiontext} text-company-black mb-6`}>
            Automation at All Levels
          </h1>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-company-blue  shadow-md"
                    : "bg-company-white text-company-text-gray hover:bg-company-light-gray border border-company-gray"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative ">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-company-white text-company-text-gray transition-all duration-300
              ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-company-primary-royalBlue hover:text-company-blue-white"
              }
              hidden sm:block shadow-lg`}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= filteredCards.length - 1}
            className={`absolute -right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-company-white text-company-text-gray transition-all duration-300
              ${
                currentIndex >= filteredCards.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-company-primary-royalBlue hover:text-company-blue-white"
              }
              hidden sm:block shadow-lg`}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div ref={carouselRef} className="overflow-x-hidden h-[600px]">
            <motion.div
              className="flex gap-6 h-full"
              animate={{
                x: -(currentIndex * (slideWidth + gap)),
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex-none w-[700px] h-[500px] bg-company-white rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  {card.image && (
                    <div className="relative h-[300px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={600}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-company-black mb-4 group-hover:text-company-blue transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-company-text-gray text-base mb-6 leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                    <div className="absolute bottom-8 left-6 right-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-company-blue bg-company-light-light-gray px-6 py-2 rounded-full">
                        {card.tag}
                      </span>
                      <button className="absolute right-8 bg-company-white rounded-full p-5 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-company-primary-royalBlue group-hover:text-white">
                        <ArrowUpRightIcon
                          className="h-5 w-5 text-company-text-gray group-hover:text-white transition-colors"
                          strokeWidth={2.5}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 ">
            {filteredCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300
                  ${
                    currentIndex === index
                      ? "bg-company-primary-royalBlue w-8"
                      : "bg-company-primary-royalBlue w-2 hover:bg-company-primary-royalBlue"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
