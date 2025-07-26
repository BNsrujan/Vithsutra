# Clean Architecture Diagram - Vithsutra Project

## 🏗️ Current Architecture Issues

The current codebase has mixed patterns and duplicate structures:
- `src/PagesForApp/` (old structure) vs `src/presentation/pages/` (clean architecture)
- `src/hooks/` (mixed location) vs proper clean architecture hooks
- Inconsistent file naming and organization

## 🎯 Proposed Clean Architecture Structure

```
src/
├── 📁 core/                           # 🎯 DOMAIN LAYER (Business Logic)
│   ├── 📁 entities/                   # Domain Models (Pure Business Objects)
│   │   ├── 📄 Contact.ts              # Contact domain entity
│   │   ├── 📄 Product.ts              # Product domain entity
│   │   ├── 📄 Industry.ts             # Industry domain entity
│   │   ├── 📄 Team.ts                 # Team domain entity
│   │   ├── 📄 FAQ.ts                  # FAQ domain entity
│   │   ├── 📄 Blog.ts                 # Blog domain entity
│   │   └── 📄 Training.ts             # Training domain entity
│   │
│   ├── 📁 use-cases/                  # Application Business Rules
│   │   ├── 📄 ContactUseCases.ts      # Contact business operations
│   │   ├── 📄 ProductUseCases.ts      # Product business operations
│   │   ├── 📄 IndustryUseCases.ts     # Industry business operations
│   │   ├── 📄 TeamUseCases.ts         # Team business operations
│   │   ├── 📄 FAQUseCases.ts          # FAQ business operations
│   │   ├── 📄 BlogUseCases.ts         # Blog business operations
│   │   └── 📄 TrainingUseCases.ts     # Training business operations
│   │
│   ├── 📁 interfaces/                 # Repository & Service Interfaces
│   │   ├── 📄 IContactRepository.ts   # Contact data access interface
│   │   ├── 📄 IProductRepository.ts   # Product data access interface
│   │   ├── 📄 IIndustryRepository.ts  # Industry data access interface
│   │   ├── 📄 ITeamRepository.ts      # Team data access interface
│   │   ├── 📄 IFAQRepository.ts       # FAQ data access interface
│   │   ├── 📄 IBlogRepository.ts      # Blog data access interface
│   │   ├── 📄 ITrainingRepository.ts  # Training data access interface
│   │   └── 📄 INotificationService.ts # Notification service interface
│   │
│   └── 📁 types/                      # Shared Types & Enums
│       ├── 📄 common.ts               # Common types and enums
│       └── 📄 api.ts                  # API response types
│
├── 📁 infrastructure/                 # 🔧 INFRASTRUCTURE LAYER (External Concerns)
│   ├── 📁 repositories/               # Data Access Implementations
│   │   ├── 📄 ContactRepository.ts    # Contact data access (mock/real)
│   │   ├── 📄 ProductRepository.ts    # Product data access (mock/real)
│   │   ├── 📄 IndustryRepository.ts   # Industry data access (mock/real)
│   │   ├── 📄 TeamRepository.ts       # Team data access (mock/real)
│   │   ├── 📄 FAQRepository.ts        # FAQ data access (mock/real)
│   │   ├── 📄 BlogRepository.ts       # Blog data access (mock/real)
│   │   └── 📄 TrainingRepository.ts   # Training data access (mock/real)
│   │
│   ├── 📁 services/                   # External Service Implementations
│   │   ├── 📄 EmailService.ts         # Email notification service
│   │   ├── 📄 FileUploadService.ts    # File upload service
│   │   └── 📄 AnalyticsService.ts     # Analytics tracking service
│   │
│   ├── 📁 api/                        # API Route Handlers
│   │   ├── 📄 contactHandler.ts       # Contact API handler
│   │   ├── 📄 productHandler.ts       # Product API handler
│   │   └── 📄 subscriptionHandler.ts  # Newsletter subscription handler
│   │
│   ├── 📁 config/                     # Configuration
│   │   ├── 📄 database.ts             # Database configuration
│   │   ├── 📄 email.ts                # Email service configuration
│   │   └── 📄 environment.ts          # Environment variables
│   │
│   └── 📁 di/                         # Dependency Injection
│       └── 📄 Container.ts            # Service container & DI setup
│
├── 📁 application/                    # 🚀 APPLICATION LAYER (Use Case Orchestration)
│   ├── 📁 hooks/                      # React Hooks (State Management)
│   │   ├── 📄 useContact.ts           # Contact form state & operations
│   │   ├── 📄 useProducts.ts          # Product listing & filtering
│   │   ├── 📄 useIndustries.ts        # Industry data & filtering
│   │   ├── 📄 useTeam.ts              # Team member data
│   │   ├── 📄 useFAQ.ts               # FAQ data & search
│   │   ├── 📄 useBlog.ts              # Blog posts & categories
│   │   └── 📄 useTraining.ts          # Training programs & enrollment
│   │
│   ├── 📁 services/                   # Application Services
│   │   ├── 📄 ContactService.ts       # Contact form orchestration
│   │   ├── 📄 ProductService.ts       # Product operations orchestration
│   │   └── 📄 SearchService.ts        # Search functionality
│   │
│   └── 📁 validators/                 # Input Validation
│       ├── 📄 contactValidation.ts    # Contact form validation
│       ├── 📄 subscriptionValidation.ts # Newsletter validation
│       └── 📄 commonValidation.ts     # Shared validation rules
│
├── 📁 presentation/                   # 🎨 PRESENTATION LAYER (UI Components)
│   ├── 📁 pages/                      # Page Components
│   │   ├── 📄 HomePage.tsx            # Home page component
│   │   ├── 📄 ContactPage.tsx         # Contact page component
│   │   ├── 📄 ProductsPage.tsx        # Products listing page
│   │   ├── 📄 ProductDetailPage.tsx   # Product detail page
│   │   ├── 📄 IndustriesPage.tsx      # Industries listing page
│   │   ├── 📄 IndustryDetailPage.tsx  # Industry detail page
│   │   ├── 📄 TeamPage.tsx            # Team page component
│   │   ├── 📄 AboutPage.tsx           # About page component
│   │   ├── 📄 BlogPage.tsx            # Blog listing page
│   │   ├── 📄 BlogPostPage.tsx        # Blog post detail page
│   │   ├── 📄 FAQPage.tsx             # FAQ page component
│   │   ├── 📄 TrainingPage.tsx        # Training programs page
│   │   ├── 📄 CareersPage.tsx         # Careers page component
│   │   └── 📄 CaseStudiesPage.tsx     # Case studies page
│   │
│   ├── 📁 components/                 # Reusable UI Components
│   │   ├── 📁 forms/                  # Form Components
│   │   │   ├── 📄 ContactForm.tsx     # Contact form component
│   │   │   ├── 📄 NewsletterForm.tsx  # Newsletter subscription form
│   │   │   └── 📄 TrainingEnrollment.tsx # Training enrollment form
│   │   │
│   │   ├── 📁 cards/                  # Card Components
│   │   │   ├── 📄 ProductCard.tsx     # Product display card
│   │   │   ├── 📄 IndustryCard.tsx    # Industry display card
│   │   │   ├── 📄 TeamMemberCard.tsx  # Team member card
│   │   │   ├── 📄 BlogCard.tsx        # Blog post card
│   │   │   ├── 📄 TestimonialCard.tsx # Customer testimonial card
│   │   │   └── 📄 CaseStudyCard.tsx   # Case study card
│   │   │
│   │   ├── 📁 layout/                 # Layout Components
│   │   │   ├── 📄 Header.tsx          # Site header/navigation
│   │   │   ├── 📄 Footer.tsx          # Site footer
│   │   │   ├── 📄 Sidebar.tsx         # Sidebar navigation
│   │   │   └── 📄 Breadcrumbs.tsx     # Breadcrumb navigation
│   │   │
│   │   ├── 📁 sections/               # Page Section Components
│   │   │   ├── 📄 HeroSection.tsx     # Hero/banner sections
│   │   │   ├── 📄 FeaturesSection.tsx # Features showcase
│   │   │   ├── 📄 TestimonialsSection.tsx # Customer testimonials
│   │   │   ├── 📄 CTASection.tsx      # Call-to-action sections
│   │   │   └── 📄 StatsSection.tsx    # Statistics/metrics section
│   │   │
│   │   └── 📁 common/                 # Common UI Components
│   │       ├── 📄 LoadingSpinner.tsx  # Loading indicators
│   │       ├── 📄 ErrorBoundary.tsx   # Error handling component
│   │       ├── 📄 Modal.tsx           # Modal dialogs
│   │       ├── 📄 Tooltip.tsx         # Tooltip component
│   │       └── 📄 SearchBox.tsx       # Search input component
│   │
│   ├── 📁 utils/                      # Presentation Utilities
│   │   ├── 📄 formatters.ts           # Data formatting utilities
│   │   ├── 📄 constants.ts            # UI constants & configurations
│   │   └── 📄 helpers.ts              # UI helper functions
│   │
│   └── 📁 styles/                     # Styling (if needed)
│       ├── 📄 globals.css             # Global styles
│       └── 📄 components.css          # Component-specific styles
│
├── 📁 shared/                         # 🔄 SHARED UTILITIES
│   ├── 📁 lib/                        # Utility Libraries
│   │   ├── 📄 utils.ts                # General utility functions
│   │   ├── 📄 motion.ts               # Animation configurations
│   │   ├── 📄 typography.ts           # Typography utilities
│   │   └── 📄 animations.ts           # Animation helpers
│   │
│   ├── 📁 constants/                  # Application Constants
│   │   ├── 📄 routes.ts               # Route definitions
│   │   ├── 📄 api.ts                  # API endpoints
│   │   └── 📄 config.ts               # App configuration
│   │
│   └── 📁 types/                      # Shared TypeScript Types
│       ├── 📄 global.ts               # Global type definitions
│       └── 📄 next.ts                 # Next.js specific types
│
└── 📁 app/                            # 📱 NEXT.JS APP ROUTER
    ├── 📄 layout.tsx                  # Root layout
    ├── 📄 page.tsx                    # Home page route
    ├── 📄 loading.tsx                 # Loading UI
    ├── 📄 error.tsx                   # Error UI
    ├── 📄 not-found.tsx               # 404 page
    │
    ├── 📁 contact/                    # Contact routes
    │   └── 📄 page.tsx                # Contact page route
    │
    ├── 📁 products/                   # Product routes
    │   ├── 📄 page.tsx                # Products listing route
    │   └── 📁 [slug]/                 # Dynamic product routes
    │       └── 📄 page.tsx            # Product detail route
    │
    ├── 📁 industries/                 # Industry routes
    │   ├── 📄 page.tsx                # Industries listing route
    │   └── 📁 [slug]/                 # Dynamic industry routes
    │       └── 📄 page.tsx            # Industry detail route
    │
    ├── 📁 about/                      # About routes
    │   ├── 📄 page.tsx                # About page route
    │   ├── 📁 team/                   # Team routes
    │   │   └── 📄 page.tsx            # Team page route
    │   └── 📁 careers/                # Careers routes
    │       └── 📄 page.tsx            # Careers page route
    │
    ├── 📁 blog/                       # Blog routes
    │   ├── 📄 page.tsx                # Blog listing route
    │   └── 📁 [slug]/                 # Dynamic blog routes
    │       └── 📄 page.tsx            # Blog post route
    │
    ├── 📁 training/                   # Training routes
    │   └── 📄 page.tsx                # Training page route
    │
    ├── 📁 faq/                        # FAQ routes
    │   └── 📄 page.tsx                # FAQ page route
    │
    └── 📁 api/                        # API Routes
        ├── 📁 contact/                # Contact API
        │   └── 📄 route.ts            # Contact form handler
        ├── 📁 newsletter/             # Newsletter API
        │   └── 📄 route.ts            # Newsletter subscription
        └── 📁 products/               # Products API
            └── 📄 route.ts            # Products data API
```

## 🔄 Data Flow Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PRESENTATION  │    │   APPLICATION   │    │      CORE       │    │ INFRASTRUCTURE  │
│     LAYER       │    │     LAYER       │    │     LAYER       │    │     LAYER       │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│                 │    │                 │    │                 │    │                 │
│  React Pages    │───▶│  Custom Hooks   │───▶│   Use Cases     │───▶│  Repositories   │
│  Components     │    │  Services       │    │   Entities      │    │  External APIs  │
│  Forms          │    │  Validators     │    │   Interfaces    │    │  Database       │
│                 │    │                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
         ▲                       ▲                       ▲                       ▲
         │                       │                       │                       │
         │              ┌────────┴────────┐             │              ┌────────┴────────┐
         │              │  Dependency     │             │              │   Mock/Real     │
         │              │  Injection      │             │              │ Implementations │
         │              │  Container      │             │              │                 │
         │              └─────────────────┘             │              └─────────────────┘
         │                                              │
         └──────────────── User Interactions ──────────┘
```

## 🎯 Layer Responsibilities

### 1. **Core Layer (Domain)**
- **Entities**: Pure business objects with no external dependencies
- **Use Cases**: Application-specific business rules and operations
- **Interfaces**: Contracts for external dependencies (repositories, services)
- **Types**: Shared domain types and enums

### 2. **Infrastructure Layer**
- **Repositories**: Data access implementations (mock, database, API)
- **Services**: External service implementations (email, file upload, analytics)
- **API Handlers**: Next.js API route implementations
- **Configuration**: Environment and service configurations

### 3. **Application Layer**
- **Hooks**: React state management and business logic orchestration
- **Services**: Application-level service orchestration
- **Validators**: Input validation and sanitization

### 4. **Presentation Layer**
- **Pages**: Full page components using Next.js App Router
- **Components**: Reusable UI components organized by type
- **Utils**: Presentation-specific utilities and formatters

## 🔧 Key Benefits

### ✅ **Separation of Concerns**
- Business logic isolated from UI
- External dependencies abstracted
- Clear boundaries between layers

### ✅ **Testability**
- Easy unit testing of business logic
- Mock implementations for testing
- Clear interfaces for dependency injection

### ✅ **Maintainability**
- Changes in one layer don't affect others
- Consistent patterns across features
- Easy to locate and modify code

### ✅ **Scalability**
- Easy to add new features
- Team can work on different layers independently
- Modular structure supports growth

## 🚀 Implementation Priority

### Phase 1: Core Foundation
1. ✅ Core entities and use cases
2. ✅ Infrastructure repositories and services
3. ✅ Dependency injection container

### Phase 2: Application Layer
1. ✅ Custom hooks for state management
2. ✅ Application services and validators
3. ✅ API route handlers

### Phase 3: Presentation Layer
1. ✅ Page components migration
2. ✅ Reusable UI components
3. ✅ Next.js App Router integration

### Phase 4: Enhancement
1. 🔄 Real database integration
2. 🔄 Authentication system
3. 🔄 Advanced features (search, filtering, etc.)

This clean architecture provides a solid foundation for a scalable, maintainable, and testable Next.js application! 🚀