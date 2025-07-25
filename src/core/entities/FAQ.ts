// Core Entity: FAQ
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
  order: number;
  faqs: FAQ[];
}