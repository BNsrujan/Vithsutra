import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Heading from './ui/heading';
import { text } from '@/lib/typography';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants, fadeInUp } from '@/lib/motion';

interface Spec {
  title: string;
  details: string[];
}

const TechnicalSpecs = () => {
  const [openSpec, setOpenSpec] = useState<number | null>(null);

  const specs: Spec[] = [
    {
      title: 'RFID System',
      details: [
        'Frequency: 13.56 MHz (MIFARE)',
        'Read Range: Up to 10cm',
        'Card Capacity: 1,000 users',
        'Authentication: AES-128 encryption'
      ]
    },
    {
      title: 'Call Management',
      details: [
        'Max call time per session: Configurable',
        'Billing Rate: ₹1 per 60 seconds',
        'Concurrent Calls: Single line',
        'Call Quality: HD Voice support'
      ]
    },
    {
      title: 'Hardware Specifications',
      details: [
        'Power Input: 12V / 5A',
        'Operating Temperature: -10°C to +60°C',
        'Display: 4.3" TFT LCD',
        'Keypad: Backlit membrane switches'
      ]
    },
    {
      title: 'Data & Connectivity',
      details: [
        'Data Storage: Local + optional cloud sync',
        'Connectivity: Ethernet, Wi-Fi optional',
        'Dashboard: Web-based admin panel',
        'Backup: Automatic data backup'
      ]
    }
  ];

  const toggleSpec = (index: number) => {
    setOpenSpec(openSpec === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-company-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Heading Display='Technical Specifications' heading='SPECS'/>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-4 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-r from-company-litest-gray to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <button
                onClick={() => toggleSpec(idx)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className={`${text.cardHeadingtext} text-company-black group-hover:text-company-primary-royalBlue transition-colors`}>
                  {spec.title}
                </h3>
                <div className="w-8 h-8 bg-company-primary-royalBlue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  {openSpec === idx ? (
                    <ArrowUp className="w-4 h-4 text-company-white" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-company-white" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openSpec === idx && (
                  <motion.div 
                    className="px-6 pb-6"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <div className="bg-company-white rounded-xl p-6 space-y-3 shadow-inner border border-gray-100">
                      {spec.details.map((detail, detailIdx) => (
                        <motion.div 
                          key={detailIdx} 
                          className="flex items-start space-x-3"
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: detailIdx * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-company-primary-royalBlue to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`${text.cardsubtext} text-company-mid-gray`}>{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
