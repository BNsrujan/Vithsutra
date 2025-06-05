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

  const slideWidth = 280 // Width of each card on mobile
  const slideWidthDesktop = 300 // Width of each card on desktop
  const gap = 16 // Gap between cards on mobile
  const gapDesktop = 24 // Gap between cards on desktop

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
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                setCurrentIndex(0)
              }}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                ${activeFilter === filter 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white text-gray-600 transition-colors
              ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
              hidden sm:block shadow-md`}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= filteredCards.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white text-gray-600 transition-colors
              ${currentIndex >= filteredCards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}
              hidden sm:block shadow-md`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: -(currentIndex * (window.innerWidth < 640 ? slideWidth + gap : slideWidthDesktop + gapDesktop))
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-none w-[280px] sm:w-[300px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {card.image && (
                    <div className="h-40 sm:h-48">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                      {card.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                        {card.tag}
                      </span>
                      <button 
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label={`Read more about ${card.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
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
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {filteredCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all
                  ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 