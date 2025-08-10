import { NextResponse } from 'next/server';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET() {
  try {
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: isDevelopment ? 'development' : 'production',
      version: config.app.version,
      name: config.app.name,
      services: {
        api: 'operational',
        database: 'operational', // This would check actual DB in real implementation
        cache: 'operational'
      }
    };

    // In development, include more detailed information
    if (isDevelopment) {
      healthData.services = {
        ...healthData.services,
        memory: {
          used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
          unit: 'MB'
        },
        node: process.version,
        platform: process.platform
      };
    }

    return NextResponse.json(healthData);

  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: isDevelopment ? error : 'Health check failed'
      },
      { status: 503 }
    );
  }
}