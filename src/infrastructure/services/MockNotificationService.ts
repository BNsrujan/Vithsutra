import { ContactForm } from '../../core/entities/contact';
import { INotificationService } from '../../core/interfaces/InotificationService';
import { config } from '../config/environment';

export class MockNotificationService implements INotificationService {
  async sendContactNotification(contact: ContactForm): Promise<void> {
    // Using environment variables for configuration
    const fromEmail = config.email.fromEmail;
    const appName = config.app.name;
    
    if (config.app.environment === 'development') {
      console.log('📧 [DEV] Admin notification sent for contact:', {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        fromEmail,
        appName
      });
    }
    
    // In production, this would use config.email.* for real SMTP
    // await this.sendEmail({
    //   to: 'admin@vithsutra.com',
    //   from: fromEmail,
    //   subject: `New Contact Form Submission - ${contact.subject}`,
    //   html: this.generateContactNotificationTemplate(contact)
    // });
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, config.api.timeout / 100));
  }

  async sendAutoReply(contact: ContactForm): Promise<void> {
    const fromEmail = config.email.fromEmail;
    const appName = config.app.name;
    
    if (config.app.environment === 'development') {
      console.log('📧 [DEV] Auto-reply sent to:', contact.email);
      console.log(`From: ${fromEmail} (${appName})`);
      console.log('Message: Thank you for contacting us. We will get back to you soon.');
    }
    
    // In production, this would use real email service
    // await this.sendEmail({
    //   to: contact.email,
    //   from: fromEmail,
    //   subject: `Thank you for contacting ${appName}`,
    //   html: this.generateAutoReplyTemplate(contact)
    // });
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, config.api.timeout / 100));
  }

  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    const fromEmail = config.email.fromEmail;
    const appName = config.app.name;
    
    if (config.app.environment === 'development') {
      console.log(`📧 [DEV] Welcome email sent to ${name} at ${email}`);
      console.log(`From: ${fromEmail} (${appName})`);
    }
    
    await new Promise(resolve => setTimeout(resolve, config.api.timeout / 100));
    return true;
  }

  async sendNewsletterConfirmation(email: string): Promise<boolean> {
    const fromEmail = config.email.fromEmail;
    const appName = config.app.name;
    
    if (config.app.environment === 'development') {
      console.log(`📧 [DEV] Newsletter confirmation sent to ${email}`);
      console.log(`From: ${fromEmail} (${appName})`);
    }
    
    await new Promise(resolve => setTimeout(resolve, config.api.timeout / 100));
    return true;
  }
}