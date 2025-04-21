'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Which model is best for a complete beginner?',
    answer: 'The Basic Model is designed for complete beginners. It introduces robotics, robot types, motion basics, and career guidance.'
  },
  {
    question: 'What is the difference between the Advanced and Master Models?',
    answer: 'The Advanced Model focuses on industrial robots and real-world programming, while the Master Model includes ROS architecture, sensor integration, final projects, and guaranteed internships.'
  },
  {
    question: 'Is there any certification provided?',
    answer: 'Yes, all participants in the Master Model receive a tech portfolio and certification upon completion.'
  },
  {
    question: 'Can I upgrade from Basic to Advanced later?',
    answer: 'Yes, you can upgrade your model at any time and continue your learning from where you left off.'
  },
  {
    question: 'Are there real-world demos or hands-on sessions?',
    answer: 'Yes! Both Advanced and Master Models offer hands-on demos, especially using IRC software, robot programming, and real-time tasks.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 ease-in-out">
            <button
              className="flex justify-between items-center w-full px-5 py-4 text-left text-gray-800 font-medium focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            <div
              className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
        <p className="mt-4 text-sm text-gray-500">Was this helpful? 👍 👎</p>

      </div>
    </section>
  );
}
