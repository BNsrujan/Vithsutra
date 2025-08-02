"use client";
import React from 'react';
import { motion } from 'motion/react';
import { text } from '@/shared/lib/typography';
import Heading from '@/presentation/components/ui/heading.ui';
import { containerVariants, itemVariants } from '@/shared/lib/motion';



export default function PrivacyPolicyPage() {
    const sections = [
      {
        title: "Information We Collect",
        content: [
          "Personal information (name, email, phone number) when you contact us",
          "Usage data and analytics to improve our services",
          "Technical information about your device and browser",
          "Information you provide through our contact forms and surveys"
        ]
      },
      {
        title: "How We Use Your Information",
        content: [
          "To provide and maintain our services",
          "To communicate with you about our products and services",
          "To improve our website and user experience",
          "To comply with legal obligations",
          "To protect against fraud and security threats"
        ]
      },
      {
        title: "Information Sharing",
        content: [
          "We do not sell, trade, or rent your personal information",
          "We may share information with trusted third-party service providers",
          "We may disclose information if required by law",
          "We may share information in connection with business transfers"
        ]
      },
      {
        title: "Data Security",
        content: [
          "We implement appropriate security measures to protect your data",
          "We use encryption to secure data transmission",
          "We regularly review and update our security practices",
          "We limit access to personal information to authorized personnel"
        ]
      },
      {
        title: "Your Rights",
        content: [
          "Right to access your personal information",
          "Right to correct inaccurate information",
          "Right to delete your personal information",
          "Right to opt-out of marketing communications",
          "Right to lodge a complaint with supervisory authorities"
        ]
      },
      {
        title: "Cookies and Tracking",
        content: [
          "We use cookies to improve your browsing experience",
          "You can control cookie settings through your browser",
          "We use analytics tools to understand website usage",
          "Third-party cookies may be used for advertising purposes"
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
              <Heading heading="PRIVACY" Display="Privacy Policy" />
              <motion.p
                className={`${text.SectionHeader} text-white mt-6 max-w-2xl mx-auto`}
                variants={itemVariants}
              >
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </motion.p>
            </motion.div>
          </div>
        </section>
  
        {/* Content Section */}
        <section className="py-16 px-4 md:py-24 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <h2 className={`${text.cardHeadingtext} text-company-black mb-6`}>
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-company-primary-royalBlue rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`${text.cardBodytext} text-company-mid-gray`}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
  
            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              className="mt-16 bg-company-litest-gray rounded-xl p-8 text-center"
            >
              <h3 className={`${text.cardHeadingtext} text-company-black mb-4`}>
                Questions About This Policy?
              </h3>
              <p className={`${text.cardBodytext} text-company-mid-gray mb-6`}>
                If you have any questions about our privacy policy, please contact us.
              </p>
              <div className="space-y-2">
                <p className={`${text.cardBodytext} text-company-black`}>
                  Email: privacy@vithsutra.com
                </p>
                <p className={`${text.cardBodytext} text-company-black`}>
                  Phone: +91-XXXXXXXXXX
                </p>
              </div>
            </motion.div>
  
            {/* Last Updated */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className={`${text.cardBodytext} text-company-mid-gray`}>
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    );
  } 