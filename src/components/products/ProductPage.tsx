"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronRight, ArrowRight, Play } from "lucide-react"

// Product data
const features = [
  {
    title: "Real-time Monitoring",
    description: "24/7 monitoring of industrial processes with instant alerts and analytics",
    icon: "📊"
  },
  {
    title: "Predictive Maintenance",
    description: "AI-powered maintenance predictions to prevent costly downtime",
    icon: "🔧"
  },
  {
    title: "Smart Automation",
    description: "Automated workflows and process optimization",
    icon: "⚡"
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics and insights for better decision making",
    icon: "📈"
  }
]

const specifications = [
  { category: "Hardware", specs: [
    { name: "Processor", value: "Intel Core i7, 2.8GHz" },
    { name: "Memory", value: "16GB RAM" },
    { name: "Storage", value: "512GB SSD" },
    { name: "Connectivity", value: "WiFi 6, Bluetooth 5.0" }
  ]},
  { category: "Software", specs: [
    { name: "Operating System", value: "Linux-based Custom OS" },
    { name: "API Support", value: "REST, MQTT, OPC UA" },
    { name: "Security", value: "256-bit AES Encryption" },
    { name: "Updates", value: "OTA Updates" }
  ]},
  { category: "Performance", specs: [
    { name: "Response Time", value: "< 100ms" },
    { name: "Uptime", value: "99.99%" },
    { name: "Scalability", value: "Up to 1000 devices" },
    { name: "Power Consumption", value: "45W" }
  ]}
]

const useCases = [
  {
    title: "Smart Manufacturing",
    description: "Real-time monitoring and optimization of production lines",
    image: "/images/use-cases/manufacturing.jpg"
  },
  {
    title: "Energy Management",
    description: "Intelligent energy consumption monitoring and optimization",
    image: "/images/use-cases/energy.jpg"
  },
  {
    title: "Quality Control",
    description: "Automated quality inspection and defect detection",
    image: "/images/use-cases/quality.jpg"
  }
]

export default function ProductPage() {
  const demoRef = useRef<HTMLDivElement>(null)

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/product-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Vithsutra IIoT Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8"
          >
            Transform your industrial operations with our advanced IoT and robotics solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollToDemo}
              className="px-8 py-3 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Watch Demo
              <Play className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Technical Specifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between items-center">
                      <span className="text-gray-600">{spec.name}</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Use Cases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section ref={demoRef} className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-center mb-16"
          >
            Watch Our Demo
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
              <video
                controls
                className="w-full h-full"
                poster="/images/demo-thumbnail.jpg"
              >
                <source src="/video/product-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Get in touch with our experts to learn how our IIoT solutions can help your business
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 