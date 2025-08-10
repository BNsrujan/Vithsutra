import { NextResponse } from 'next/server';
import { getProductUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(request: Request) {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Products API called at ${new Date().toISOString()}`);
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured') === 'true';
    const limit = searchParams.get('limit');

    const productUseCases = getProductUseCases();

    let products;

    if (category) {
      products = await productUseCases.getProductsByCategory(category);
    } else if (featured) {
      products = await productUseCases.getFeaturedProducts();
    } else {
      products = await productUseCases.getAllProducts();
    }

    // Apply limit if specified
    if (limit) {
      const limitNum = parseInt(limit);
      products = products.slice(0, limitNum);
    }

    if (isDevelopment) {
      console.log(`✅ Retrieved ${products.length} products`);
    }

    return NextResponse.json({
      products,
      total: products.length,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching products:', error);
    } else {
      console.error('Products API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch products - check server logs' 
          : 'Failed to fetch products'
      },
      { status: 500 }
    );
  }
}