"use client"
import React, { useState, useEffect } from 'react'
import * as motion from "motion/react-client";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const applications = [
  {
    title: "Smart Manufacturing",
    description: "IoT-enabled production lines with real-time monitoring and predictive maintenance",
    image: "/smart-manufacturing.jpg"
  },
  {
    title: "Industrial Automation", 
    description: "Robotic arms and automated systems for precision manufacturing",
    image: "/industrial-automation.jpg"
  },
  {
    title: "Smart Agriculture",
    description: "IoT sensors and robotics for precision farming and crop monitoring",
    image: "/smart-agriculture.jpg"
  },
  {
    title: "Healthcare Robotics",
    description: "Robotic assistance and IoT monitoring in medical facilities",
    image: "/healthcare-robotics.jpg"
  },
  {
    title: "Smart Cities",
    description: "IoT infrastructure for traffic management and urban planning",
    image: "/smart-cities.jpg"
  }
]

function Application() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % applications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + applications.length) % applications.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="max-w-[2000px]  mx-auto px-4 py-16">
      <div className="mb-2 text-company-text-gray">Applications</div>
      <h2 className="section-head text-company-black mb-8">IoT & Robotics in Action</h2>
      
      <div 
        className="relative w-[1400px] h-[500px] md:h-[500px] rounded-[24px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{ 
              backgroundImage: `url(${applications[currentSlide].image})`,
              transform: `scale(1.1)`
            }}
          >
            {/*  bg-gradient-to-r from-black/70 to-transparent */}
            <div className="absolute inset-0 bg-gray-100" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 text-white max-w-lg">
            <h3 className="text-2xl font-semibold mb-2">{applications[currentSlide].title}</h3>
            <p className="text-company-text-gray">{applications[currentSlide].description}</p>
          </div>
        </motion.div>

        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <div className="flex space-x-2">
            {applications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          
        </div>
        
      </div>
      <div className="flex gap-2 mt-5 mr-auto">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={nextSlide} 
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
    </div>
  )
}

export default Application