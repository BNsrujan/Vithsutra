"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { heroContent, caseStudyCard, modalOverlay, modalContent } from '@/lib/motion'

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "Smart Factory Transformation",
    industry: "Manufacturing",
    client: "TechManufacture Inc.",
    logo: "/images/clients/tech-manufacture.png",
    problem: "High production downtime and inefficient resource utilization",
    solution: "Implemented IIoT sensors and AI-powered predictive maintenance system",
    results: [
      { metric: "Downtime Reduction", value: "35%" },
      { metric: "Energy Savings", value: "28%" },
      { metric: "Production Efficiency", value: "42%" }
    ],
    fullStory: "TechManufacture Inc. was facing significant challenges with their production line efficiency and maintenance costs. By implementing our IIoT solution, they achieved remarkable improvements in operational efficiency and cost savings. The AI-powered predictive maintenance system helped prevent unexpected breakdowns, while real-time monitoring enabled better resource allocation.",
    image: "/images/case-studies/manufacturing.jpg"
  },
  {
    id: 2,
    title: "Energy Management Optimization",
    industry: "Energy",
    client: "PowerGrid Solutions",
    logo: "/images/clients/powergrid.png",
    problem: "Inefficient energy distribution and high operational costs",
    solution: "Deployed smart grid monitoring and automated load balancing system",
    results: [
      { metric: "Cost Reduction", value: "25%" },
      { metric: "Efficiency Gain", value: "40%" },
      { metric: "Carbon Footprint", value: "30%" }
    ],
    fullStory: "PowerGrid Solutions needed to modernize their energy distribution network. Our IIoT platform provided real-time monitoring and automated load balancing, resulting in significant cost savings and improved efficiency. The system also helped reduce their carbon footprint through optimized energy distribution.",
    image: "/images/case-studies/energy.jpg"
  },
  {
    id: 3,
    title: "Quality Control Automation",
    industry: "Automotive",
    client: "AutoTech Motors",
    logo: "/images/clients/autotech.png",
    problem: "Inconsistent quality control and high defect rates",
    solution: "Integrated computer vision and AI-based quality inspection system",
    results: [
      { metric: "Defect Reduction", value: "45%" },
      { metric: "Inspection Speed", value: "60%" },
      { metric: "Cost Savings", value: "22%" }
    ],
    fullStory: "AutoTech Motors was struggling with quality control issues in their production line. Our AI-powered inspection system revolutionized their quality control process, significantly reducing defects while increasing inspection speed. The solution also provided valuable insights for continuous improvement.",
    image: "/images/case-studies/automotive.jpg"
  },
  {
    id: 4,
    title: "Supply Chain Optimization",
    industry: "Logistics",
    client: "Global Logistics Co.",
    logo: "/images/clients/global-logistics.png",
    problem: "Inefficient inventory management and supply chain visibility",
    solution: "Implemented end-to-end supply chain tracking and analytics platform",
    results: [
      { metric: "Inventory Accuracy", value: "95%" },
      { metric: "Delivery Time", value: "40%" },
      { metric: "Cost Reduction", value: "28%" }
    ],
    fullStory: "Global Logistics Co. needed better visibility and control over their supply chain operations. Our IIoT solution provided real-time tracking and analytics, enabling better inventory management and faster delivery times. The platform also helped identify optimization opportunities throughout the supply chain.",
    image: "/images/case-studies/logistics.jpg"
  }
]

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
                    <img
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
              <img
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
                <img
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