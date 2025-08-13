import { NextResponse } from 'next/server';
import { getTeamUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(request: Request) {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Team API called at ${new Date().toISOString()}`);
    }

    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');
    const withDepartments = searchParams.get('withDepartments') === 'true';

    const teamUseCases = getTeamUseCases();

    let result;

    if (withDepartments) {
      const departments = await teamUseCases.getAllDepartments();
      result = { departments };
    } else if (department) {
      const members = await teamUseCases.getActiveTeamMembers();
      result = { members, total: members.length };
    } else {
      const members = await teamUseCases.getAllTeamMembers();
      result = { members, total: members.length };
    }

    if (isDevelopment) {
      console.log(`✅ Retrieved team data successfully`);
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
      console.error('❌ Error fetching team data:', error);
    } else {
      console.error('Team API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch team data - check server logs' 
          : 'Failed to fetch team data'
      },
      { status: 500 }
    );
  }
}