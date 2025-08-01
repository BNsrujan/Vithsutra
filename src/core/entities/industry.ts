// Core Entity: Industry
export interface Industry {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  applications: string[];
  challenges: string[];
  solutions: string[];
  caseStudies?: CaseStudy[];
  isActive: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industryId: string;
  imageUrl: string;
  results: string[];
  technologies: string[];
  publishedAt: Date;
}