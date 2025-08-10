import { NextResponse } from 'next/server';
import { getIndustryUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(request: Request) {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Industries API called at ${new Date().toISOString()}`);
    }

    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured') === 'true';
    const limit = searchParams.get('limit');

    const industryUseCases = getIndustryUseCases();

    let industries;

    if (featured) {
      industries = await industryUseCases.getFeaturedIndustries();
    } else {
      industries = await industryUseCases.getAllIndustries();
    }

    // Apply limit if specified
    if (limit) {
      const limitNum = parseInt(limit);
      industries = industries.slice(0, limitNum);
    }

    if (isDevelopment) {
      console.log(`✅ Retrieved ${industries.length} industries`);
    }

    return NextResponse.json({
      industries,
      total: industries.length,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching industries:', error);
    } else {
      console.error('Industries API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch industries - check server logs' 
          : 'Failed to fetch industries'
      },
      { status: 500 }
    );
  }
}