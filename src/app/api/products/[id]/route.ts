import { NextResponse } from 'next/server';
import { getProductUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Product API called for ID: ${id}`);
    }

    const productUseCases = getProductUseCases();
    const product = await productUseCases.getProductById(id);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Get related products (same category)
    const relatedProducts = await productUseCases.getRelatedProducts(id, 3);

    if (isDevelopment) {
      console.log(`✅ Retrieved product: ${product.name}`);
    }

    return NextResponse.json({
      product,
      relatedProducts,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching product:', error);
    } else {
      console.error('Product API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch product - check server logs' 
          : 'Failed to fetch product'
      },
      { status: 500 }
    );
  }
}