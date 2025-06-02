"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Linkedin, Github, Twitter } from "lucide-react"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    department: "Engineering",
    image: "/images/team/sarah-chen.jpg",
    bio: "Ph.D. in Robotics from MIT with 15+ years of experience in industrial automation. Led multiple successful IIoT implementations for Fortune 500 companies.",
    linkedin: "https://linkedin.com/in/sarah-chen",
    github: "https://github.com/sarah-chen",
    twitter: "https://twitter.com/sarah-chen"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Head of Research & Development",
    department: "R&D",
    image: "/images/team/michael-rodriguez.jpg",
    bio: "Former NASA engineer specializing in sensor fusion and machine learning. Published author with 20+ patents in industrial automation.",
    linkedin: "https://linkedin.com/in/michael-rodriguez",
    github: "https://github.com/michael-rodriguez",
    twitter: "https://twitter.com/michael-rodriguez"
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    title: "Lead AI Engineer",
    department: "Engineering",
    image: "/images/team/aisha-patel.jpg",
    bio: "Expert in computer vision and deep learning. Previously led AI initiatives at Google and has published numerous papers in top-tier conferences.",
    linkedin: "https://linkedin.com/in/aisha-patel",
    github: "https://github.com/aisha-patel",
    twitter: "https://twitter.com/aisha-patel"
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Operations Director",
    department: "Operations",
    image: "/images/team/james-wilson.jpg",
    bio: "20+ years of experience in industrial operations and supply chain management. Expert in implementing IIoT solutions for manufacturing efficiency.",
    linkedin: "https://linkedin.com/in/james-wilson",
    github: "https://github.com/james-wilson",
    twitter: "https://twitter.com/james-wilson"
  },
  {
    id: 5,
    name: "Dr. Elena Popov",
    title: "Senior Research Scientist",
    department: "R&D",
    image: "/images/team/elena-popov.jpg",
    bio: "Specializes in edge computing and real-time systems. Former professor at Stanford with expertise in distributed systems and IoT architecture.",
    linkedin: "https://linkedin.com/in/elena-popov",
    github: "https://github.com/elena-popov",
    twitter: "https://twitter.com/elena-popov"
  },
  {
    id: 6,
    name: "David Kim",
    title: "Head of Product Engineering",
    department: "Engineering",
    image: "/images/team/david-kim.jpg",
    bio: "Product visionary with 12+ years of experience in industrial software development. Led the development of multiple award-winning IIoT platforms.",
    linkedin: "https://linkedin.com/in/david-kim",
    github: "https://github.com/david-kim",
    twitter: "https://twitter.com/david-kim"
  }
]

// Department filter options
const departments = ["All", "Engineering", "R&D", "Operations"]

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const filteredMembers = selectedDepartment === "All"
    ? teamMembers
    : teamMembers.filter(member => member.department === selectedDepartment)

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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A diverse group of experts passionate about transforming industries through innovative IIoT solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Github className="w-5 h-5 text-blue-600" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.department}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 