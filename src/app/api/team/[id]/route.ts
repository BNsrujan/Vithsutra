import { NextResponse } from 'next/server';
import { getTeamUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Team member API called for ID: ${id}`);
    }

    const teamUseCases = getTeamUseCases();
    const member = await teamUseCases.getMemberById(id);

    if (!member) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    if (isDevelopment) {
      console.log(`✅ Retrieved team member: ${member.name}`);
    }

    return NextResponse.json({
      member,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching team member:', error);
    } else {
      console.error('Team member API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch team member - check server logs' 
          : 'Failed to fetch team member'
      },
      { status: 500 }
    );
  }
}