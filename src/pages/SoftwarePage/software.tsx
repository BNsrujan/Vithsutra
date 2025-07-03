"use client"

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { text } from '@/lib/typography';
import Heading from '@/components/ui/heading';
import { containerVariants, itemVariants, fadeInUp } from '@/lib/motion';
import { useRouter } from 'next/navigation';

export default function SoftwaresPage() {
  const router = useRouter();

  const features = [
    {
      title: "Real-time Cloud Dashboard",
      description: "Access your data from anywhere with our intuitive cloud-based dashboard",
      icon: "/icons/cloud-dashboard.svg"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools for informed decision making",
      icon: "/icons/analytics.svg"
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing systems through robust APIs",
      icon: "/icons/api.svg"
    }
  ];

  const benefits = [
    "Real-time monitoring and control",
    "Scalable cloud infrastructure",
    "Secure data encryption",
    "Multi-device accessibility",
    "Customizable dashboards",
    "24/7 system availability"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[80vh] lg:h-[93vh] w-full bg-gradient-to-b from-company-primary-royalBlue to-company-white flex flex-col lg:flex-row justify-center items-center">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full py-12 md:py-20 lg:py-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center h-full items-center lg:items-start mt-8 lg:mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 text-center lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} text-3xl md:text-4xl lg:text-5xl`}
                variants={fadeInUp}
              >
                Real-time Cloud Based Dashboard
              </motion.h1>
              <motion.p
                className={`${text.cardBodytext} max-w-2xl mx-auto lg:mx-0 text-base md:text-lg`}
                variants={fadeInUp}
              >
                Transform your business operations with our advanced cloud-based dashboard solutions. 
                Monitor, control, and analyze your systems in real-time from anywhere in the world.
              </motion.p>
              <div className="flex justify-center lg:justify-start">
                <Button onClick={() => router.push("/contact")}>
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px] md:h-[350px] lg:h-[400px] flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-full overflow-visible rounded-[28px]"
            >
              <Image
                src="/robotics/Smart_Manufacturing.png"
                alt="Cloud Dashboard"
                fill
                className="object-contain md:object-cover overflow-visible rounded-4xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Heading heading="FEATURES" Display="Key Features" />
          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center h-full"
              >
                <div className="relative border rounded-[24px] p-4 overflow-hidden w-full md:h-[400px] md:mb-6">
                  <div className="w-full h-2/3 rounded-3xl border bg-company-litest-gray flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                  <div className="pt-4">
                    <h3 className={`${text.cardHeadingtext} mb-4`}>
                      {feature.title}
                    </h3>
                    <p className={`${text.cardBodytext} text-gray-600`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Heading heading="BENEFITS" Display="Why Choose Our Software" />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-company-primary-royalBlue rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white text-xl">✓</div>
                </div>
                <p className={`${text.cardBodytext} text-gray-700`}>{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto rounded-4xl bg-company-primary-royalBlue h-[300px] flex flex-col justify-center px-4 md:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={`${text.cardHeadingtext} text-white mb-2`}>
              Ready to Transform Your Operations?
            </h2>
            <p className={`${text.Sectionbodytexts} text-gray-200 mb-10 max-w-2xl mx-auto`}>
              Contact us today to learn more about our cloud dashboard solutions and how they can benefit your business.
            </p>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-company-secondary-yello text-black hover:text-black hover:bg-company-secondary-yello/80"
            >
              <span className={text.Buttontext}>Request a Demo</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 