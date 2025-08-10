# 🚀 Vithsutra Backend API Documentation

## Overview

This document provides comprehensive documentation for all the backend API routes implemented for the Vithsutra application. All routes follow clean architecture principles and are fully integrated with the existing dependency injection system.

## Base URL

- **Development**: `http://localhost:3001/api`
- **Production**: `https://yourdomain.com/api`

## 📋 Available Endpoints

### 🏥 Health & System

#### GET `/api/health`

Check API health status and system information.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "environment": "development",
  "version": "0.1.0",
  "name": "phase-2",
  "services": {
    "api": "operational",
    "database": "operational",
    "cache": "operational"
  }
}
```

#### GET `/api/docs`

Get complete API documentation in JSON format.

#### GET `/api/stats`

Get site-wide statistics and metrics.

**Response:**

```json
{
  "stats": {
    "overview": {
      "totalBlogPosts": 3,
      "totalProducts": 5,
      "totalFAQs": 10,
      "totalTeamMembers": 8,
      "totalIndustries": 5
    },
    "blog": {
      "totalPosts": 3,
      "totalCategories": 3,
      "publishedPosts": 3,
      "recentPosts": [...]
    }
  },
  "generatedAt": "2024-01-15T10:30:00.000Z"
}
```

### 🔍 Search

#### GET `/api/search`

Global search across blog posts, products, and FAQ.

**Parameters:**

- `q` (required): Search query (minimum 2 characters)
- `type` (optional): Search type - "blog", "products", "faq", or "all"

**Example:**

```
GET /api/search?q=robotics&type=blog
```

**Response:**

```json
{
  "query": "robotics",
  "results": {
    "blog": [...],
    "products": [...],
    "faq": [...]
  },
  "totalResults": 15
}
```

### 📝 Blog

#### GET `/api/blog`

Get all published blog posts with optional filtering.

**Parameters:**

- `category` (optional): Filter by category slug
- `tag` (optional): Filter by tag
- `limit` (optional): Limit number of results

**Examples:**

```
GET /api/blog
GET /api/blog?category=technology&limit=5
GET /api/blog?tag=robotics
```

**Response:**

```json
{
  "posts": [
    {
      "id": "1",
      "title": "The Future of Industrial IoT",
      "slug": "future-of-industrial-iot-transforming-manufacturing",
      "excerpt": "Discover how Industrial IoT is revolutionizing...",
      "author": "Vithsutra Team",
      "imageUrl": "/public/appli_image_iiot/Industrial-Automation.jpg",
      "tags": ["IIoT", "Manufacturing", "Industry 4.0"],
      "category": "technology",
      "publishedAt": "2024-01-15T00:00:00.000Z",
      "readTime": 5,
      "isPublished": true
    }
  ],
  "total": 3
}
```

#### GET `/api/blog/[slug]`

Get single blog post by slug with related posts.

**Example:**

```
GET /api/blog/future-of-industrial-iot-transforming-manufacturing
```

**Response:**

```json
{
  "post": {
    "id": "1",
    "title": "The Future of Industrial IoT",
    "content": "<p>Industrial Internet of Things...</p>",
    // ... full post data
  },
  "relatedPosts": [...]
}
```

#### GET `/api/blog/categories`

Get all blog categories.

**Response:**

```json
{
  "categories": [
    {
      "id": "technology",
      "name": "Technology",
      "slug": "technology",
      "description": "Latest trends and innovations in technology",
      "postCount": 1
    }
  ],
  "total": 3
}
```

### 🛍️ Products

#### GET `/api/products`

Get all products with optional filtering.

**Parameters:**

- `category` (optional): Filter by category
- `featured` (optional): Get only featured products (true/false)
- `limit` (optional): Limit number of results

**Examples:**

```
GET /api/products
GET /api/products?featured=true&limit=3
GET /api/products?category=automation
```

#### GET `/api/products/[id]`

Get single product by ID with related products.

**Example:**

```
GET /api/products/biometric-product
```

#### GET `/api/products/categories`

Get all product categories.

### ❓ FAQ

#### GET `/api/faq`

Get FAQ data with various filtering options.

**Parameters:**

- `category` (optional): Filter by category ID
- `search` (optional): Search FAQ content
- `withCategories` (optional): Include categories with FAQs (true/false)

**Examples:**

```
GET /api/faq
GET /api/faq?withCategories=true
GET /api/faq?search=robotics
```

### 👥 Team

#### GET `/api/team`

Get team members with optional filtering.

**Parameters:**

- `department` (optional): Filter by department
- `withDepartments` (optional): Include departments structure (true/false)

**Examples:**

```
GET /api/team
GET /api/team?withDepartments=true
GET /api/team?department=engineering
```

#### GET `/api/team/[id]`

Get single team member by ID.

### 🏭 Industries

#### GET `/api/industries`

Get all industries with optional filtering.

**Parameters:**

- `featured` (optional): Get only featured industries (true/false)
- `limit` (optional): Limit number of results

#### GET `/api/industries/[id]`

Get single industry by ID with case studies.

### 📧 Contact

#### POST `/api/contact`

Submit contact form.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "I'm interested in your robotics solutions."
}
```

**Response:**

```json
{
  "message": "Message sent successfully",
  "contactId": "contact_123"
}
```

## 🔧 Response Format

### Success Response

```json
{
  "data": "...",
  "total": 10,
  "appName": "phase-2",
  "version": "0.1.0"
}
```

### Error Response

```json
{
  "error": "Error message",
  "status": 400
}
```

## 📊 HTTP Status Codes

- `200` - Success
- `400` - Bad Request (Invalid parameters)
- `404` - Not Found (Resource not found)
- `500` - Internal Server Error

## 🛠️ Technical Features

- **Clean Architecture**: All routes follow clean architecture principles
- **Dependency Injection**: Integrated with existing DI container
- **Type Safety**: Full TypeScript support
- **Error Handling**: Comprehensive error handling with environment-aware logging
- **Mock Data**: Sample data for development and testing
- **Performance**: Parallel data fetching where applicable
- **Environment Awareness**: Different behavior in development vs production

## 🧪 Testing

Use the provided `test-api.js` script to test all endpoints:

```bash
node test-api.js
```

Or test individual endpoints using curl:

```bash
# Test health endpoint
curl http://localhost:3001/api/health

# Test blog posts
curl http://localhost:3001/api/blog

# Test search
curl "http://localhost:3001/api/search?q=robotics&type=all"
```

## 🚀 Next Steps

1. **Database Integration**: Replace mock repositories with real database implementations
2. **Authentication**: Add authentication middleware for protected routes
3. **Rate Limiting**: Implement rate limiting for API endpoints
4. **Caching**: Add caching layer for improved performance
5. **Validation**: Add request validation middleware
6. **Documentation**: Generate OpenAPI/Swagger documentation

## 📝 Notes

- All routes include development-specific logging and debugging information
- Mock data is provided for immediate testing and development
- Routes are designed to be easily extended with real database implementations
- Error responses include helpful debugging information in development mode
