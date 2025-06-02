"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Building2, Quote, ArrowRight, CheckCircle2 } from "lucide-react"

// Partner data
const partners = {
  featured: [
    {
      name: "TechManufacture Inc.",
      logo: "/images/partners/techmanufacture-logo.png",
      description: "Leading manufacturer of industrial automation equipment",
      caseStudy: "Implemented our IoT platform to optimize their production line, resulting in 30% efficiency improvement.",
      quote: "Vithsutra's IoT solution transformed our manufacturing process. The real-time monitoring and predictive maintenance capabilities have been game-changing.",
      quoteAuthor: "John Smith",
      quoteRole: "CTO, TechManufacture Inc."
    },
    {
      name: "SmartFactory Solutions",
      logo: "/images/partners/smartfactory-logo.png",
      description: "Provider of smart factory solutions and automation services",
      caseStudy: "Deployed our robotics control system across 5 manufacturing facilities, reducing operational costs by 25%.",
      quote: "The integration of Vithsutra's robotics platform has enabled us to scale our operations while maintaining quality and safety standards.",
      quoteAuthor: "Sarah Johnson",
      quoteRole: "Operations Director, SmartFactory Solutions"
    }
  ],
  logos: [
    { name: "AutoTech", logo: "/images/partners/autotech-logo.png" },
    { name: "RoboSystems", logo: "/images/partners/robosystems-logo.png" },
    { name: "IoT Solutions", logo: "/images/partners/iot-solutions-logo.png" },
    { name: "Smart Industries", logo: "/images/partners/smart-industries-logo.png" },
    { name: "Future Tech", logo: "/images/partners/future-tech-logo.png" },
    { name: "AutoMation", logo: "/images/partners/automation-logo.png" },
    { name: "Tech Innovators", logo: "/images/partners/tech-innovators-logo.png" },
    { name: "Smart Factory", logo: "/images/partners/smart-factory-logo.png" }
  ]
}

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
              Partner with Industry Leaders
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our ecosystem of innovative companies transforming industrial automation through IoT and robotics
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Trusted by 100+ companies</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Global presence</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Proven ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partners.featured.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-sm p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{partner.caseStudy}</p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 italic mb-4">{partner.quote}</p>
                  <div>
                    <p className="font-medium text-gray-900">
                      {partner.quoteAuthor}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {partner.quoteRole}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.logos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Become a Partner
              </h2>
              <p className="text-gray-600">
                Join our network of industry leaders and transform your business with cutting-edge IoT and robotics solutions
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Partnership Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 