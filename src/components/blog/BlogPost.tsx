"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowLeft, Share2, BookmarkPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a CMS or API
const blogPost = {
  title: "The Future of Industrial IoT: Trends to Watch in 2024",
  category: "IoT",
  date: "March 15, 2024",
  author: {
    name: "Dr. Sathwik.K.D",
    role: "CTO",
    image: "/TeamProfile/sathwik_kd.png"
  },
  image: "/robotics/The-Future-of-Industrial-IoT.png",
  content: `
    <p class="mb-6">
      The Industrial Internet of Things (IIoT) continues to evolve at a rapid pace, bringing transformative changes to manufacturing and industrial processes. As we move through 2024, several key trends are emerging that will shape the future of industrial automation.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Edge Computing Takes Center Stage</h2>
    <p class="mb-6">
      Edge computing is becoming increasingly crucial in IIoT deployments. By processing data closer to the source, organizations can achieve faster response times and reduced bandwidth costs. This trend is particularly important for real-time applications in manufacturing and industrial automation.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">2. AI and Machine Learning Integration</h2>
    <p class="mb-6">
      The integration of AI and machine learning with IIoT systems is enabling predictive maintenance, quality control, and process optimization. These technologies are helping organizations move from reactive to proactive operations management.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Enhanced Security Measures</h2>
    <p class="mb-6">
      As IIoT networks expand, security becomes more critical than ever. New security protocols and standards are emerging to protect industrial systems from cyber threats, ensuring the integrity and reliability of critical infrastructure.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Digital Twin Technology</h2>
    <p class="mb-6">
      Digital twins are becoming more sophisticated, allowing organizations to create virtual replicas of physical assets and processes. This technology enables better monitoring, simulation, and optimization of industrial systems.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">5. 5G and Advanced Connectivity</h2>
    <p class="mb-6">
      The rollout of 5G networks is enabling new possibilities for IIoT applications, particularly in areas requiring high bandwidth and low latency. This advancement is crucial for applications like autonomous vehicles and real-time monitoring systems.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4">Looking Ahead</h2>
    <p class="mb-6">
      As these trends continue to evolve, organizations must stay agile and adapt their IIoT strategies accordingly. The future of industrial automation lies in the seamless integration of these technologies, creating more efficient, sustainable, and intelligent industrial processes.
    </p>
  `
}

export default function BlogPost({ slug }: { slug: string }) {
  // Use the slug to fetch the correct blog post
  // For now, we're using the static blogPost object
  const post = blogPost

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {post.author.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {post.author.role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end gap-4 mb-8">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <BookmarkPlus className="w-5 h-5" />
              </button>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </div>
  )
} 