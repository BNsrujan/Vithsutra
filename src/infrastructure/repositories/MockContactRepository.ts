import { ContactForm, ContactStatus } from '../../core/entities/Contact';
import { IContactRepository } from '../../core/interfaces/IContactRepository';

const mockContacts: ContactForm[] = [];

export class MockContactRepository implements IContactRepository {
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

  async delete(id: string): Promise<boolean> {
    const index = mockContacts.findIndex(c => c.id === id);
    if (index === -1) return false;
    
    mockContacts.splice(index, 1);
    return true;
  }
}