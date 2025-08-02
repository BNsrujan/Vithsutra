// Core Entity: Contact
export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  createdAt?: Date;
  status?: ContactStatus;
}

// For backward compatibility with existing forms
export type FormData = ContactForm

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export enum ContactStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}
