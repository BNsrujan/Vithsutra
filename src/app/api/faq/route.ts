import { NextResponse } from 'next/server';
import { getFAQUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(request: Request) {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] FAQ API called at ${new Date().toISOString()}`);
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const withCategories = searchParams.get('withCategories') === 'true';

    const faqUseCases = getFAQUseCases();

    let result;

    if (withCategories) {
      const categoriesWithFAQs = await faqUseCases.getAllCategoriesWithFAQs();
      result = { categories: categoriesWithFAQs };
    } else if (search) {
      const faqs = await faqUseCases.searchFAQs(search);
      result = { faqs, total: faqs.length };
    } else if (category) {
      const faqs = await faqUseCases.getFAQsByCategory(category);
      result = { faqs, total: faqs.length };
    } else {
      const faqs = await faqUseCases.getAllFAQs();
      result = { faqs, total: faqs.length };
    }

    if (isDevelopment) {
      console.log(`✅ Retrieved FAQ data successfully`);
    }

    return NextResponse.json({
      ...result,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching FAQ data:', error);
    } else {
      console.error('FAQ API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch FAQ data - check server logs' 
          : 'Failed to fetch FAQ data'
      },
      { status: 500 }
    );
  }
}