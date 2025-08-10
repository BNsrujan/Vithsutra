import { NextResponse } from 'next/server';
import { 
  getBlogUseCases, 
  getProductUseCases, 
  getFAQUseCases, 
  getTeamUseCases, 
  getIndustryUseCases 
} from '@/infrastructure/di/Container';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET() {
  try {
    if (isDevelopment) {
      console.log(`📡 [${config.app.name}] Stats API called at ${new Date().toISOString()}`);
    }

    // Get all use cases
    const blogUseCases = getBlogUseCases();
    const productUseCases = getProductUseCases();
    const faqUseCases = getFAQUseCases();
    const teamUseCases = getTeamUseCases();
    const industryUseCases = getIndustryUseCases();

    // Fetch data in parallel for better performance
    const [
      blogPosts,
      blogCategories,
      products,
      productCategories,
      faqs,
      teamMembers,
      industries
    ] = await Promise.all([
      blogUseCases.getAllPublishedPosts(),
      blogUseCases.getAllCategories(),
      productUseCases.getAllProducts(),
      productUseCases.getAllCategories(),
      faqUseCases.getAllFAQs(),
      teamUseCases.getAllMembers(),
      industryUseCases.getAllIndustries()
    ]);

    const stats = {
      overview: {
        totalBlogPosts: blogPosts.length,
        totalProducts: products.length,
        totalFAQs: faqs.length,
        totalTeamMembers: teamMembers.length,
        totalIndustries: industries.length
      },
      blog: {
        totalPosts: blogPosts.length,
        totalCategories: blogCategories.length,
        publishedPosts: blogPosts.filter(post => post.isPublished).length,
        recentPosts: blogPosts.slice(0, 3).map(post => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          publishedAt: post.publishedAt
        }))
      },
      products: {
        totalProducts: products.length,
        totalCategories: productCategories.length,
        activeProducts: products.filter(product => product.isActive !== false).length,
        featuredProducts: products.filter(product => product.category === 'featured').length
      },
      team: {
        totalMembers: teamMembers.length,
        activeMembers: teamMembers.filter(member => member.isActive).length,
        departments: [...new Set(teamMembers.map(member => member.department))].length
      },
      content: {
        totalFAQs: faqs.length,
        activeFAQs: faqs.filter(faq => faq.isActive).length,
        totalIndustries: industries.length
      }
    };

    if (isDevelopment) {
      console.log(`✅ Stats compiled successfully`);
    }

    return NextResponse.json({
      stats,
      generatedAt: new Date().toISOString(),
      ...(isDevelopment && { 
        appName: config.app.name,
        version: config.app.version 
      })
    });

  } catch (error) {
    if (isDevelopment) {
      console.error('❌ Error compiling stats:', error);
    } else {
      console.error('Stats API error:', error instanceof Error ? error.message : 'Unknown error');
    }

    return NextResponse.json(
      { 
        error: isDevelopment 
          ? 'Failed to compile stats - check server logs' 
          : 'Failed to compile stats'
      },
      { status: 500 }
    );
  }
}