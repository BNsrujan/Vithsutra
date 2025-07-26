import { NextResponse } from 'next/server';
import { getContactUseCases } from '@/infrastructure/di/Container';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Use clean architecture use case
    const contactUseCases = getContactUseCases();
    
    const contact = await contactUseCases.submitContactForm({
      name,
      email,
      phone: phone || '',
      message
    });

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        contactId: contact.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle validation errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
} 