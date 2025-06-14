"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { text } from "@/lib/typography";
import { ArrowUpRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { containerVariants, itemVariants, sectionTitle, fadeInUp } from "@/lib/animations";

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
  const Router = useRouter(); 
  const [activeFilter, setActiveFilter] = useState<string>("Featured");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filters = ["Featured", "IIoT", "Robotics", "Automation"];

  const filteredCards = cards.filter((card) =>
    activeFilter === "Featured" ? true : card.category === activeFilter
  );

  const slideWidth = 600;
  const gap = 24;

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
    <section className="bg-[var(--company-litest-gray)] py-16">
      <motion.div 
        className="max-w-[1400px] mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="mx-auto pb-12"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block rounded-full bg-[var(--company-white)] px-4 py-2"
            variants={fadeInUp}
          >
            <span className={`${text.Navtext} text-[var(--company-mid-gray)]`}>
              FEATURED
            </span>
          </motion.div>

          <motion.h1 
            variants={sectionTitle}
            className={`${text.Sectiontext} text-[var(--company-blue-black)] mb-6`}
          >
            Our Products
          </motion.h1>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12"
          variants={containerVariants}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              variants={itemVariants}
              custom={index}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full ${text.Buttontext} transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-[var(--company-primary-royalBlue)] text-[var(--company-white)] shadow-md"
                    : "bg-[var(--company-white)] text-[var(--company-mid-gray)] hover:bg-[var(--company-litest-gray)] border border-[var(--company-light-gray)]"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--company-white)] text-[var(--company-mid-gray)] transition-all duration-300
              ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[var(--company-primary-royalBlue)] hover:text-[var(--company-white)]"
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
          </motion.button>

          <motion.button
            onClick={nextSlide}
            disabled={currentIndex >= filteredCards.length - 1}
            className={`absolute -right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--company-white)] text-[var(--company-mid-gray)] transition-all duration-300
              ${
                currentIndex >= filteredCards.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[var(--company-primary-royalBlue)] hover:text-[var(--company-white)]"
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
          </motion.button>

          {/* Cards Container */}
          <div ref={carouselRef} className="overflow-x-hidden h-[600px]">
            <motion.div
              className="flex gap-6 h-full"
              animate={{
                x: -(currentIndex * (slideWidth + gap)),
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {filteredCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  variants={itemVariants}
                  custom={index}
                  className="relative flex-none w-[700px] h-[500px] bg-[var(--company-white)] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
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
                    <h3 className={`${text.cardHeadingtext} text-[var(--company-blue-black)] mb-4 group-hover:text-[var(--company-primary-royalBlue)] transition-colors`}>
                      {card.title}
                    </h3>
                    <p className={`${text.cardBodytext} text-[var(--company-mid-gray)] mb-6 leading-relaxed line-clamp-3`}>
                      {card.description}
                    </p>
                    <div className="absolute bottom-8 left-6 right-4 flex justify-between items-center">
                      <span className={`${text.cardsubtext} text-[var(--company-primary-royalBlue)] bg-[var(--company-litest-gray)] px-6 py-2 rounded-full`}>
                        {card.tag}
                      </span>
                      <motion.button 
                        className="absolute right-8 bg-[var(--company-white)] rounded-full p-5 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-[var(--company-primary-royalBlue)] group-hover:text-[var(--company-white)]"
                        onClick={() => Router.push(`/${card.title}`)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowUpRightIcon
                          className="h-5 w-5 text-[var(--company-mid-gray)] group-hover:text-[var(--company-white)] transition-colors"
                          strokeWidth={2.5}
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            variants={containerVariants}
          >
            {filteredCards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300
                  ${
                    currentIndex === index
                      ? "bg-[var(--company-primary-royalBlue)] w-8"
                      : "bg-[var(--company-primary-royalBlue)]/50 w-2 hover:bg-[var(--company-primary-royalBlue)]"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
