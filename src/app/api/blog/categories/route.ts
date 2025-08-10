import { NextResponse } from 'next/server';
import { getBlogUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET() {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Blog categories API called at ${new Date().toISOString()}`);
    }

    const blogUseCases = getBlogUseCases();
    const categories = await blogUseCases.getAllCategories();

    if (isDevelopment) {
      console.log(`✅ Retrieved ${categories.length} blog categories`);
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
      console.error('❌ Error fetching blog categories:', error);
    } else {
      console.error('Blog categories API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch blog categories - check server logs' 
          : 'Failed to fetch blog categories'
      },
      { status: 500 }
    );
  }
}