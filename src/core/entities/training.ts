// Core Entity: Training
export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: TrainingLevel;
  price: number;
  curriculum: string[];
  prerequisites: string[];
  outcomes: string[];
  instructor: string;
  maxParticipants: number;
  isActive: boolean;
  createdAt: Date;
}

export enum TrainingLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export interface TrainingEnrollment {
  id: string;
  programId: string;
  participantName: string;
  participantEmail: string;
  participantPhone: string;
  company?: string;
  enrolledAt: Date;
  status: EnrollmentStatus;
}

export enum EnrollmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}