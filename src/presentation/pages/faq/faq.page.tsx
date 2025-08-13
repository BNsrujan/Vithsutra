"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqData } from "@/infrastructure/data"
export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("tech")
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({})

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our industrial IoT and robotics solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            {Object.entries(faqData).map(([key, category]) => (
              <div key={key} className="mb-8">
                <button
                  onClick={() => toggleCategory(key)}
                  className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform ${
                      openCategory === key ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openCategory === key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-x-company-lg-24">
                        {category.questions.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleQuestion(`${key}-${index}`)}
                              className="w-full flex items-center justify-between p-6 text-left"
                            >
                              <span className="text-lg font-medium text-gray-900">
                                {item.question}
                              </span>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-500 transition-transform ${
                                  openQuestions[`${key}-${index}`]
                                    ? "transform rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {openQuestions[`${key}-${index}`] && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-6">
                                    <p className="text-gray-600">
                                      {item.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 