import { ContactForm } from '../../core/entities/Contact';
import { NotificationService } from '../../core/use-cases/ContactUseCases';

export class MockNotificationService implements NotificationService {
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
}