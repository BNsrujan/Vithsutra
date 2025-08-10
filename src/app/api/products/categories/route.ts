import { NextResponse } from 'next/server';
import { getProductUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET() {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Product categories API called at ${new Date().toISOString()}`);
    }

    const productUseCases = getProductUseCases();
    const categories = await productUseCases.getAllCategories();

    if (isDevelopment) {
      console.log(`✅ Retrieved ${categories.length} product categories`);
    }

    return NextResponse.json({
      categories,
      total: categories.length,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching product categories:', error);
    } else {
      console.error('Product categories API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch product categories - check server logs' 
          : 'Failed to fetch product categories'
      },
      { status: 500 }
    );
  }
}