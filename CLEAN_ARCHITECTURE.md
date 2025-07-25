# Clean Architecture Implementation Guide

This project has been completely restructured to follow Clean Architecture principles, ensuring maintainable, testable, and scalable code.

## 🏗️ Architecture Overview

```
src/
├── core/                           # 🎯 Business Logic Layer (Domain)
│   ├── entities/                   # Domain entities (business objects)
│   │   ├── Product.ts
│   │   ├── Industry.ts
│   │   ├── Team.ts
│   │   ├── Contact.ts
│   │   ├── Training.ts
│   │   ├── Blog.ts
│   │   └── FAQ.ts
│   └── use-cases/                  # Application business rules
│       ├── ProductUseCases.ts
│       ├── IndustryUseCases.ts
│       ├── ContactUseCases.ts
│       ├── TeamUseCases.ts
│       ├── TrainingUseCases.ts
│       ├── BlogUseCases.ts
│       └── FAQUseCases.ts
│
├── infrastructure/                 # 🔧 External Concerns Layer
│   ├── repositories/              # Data access implementations
│   │   ├── MockProductRepository.ts
│   │   ├── MockIndustryRepository.ts
│   │   ├── MockContactRepository.ts
│   │   ├── MockTeamRepository.ts
│   │   └── MockFAQRepository.ts
│   ├── services/                  # External service integrations
│   │   └── MockNotificationService.ts
│   └── di/                        # Dependency injection
│       └── Container.ts
│
└── presentation/                   # 🎨 Presentation Layer (UI)
    ├── hooks/                     # React hooks for state management
    │   ├── useProducts.ts
    │   ├── useIndustries.ts
    │   ├── useContact.ts
    │   ├── useTeam.ts
    │   └── useFAQ.ts
    ├── components/                # Reusable UI components
    │   ├── ProductCard.tsx
    │   ├── IndustryCard.tsx
    │   ├── ContactFormComponent.tsx
    │   ├── TeamMemberCard.tsx
    │   └── FAQAccordion.tsx
    └── pages/                     # Page-level components
        ├── ProductsPage.tsx
        ├── IndustriesPage.tsx
        ├── ContactPage.tsx
        ├── TeamPage.tsx
        └── FAQPage.tsx
```

## 🎯 Key Benefits Achieved

### 1. **Separation of Concerns**
- Business logic is isolated in the core layer
- UI logic is separated from business logic
- External dependencies are abstracted away

### 2. **Testability**
- Easy to unit test business logic without UI dependencies
- Mock implementations for external services
- Clear interfaces for testing different scenarios

### 3. **Maintainability**
- Changes to UI don't affect business logic
- Easy to swap implementations (e.g., mock to real database)
- Clear structure makes code easy to navigate

### 4. **Scalability**
- Easy to add new features following the same pattern
- Dependency injection makes it easy to manage complex dependencies
- Modular structure supports team development

## 🚀 Implementation Details

### Core Layer (Business Logic)

#### Entities
Pure business objects with no external dependencies:
```typescript
// Example: Product entity
export interface Product {
  id: string;
  name: string;
  description: string;
  // ... other properties
}
```

#### Use Cases
Application-specific business rules:
```typescript
// Example: Product use cases
export class ProductUseCases {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: ProductCategoryRepository
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
```

### Infrastructure Layer

#### Repositories
Data access implementations with interfaces:
```typescript
// Interface in use cases
export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
}

// Implementation in infrastructure
export class MockProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return [...mockProducts];
  }
}
```

#### Dependency Injection
Centralized service management:
```typescript
// Container manages all dependencies
export const getProductUseCases = (): ProductUseCases => 
  container.get('ProductUseCases');
```

### Presentation Layer

#### React Hooks
State management and business logic integration:
```typescript
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const productUseCases = getProductUseCases();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productUseCases.getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};
```

#### Components
Reusable UI components:
```typescript
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      {/* ... */}
    </Card>
  );
};
```

## 📋 Migration Status

### ✅ Completed
- [x] Core entities for all business objects
- [x] Use cases for all business logic
- [x] Mock repositories for data access
- [x] Dependency injection container
- [x] React hooks for state management
- [x] UI components using clean architecture
- [x] Page components integrated with hooks
- [x] Updated Next.js pages to use new architecture

### 🔄 Updated Pages
- [x] Contact Page (`/contact`)
- [x] Team Page (`/team`)
- [x] FAQ Page (`/faq`)

### 🎯 Next Steps for Full Migration
1. **Products Pages**: Update product listing and detail pages
2. **Industries Pages**: Update industry pages
3. **Home Page**: Integrate with clean architecture hooks
4. **Blog Pages**: Implement blog functionality
5. **Training Pages**: Complete training system

## 🧪 Testing Strategy

### Unit Tests
```typescript
// Example: Testing use cases
describe('ProductUseCases', () => {
  it('should return all products', async () => {
    const mockRepo = new MockProductRepository();
    const useCase = new ProductUseCases(mockRepo, mockCategoryRepo);
    
    const products = await useCase.getAllProducts();
    expect(products).toHaveLength(3);
  });
});
```

### Integration Tests
```typescript
// Example: Testing hooks
describe('useProducts', () => {
  it('should fetch products on mount', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    
    await waitForNextUpdate();
    expect(result.current.products).toHaveLength(3);
  });
});
```

## 🔧 Development Workflow

### Adding New Features

1. **Create Entity** (if needed)
```typescript
// src/core/entities/NewEntity.ts
export interface NewEntity {
  id: string;
  // properties
}
```

2. **Create Use Case**
```typescript
// src/core/use-cases/NewEntityUseCases.ts
export class NewEntityUseCases {
  constructor(private repository: NewEntityRepository) {}
  
  async getAll(): Promise<NewEntity[]> {
    return this.repository.findAll();
  }
}
```

3. **Create Repository**
```typescript
// src/infrastructure/repositories/MockNewEntityRepository.ts
export class MockNewEntityRepository implements NewEntityRepository {
  async findAll(): Promise<NewEntity[]> {
    return mockData;
  }
}
```

4. **Update DI Container**
```typescript
// src/infrastructure/di/Container.ts
const newEntityRepository = new MockNewEntityRepository();
const newEntityUseCases = new NewEntityUseCases(newEntityRepository);
this.services.set('NewEntityUseCases', newEntityUseCases);
```

5. **Create Hook**
```typescript
// src/presentation/hooks/useNewEntity.ts
export const useNewEntity = () => {
  const [data, setData] = useState([]);
  const useCases = getNewEntityUseCases();
  // implementation
};
```

6. **Create Components**
```typescript
// src/presentation/components/NewEntityCard.tsx
export const NewEntityCard = ({ entity }) => {
  // component implementation
};
```

## 🎨 UI Integration

All existing UI components in `src/components/ui/` are preserved and used by the new clean architecture components. The new structure enhances rather than replaces the existing design system.

## 📚 Resources

- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [React Clean Architecture](https://github.com/eduardomoroni/react-clean-architecture)
- [Dependency Injection in TypeScript](https://github.com/microsoft/tsyringe)

---

This clean architecture implementation provides a solid foundation for scalable, maintainable, and testable code while preserving all existing functionality and design.