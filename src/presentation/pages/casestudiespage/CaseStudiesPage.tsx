"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { heroContent, caseStudyCard, modalOverlay, modalContent } from '@/shared/lib/motion'
import { caseStudies } from "@/data/casestudies"

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={heroContent}
            initial="initial"
            animate="animate"
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover how our IIoT solutions are transforming industries and driving measurable results for our clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={caseStudyCard}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-white rounded-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCase(study)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-white/90">
                      {study.industry}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={study.logo}
                      alt={study.client}
                      width={48}
                      height={48}
                      className="h-12 w-auto"
                    />
                    <span className="text-gray-600">
                      {study.client}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {study.problem}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read Case Study
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <motion.div
          variants={modalOverlay}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalContent}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <Image
                src={selectedCase.image}
                alt={selectedCase.title}
                width={800}
                height={256}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={selectedCase.logo}
                  alt={selectedCase.client}
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedCase.title}
                  </h2>
                  <p className="text-gray-600">
                    {selectedCase.industry} • {selectedCase.client}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-gray-600">
                    {selectedCase.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-600">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {result.value}
                      </div>
                      <div className="text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Full Story
                </h3>
                <p className="text-gray-600">
                  {selectedCase.fullStory}
                </p>
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Get Similar Results
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
} 