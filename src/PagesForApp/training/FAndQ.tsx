'use client';

import Heading from '@/components/ui/heading';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { text } from '@/lib/typography';

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
  return (
    <section className="py-12 w-full max-w-company-section-width mx-auto ">
      <Heading Display='F&Q' heading='' />
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={String(index)}>
            <AccordionTrigger className={`text-company-black ${text.cardHeadingsmall}`}>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className={`text-company-text-gray ${text.cardBodytextlight}`}>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
