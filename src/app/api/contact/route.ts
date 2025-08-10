import { NextResponse } from 'next/server';
import { getContactUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function POST(request: Request) {
  try {
    // Log API usage in development
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Contact API called at ${new Date().toISOString()}`);
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation using environment-aware logging
    if (!name || !email || !message) {
      if (isDevelopment) {
        console.warn('❌ Validation failed: Missing required fields');
      }
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Use clean architecture use case
    const contactUseCases = getContactUseCases();
    
    const contact = await contactUseCases.submitContactForm({
      name,
      email,
      phone: phone || '',
      message
    });

    // Success logging with environment awareness
    if (isDevelopment) {
      console.log(`✅ Contact form submitted successfully: ${contact.id}`);
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        contactId: contact.id,
        // Include app info in development
        ...(isDevelopment && { 
          appName: config.app.name,
          version: config.app.version 
        })
      },
      { status: 200 }
    );
  } catch (error) {
    // Environment-aware error logging
    if (isDevelopment) {
      console.error('❌ Error processing contact form:', error);
    } else {
      // In production, log less detailed errors for security
      console.error('Contact form error:', error instanceof Error ? error.message : 'Unknown error');
    }
    
    // Handle validation errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to process your message - check server logs' 
          : 'Failed to process your message'
      },
      { status: 500 }
    );
  }
} 