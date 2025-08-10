import { BlogRepository, BlogCategoryRepository } from '../../core/usecases/blog.usecases';
import { BlogPost, BlogCategory } from '../../core/entities/blog';

// Mock data for blog posts
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Industrial IoT: Transforming Manufacturing',
    slug: 'future-of-industrial-iot-transforming-manufacturing',
    excerpt: 'Discover how Industrial IoT is revolutionizing manufacturing processes and driving efficiency across industries.',
    content: `
      <p>Industrial Internet of Things (IIoT) is transforming the manufacturing landscape by connecting machines, sensors, and systems to create intelligent, data-driven operations.</p>
      
      <h2>Key Benefits of IIoT</h2>
      <ul>
        <li>Real-time monitoring and analytics</li>
        <li>Predictive maintenance capabilities</li>
        <li>Enhanced operational efficiency</li>
        <li>Reduced downtime and costs</li>
      </ul>
      
      <p>As we move forward, IIoT will continue to be a driving force in Industry 4.0, enabling smarter factories and more sustainable manufacturing practices.</p>
    `,
    author: 'Vithsutra Team',
    imageUrl: '/public/appli_image_iiot/Industrial-Automation.jpg',
    tags: ['IIoT', 'Manufacturing', 'Industry 4.0', 'Automation'],
    category: 'technology',
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    isPublished: true,
    readTime: 5
  },
  {
    id: '2',
    title: 'Robotics in Agriculture: Revolutionizing Farming Practices',
    slug: 'robotics-in-agriculture-revolutionizing-farming',
    excerpt: 'Explore how robotics technology is transforming agriculture with precision farming and automated solutions.',
    content: `
      <p>Agricultural robotics is changing the way we approach farming, offering solutions for labor shortages and increasing productivity.</p>
      
      <h2>Applications of Agricultural Robotics</h2>
      <ul>
        <li>Automated harvesting systems</li>
        <li>Precision planting and seeding</li>
        <li>Crop monitoring and analysis</li>
        <li>Livestock management</li>
      </ul>
      
      <p>The integration of AI and robotics in agriculture promises a more sustainable and efficient future for food production.</p>
    `,
    author: 'Vithsutra Team',
    imageUrl: '/public/appli_image_iiot/Smart-robots.jpg',
    tags: ['Robotics', 'Agriculture', 'Automation', 'AI'],
    category: 'robotics',
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    isPublished: true,
    readTime: 4
  },
  {
    id: '3',
    title: 'RFID Technology in Healthcare: Improving Patient Safety',
    slug: 'rfid-technology-healthcare-patient-safety',
    excerpt: 'Learn how RFID technology is enhancing patient safety and operational efficiency in healthcare facilities.',
    content: `
      <p>RFID technology is playing a crucial role in modernizing healthcare systems by providing accurate tracking and identification solutions.</p>
      
      <h2>Healthcare Applications of RFID</h2>
      <ul>
        <li>Patient identification and tracking</li>
        <li>Medical equipment management</li>
        <li>Medication administration safety</li>
        <li>Asset tracking and inventory</li>
      </ul>
      
      <p>By implementing RFID solutions, healthcare facilities can significantly reduce errors and improve patient outcomes.</p>
    `,
    author: 'Vithsutra Team',
    imageUrl: '/public/Products/rfid-tel/rfid-main.jpg',
    tags: ['RFID', 'Healthcare', 'Patient Safety', 'Technology'],
    category: 'healthcare',
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    isPublished: true,
    readTime: 6
  }
];

// Mock data for blog categories
const mockBlogCategories: BlogCategory[] = [
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest trends and innovations in technology',
    postCount: 1
  },
  {
    id: 'robotics',
    name: 'Robotics',
    slug: 'robotics',
    description: 'Robotics applications and advancements',
    postCount: 1
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    description: 'Technology solutions for healthcare industry',
    postCount: 1
  }
];

export class MockBlogRepository implements BlogRepository {
  async findAllPosts(): Promise<BlogPost[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return [...mockBlogPosts];
  }

  async findPostById(id: string): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockBlogPosts.find(post => post.id === id) || null;
  }

  async findPostBySlug(slug: string): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockBlogPosts.find(post => post.slug === slug) || null;
  }

  async findPostsByCategory(categoryId: string): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts.filter(post => post.category === categoryId);
  }

  async findPostsByTag(tag: string): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockBlogPosts.filter(post => 
      post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase()))
    );
  }
}

export class MockBlogCategoryRepository implements BlogCategoryRepository {
  async findAll(): Promise<BlogCategory[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return [...mockBlogCategories];
  }

  async findById(id: string): Promise<BlogCategory | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockBlogCategories.find(category => category.id === id) || null;
  }

  async findBySlug(slug: string): Promise<BlogCategory | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockBlogCategories.find(category => category.slug === slug) || null;
  }
}