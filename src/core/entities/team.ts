// Core Entity: Team
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  imageUrl: string;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  isActive: boolean;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
}