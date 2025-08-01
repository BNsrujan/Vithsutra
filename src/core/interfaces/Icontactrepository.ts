import { ContactForm, ContactStatus } from '../entities/contact';

export interface IContactRepository {
  create(contact: Omit<ContactForm, 'id' | 'createdAt' | 'status'>): Promise<ContactForm>;
  findById(id: string): Promise<ContactForm | null>;
  findAll(): Promise<ContactForm[]>;
  updateStatus(id: string, status: ContactStatus): Promise<ContactForm>;
  delete(id: string): Promise<boolean>;
}