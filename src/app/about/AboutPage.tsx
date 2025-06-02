"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

// Sample data for the masonry grid
const gridItems = [
  {
    id: 1,
    image: "/images/grid/anime-1.jpg",
    alt: "Anime Art 1"
  },
  {
    id: 2,
    image: "/images/grid/streetwear-1.jpg",
    alt: "Streetwear 1"
  },
  {
    id: 3,
    image: "/images/grid/fantasy-map-1.jpg",
    alt: "Fantasy Map 1"
  },
  {
    id: 4,
    image: "/images/grid/digital-poster-1.jpg",
    alt: "Digital Poster 1"
  },
  {
    id: 5,
    image: "/images/grid/anime-2.jpg",
    alt: "Anime Art 2"
  },
  {
    id: 6,
    image: "/images/grid/streetwear-2.jpg",
    alt: "Streetwear 2"
  },
  {
    id: 7,
    image: "/images/grid/fantasy-map-2.jpg",
    alt: "Fantasy Map 2"
  },
  {
    id: 8,
    image: "/images/grid/digital-poster-2.jpg",
    alt: "Digital Poster 2"
  },
  {
    id: 9,
    image: "/images/grid/anime-3.jpg",
    alt: "Anime Art 3"
  },
  {
    id: 10,
    image: "/images/grid/streetwear-3.jpg",
    alt: "Streetwear 3"
  },
  {
    id: 11,
    image: "/images/grid/fantasy-map-3.jpg",
    alt: "Fantasy Map 3"
  },
  {
    id: 12,
    image: "/images/grid/digital-poster-3.jpg",
    alt: "Digital Poster 3"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] w-full text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] p-8 lg:p-16 flex flex-col items-center lg:items-start justify-center">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-red-500 tracking-wider">AZUKI</h1>
          </div>

          {/* Content Block */}
          <div className="max-w-[400px] space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold"
            >
              WHO WE ARE
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-medium text-gray-300"
            >
              We are a collective of digital artists, developers, and visionaries pushing the boundaries of Web3 technology. Our mission is to create immersive experiences that bridge the gap between traditional art and the digital frontier.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-medium transition-colors flex items-center gap-2"
            >
              EXPLORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Right Section - Masonry Grid */}
        <div className="w-full lg:w-[60%] bg-gray-900 p-4 lg:p-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {gridItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4 break-inside-avoid"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 