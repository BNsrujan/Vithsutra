import React from 'react';
import { motion } from 'framer-motion';
import { text } from '@/lib/typography';
import Heading from '@/components/ui/heading';
import { containerVariants, itemVariants } from '@/lib/motion';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using our services, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of our services after changes constitutes acceptance of new terms"
      ]
    },
    {
      title: "Use of Services",
      content: [
        "Our services are provided for legitimate business purposes only",
        "You agree not to use our services for any illegal or unauthorized purpose",
        "You are responsible for maintaining the confidentiality of your account",
        "You must provide accurate and complete information when using our services"
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All content, features, and functionality are owned by Vithsutra",
        "You may not copy, modify, or distribute our intellectual property",
        "Trademarks and service marks are the property of their respective owners",
        "You retain ownership of content you submit, but grant us license to use it"
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "We provide services 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid for our services",
        "We are not responsible for third-party content or services"
      ]
    },
    {
      title: "Privacy and Data",
      content: [
        "Your privacy is important to us and is governed by our Privacy Policy",
        "We may collect and use data as described in our Privacy Policy",
        "You are responsible for the data you provide and its accuracy",
        "We implement reasonable security measures to protect your data"
      ]
    },
    {
      title: "Termination",
      content: [
        "We may terminate or suspend your access to our services at any time",
        "You may terminate your account by contacting us",
        "Upon termination, your right to use our services ceases immediately",
        "Certain provisions survive termination of these terms"
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
            <Heading heading="TERMS" Display="Terms of Service" />
            <motion.p
              className={`${text.Sectionbodyteexts} text-white mt-6 max-w-2xl mx-auto`}
              variants={itemVariants}
            >
              These terms govern your use of our services. Please read them carefully.
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
                      <p className={`${text.cardsubtext} text-company-mid-gray`}>
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
              Questions About These Terms?
            </h3>
            <p className={`${text.cardsubtext} text-company-mid-gray mb-6`}>
              If you have any questions about these terms of service, please contact us.
            </p>
            <div className="space-y-2">
              <p className={`${text.cardsubtext} text-company-black`}>
                Email: legal@vithsutra.com
              </p>
              <p className={`${text.cardsubtext} text-company-black`}>
                Phone: +91-XXXXXXXXXX
              </p>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className={`${text.cardsubtext} text-company-mid-gray`}>
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