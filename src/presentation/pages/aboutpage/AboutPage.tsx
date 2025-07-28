"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import {  textReveal, gridItem, imageHover } from '@/shared/lib/motion'

// Sample data for the masonry grid
const gridItems = [
  {
    id: 1,
    image: "/robotics/Smart_Manufacturing.png",
    alt: "Smart Manufacturing Solutions"
  },
  {
    id: 2,
    image: "/appli_image_iiot/Smart-robots.jpg",
    alt: "Industrial Robotics"
  },
  {
    id: 3,
    image: "/robotics/Quality_Control.png",
    alt: "Quality Control Automation"
  },
  {
    id: 4,
    image: "/appli_image_iiot/Industrial-Automation.jpg",
    alt: "Industrial Automation"
  },
  {
    id: 5,
    image: "/robotics/Energy_Management.png",
    alt: "Energy Management Systems"
  },
  {
    id: 6,
    image: "/robotics/The-Future-of-Industrial-IoT.png",
    alt: "Future of Industrial IoT"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] p-8 lg:p-16 flex flex-col items-center lg:items-start justify-center bg-white">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-blue-600 tracking-wider">VITHSUTRA</h1>
          </div>

          {/* Content Block */}
          <div className="max-w-[400px] space-y-8">
            <motion.h2 
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900"
            >
              WHO WE ARE
            </motion.h2>

            <motion.p 
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-lg font-medium text-gray-600 leading-relaxed"
            >
              We are a team of innovators and engineers dedicated to transforming industries through cutting-edge IIoT and robotics solutions. Our mission is to bridge the gap between traditional manufacturing and the future of smart automation, creating sustainable and efficient industrial ecosystems.
            </motion.p>

            <motion.div
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-sm text-gray-600">Pushing the boundaries of industrial automation</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Reliability</h3>
                  <p className="text-sm text-gray-600">Trusted solutions for critical operations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Reach</h3>
                  <p className="text-sm text-gray-600">Serving industries worldwide</p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={textReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-colors flex items-center gap-2"
            >
              LEARN MORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Right Section - Masonry Grid */}
        <div className="w-full lg:w-[60%] bg-gray-100 p-4 lg:p-8">
          <div className="columns-1 sm:columns-2 gap-4">
            {gridItems.map((item) => (
              <motion.div
                key={item.id}
                variants={gridItem}
                initial="initial"
                animate="animate"
                className="mb-4 break-inside-avoid"
              >
                <motion.div 
                  variants={imageHover}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden transition-shadow"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 