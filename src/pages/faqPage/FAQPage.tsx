"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, Building2, Wrench, HelpCircle } from "lucide-react"

// FAQ data grouped by categories
const faqData = {
  tech: {
    title: "Technical Questions",
    icon: Wrench,
    questions: [
      {
        question: "What types of IoT devices do you support?",
        answer: "We support a wide range of IoT devices including industrial sensors, PLCs, SCADA systems, and custom hardware solutions. Our platform is designed to be device-agnostic, allowing seamless integration with both legacy and modern industrial equipment."
      },
      {
        question: "How does your predictive maintenance system work?",
        answer: "Our predictive maintenance system uses advanced machine learning algorithms to analyze real-time data from your equipment. It identifies patterns and anomalies that could indicate potential failures, allowing you to schedule maintenance before issues occur. The system continuously learns from new data to improve its accuracy over time."
      },
      {
        question: "What security measures do you implement for IoT devices?",
        answer: "We implement multiple layers of security including end-to-end encryption, secure device authentication, regular security updates, and network segmentation. Our platform follows industry best practices and complies with international security standards to protect your industrial infrastructure."
      },
      {
        question: "Can your system integrate with existing industrial equipment?",
        answer: "Yes, our system is designed to integrate with existing industrial equipment through various protocols including Modbus, OPC UA, and custom APIs. We provide adapters and middleware solutions to ensure seamless connectivity with your current infrastructure."
      }
    ]
  },
  support: {
    title: "Support & Implementation",
    icon: HelpCircle,
    questions: [
      {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 technical support through multiple channels including phone, email, and live chat. Our support team consists of certified engineers with extensive experience in industrial automation and IoT systems. We also provide regular maintenance and system health checks."
      },
      {
        question: "How long does implementation typically take?",
        answer: "Implementation time varies depending on the scale and complexity of your project. A typical implementation takes 4-8 weeks, including system design, hardware installation, software configuration, and staff training. We provide a detailed timeline during the initial consultation."
      },
      {
        question: "Do you provide training for our staff?",
        answer: "Yes, we provide comprehensive training programs for your technical and operational staff. Training includes system operation, maintenance procedures, troubleshooting, and best practices. We also offer ongoing training sessions and documentation updates."
      },
      {
        question: "What happens if we encounter issues after implementation?",
        answer: "Our support team is available 24/7 to address any issues. We have a tiered support system that ensures quick response times and effective problem resolution. For critical issues, we can provide on-site support within 24 hours."
      }
    ]
  },
  business: {
    title: "Business & Partnership",
    icon: Building2,
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including subscription-based and project-based options. Pricing depends on factors such as the number of devices, data volume, and required features. Contact our sales team for a customized quote based on your specific needs."
      },
      {
        question: "Do you offer custom solutions?",
        answer: "Yes, we specialize in developing custom solutions tailored to your specific industrial requirements. Our team works closely with you to understand your needs and develop a solution that addresses your unique challenges and objectives."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including manufacturing, energy, utilities, transportation, and logistics. Our solutions are adaptable to various industrial environments and can be customized to meet industry-specific requirements."
      },
      {
        question: "How do you ensure data privacy and compliance?",
        answer: "We maintain strict data privacy standards and comply with relevant regulations including GDPR, ISO 27001, and industry-specific requirements. All data is encrypted, and we provide tools for data governance and compliance reporting."
      }
    ]
  }
}

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
                      <div className="mt-4 space-y-4">
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