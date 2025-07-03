"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, MapPin, Briefcase, Clock, Star, Users, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"

// Job listings data
const jobListings = [
  {
    id: 1,
    title: "Senior Robotics Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Join our robotics team to develop cutting-edge automation solutions for industrial applications.",
    requirements: [
      "5+ years of experience in robotics development",
      "Strong background in ROS and C++",
      "Experience with computer vision and sensor fusion"
    ],
    image: "/images/careers/robotics.jpg"
  },
  {
    id: 2,
    title: "IoT Solutions Architect",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement scalable IoT architectures for enterprise clients.",
    requirements: [
      "8+ years of experience in IoT architecture",
      "Expertise in cloud platforms (AWS, Azure)",
      "Strong knowledge of industrial protocols"
    ],
    image: "/images/careers/iot.jpg"
  },
  {
    id: 3,
    title: "AI Research Scientist",
    department: "R&D",
    location: "Boston, MA",
    type: "Full-time",
    description: "Lead research initiatives in machine learning and AI for industrial applications.",
    requirements: [
      "Ph.D. in Computer Science or related field",
      "Published research in top ML conferences",
      "Experience with deep learning frameworks"
    ],
    image: "/images/careers/ai.jpg"
  },
  {
    id: 4,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    description: "Drive product marketing strategy for our IIoT solutions portfolio.",
    requirements: [
      "5+ years in B2B product marketing",
      "Experience in industrial/tech sector",
      "Strong analytical and communication skills"
    ],
    image: "/images/careers/marketing.jpg"
  }
]

// Department filter options
const departments = ["All", "Engineering", "R&D", "Marketing", "Operations"]

// Values data
const values = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, pushing the boundaries of what's possible."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives and collaborative problem-solving."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "We foster a culture of continuous innovation and creative thinking."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Impact",
    description: "We're driven by the impact our solutions have on industries and society."
  }
]

// Testimonials data
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Robotics Engineer",
    image: "/images/team/sarah-chen.jpg",
    quote: "The opportunity to work on cutting-edge robotics projects and collaborate with brilliant minds makes every day exciting."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of R&D",
    image: "/images/team/michael-rodriguez.jpg",
    quote: "The culture of innovation and the freedom to explore new ideas is what makes this company special."
  }
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedJob, setSelectedJob] = useState<typeof jobListings[0] | null>(null)

  const filteredJobs = selectedDepartment === "All"
    ? jobListings
    : jobListings.filter(job => job.department === selectedDepartment)

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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Help us shape the future of industrial automation and IoT solutions
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Life at Our Company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {testimonial.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Positions
          </h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === department
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedJob.title}
                  </h2>
                  <p className="text-gray-600">
                    {selectedJob.department} • {selectedJob.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume/CV
                  </label>
                  <input
                    type="file"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
} 