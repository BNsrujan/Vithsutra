import { ContactForm, ContactStatus } from '../../core/entities/Contact';
import { ContactRepository } from '../../core/use-cases/ContactUseCases';

const mockContacts: ContactForm[] = [];

export class MockContactRepository implements ContactRepository {
  async create(contactData: Omit<ContactForm, 'id' | 'createdAt' | 'status'>): Promise<ContactForm> {
    const contact: ContactForm = {
      ...contactData,
      id: Date.now().toString(),
      createdAt: new Date(),
      status: ContactStatus.PENDING
    };
    
    mockContacts.push(contact);
    return contact;
  }

  async findById(id: string): Promise<ContactForm | null> {
    return mockContacts.find(contact => contact.id === id) || null;
  }

  async findAll(): Promise<ContactForm[]> {
    return [...mockContacts];
  }

  async updateStatus(id: string, status: ContactStatus): Promise<ContactForm> {
    const contact = mockContacts.find(c => c.id === id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    
    contact.status = status;
    return contact;
  }
}