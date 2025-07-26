import { ContactForm } from '../../core/entities/Contact';
import { INotificationService } from '../../core/interfaces/INotificationService';

export class MockNotificationService implements INotificationService {
  async sendContactNotification(contact: ContactForm): Promise<void> {
    // In a real implementation, this would send an email to the admin
    console.log('📧 Admin notification sent for contact:', {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      subject: contact.subject
    });
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  async sendAutoReply(contact: ContactForm): Promise<void> {
    // In a real implementation, this would send an auto-reply email to the user
    console.log('📧 Auto-reply sent to:', contact.email);
    console.log('Message: Thank you for contacting us. We will get back to you soon.');
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    console.log(`📧 Welcome email sent to ${name} at ${email}`);
    await new Promise(resolve => setTimeout(resolve, 100));
    return true;
  }

  async sendNewsletterConfirmation(email: string): Promise<boolean> {
    console.log(`📧 Newsletter confirmation sent to ${email}`);
    await new Promise(resolve => setTimeout(resolve, 100));
    return true;
  }
}