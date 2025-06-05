"use client"
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Define the card data type
type Card = {
  id: number
  title: string
  description: string
  image?: string
  tag: string
  category: 'Featured' | 'IIoT' | 'Robotics' | 'Automation'
}

// Sample data
const cards: Card[] = [
  {
    id: 1,
    title: "Smart Factory Solutions",
    description: "Revolutionizing manufacturing through advanced IIoT sensors and real-time monitoring systems.",
    image: "/robotics/Smart_Manufacturing.png",
    tag: "IIoT",
    category: "IIoT"
  },
  {
    id: 2,
    title: "Industrial Robotics",
    description: "State-of-the-art robotic systems for precision manufacturing and assembly operations.",
    image: "/appli_image_iiot/Smart-robots.jpg",
    tag: "Robotics",
    category: "Robotics"
  },
  {
    id: 3,
    title: "Process Automation",
    description: "Streamlining industrial processes with cutting-edge automation technologies.",
    image: "/appli_image_iiot/Industrial-Automation.jpg",
    tag: "Automation",
    category: "Automation"
  },
  {
    id: 4,
    title: "Predictive Maintenance",
    description: "AI-powered systems for predictive maintenance and equipment optimization.",
    image: "/robotics/The-Future-of-Industrial-IoT.png",
    tag: "IIoT",
    category: "IIoT"
  }
]

export default function CardSection() {
  const [activeFilter, setActiveFilter] = useState<string>('Featured')
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const filters = ['Featured', 'IIoT', 'Robotics', 'Automation']
  
  const filteredCards = cards.filter(card => 
    activeFilter === 'Featured' ? true : card.category === activeFilter
  )

  const slideWidth = 320 // Increased width for better content display
  const gap = 24 // Increased gap for better spacing

  const nextSlide = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <section className="py-24 bg-company-light-light-gray">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                setCurrentIndex(0)
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter 
                  ? 'bg-company-blue text-white shadow-md' 
                  : 'bg-company-white text-company-text-gray hover:bg-company-light-gray border border-company-gray'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-company-white text-company-text-gray transition-all duration-300
              ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-company-light-gray hover:text-company-blue'}
              hidden sm:block shadow-lg`}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= filteredCards.length - 1}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-company-white text-company-text-gray transition-all duration-300
              ${currentIndex >= filteredCards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-company-light-gray hover:text-company-blue'}
              hidden sm:block shadow-lg`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: -(currentIndex * (slideWidth + gap))
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-none w-[320px] bg-company-white rounded-[28px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  {card.image && (
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-company-black mb-3 group-hover:text-company-blue transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-company-text-gray text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-company-blue bg-company-light-light-gray px-4 py-1.5 rounded-full">
                        {card.tag}
                      </span>
                      <button 
                        className="text-company-text-gray hover:text-company-blue transition-colors p-2 hover:bg-company-light-light-gray rounded-full"
                        aria-label={`Read more about ${card.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300
                  ${currentIndex === index ? 'bg-company-blue w-8' : 'bg-company-gray w-2 hover:bg-company-text-gray'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 