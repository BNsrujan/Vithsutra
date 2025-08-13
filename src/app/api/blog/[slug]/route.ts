import { NextResponse } from 'next/server';
import { getBlogUseCases } from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Blog post API called for slug: ${slug}`);
    }

    const blogUseCases = getBlogUseCases();
    const post = await blogUseCases.getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Get related posts
    const relatedPosts = await blogUseCases.getRelatedPosts(post.id, 3);

    if (isDevelopment) {
      console.log(`✅ Retrieved blog post: ${post.title}`);
    }

    return NextResponse.json({
      post,
      relatedPosts,
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error fetching blog post:', error);
    } else {
      console.error('Blog post API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to fetch blog post - check server logs' 
          : 'Failed to fetch blog post'
      },
      { status: 500 }
    );
  }
}