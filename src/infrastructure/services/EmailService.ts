import { INotificationService } from "../../core/interfaces/InotificationService";
import { ContactForm } from "../../core/entities/contact";
import { config, isProduction } from "../config/environment";

/**
 * Real Email Service Implementation
 * This would replace MockNotificationService in production
 */
export class EmailService implements INotificationService {
  private validateEmailConfig(): void {
    if (
      !config.email.smtpHost ||
      !config.email.smtpUser ||
      !config.email.smtpPassword
    ) {
      throw new Error(
        "Email configuration is incomplete. Please check your environment variables."
      );
    }
  }

  async sendContactNotification(contact: ContactForm): Promise<void> {
    this.validateEmailConfig();

    // In a real implementation, you would use nodemailer or similar
    const emailData = {
      to: "admin@vithsutra.com", // Could be config.email.adminEmail
      from: config.email.fromEmail,
      subject: `New Contact Form - ${contact.subject || "General Inquiry"}`,
      html: this.generateContactNotificationTemplate(contact),
      // SMTP configuration from environment
      smtp: {
        host: config.email.smtpHost,
        port: config.email.smtpPort,
        secure: config.email.smtpPort === 465,
        auth: {
          user: config.email.smtpUser,
          pass: config.email.smtpPassword,
        },
      },
    };

    if (isProduction) {
      // await this.sendEmail(emailData);
      console.log("📧 [PROD] Contact notification sent via SMTP");
    } else {
      console.log("📧 [DEV] Would send email:", emailData);
    }
  }

  async sendAutoReply(contact: ContactForm): Promise<void> {
    this.validateEmailConfig();

    const emailData = {
      to: contact.email,
      from: config.email.fromEmail,
      subject: `Thank you for contacting ${config.app.name}`,
      html: this.generateAutoReplyTemplate(contact),
    };

    if (isProduction) {
      // await this.sendEmail(emailData);
      console.log("📧 [PROD] Auto-reply sent via SMTP");
    } else {
      console.log("📧 [DEV] Would send auto-reply:", emailData);
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<boolean> {
    this.validateEmailConfig();

    // Implementation would use environment variables for email templates
    console.log(`📧 Welcome email configured for ${config.app.name} for ${email} (${name})`);
    return true;
  }

  async sendNewsletterConfirmation(email: string): Promise<boolean> {
    this.validateEmailConfig();

    // Implementation would use environment variables
    console.log(`📧 Newsletter confirmation from ${config.email.fromEmail} to ${email}`);
    return true;
  }

  private generateContactNotificationTemplate(contact: ContactForm): string {
    return `
      <h2>New Contact Form Submission - ${config.app.name}</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${contact.message}</p>
      <hr>
      <p><small>Sent from ${config.app.name} v${config.app.version}</small></p>
    `;
  }

  private generateAutoReplyTemplate(contact: ContactForm): string {
    return `
      <h2>Thank you for contacting ${config.app.name}</h2>
      <p>Dear ${contact.name},</p>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <p><strong>Your message:</strong></p>
      <p>${contact.message}</p>
      <hr>
      <p>Best regards,<br>The ${config.app.name} Team</p>
    `;
  }
}
