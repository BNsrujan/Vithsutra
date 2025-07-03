"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Shubhang.C.S",
    title: "Design Head & Quality Assurence Manager",
    department: "Design",
    image: "/TeamProfile/shubhang_cs.png",
    bio: "Leading our design initiatives and ensuring the highest quality standards across all projects.",
    linkedin: "https://linkedin.com/in/shubhang-cs",
    github: "https://github.com/shubhang-cs",
    twitter: "https://twitter.com/shubhang-cs"
  },
  {
    id: 2,
    name: "Gowtham.M.A",
    title: "Chief Technical Manager",
    department: "Engineering",
    image: "/TeamProfile/gowtham_ma.png",
    bio: "Overseeing all technical operations and driving innovation in our engineering processes.",
    linkedin: "https://linkedin.com/in/gowtham-ma",
    github: "https://github.com/gowtham-ma",
    twitter: "https://twitter.com/gowtham-ma"
  },
  {
    id: 3,
    name: "Sumith.K.S",
    title: "Chief Operational Manager",
    department: "Operations",
    image: "/TeamProfile/sumith_ks.png",
    bio: "Managing day-to-day operations and ensuring smooth execution of all projects.",
    linkedin: "https://linkedin.com/in/sumith-ks",
    github: "https://github.com/sumith-ks",
    twitter: "https://twitter.com/sumith-ks"
  },
  {
    id: 4,
    name: "Srujan.K.M",
    title: "Developer & Product Resource Manager",
    department: "Engineering",
    image: "/TeamProfile/srujan.png",
    bio: "Leading development efforts and managing product resources for optimal delivery.",
    linkedin: "https://linkedin.com/in/srujan-km",
    github: "https://github.com/srujan-km",
    twitter: "https://twitter.com/srujan-km"
  },
  {
    id: 5,
    name: "Kiran Kashyap",
    title: "Marketing Head & Company Relationship Manager",
    department: "Marketing",
    image: "/TeamProfile/kiran_kashyap.png",
    bio: "Driving marketing strategies and managing key company relationships.",
    linkedin: "https://linkedin.com/in/kiran-kashyap",
    github: "https://github.com/kiran-kashyap",
    twitter: "https://twitter.com/kiran-kashyap"
  },
  {
    id: 6,
    name: "Sathwik.K.D",
    title: "Developer & Media Officer",
    department: "Engineering",
    image: "/TeamProfile/sathwik_kd.png",
    bio: "Handling development tasks and managing media communications.",
    linkedin: "https://linkedin.com/in/sathwik-kd",
    github: "https://github.com/sathwik-kd",
    twitter: "https://twitter.com/sathwik-kd"
  },
  {
    id: 7,
    name: "Gagan",
    title: "Solder Artist",
    department: "Engineering",
    image: "/TeamProfile/gagan.png",
    bio: "Expert in precision soldering and hardware assembly.",
    linkedin: "https://linkedin.com/in/gagan",
    github: "https://github.com/gagan",
    twitter: "https://twitter.com/gagan"
  }
]

// Department filter options
const departments = ["All", "Engineering", "Design", "Operations", "Marketing"]

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
                  <Image
                  fill
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