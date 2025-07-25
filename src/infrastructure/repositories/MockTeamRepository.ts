import { TeamMember, Department } from '../../core/entities/Team';
import { TeamRepository } from '../../core/use-cases/TeamUseCases';

const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Akash Kumar',
    position: 'CEO & Founder',
    department: 'leadership',
    bio: 'Visionary leader with 15+ years of experience in technology and innovation.',
    imageUrl: '/TeamProfile/akash.png',
    skills: ['Leadership', 'Strategy', 'Innovation', 'Business Development'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/akash-kumar'
    },
    isActive: true
  },
  {
    id: '2',
    name: 'Gagan Sharma',
    position: 'CTO',
    department: 'engineering',
    bio: 'Technical expert specializing in IoT, AI, and system architecture.',
    imageUrl: '/TeamProfile/gagan.png',
    skills: ['IoT', 'AI/ML', 'System Architecture', 'Cloud Computing'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/gagan-sharma'
    },
    isActive: true
  },
  {
    id: '3',
    name: 'Gowtham MA',
    position: 'Lead Developer',
    department: 'engineering',
    bio: 'Full-stack developer with expertise in modern web technologies.',
    imageUrl: '/TeamProfile/gowtham_ma.png',
    skills: ['React', 'Node.js', 'Python', 'Database Design'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/gowtham-ma'
    },
    isActive: true
  },
  {
    id: '4',
    name: 'Kiran Kashyap',
    position: 'Hardware Engineer',
    department: 'engineering',
    bio: 'Hardware specialist focusing on embedded systems and IoT devices.',
    imageUrl: '/TeamProfile/kiran_kashyap.png',
    skills: ['Embedded Systems', 'PCB Design', 'Microcontrollers', 'Sensors'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/kiran-kashyap'
    },
    isActive: true
  },
  {
    id: '5',
    name: 'Sathwik KD',
    position: 'Software Engineer',
    department: 'engineering',
    bio: 'Software engineer specializing in mobile and web applications.',
    imageUrl: '/TeamProfile/sathwik_kd.png',
    skills: ['Mobile Development', 'React Native', 'Flutter', 'API Development'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sathwik-kd'
    },
    isActive: true
  },
  {
    id: '6',
    name: 'Shubhang CS',
    position: 'UI/UX Designer',
    department: 'design',
    bio: 'Creative designer focused on user experience and interface design.',
    imageUrl: '/TeamProfile/shubhang_cs.png',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/shubhang-cs'
    },
    isActive: true
  },
  {
    id: '7',
    name: 'Srujan Kumar',
    position: 'DevOps Engineer',
    department: 'engineering',
    bio: 'DevOps specialist ensuring smooth deployment and infrastructure management.',
    imageUrl: '/TeamProfile/srujan.png',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Monitoring'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/srujan-kumar'
    },
    isActive: true
  },
  {
    id: '8',
    name: 'Sumith KS',
    position: 'Quality Assurance',
    department: 'quality',
    bio: 'QA engineer ensuring high-quality software delivery and testing.',
    imageUrl: '/TeamProfile/sumith_ks.png',
    skills: ['Test Automation', 'Manual Testing', 'Performance Testing', 'Quality Assurance'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sumith-ks'
    },
    isActive: true
  }
];

const mockDepartments: Department[] = [
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Executive leadership team driving company vision and strategy',
    members: []
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Technical team developing innovative solutions',
    members: []
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Creative team focusing on user experience and design',
    members: []
  },
  {
    id: 'quality',
    name: 'Quality Assurance',
    description: 'Quality team ensuring excellence in all deliverables',
    members: []
  }
];

export class MockTeamRepository implements TeamRepository {
  async findAllMembers(): Promise<TeamMember[]> {
    return [...mockTeamMembers];
  }

  async findMemberById(id: string): Promise<TeamMember | null> {
    return mockTeamMembers.find(member => member.id === id) || null;
  }

  async findMembersByDepartment(departmentId: string): Promise<TeamMember[]> {
    return mockTeamMembers.filter(member => member.department === departmentId);
  }

  async findAllDepartments(): Promise<Department[]> {
    return [...mockDepartments];
  }

  async findDepartmentById(id: string): Promise<Department | null> {
    return mockDepartments.find(dept => dept.id === id) || null;
  }
}