import { NextResponse } from 'next/server';
import { getIndustryUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Industry API called for ID: ${id}`);
    }

    const industryUseCases = getIndustryUseCases();
    const industry = await industryUseCases.getIndustryById(id);

    if (!industry) {
      return NextResponse.json(
        { error: 'Industry not found' },
        { status: 404 }
      );
    }

    // Get case studies for this industry
    const caseStudies = await industryUseCases.getCaseStudiesByIndustry(id);

    if (isDevelopment) {
      console.log(`✅ Retrieved industry: ${industry.name}`);
    }

    return NextResponse.json({
      industry,
      caseStudies,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching industry:', error);
    } else {
      console.error('Industry API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch industry - check server logs' 
          : 'Failed to fetch industry'
      },
      { status: 500 }
    );
  }
}