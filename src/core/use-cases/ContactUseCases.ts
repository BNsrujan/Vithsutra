import { ContactForm, ContactInfo, } from '../entities/Contact';
import { IContactRepository } from '../interfaces/IContactRepository';
import { INotificationService } from '../interfaces/INotificationService';

export class ContactUseCases {
  constructor(
    private contactRepository: IContactRepository,
    private notificationService: INotificationService
  ) {}

  async submitContactForm(contactData: Omit<ContactForm, 'id' | 'createdAt' | 'status'>): Promise<ContactForm> {
    // Validate contact data
    this.validateContactForm(contactData);

    // Create contact record
    const contact = await this.contactRepository.create(contactData);

    // Send notifications
    await Promise.all([
      this.notificationService.sendContactNotification(contact),
      this.notificationService.sendAutoReply(contact)
    ]);

    return contact;
  }

  async getContactInfo(): Promise<ContactInfo> {
    // This would typically come from a configuration service
    return {
      address: "123 Tech Street, Innovation City, IC 12345",
      phone: "+1 (555) 123-4567",
      email: "contact@company.com",
      workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
      socialLinks: {
        linkedin: "https://linkedin.com/company/yourcompany",
        twitter: "https://twitter.com/yourcompany"
      }
    };
  }

  private validateContactForm(contactData: Omit<ContactForm, 'id' | 'createdAt' | 'status'>): void {
    if (!contactData.name?.trim()) {
      throw new Error('Name is required');
    }
    if (!contactData.email?.trim()) {
      throw new Error('Email is required');
    }
    if (!this.isValidEmail(contactData.email)) {
      throw new Error('Invalid email format');
    }
    if (!contactData.message?.trim()) {
      throw new Error('Message is required');
    }
    if (contactData.phone && contactData.phone.length < 10) {
      throw new Error('Phone number must be at least 10 digits');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}