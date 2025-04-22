'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What prerequisites are required for the training?",
    answer: "Basic knowledge of programming and electronics is helpful but not mandatory. We start from fundamentals and build up to advanced concepts."
  },
  {
    question: "How long does each training module take?",
    answer: "The BASIC model takes 2 days, ADVANCED model takes 2-3 days, and the MASTER model duration varies based on the specialization track chosen."
  },
  {
    question: "Do you provide certification after completion?",
    answer: "Yes, we provide a certification upon successful completion of each training module, which is recognized by industry partners."
  },
  {
    question: "Can I get hands-on experience with real robots?",
    answer: "Absolutely! Our training includes practical sessions with industrial robots and IoT devices in our state-of-the-art lab."
  },
  {
    question: "What kind of support is available after training?",
    answer: "We provide ongoing support through our online community, regular webinars, and access to our technical team for project guidance."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12  max-w-[1400px] mx-auto bg-white">
      <div className="mb-2 text-company-text-gray">FAQ</div>
      <h2 className="section-head text-company-black mb-8">Frequently Asked Questions</h2>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="rounded-[12px] overflow-hidden bg-company-light-light-gray    transition-all duration-300 ease-in-out"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              onClick={() => toggle(index)}
            >
              <span className=" text-company-black">{faq.question}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5 text-company-text-gray" /> : <ChevronDown className="w-5 h-5 text-company-text-gray" />}
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <p className="body-text text-company-text-gray">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
