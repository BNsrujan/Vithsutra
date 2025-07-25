import { Industry, CaseStudy } from '../../core/entities/Industry';
import { IndustryRepository, CaseStudyRepository } from '../../core/use-cases/IndustryUseCases';

const mockIndustries: Industry[] = [
  {
    id: '1',
    name: 'Manufacturing',
    description: 'Advanced automation solutions for manufacturing industries',
    slug: 'manufacturing',
    imageUrl: '/industry/manufacturing.jpg',
    applications: [
      'Quality Control',
      'Production Monitoring',
      'Predictive Maintenance',
      'Supply Chain Management'
    ],
    challenges: [
      'Equipment Downtime',
      'Quality Consistency',
      'Cost Optimization',
      'Safety Compliance'
    ],
    solutions: [
      'IoT Sensors for Real-time Monitoring',
      'AI-powered Quality Control',
      'Predictive Analytics',
      'Automated Reporting Systems'
    ],
    isActive: true
  },
  {
    id: '2',
    name: 'Healthcare & Medical',
    description: 'Innovative technology solutions for healthcare sector',
    slug: 'healthcare-medical',
    imageUrl: '/industry/healthcare.jpg',
    applications: [
      'Patient Monitoring',
      'Medical Device Integration',
      'Data Management',
      'Telemedicine'
    ],
    challenges: [
      'Data Security',
      'Regulatory Compliance',
      'System Integration',
      'Cost Management'
    ],
    solutions: [
      'Secure Data Platforms',
      'HIPAA Compliant Systems',
      'Interoperability Solutions',
      'Cloud-based Infrastructure'
    ],
    isActive: true
  },
  {
    id: '3',
    name: 'Education & Research',
    description: 'Technology solutions for educational institutions and research facilities',
    slug: 'education-research',
    imageUrl: '/industry/education.jpg',
    applications: [
      'Smart Classrooms',
      'Research Data Management',
      'Campus Security',
      'Learning Analytics'
    ],
    challenges: [
      'Budget Constraints',
      'Technology Adoption',
      'Data Privacy',
      'Infrastructure Limitations'
    ],
    solutions: [
      'Cost-effective Solutions',
      'User-friendly Interfaces',
      'Privacy-first Design',
      'Scalable Architecture'
    ],
    isActive: true
  },
  {
    id: '4',
    name: 'Food Processing',
    description: 'Automation and monitoring solutions for food processing industry',
    slug: 'food-processing',
    imageUrl: '/industry/food-processing.jpg',
    applications: [
      'Quality Assurance',
      'Temperature Monitoring',
      'Inventory Management',
      'Compliance Tracking'
    ],
    challenges: [
      'Food Safety',
      'Regulatory Compliance',
      'Waste Reduction',
      'Efficiency Optimization'
    ],
    solutions: [
      'Real-time Monitoring Systems',
      'Automated Quality Control',
      'Traceability Solutions',
      'Process Optimization'
    ],
    isActive: true
  },
  {
    id: '5',
    name: 'Farming & Agriculture',
    description: 'Smart farming solutions for modern agriculture',
    slug: 'farming-agriculture',
    imageUrl: '/industry/agriculture.jpg',
    applications: [
      'Precision Farming',
      'Crop Monitoring',
      'Irrigation Control',
      'Livestock Management'
    ],
    challenges: [
      'Weather Dependency',
      'Resource Optimization',
      'Crop Yield',
      'Sustainability'
    ],
    solutions: [
      'IoT Sensor Networks',
      'Weather Monitoring',
      'Automated Irrigation',
      'Data-driven Insights'
    ],
    isActive: true
  }
];

const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Smart Factory Implementation',
    description: 'Complete digital transformation of a manufacturing facility',
    industryId: '1',
    imageUrl: '/case-studies/smart-factory.jpg',
    results: [
      '40% reduction in downtime',
      '25% increase in productivity',
      '30% cost savings',
      'Real-time visibility across operations'
    ],
    technologies: ['IoT Sensors', 'AI Analytics', 'Cloud Platform', 'Mobile Apps'],
    publishedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Hospital Patient Monitoring System',
    description: 'Advanced patient monitoring solution for critical care',
    industryId: '2',
    imageUrl: '/case-studies/hospital-monitoring.jpg',
    results: [
      '50% faster response times',
      '99.9% system uptime',
      'Improved patient outcomes',
      'Reduced manual errors'
    ],
    technologies: ['Wireless Sensors', 'Real-time Analytics', 'Mobile Alerts', 'Cloud Storage'],
    publishedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    title: 'Smart Campus Security',
    description: 'Comprehensive security solution for university campus',
    industryId: '3',
    imageUrl: '/case-studies/campus-security.jpg',
    results: [
      '60% reduction in security incidents',
      'Automated access control',
      'Real-time monitoring',
      'Improved emergency response'
    ],
    technologies: ['Biometric Systems', 'CCTV Integration', 'Mobile Apps', 'Cloud Platform'],
    publishedAt: new Date('2024-01-25')
  }
];

export class MockIndustryRepository implements IndustryRepository {
  async findAll(): Promise<Industry[]> {
    return [...mockIndustries];
  }

  async findById(id: string): Promise<Industry | null> {
    return mockIndustries.find(industry => industry.id === id) || null;
  }

  async findBySlug(slug: string): Promise<Industry | null> {
    return mockIndustries.find(industry => industry.slug === slug) || null;
  }
}

export class MockCaseStudyRepository implements CaseStudyRepository {
  async findAll(): Promise<CaseStudy[]> {
    return [...mockCaseStudies];
  }

  async findById(id: string): Promise<CaseStudy | null> {
    return mockCaseStudies.find(caseStudy => caseStudy.id === id) || null;
  }

  async findByIndustry(industryId: string): Promise<CaseStudy[]> {
    return mockCaseStudies.filter(caseStudy => caseStudy.industryId === industryId);
  }
}