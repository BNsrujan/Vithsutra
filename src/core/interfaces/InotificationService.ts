import { ContactForm } from '../entities/contact';

export interface INotificationService {
  sendContactNotification(contact: ContactForm): Promise<void>;
  sendAutoReply(contact: ContactForm): Promise<void>;
  sendWelcomeEmail(email: string, name: string): Promise<boolean>;
  sendNewsletterConfirmation(email: string): Promise<boolean>;
}