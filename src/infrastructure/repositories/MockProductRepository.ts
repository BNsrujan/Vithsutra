import { Product, ProductCategory } from '../../core/entities/Product';
import { ProductRepository, ProductCategoryRepository } from '../../core/use-cases/ProductUseCases';

// Mock data - in real app this would come from database
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Biometric Access Control System',
    description: 'Advanced biometric authentication system with fingerprint and facial recognition',
    category: 'biometric',
    imageUrl: '/Products/biometric-product/biometric-main.jpg',
    features: [
      'Fingerprint Recognition',
      'Facial Recognition',
      'Multi-factor Authentication',
      'Real-time Monitoring',
      'Cloud Integration'
    ],
    specifications: {
      'Recognition Speed': '< 1 second',
      'Accuracy': '99.9%',
      'Storage Capacity': '10,000 users',
      'Operating Temperature': '-10°C to 60°C'
    },
    price: 2999,
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'RFID Telephone System',
    description: 'Secure communication system with RFID-based access control',
    category: 'rfid',
    imageUrl: '/Products/rfid-tel/rfid-main.jpg',
    features: [
      'RFID Authentication',
      'Secure Communication',
      'Call Logging',
      'Remote Management',
      'Integration Ready'
    ],
    specifications: {
      'RFID Frequency': '13.56 MHz',
      'Communication Range': '10 cm',
      'Storage': '1000 cards',
      'Power Supply': '12V DC'
    },
    price: 1499,
    isActive: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'VithNet IoT Platform',
    description: 'Comprehensive IoT platform for industrial automation and monitoring',
    category: 'iot',
    imageUrl: '/Products/vithnet/vithnet-main.jpg',
    features: [
      'Real-time Monitoring',
      'Data Analytics',
      'Remote Control',
      'Alert System',
      'Scalable Architecture'
    ],
    specifications: {
      'Connectivity': 'WiFi, Ethernet, 4G',
      'Sensors': 'Temperature, Humidity, Pressure',
      'Data Storage': 'Cloud & Local',
      'API': 'RESTful API'
    },
    price: 3999,
    isActive: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25')
  }
];

const mockCategories: ProductCategory[] = [
  {
    id: 'biometric',
    name: 'Biometric Systems',
    description: 'Advanced biometric authentication and access control solutions',
    slug: 'biometric-product'
  },
  {
    id: 'rfid',
    name: 'RFID Solutions',
    description: 'Radio Frequency Identification systems for various applications',
    slug: 'rfid-telephone'
  },
  {
    id: 'iot',
    name: 'IoT Platforms',
    description: 'Internet of Things platforms and solutions',
    slug: 'vithnet'
  }
];

export class MockProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return [...mockProducts];
  }

  async findById(id: string): Promise<Product | null> {
    return mockProducts.find(product => product.id === id) || null;
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return mockProducts.filter(product => product.category === categoryId);
  }

  async create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const product: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockProducts.push(product);
    return product;
  }

  async update(id: string, productData: Partial<Product>): Promise<Product> {
    const index = mockProducts.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    mockProducts[index] = {
      ...mockProducts[index],
      ...productData,
      updatedAt: new Date()
    };
    
    return mockProducts[index];
  }

  async delete(id: string): Promise<void> {
    const index = mockProducts.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    mockProducts.splice(index, 1);
  }
}

export class MockProductCategoryRepository implements ProductCategoryRepository {
  async findAll(): Promise<ProductCategory[]> {
    return [...mockCategories];
  }

  async findById(id: string): Promise<ProductCategory | null> {
    return mockCategories.find(category => category.id === id) || null;
  }

  async findBySlug(slug: string): Promise<ProductCategory | null> {
    return mockCategories.find(category => category.slug === slug) || null;
  }
}