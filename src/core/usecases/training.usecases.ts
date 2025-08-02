import { TrainingProgram, TrainingEnrollment, TrainingLevel, EnrollmentStatus } from '../entities/training';

export interface TrainingRepository {
  findAllPrograms(): Promise<TrainingProgram[]>;
  findProgramById(id: string): Promise<TrainingProgram | null>;
  findProgramsByLevel(level: TrainingLevel): Promise<TrainingProgram[]>;
}

export interface EnrollmentRepository {
  create(enrollment: Omit<TrainingEnrollment, 'id' | 'enrolledAt' | 'status'>): Promise<TrainingEnrollment>;
  findById(id: string): Promise<TrainingEnrollment | null>;
  findByProgram(programId: string): Promise<TrainingEnrollment[]>;
  updateStatus(id: string, status: EnrollmentStatus): Promise<TrainingEnrollment>;
}

export interface TrainingNotificationService {
  sendEnrollmentConfirmation(enrollment: TrainingEnrollment, program: TrainingProgram): Promise<void>;
  sendProgramReminder(enrollment: TrainingEnrollment, program: TrainingProgram): Promise<void>;
}

export class TrainingUseCases {
  constructor(
    private trainingRepository: TrainingRepository,
    private enrollmentRepository: EnrollmentRepository,
    private notificationService: TrainingNotificationService
  ) {}

  async getAllPrograms(): Promise<TrainingProgram[]> {
    const programs = await this.trainingRepository.findAllPrograms();
    return programs.filter(program => program.isActive);
  }

  async getProgramById(id: string): Promise<TrainingProgram | null> {
    return this.trainingRepository.findProgramById(id);
  }

  async getProgramsByLevel(level: TrainingLevel): Promise<TrainingProgram[]> {
    const programs = await this.trainingRepository.findProgramsByLevel(level);
    return programs.filter(program => program.isActive);
  }

  async enrollInProgram(
    programId: string,
    participantData: {
      name: string;
      email: string;
      phone: string;
      company?: string;
    }
  ): Promise<TrainingEnrollment> {
    // Validate program exists and is active
    const program = await this.trainingRepository.findProgramById(programId);
    if (!program || !program.isActive) {
      throw new Error('Program not found or not available');
    }

    // Check enrollment capacity
    const existingEnrollments = await this.enrollmentRepository.findByProgram(programId);
    const activeEnrollments = existingEnrollments.filter(
      e => e.status === EnrollmentStatus.CONFIRMED || e.status === EnrollmentStatus.PENDING
    );

    if (activeEnrollments.length >= program.maxParticipants) {
      throw new Error('Program is full');
    }

    // Create enrollment
    const enrollment = await this.enrollmentRepository.create({
      programId,
      participantName: participantData.name,
      participantEmail: participantData.email,
      participantPhone: participantData.phone,
      company: participantData.company
    });

    // Send confirmation
    await this.notificationService.sendEnrollmentConfirmation(enrollment, program);

    return enrollment;
  }

  async getEnrollmentById(id: string): Promise<TrainingEnrollment | null> {
    return this.enrollmentRepository.findById(id);
  }

  async confirmEnrollment(enrollmentId: string): Promise<TrainingEnrollment> {
    const enrollment = await this.enrollmentRepository.findById(enrollmentId);
    if (!enrollment) {
      throw new Error('Enrollment not found');
    }

    return this.enrollmentRepository.updateStatus(enrollmentId, EnrollmentStatus.CONFIRMED);
  }
}