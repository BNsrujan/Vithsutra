// Dependency Injection Container
import { ProductUseCases } from '../../core/usecases/product.usecases';
import { IndustryUseCases } from '../../core/usecases/industry.usecases';
import { ContactUseCases } from '../../core/usecases/contact.usecases';
import { TeamUseCases } from '../../core/usecases/team.usecases';
import { FAQUseCases } from '../../core/usecases/faq.usecases';
import { BlogUseCases } from '../../core/usecases/blog.usecases';

import { MockProductRepository, MockProductCategoryRepository } from '../repositories/MockProductRepository';
import { MockIndustryRepository, MockCaseStudyRepository } from '../repositories/MockIndustryRepository';
import { MockContactRepository } from '../repositories/MockContactRepository';
import { MockTeamRepository } from '../repositories/MockTeamRepository';
import { MockFAQRepository, MockFAQCategoryRepository } from '../repositories/MockFAQRepository';
import { MockBlogRepository, MockBlogCategoryRepository } from '../repositories/MockBlogRepository';
import { MockNotificationService } from '../services/MockNotificationService';

// Singleton container
class DIContainer {
  private static instance: DIContainer;
  private services: Map<string, unknown> = new Map();

  private constructor() {
    this.initializeServices();
  }

  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }

  private initializeServices(): void {
    // Repositories
    const productRepository = new MockProductRepository();
    const productCategoryRepository = new MockProductCategoryRepository();
    const industryRepository = new MockIndustryRepository();
    const caseStudyRepository = new MockCaseStudyRepository();
    const contactRepository = new MockContactRepository();
    const teamRepository = new MockTeamRepository();
    const faqRepository = new MockFAQRepository();
    const faqCategoryRepository = new MockFAQCategoryRepository();
    const blogRepository = new MockBlogRepository();
    const blogCategoryRepository = new MockBlogCategoryRepository();

    // Services
    const notificationService = new MockNotificationService();

    // Use Cases
    const productUseCases = new ProductUseCases(productRepository, productCategoryRepository);
    const industryUseCases = new IndustryUseCases(industryRepository, caseStudyRepository);
    const contactUseCases = new ContactUseCases(contactRepository, notificationService);
    const teamUseCases = new TeamUseCases(teamRepository);
    const faqUseCases = new FAQUseCases(faqRepository, faqCategoryRepository);
    const blogUseCases = new BlogUseCases(blogRepository, blogCategoryRepository);

    // Register services
    this.services.set('ProductUseCases', productUseCases);
    this.services.set('IndustryUseCases', industryUseCases);
    this.services.set('ContactUseCases', contactUseCases);
    this.services.set('TeamUseCases', teamUseCases);
    this.services.set('FAQUseCases', faqUseCases);
    this.services.set('BlogUseCases', blogUseCases);
  }

  get<T>(serviceName: string): T {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as T;
  }
}

// Export singleton instance
export const container = DIContainer.getInstance();

// Convenience functions
export const getProductUseCases = (): ProductUseCases => container.get('ProductUseCases');
export const getIndustryUseCases = (): IndustryUseCases => container.get('IndustryUseCases');
export const getContactUseCases = (): ContactUseCases => container.get('ContactUseCases');
export const getTeamUseCases = (): TeamUseCases => container.get('TeamUseCases');
export const getFAQUseCases = (): FAQUseCases => container.get('FAQUseCases');
export const getBlogUseCases = (): BlogUseCases => container.get('BlogUseCases');