import { FAQ, FAQCategory } from '../../core/entities/faq';
import { FAQRepository, FAQCategoryRepository } from '../../core/use-cases/faq.usecases';

const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of technology solutions including IoT development, biometric systems, RFID solutions, industrial automation, and custom software development.',
    category: 'general',
    order: 1,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity and requirements. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the consultation phase.',
    category: 'general',
    order: 2,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '3',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your systems continue to operate smoothly. This includes regular updates, bug fixes, and technical support.',
    category: 'support',
    order: 1,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '4',
    question: 'What industries do you work with?',
    answer: 'We work with various industries including manufacturing, healthcare, education, food processing, agriculture, and more. Our solutions are customizable to meet specific industry requirements.',
    category: 'general',
    order: 3,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '5',
    question: 'How much do your solutions cost?',
    answer: 'Pricing varies based on project scope, complexity, and requirements. We offer competitive pricing and provide detailed quotes after understanding your specific needs. Contact us for a free consultation.',
    category: 'pricing',
    order: 1,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '6',
    question: 'Can you integrate with existing systems?',
    answer: 'Absolutely! We specialize in system integration and can work with your existing infrastructure. Our solutions are designed to be compatible with various platforms and systems.',
    category: 'technical',
    order: 1,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '7',
    question: 'Do you offer training for your solutions?',
    answer: 'Yes, we provide comprehensive training programs for all our solutions. This includes user training, administrator training, and technical documentation to ensure smooth adoption.',
    category: 'training',
    order: 1,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '8',
    question: 'What makes your solutions different?',
    answer: 'Our solutions are built with cutting-edge technology, focus on user experience, and are highly customizable. We provide end-to-end services from consultation to deployment and ongoing support.',
    category: 'general',
    order: 4,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

const mockCategories: FAQCategory[] = [
  {
    id: 'general',
    name: 'General',
    description: 'General questions about our services and company',
    order: 1,
    faqs: []
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Technical questions about our solutions',
    order: 2,
    faqs: []
  },
  {
    id: 'pricing',
    name: 'Pricing',
    description: 'Questions about pricing and costs',
    order: 3,
    faqs: []
  },
  {
    id: 'support',
    name: 'Support',
    description: 'Questions about support and maintenance',
    order: 4,
    faqs: []
  },
  {
    id: 'training',
    name: 'Training',
    description: 'Questions about training and documentation',
    order: 5,
    faqs: []
  }
];

export class MockFAQRepository implements FAQRepository {
  async findAll(): Promise<FAQ[]> {
    return [...mockFAQs];
  }

  async findById(id: string): Promise<FAQ | null> {
    return mockFAQs.find(faq => faq.id === id) || null;
  }

  async findByCategory(categoryId: string): Promise<FAQ[]> {
    return mockFAQs.filter(faq => faq.category === categoryId);
  }

  async search(query: string): Promise<FAQ[]> {
    const searchTerm = query.toLowerCase();
    return mockFAQs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
    );
  }
}

export class MockFAQCategoryRepository implements FAQCategoryRepository {
  async findAll(): Promise<FAQCategory[]> {
    return [...mockCategories];
  }

  async findById(id: string): Promise<FAQCategory | null> {
    return mockCategories.find(category => category.id === id) || null;
  }
}