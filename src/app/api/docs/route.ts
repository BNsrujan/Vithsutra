import { NextResponse } from 'next/server';
import { config, isDevelopment } from '@/infrastructure/config/environment';

export async function GET() {
  const apiDocs = {
    name: config.app.name,
    version: config.app.version,
    description: 'Vithsutra API Documentation',
    baseUrl: isDevelopment ? 'http://localhost:3000/api' : '/api',
    endpoints: {
      // Health & System
      health: {
        path: '/health',
        method: 'GET',
        description: 'Check API health status',
        response: 'Health status and system information'
      },
      
      // Search
      search: {
        path: '/search',
        method: 'GET',
        description: 'Global search across blog, products, and FAQ',
        parameters: {
          q: 'Search query (required, min 2 characters)',
          type: 'Search type: "blog", "products", "faq", or "all" (optional)'
        },
        example: '/search?q=robotics&type=blog'
      },

      // Blog
      blog: {
        list: {
          path: '/blog',
          method: 'GET',
          description: 'Get all published blog posts',
          parameters: {
            category: 'Filter by category slug (optional)',
            tag: 'Filter by tag (optional)',
            limit: 'Limit number of results (optional)'
          },
          example: '/blog?category=technology&limit=5'
        },
        single: {
          path: '/blog/[slug]',
          method: 'GET',
          description: 'Get single blog post by slug',
          example: '/blog/future-of-industrial-iot'
        },
        categories: {
          path: '/blog/categories',
          method: 'GET',
          description: 'Get all blog categories'
        }
      },

      // Products
      products: {
        list: {
          path: '/products',
          method: 'GET',
          description: 'Get all products',
          parameters: {
            category: 'Filter by category (optional)',
            featured: 'Get only featured products (optional)',
            limit: 'Limit number of results (optional)'
          },
          example: '/products?featured=true&limit=3'
        },
        single: {
          path: '/products/[id]',
          method: 'GET',
          description: 'Get single product by ID',
          example: '/products/biometric-product'
        },
        categories: {
          path: '/products/categories',
          method: 'GET',
          description: 'Get all product categories'
        }
      },

      // FAQ
      faq: {
        path: '/faq',
        method: 'GET',
        description: 'Get FAQ data',
        parameters: {
          category: 'Filter by category ID (optional)',
          search: 'Search FAQ content (optional)',
          withCategories: 'Include categories with FAQs (optional)'
        },
        example: '/faq?withCategories=true'
      },

      // Team
      team: {
        list: {
          path: '/team',
          method: 'GET',
          description: 'Get team members',
          parameters: {
            department: 'Filter by department (optional)',
            withDepartments: 'Include departments structure (optional)'
          },
          example: '/team?withDepartments=true'
        },
        single: {
          path: '/team/[id]',
          method: 'GET',
          description: 'Get single team member by ID',
          example: '/team/john-doe'
        }
      },

      // Industries
      industries: {
        list: {
          path: '/industries',
          method: 'GET',
          description: 'Get all industries',
          parameters: {
            featured: 'Get only featured industries (optional)',
            limit: 'Limit number of results (optional)'
          },
          example: '/industries?featured=true'
        },
        single: {
          path: '/industries/[id]',
          method: 'GET',
          description: 'Get single industry by ID with case studies',
          example: '/industries/healthcare'
        }
      },

      // Contact
      contact: {
        path: '/contact',
        method: 'POST',
        description: 'Submit contact form',
        body: {
          name: 'Full name (required)',
          email: 'Email address (required)',
          phone: 'Phone number (optional)',
          message: 'Message content (required)'
        }
      }
    },

    // Response format
    responseFormat: {
      success: {
        data: 'Requested data',
        total: 'Total count (for lists)',
        ...(isDevelopment && {
          appName: 'Application name',
          version: 'API version'
        })
      },
      error: {
        error: 'Error message',
        status: 'HTTP status code'
      }
    },

    // Common HTTP status codes
    statusCodes: {
      200: 'Success',
      400: 'Bad Request - Invalid parameters',
      404: 'Not Found - Resource not found',
      500: 'Internal Server Error'
    }
  };

  return NextResponse.json(apiDocs, {
    headers: {
      'Content-Type': 'application/json',
      ...(isDevelopment && {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
    }
  });
}