"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Heading from "./heading"
import { text } from "@/lib/typography"
import Image from "next/image"
import TestimonialCard from "./TestimonialCard"

interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  quote: string
  avatar?: string
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
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className=" px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="">
        {/* Header */}
        <div className="">
          <Heading heading="TESTIMONIALS" Display="What Our Clients Say" />
        </div>

        {/* Testimonial Card with Transition */}
        <div className="relative ">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12  transition-all duration-500 ease-in-out flex items-center min-h-[320px] md:min-h-[230px] lg:min-h-[200px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24  overflow-hidden md:h-24 bg-gray-300 rounded-full flex items-center justify-center">
                 <Image className="h-full w-full " src={"/"} width={150} height={150} alt="" /> 
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className={`${text.cardHeadingtext}`}>{currentTestimonial.name}</h3>
                  <p className={`${text.Navtext} font-medium text-gray-500`}>
                    {currentTestimonial.title}, {currentTestimonial.company}
                  </p>
                </div>

                <blockquote className={`${text.cardBodytext} text-gray-900 leading-relaxed`}>
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center mt-6">
 

            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
