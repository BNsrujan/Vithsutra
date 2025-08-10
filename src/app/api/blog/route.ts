import { NextResponse } from 'next/server';
import { getBlogUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(request: Request) {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Blog API called at ${new Date().toISOString()}`);
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const limit = searchParams.get('limit');

    const blogUseCases = getBlogUseCases();

    let posts;
    
    if (category) {
      posts = await blogUseCases.getPostsByCategory(category);
    } else if (tag) {
      posts = await blogUseCases.getPostsByTag(tag);
    } else if (limit) {
      posts = await blogUseCases.getRecentPosts(parseInt(limit));
    } else {
      posts = await blogUseCases.getAllPublishedPosts();
    }

    if (isDevelopment) {
      console.log(`✅ Retrieved ${posts.length} blog posts`);
    }

    return NextResponse.json({
      posts,
      total: posts.length,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching blog posts:', error);
    } else {
      console.error('Blog API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch blog posts - check server logs' 
          : 'Failed to fetch blog posts'
      },
      { status: 500 }
    );
  }
}