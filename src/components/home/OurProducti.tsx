"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { text } from "@/lib/typography";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";
import { ArrowButton } from "../ui/largecard";

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

  const slideWidth = 1000;
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
    <section className="">
      <motion.div 
        className=" mx-auto "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader 
          label="FEATURED"
          title="Our Products"
        />

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
              className={`px-6 py-2.5 rounded-full ${text.Buttontext} transition-all border-2 border-company-litest-gray  duration-300
                ${
                  activeFilter === filter
                    ? "bg-[var(--company-primary-royalBlue)] text-[var(--company-white)] "
                    : "bg-company-white text-company-mid-gray hover:bg-[var(--company-litest-gray)] border border-[var(--company-light-gray)]"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden ">
          {/* Cards Container */}
          <div ref={carouselRef} className=" h-[600px]">
            <motion.div
              className="flex gap-x-[24px]"
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
                  className="relative flex-none w-[1000px] h-[600px] bg-[var(--company-white)] rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  {card.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={1000}
                        height={600}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </div>
                  )}
                  <div className="relative p-8 h-full flex flex-col justify-end">
                    
                    <div className=" w-full   flex justify-baseline items-center">
                      <div className="w-3/4">
                        <h3 className={`${text.Sectionprefixtext} text-[var(--company-white)] mb-4  transition-colors`}>
                          {card.title}
                        </h3>
                        <p className={`${text.cardBodytext} text-[var(--company-white)] mb-6 leading-relaxed line-clamp-3`}>
                          {card.description}
                        </p>
                      </div>
                      <span className={`${text.cardsubtext} absolute top-5 right-5 text-[var(--company-white)] bg-[var(--company-primary-royalBlue)]/80 px-6 py-2 rounded-full`}>
                        {card.tag}
                      </span>
                      <ArrowButton 
                        onClick={() => Router.push(`/${card.title}`)}
                        className="absolute right-8 bottom-8"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full bg-[var(--company-white)] text-[var(--company-mid-gray)] transition-all duration-300
                ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[var(--company-primary-royalBlue)] hover:text-[var(--company-white)]"
                }
                border border-company-mid-gray`}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              disabled={currentIndex >= filteredCards.length - 1}
              className={`p-3 rounded-full bg-[var(--company-white)] text-[var(--company-mid-gray)] transition-all duration-300
                ${
                  currentIndex >= filteredCards.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[var(--company-primary-royalBlue)] hover:text-[var(--company-white)]"
                }
                border border-company-mid-gray`}
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </motion.button>
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
