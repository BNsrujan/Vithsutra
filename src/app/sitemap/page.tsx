import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { text } from '@/lib/typography';
import Heading from '@/components/ui/heading';
import { containerVariants, itemVariants } from '@/lib/motion';

export default function SitemapPage() {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/", description: "Vithsutra - Industrial IoT and Robotics Solutions" },
        { name: "About Us", href: "/about", description: "Learn about our mission, vision, and team" },
        { name: "Contact", href: "/contact", description: "Get in touch with our team" },
        { name: "Blog", href: "/blog", description: "Latest news and insights" },
        { name: "Case Studies", href: "/case-studies", description: "Explore our successful projects" },
        { name: "Team", href: "/team", description: "Meet our leadership team" },
        { name: "Careers", href: "/careers", description: "Join our team" },
        { name: "FAQ", href: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "RFID-Based Telephone", href: "/projects/rfid-telephone", description: "Secure RFID calling system" },
        { name: "Biometric System", href: "/projects/biometric-product", description: "Affordable biometric authentication" },
        { name: "Hydroponics Controller", href: "/projects/hydroponic-controller", description: "Precision-controlled farming" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "IIOT & Robotics", href: "/technologies/iiot-robotics", description: "Industrial IoT and robotic automation" },
        { name: "Electronics", href: "/technologies/electronics", description: "Advanced electronic solutions" },
        { name: "Smart Retail", href: "/technologies/smart-retail", description: "Retail automation solutions" },
        { name: "Softwares", href: "/technologies/Softwares", description: "Real-time cloud-based dashboard" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Food Processing", href: "/industries/food-processing", description: "Automating packaging and quality control" },
        { name: "Healthcare & Medical", href: "/industries/healthcare-medical", description: "Secure patient access and automation" },
        { name: "Education & Research", href: "/industries/education-research", description: "IIoT labs and robotics training" },
        { name: "Farming & Agriculture", href: "/industries/farming-agriculture", description: "Hydroponics automation and precision farming" },
        { name: "Manufacturing", href: "/industries/manufacturing", description: "PLC-based automation and robotic integration" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy", description: "How we collect and protect your data" },
        { name: "Terms of Service", href: "/terms-of-service", description: "Terms governing use of our services" },
        { name: "Sitemap", href: "/sitemap", description: "Complete site structure" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-company-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 md:px-8 bg-gradient-to-b from-company-primary-royalBlue to-company-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Heading heading="SITEMAP" Display="Site Map" />
            <motion.p
              className={`${text.Sectionbodyteexts} text-white mt-6 max-w-2xl mx-auto`}
              variants={itemVariants}
            >
              Navigate through all pages and sections of our website.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sitemapData.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h2 className={`${text.cardHeadingtext} text-company-black mb-6`}>
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <Link
                        href={link.href}
                        className="block group"
                      >
                        <h3 className={`${text.cardHeadingsmall} text-company-primary-royalBlue group-hover:text-company-black transition-colors mb-1`}>
                          {link.name}
                        </h3>
                        <p className={`${text.cardsubtext} text-company-mid-gray group-hover:text-company-black transition-colors`}>
                          {link.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-company-litest-gray rounded-xl p-8 text-center"
          >
            <h3 className={`${text.cardHeadingtext} text-company-black mb-4`}>
              Can't Find What You're Looking For?
            </h3>
            <p className={`${text.cardsubtext} text-company-mid-gray mb-6`}>
              If you can't find the information you need, please contact us directly.
            </p>
            <div className="space-y-2">
              <p className={`${text.cardsubtext} text-company-black`}>
                Email: info@vithsutra.com
              </p>
              <p className={`${text.cardsubtext} text-company-black`}>
                Phone: +91-XXXXXXXXXX
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 