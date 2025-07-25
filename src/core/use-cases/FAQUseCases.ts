import { FAQ, FAQCategory } from '../entities/FAQ';

export interface FAQRepository {
  findAll(): Promise<FAQ[]>;
  findById(id: string): Promise<FAQ | null>;
  findByCategory(categoryId: string): Promise<FAQ[]>;
  search(query: string): Promise<FAQ[]>;
}

export interface FAQCategoryRepository {
  findAll(): Promise<FAQCategory[]>;
  findById(id: string): Promise<FAQCategory | null>;
}

export class FAQUseCases {
  constructor(
    private faqRepository: FAQRepository,
    private categoryRepository: FAQCategoryRepository
  ) {}

  async getAllFAQs(): Promise<FAQ[]> {
    const faqs = await this.faqRepository.findAll();
    return faqs
      .filter(faq => faq.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getFAQsByCategory(categoryId: string): Promise<FAQ[]> {
    const faqs = await this.faqRepository.findByCategory(categoryId);
    return faqs
      .filter(faq => faq.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getAllCategoriesWithFAQs(): Promise<FAQCategory[]> {
    const categories = await this.categoryRepository.findAll();
    const categoriesWithFAQs: FAQCategory[] = [];

    for (const category of categories) {
      const faqs = await this.getFAQsByCategory(category.id);
      if (faqs.length > 0) {
        categoriesWithFAQs.push({
          ...category,
          faqs
        });
      }
    }

    return categoriesWithFAQs.sort((a, b) => a.order - b.order);
  }

  async searchFAQs(query: string): Promise<FAQ[]> {
    if (!query.trim()) {
      return this.getAllFAQs();
    }

    const searchResults = await this.faqRepository.search(query);
    return searchResults
      .filter(faq => faq.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getFAQById(id: string): Promise<FAQ | null> {
    const faq = await this.faqRepository.findById(id);
    return faq?.isActive ? faq : null;
  }

  async getPopularFAQs(limit: number = 10): Promise<FAQ[]> {
    // This could be enhanced with analytics data
    const allFAQs = await this.getAllFAQs();
    return allFAQs.slice(0, limit);
  }
}