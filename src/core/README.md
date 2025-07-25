# Clean Architecture Implementation

This project follows Clean Architecture principles to ensure maintainable, testable, and scalable code.

## Architecture Overview

```
src/
├── core/                    # Business Logic Layer
│   ├── entities/           # Domain Entities
│   └── use-cases/          # Business Use Cases
├── infrastructure/         # External Concerns Layer
│   ├── repositories/       # Data Access
│   ├── services/          # External Services
│   └── di/                # Dependency Injection
└── presentation/          # Presentation Layer
    ├── hooks/             # React Hooks
    ├── components/        # UI Components
    └── pages/             # Page Components
```

## Layers

### 1. Core Layer (Business Logic)
- **Entities**: Pure business objects with no dependencies
- **Use Cases**: Application-specific business rules

### 2. Infrastructure Layer
- **Repositories**: Data access implementations
- **Services**: External service integrations
- **DI Container**: Dependency injection setup

### 3. Presentation Layer
- **Hooks**: React hooks for state management
- **Components**: Reusable UI components
- **Pages**: Page-level components

## Key Principles

1. **Dependency Inversion**: Core layer doesn't depend on external layers
2. **Single Responsibility**: Each class has one reason to change
3. **Interface Segregation**: Use specific interfaces for different concerns
4. **Testability**: Easy to unit test business logic
5. **Maintainability**: Clear separation of concerns

## Usage Examples

### Using Products
```typescript
import { useProducts } from '@/presentation/hooks/useProducts';

const MyComponent = () => {
  const { products, loading, error } = useProducts();
  // Component logic
};
```

### Using Contact Form
```typescript
import { useContactForm } from '@/presentation/hooks/useContact';

const ContactForm = () => {
  const { submitForm, loading, success, error } = useContactForm();
  // Form logic
};
```

## Adding New Features

1. **Create Entity** in `core/entities/`
2. **Create Use Case** in `core/use-cases/`
3. **Create Repository** in `infrastructure/repositories/`
4. **Update DI Container** in `infrastructure/di/Container.ts`
5. **Create Hook** in `presentation/hooks/`
6. **Create Components** in `presentation/components/`

## Testing Strategy

- **Unit Tests**: Test use cases and entities
- **Integration Tests**: Test repository implementations
- **Component Tests**: Test React components
- **E2E Tests**: Test complete user flows