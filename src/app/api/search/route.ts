import { NextResponse } from "next/server";
import {
  getBlogUseCases,
  getProductUseCases,
  getFAQUseCases,
} from "@/infrastructure/di/Container";
import { config, isDevelopment } from "@/infrastructure/config/environment";

export async function GET(request: Request) {
  try {
    if (isDevelopment) {
      console.log(
        `📡 [${
          config.app.name
        }] Search API called at ${new Date().toISOString()}`
      );
    }

    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const type = searchParams.get("type"); // 'blog', 'products', 'faq', or 'all'

    if (!query || query.trim().length < 2) {
      return NextResponse.json(
        { error: "Search query must be at least 2 characters long" },
        { status: 400 }
      );
    }

    const results: any = {
      query: query.trim(),
      results: {},
    };

    // Search based on type parameter
    if (!type || type === "all" || type === "blog") {
      try {
        const blogUseCases = getBlogUseCases();
        const blogPosts = await blogUseCases.getAllPublishedPosts();
        const filteredPosts = blogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            post.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        );
        results.results.blog = filteredPosts.slice(0, 5);
      } catch (error) {
        if (isDevelopment) console.warn("Blog search failed:", error);
        results.results.blog = [];
      }
    }

    if (!type || type === "all" || type === "products") {
      try {
        const productUseCases = getProductUseCases();
        const products = await productUseCases.getAllProducts();
        const filteredProducts = products.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        results.results.products = filteredProducts.slice(0, 5);
      } catch (error) {
        if (isDevelopment) console.warn("Product search failed:", error);
        results.results.products = [];
      }
    }

    if (!type || type === "all" || type === "faq") {
      try {
        const faqUseCases = getFAQUseCases();
        const faqs = await faqUseCases.searchFAQs(query);
        results.results.faq = faqs.slice(0, 5);
      } catch (error) {
        if (isDevelopment) console.warn("FAQ search failed:", error);
        results.results.faq = [];
      }
    }

    // Calculate total results
    const totalResults = Object.values(results.results).reduce(
      (sum: number, items: any) => sum + (items?.length || 0),
      0
    );

    if (isDevelopment) {
      console.log(
        `✅ Search completed: ${totalResults} results for "${query}"`
      );
    }

    return NextResponse.json({
      ...results,
      totalResults,
      ...(isDevelopment && {
        appName: config.app.name,
        version: config.app.version,
      }),
    });
  } catch (error) {
    if (isDevelopment) {
      console.error("❌ Error performing search:", error);
    } else {
      console.error(
        "Search API error:",
        error instanceof Error ? error.message : "Unknown error"
      );
    }

    return NextResponse.json(
      {
        error: isDevelopment
          ? "Search failed - check server logs"
          : "Search failed",
      },
      { status: 500 }
    );
  }
}
