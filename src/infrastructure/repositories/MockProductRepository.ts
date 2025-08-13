import { Product, ProductCategory } from "../../core/entities/product";
import {
  ProductRepository,
  ProductCategoryRepository,
} from "../../core/usecases/product.usecases";

// Mock data - migrated from legacy data/products.ts
const mockProducts: Product[] = [
  {
    id: "biometric-product",
    name: "Biometric Product",
    tagline: "Biometric Access System",
    description:
      "A fingerprint-based biometric system for hostels, institutions, and workplaces that replaces manual logs with fast, secure, and automated entry tracking",
    mainImage: "/products/biometric-product/TechPhoto.svg",
    productSectionImage: "/products/biometric-product/main_productsection.svg",
    tecnicalimage: "/products/biometric-product/main_photo2.svg",
    category: "biometric",
    features: [
      {
        image: "/products/biometric-product/features/customrules.svg",
        title: "Custom Rules",
        description:
          "Set limits for access hours, user roles, or restricted days.",
      },
      {
        image: "/products/biometric-product/features/easyenrollment.svg",
        title: "Easy Enrollment",
        description:
          "Enroll users in seconds using the guided fingerprint registration system.",
      },
      {
        image: "/products/biometric-product/features/custmdashboard.svg",
        title: "Cloud Dashboard",
        description:
          "Live access monitoring with admin-level control — anytime, anywhere.",
      },
      {
        image: "/products/biometric-product/features/smartaccesstracker.svg",
        title: "Smart Access Tracking",
        description:
          "Real-time logging of every fingerprint entry, ready for reports, audits, or investigations.",
      },
      {
        image: "/products/biometric-product/features/24x7.svg",
        title: "24/7 Operational Availability",
        description: "Operational anytime, day or night.",
      },
      {
        image:
          "/products/biometric-product/features/fingerprintauthentication.svg",
        title: "Fingerprint Authentication",
        description:
          "Secure access through fast and accurate biometric fingerprint recognition.",
      },
    ],
    howItWorks: [
      {
        image: "/products/biometric-product/How_it_works/step1.svg",
        title: "Enroll Fingerprint",
        description:
          "Admin scans and stores fingerprints securely using the enrollment interface",
      },
      {
        image: "/products/biometric-product/How_it_works/step2.svg",
        title: "Place Finger",
        description:
          "User places their finger on the sensor to request access.",
      },
      {
        image: "/products/biometric-product/How_it_works/step3.svg",
        title: " Authenticate",
        description:
          "System verifies the fingerprint with stored templates in milliseconds.",
      },
      {
        image: "/products/biometric-product/How_it_works/step4.svg",
        title: "Access Granted or Denied",
        description:
          "Based on custom rules and fingerprint match  access is either approved or denied.",
      },
    ],
    testimonials: [
      {
        id: "1",
        avatar:
          "/products/biometric-product/testimonialprofilephoto/image_2.png",
        name: "Amitabh Rao",
        title: "College Operations Manager",
        company: "Pragna Institute of Technology",
        quote:
          "Implementing VithSutra's Biometric System in our engineering college has been a game-changer. Our students now mark attendance through fingerprint scans, replacing the old, time-consuming paper-based method. It has reduced manual errors, saved faculty time, and improved overall efficiency. The deployment was smooth, and the system has been performing consistently across all departments.",
      },
      {
        id: "2",
        avatar:
          "/products/biometric-product/testimonialprofilephoto/images_1.png",
        name: "Dinesh Rao",
        title: "Operations Officer",
        company: "VMax Die Casting",
        quote:
          "We've deployed the Biometric System from VithSutra across our die casting industry units, with over 200+ installations now in place. More than 1,000 employees across India use it daily for secure, hassle-free access and attendance. The system is reliable, efficient, and has proven to be a strong fit for our industrial environment.",
      },
    ],
    productspecification: [
      {
        description: "Dust and tamper resistent casing",
        heading: "Durabel casing",
        icon: "/products/biometric-product/Technical/durabel.png",
      },
      {
        description: "Operates on 5V or 12v DC",
        heading: "Power",
        icon: "/products/biometric-product/Technical/thunderbolt.png",
      },
      {
        description: "USB/Serial/Wi-Fi (based on model)",
        heading: "Connectivity",
        icon: "/products/biometric-product/Technical/no-connection.png",
      },
    ],
    applications: [
      {
        image: "/products/biometric-product/application/biometricfactory1.png",
        industry: "Industries & Manufacturing Units",
        description:
          "Restricted Area Access: Only authorized personnel can enter hazardous or sensitive zones. Production Floor Time Logs: Track when operators begin and finish tasks for productivity analysis.",
      },
      {
        image: "/products/biometric-product/application/biometricinschool1.png",
        industry: "Educational Institutions (Schools, Colleges, Hostels)",
        description:
          "Student Attendance Tracking: Eliminate paper registers; automate attendance with fingerprint scans. Staff Clock In/Out: Accurately track faculty and admin staff working hours.",
      },
      {
        image: "/products/biometric-product/application/office.png",
        industry: "Corporate Offices",
        description:
          "Employee Attendance & HR Integration: Sync biometric data with HR systems for payroll and leave tracking. Meeting Room or Floor Access Control: Control who enters specific workspaces or departments.",
      },
    ],
    FaQ: [
      {
        question: "How does the biometric system help in student attendance?",
        answer:
          "It accurately records each student's attendance using thumbprint authentication, eliminating proxies and manual errors.",
      },
      {
        question: "Is the biometric device suitable for children of all ages?",
        answer:
          "Yes, it's ergonomically designed and installed at a height suitable for children, making thumb scanning easy and quick.",
      },
      {
        question: "Does it work without an internet connection?",
        answer:
          "Yes, it can store attendance offline and sync data later when reconnected to the internet.",
      },
    ],
    facts: [
      {
        number: 2000,
        suffix: "+",
        title: "Students Educated",
      },
      {
        number: 1000,
        suffix: "+",
        title: "Products Deployed",
      },
    ],
    link: "/products/biometric-product",
    isActive: true,
  },
  {
    id: "rfid-telephone",
    name: "RFID-Based Telephone",
    tagline: "RFID-Based Telephone",
    description:
      "This RFID-based telephone is made for hostels, schools, and campuses. It replaces coin phones with smart, secure RFID cards. Each call is tracked, timed, and easy to manage.",
    mainImage: "/products/rfid-tel/telephone[1].png",
    productSectionImage: "/products/rfid-tel/telephone[1].png",
    tecnicalimage: "/products/rfid-tel/tec_telephone.svg",
    category: "rfid",
    features: [
      {
        image: "/products/rfid-tel/feature/image 37.svg",
        title: "RFID Security",
        description: "Secure access with individual RFID card authentication.",
      },
      {
        image: "/products/rfid-tel/feature/image 38.svg",
        title: "Cloud Dashboard",
        description:
          "Live data monitoring with admin-level access from anywhere.",
      },
      {
        image: "/products/rfid-tel/feature/image 39.svg",
        title: "Smart Billing",
        description: "$1 is deducted for every 60 seconds of talktime.",
      },
    ],
    howItWorks: [
      {
        image: "/products/rfid-tel/how_it_works/setp1.png",
        title: "Tap to Recharge",
        description: "User taps card on VithSutra's recharge machine",
      },
      {
        image: "/products/rfid-tel/how_it_works/step2.png",
        title: "Insert Card",
        description: "Insert RFID card into the telephone unit",
      },
      {
        image: "/products/rfid-tel/how_it_works/step3.png",
        title: "Dial and Talk",
        description: "Dial the number and start your call",
      },
      {
        image: "/products/rfid-tel/how_it_works/step4.png",
        title: "Auto Deduction",
        description: "Amount is deducted from the card",
      },
    ],
    testimonials: [
      {
        id: "1",
        name: "Ragavendra  Shetty",
        title: "Hostel Manager",
        company: "Ski-line Boys Hostel, Mysore",
        quote:
          "Managing communication in a boys' hostel with over 300 students was always a challenge especially when students' personalphones were often misplaced or misused. Since installing these RFID-based telephones, daily communication has become streamlined and secure. Each student now has verified access, and calls can be tracked for accountability. The product has drastically reduced misuse and brought a sense of discipline in the hostel. It's become an essential part of our daily routine.",
        avatar: "/products/rfid-tel/testimonial_profilephoto/image_1.png",
      },
    ],
    applications: [
      {
        image: "/public/industry/fmog.avif",
        industry: "Hostels (Schools & Colleges)",
        description:
          "Student communication to parents/guardians using a secure calling system without mobile phones or coins. RFID-based prepaid calling eliminates the need for tokens or physical money.",
      },
      {
        image: "/public/industry/fmog.avif",
        industry: "Industries, Mining Sites & Worker Quarters",
        description:
          "In remote industrial and mining regions, unstable network coverage and varying SIM providers make communication difficult. Mobile phones act as a distraction, reducing productivity, discipline, and safety.",
      },
    ],
    FaQ: [
      {
        question: "What is an RFID-based telephone, and how does it work?",
        answer:
          "It allows calls only after scanning an authorized RFID card, ensuring secure and trackable communication.",
      },
      {
        question: "Where is this system typically used?",
        answer:
          "Commonly deployed in hostels, schools, factories, and offices to allow monitored communication for students, workers, or guests.",
      },
    ],
    facts: [
      {
        number: 2000,
        suffix: "+",
        title: "Students Educated",
      },
      {
        number: 1000,
        suffix: "+",
        title: "Products Deployed",
      },
    ],
    link: "/products/rfid-telephone",
    isActive: true,
  },
  {
    id: "hydroponic-controller",
    name: "Hydroponic Controller",
    tagline: "Smart Farming Automation System",
    description:
      "VITHNET is an IoT-powered automation system for Controlled Environment Agriculture (CEA) that helps optimize crop growth using minimal water and space. VITHNET offers real-time monitoring, automated sensing, and precise climate control, ensuring healthier crops and higher yields with minimal manual effort.",
    mainImage: "/products/vithnet/vithnet_device_2.svg",
    productSectionImage: "/products/vithnet/vithnet_device_2.svg",
    tecnicalimage: "/products/vithnet/vithnet_device_2.svg",
    category: "iot",
    whychose: [
      {
        title: "Multi Season",
        description: "Grow in any season or location",
        image: "/products/vithnet/features/wether.png",
      },
      {
        title: "Water Consumption",
        description: "Use up to 90% less water",
        image: "/products/vithnet/features/waterconsumtion.png",
      },
    ],
    features: [
      {
        title: "High-Precision Sensors",
        image: "/products/vithnet/builtin_features/high-precision-sensors.svg",
        description:
          "Provides accurate environmental readings to support data-driven decisions.",
      },
      {
        title: "Mobile & Web Dashboard",
        image: "/products/vithnet/builtin_features/mobile&webdashboard.svg",
        description:
          "Real-time sensor data visualization through a user-friendly interface.",
      },
    ],
    howItWorks: [
      {
        image: "/products/vithnet/how_it_work/step1.svg",
        title: "Sensor Data Collection",
        description:
          "VithNet is connected to multiple environmental sensors installed in the hydroponic setup.",
      },
      {
        image: "/products/vithnet/how_it_work/step2.svg",
        title: " Instant Data Processing",
        description:
          "The system processes the incoming sensor data to ensure it's clean and reliable.",
      },
    ],
    testimonials: [
      {
        id: "1",
        name: "Rahul Gupta,",
        title: "Director",
        company: "Aerotech Hydroponics Lab ",
        quote:
          "We customized Vithnet to control misting intervals and root zone temperature for our aeroponics lab. Its precise timer controls and sensor integration made daily maintenance almost effortless. Even complex schedules are now handled automatically with great reliability. This has significantly improved our root oxygenation and reduced plant stress.",
        avatar: "/products/vithnet/testimonal_profile/image2.png",
      },
    ],
    applications: [
      {
        industry: "Hydroponics",
        image: "/products/vithnet/application/Hydrophonics.png",
        description:
          "Vithnet automates nutrient delivery, pH control, and water flow for soilless hydroponic systems. It ensures healthy root growth and maximizes yield with precise environmental monitoring.",
      },
      {
        industry: "Aeroponics",
        image: "/products/vithnet/application/planet-rescue-101.png",
        description:
          "With custom integration, Vithnet can control misting cycles and manage nutrient spray timing. Ideal for high-efficiency root oxygenation in vertical and indoor aeroponic setups.",
      },
    ],
    FaQ: [
      {
        question: "Can I automate my hydroponics system using VithNet?",
        answer:
          "Yes, VithNet has been deployed across multiple hydroponic farms, helping automate pH, EC, and nutrient cycle monitoring.",
      },
      {
        question:
          "What exactly does VithNet monitor in a closed farming setup?",
        answer:
          "It tracks temperature, humidity, soil moisture, CO₂ levels, and light intensity for better crop control and yield consistency.",
      },
    ],
    facts: [
      {
        number: 2000,
        suffix: "+",
        title: "Students Educated",
      },
      {
        number: 1000,
        suffix: "+",
        title: "Products Deployed",
      },
    ],
    link: "/products/hydroponic-controller",
    isActive: true,
  },
];

const mockCategories: ProductCategory[] = [
  {
    id: "biometric",
    name: "Biometric Systems",
    description:
      "Advanced biometric authentication and access control solutions",
    slug: "biometric-product",
  },
  {
    id: "rfid",
    name: "RFID Solutions",
    description:
      "Radio Frequency Identification systems for various applications",
    slug: "rfid-telephone",
  },
  {
    id: "iot",
    name: "IoT Platforms",
    description: "Internet of Things platforms and solutions",
    slug: "vithnet",
  },
];

export class MockProductRepository implements ProductRepository {
  async findAll(): Promise<Product[]> {
    return [...mockProducts];
  }

  async findById(id: string): Promise<Product | null> {
    return mockProducts.find((product) => product.id === id) || null;
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return mockProducts.filter((product) => product.category === categoryId);
  }

  async create(
    productData: Omit<Product, "id" | "createdAt" | "updatedAt">
  ): Promise<Product> {
    const product: Product = {
      ...productData,
      id: Date.now().toString(),
    };
    mockProducts.push(product);
    return product;
  }

  async update(id: string, productData: Partial<Product>): Promise<Product> {
    const index = mockProducts.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }

    mockProducts[index] = {
      ...mockProducts[index],
      ...productData,
    };

    return mockProducts[index];
  }

  async delete(id: string): Promise<void> {
    const index = mockProducts.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    mockProducts.splice(index, 1);
  }
}

export class MockProductCategoryRepository
  implements ProductCategoryRepository
{
  async findAll(): Promise<ProductCategory[]> {
    return [...mockCategories];
  }

  async findById(id: string): Promise<ProductCategory | null> {
    return mockCategories.find((category) => category.id === id) || null;
  }

  async findBySlug(slug: string): Promise<ProductCategory | null> {
    return mockCategories.find((category) => category.slug === slug) || null;
  }
}
