import { Industry, CaseStudy } from '../entities/Industry';

export interface IndustryRepository {
  findAll(): Promise<Industry[]>;
  findById(id: string): Promise<Industry | null>;
  findBySlug(slug: string): Promise<Industry | null>;
}

export interface CaseStudyRepository {
  findAll(): Promise<CaseStudy[]>;
  findById(id: string): Promise<CaseStudy | null>;
  findByIndustry(industryId: string): Promise<CaseStudy[]>;
}

export class IndustryUseCases {
  constructor(
    private industryRepository: IndustryRepository,
    private caseStudyRepository: CaseStudyRepository
  ) {}

  async getAllIndustries(): Promise<Industry[]> {
    return this.industryRepository.findAll();
  }

  async getIndustryBySlug(slug: string): Promise<Industry | null> {
    return this.industryRepository.findBySlug(slug);
  }

  async getAllCaseStudies(): Promise<CaseStudy[]> {
    return this.caseStudyRepository.findAll();
  }

  async getCaseStudiesByIndustry(industrySlug: string): Promise<CaseStudy[]> {
    const industry = await this.industryRepository.findBySlug(industrySlug);
    if (!industry) {
      throw new Error('Industry not found');
    }
    return this.caseStudyRepository.findByIndustry(industry.id);
  }
}