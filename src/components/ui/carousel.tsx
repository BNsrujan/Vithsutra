"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { text } from "@/lib/typography"
import { Button } from "@/components/ui/button"

export interface CarouselItem {
  image: string
  caption: string
  link: string
  description?: string
  tag?: string
}

interface CarouselProps {
  items: CarouselItem[]
  variant?: "default" | "product"
  autoPlay?: boolean
  interval?: number
  showIndicators?: boolean
  showNavigation?: boolean
  className?: string
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  variant = "default",
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, isAutoPlaying, interval])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const isProductVariant = variant === "product"

  return (
    <div className={`relative w-full ${isProductVariant ? 'h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]' : 'h-[300px] sm:h-[400px] md:h-[500px]'} overflow-hidden rounded-xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={items[currentIndex].image}
            alt={items[currentIndex].caption}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
          <div className={`absolute inset-0 ${isProductVariant ?  ' bg-gradient-to-t from-black/60 via-black/30 to-transparent' : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'}`} />
          
          <div className={`absolute ${isProductVariant ? 'p-3 sm:p-4 md:p-6 lg:p-8' : 'p-4 sm:p-6 md:p-8'} h-full flex flex-col justify-end`}>
            <div className="w-full flex flex-col sm:flex-row justify-baseline items-start sm:items-center">
              <div className="w-full sm:w-3/4">
                <Link 
                  href={items[currentIndex].link}
                  className="group inline-block"
                >
                  <h3 className={`${isProductVariant ? text.cardHeadingtext : text.cardHeadingtext} text-company-white mb-2 group-hover:text-company-blue-white transition-colors`}>
                    {items[currentIndex].caption}
                  </h3>
                </Link>
                {isProductVariant && items[currentIndex].description && (
                  <p className={`${text.cardBodytext} text-company-white mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3`}>
                    {items[currentIndex].description}
                  </p>
                )}
              </div>
              {/* {isProductVariant && items[currentIndex].tag && (
                <span className={`${text.cardBodytext} text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 text-company-white bg-company-primary-royalBlue/80 px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full`}>
                  {items[currentIndex].tag}
                </span>
              )} */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {showNavigation && (
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
          <Button
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="bg-company-white/20 hover:bg-company-white/40 text-company-white rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <Button
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="bg-company-white/20 hover:bg-company-white/40 text-company-white rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-company-white w-6" 
                  : "bg-company-white/50 hover:bg-company-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
