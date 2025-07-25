// Core Entity: Contact
export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  createdAt?: Date;
  status?: ContactStatus;
}

export enum ContactStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}