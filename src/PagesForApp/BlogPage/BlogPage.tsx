"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Industrial IoT: Trends to Watch in 2024",
    category: "IoT",
    date: "March 15, 2024",
    excerpt: "Explore the emerging trends in Industrial IoT that are reshaping manufacturing and industrial processes.",
    image: "/robotics/The-Future-of-Industrial-IoT.png",
    slug: "future-of-industrial-iot-trends-2024"
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Robotics Control Systems",
    category: "Robotics",
    date: "March 10, 2024",
    excerpt: "Discover how artificial intelligence is transforming the way we control and program industrial robots.",
    image: "/robotics/How-AI-is-Revolutionizing-Robotics-Control-Systems.png",
    slug: "ai-revolutionizing-robotics-control"
  },
  {
    id: 3,
    title: "Edge Computing: The Key to Real-time IoT Analytics",
    category: "IoT",
    date: "March 5, 2024",  
    excerpt: "Learn how edge computing is enabling faster, more efficient data processing in IoT applications.",
    image: "/robotics/Edge-Computing-The-Key-to-Real-time-IoT-Analytics.png",
    slug: "edge-computing-real-time-iot-analytics"
  },
  {
    id: 4,
    title: "Machine Learning in Industrial Automation",
    category: "AI",
    date: "February 28, 2024",
    excerpt: "A deep dive into how machine learning algorithms are optimizing industrial automation processes.",
    image: "/robotics/Machine-Learning-in-Industrial-Automation.png",
    slug: "machine-learning-industrial-automation"
  },
  {
    id: 5,
    title: "Robotics Safety Standards: What's New in 2024",
    category: "Robotics",
    date: "February 20, 2024",
    excerpt: "Stay updated with the latest safety standards and regulations in industrial robotics.",
    image: "/robotics/Robotics-Safety-Standards-What-s-New-in-2024.png",
    slug: "robotics-safety-standards-2024"
  },
  {
    id: 6,
    title: "IoT Security: Best Practices for Industrial Networks",
    category: "IoT",
    date: "February 15, 2024",
    excerpt: "Essential security measures to protect your industrial IoT infrastructure from cyber threats.",
    image: "/robotics/IoT-Security-Best-Practices-for-Industrial-Networks.png",
    slug: "iot-security-industrial-networks"
  }
]

// Category filter options
const categories = ["All", "IoT", "Robotics", "AI"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Latest in IoT & Robotics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, trends, and innovations shaping the future of industrial automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video relative">
                    <Image
                    fill
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 