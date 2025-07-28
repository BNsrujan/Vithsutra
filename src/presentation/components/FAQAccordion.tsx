import React from 'react';
import { FAQ } from '../../../core/entities/FAQ';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No FAQs found.</p>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-600 whitespace-pre-line">
              {faq.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};