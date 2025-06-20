import ProductPage from '@/components/products/ProductPage';

const rfidProduct = {
  id: "rfid-telephone",
  name: "RFID-Based Telephone",
  tagline: "Secure RFID calling system with student-specific digital balance recharge",
  description: "Our RFID-based telephone system revolutionizes campus communication by providing secure, student-specific calling solutions with digital balance management. The system ensures controlled access while offering convenient recharge options and detailed usage tracking.",
    mainImage: "/Products/rfid-tel/telephone[1].png",
  features: [
    {
      title: "Digital Balance Management",
      description: "Easy online recharge and balance tracking system",
      icon: "/icons/digital.svg"
    },
    {
      title: "Student Authentication",
      description: "Secure RFID-based student identification and access control",
      icon: "/icons/rfid.svg"
    },
    {
      title: "Usage Analytics",
      description: "Detailed call logs and usage patterns for better management",
      icon: "/icons/analytics.svg"
    }
  ],
  specifications: [
    {
      name: "RFID Technology",
      value: "13.56 MHz ISO 14443"
    },
    {
      name: "Call Duration Limit",
      value: "Configurable per student"
    },
    {
      name: "Balance Alert",
      value: "Low balance notifications"
    },
    {
      name: "Network Support",
      value: "PSTN, VoIP"
    }
  ],
  benefits: [
    "Controlled access to telephone services",
    "Prevents unauthorized usage",
    "Easy balance management",
    "Detailed usage tracking",
    "Cost-effective communication solution",
    "Reduced maintenance overhead"
  ],
  applications: [
    "Educational Institutions",
    "Student Housing",
    "Corporate Campuses",
    "Hostels",
    "Boarding Schools",
    "University Dormitories"
  ],
  gallery: [
    "/appli_image_iiot/Smart-robots.jpg",
    "/appli_image_iiot/Industrial-Automation.jpg",
    "/robotics/The-Future-of-Industrial-IoT.png"
  ]
};

const biometricProduct = {
  id: "biometric-product",
  name: "Biometric Product",
  tagline: "Affordable biometric access with cloud dashboard & real-time monitoring",
  description: "Our biometric access system provides secure, reliable, and affordable authentication solutions with real-time monitoring capabilities. The system integrates seamlessly with existing infrastructure while providing advanced security features and comprehensive access control.",
  mainImage: "/robotics/Smart_Manufacturing.png",
  features: [
    {
      title: "Cloud Dashboard",
      description: "Real-time monitoring and access control through our intuitive cloud dashboard",
      icon: "/icons/cloud.svg"
    },
    {
      title: "Multi-factor Authentication",
      description: "Enhanced security with fingerprint, face recognition, and RFID options",
      icon: "/icons/security.svg"
    },
    {
      title: "Real-time Monitoring",
      description: "Instant alerts and comprehensive access logs for better security management",
      icon: "/icons/monitor.svg"
    }
  ],
  specifications: [
    {
      name: "Authentication Methods",
      value: "Fingerprint, Face Recognition, RFID"
    },
    {
      name: "Response Time",
      value: "< 1 second"
    },
    {
      name: "Storage Capacity",
      value: "Up to 10,000 users"
    },
    {
      name: "Connectivity",
      value: "WiFi, Ethernet, 4G"
    }
  ],
  benefits: [
    "Enhanced security with biometric authentication",
    "Real-time monitoring and alerts",
    "Easy integration with existing systems",
    "Cost-effective solution for businesses of all sizes",
    "Cloud-based management for remote access",
    "Comprehensive audit trails and reporting"
  ],
  applications: [
    "Office Buildings",
    "Educational Institutions",
    "Healthcare Facilities",
    "Industrial Facilities",
    "Residential Complexes",
    "Government Buildings"
  ],
  gallery: [
    "/robotics/Smart_Manufacturing.png",
    "/robotics/The-Future-of-Industrial-IoT.png",
    "/appli_image_iiot/Smart-robots.jpg"
  ]
};

const hydroponicProduct = {
  id: "hydroponic-controller",
  name: "Hydroponic Controller",
  tagline: "Smart farming with sensor-driven precision and real-time farm stats display",
  description: "Our VIthNet Hydroponic Controller brings precision agriculture to your fingertips. With advanced sensor technology and real-time monitoring, it optimizes growing conditions for maximum yield while minimizing resource usage.",
  mainImage: "/appli_image_iiot/Industrial-Automation.jpg",
  features: [
    {
      title: "Real-time Monitoring",
      description: "Live tracking of all critical growing parameters",
      icon: "/icons/monitor.svg"
    },
    {
      title: "Automated Control",
      description: "Smart adjustment of nutrient levels and environmental conditions",
      icon: "/icons/automation.svg"
    },
    {
      title: "Cloud Dashboard",
      description: "Access your farm's data from anywhere, anytime",
      icon: "/icons/cloud.svg"
    }
  ],
  specifications: [
    {
      name: "Sensors",
      value: "pH, EC, Temperature, Humidity, Light"
    },
    {
      name: "Control Parameters",
      value: "Nutrient dosing, pH adjustment, Climate control"
    },
    {
      name: "Connectivity",
      value: "WiFi, 4G, Ethernet"
    },
    {
      name: "Power Supply",
      value: "AC/DC with backup"
    }
  ],
  benefits: [
    "Increased crop yield",
    "Reduced water and nutrient waste",
    "Lower labor costs",
    "Better crop quality",
    "Remote monitoring capability",
    "Data-driven decision making"
  ],
  applications: [
    "Commercial Greenhouses",
    "Vertical Farms",
    "Research Facilities",
    "Urban Agriculture",
    "Educational Institutions",
    "Home Growers"
  ],
  gallery: [
    "/appli_image_iiot/Industrial-Automation.jpg",
    "/robotics/Smart_Manufacturing.png",
    "/appli_image_iiot/Smart-robots.jpg"
  ]
};

export default function RFIDTelephonePage() {
  return (
    <ProductPage
      product={rfidProduct}
      otherProducts={[biometricProduct, hydroponicProduct]}
    />
  );
} 