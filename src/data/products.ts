// Centralized product data for all products
import { Shield, Cloud, Calculator, Settings, CreditCard, Layers, Clock, LucideIcon } from "lucide-react"

type ProductFeature = {
  title: string;
  description: string;
  icon?: string | LucideIcon;
};

type ProductSpec = {
  name: string;
  value: string;
};

type howitworks = {
  image: string;
  title: string;
  description: string;
};

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainImage: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  Howitworks?: howitworks[];
  benefits: string[];
  applications: string[];
  gallery?: string[];
};

export const rfidProduct: Product = {
  id: "rfid-telephone",
  name: "RFID-Based Telephone",
  tagline: "RFID-Based Telephone",
  description:
    "This RFID-based telephone is made for hostels, schools, and campuses. It replaces coin phones with smart, secure RFID cards. Each call is tracked, timed, and easy to manage.",
  mainImage: "/Products/rfid-tel/telephone[1].png",
  features:[
    {
      icon: Shield,
      title: "RFID Security",
      description: "Secure access with individual RFID card authentication.",
    },
    {
      icon: Cloud,
      title: "Cloud Dashboard",
      description: "Live data monitoring with admin-level access from anywhere.",
    },
    {
      icon: Calculator,
      title: "Smart Billing",
      description: "$1 is deducted for every 60 seconds of talktime.",
    },
    {
      icon: Settings,
      title: "Custom Rules",
      description: "Set limits for call time, users, or access hours.",
    },
    {
      icon: CreditCard,
      title: "Easy Recharge",
      description: "Top and recharge using VINSura's recharge machine.",
    },
    {
      icon: Layers,
      title: "Durable Hardware",
      description: "Built for long-term public use with low power",
    },
    {
      icon: Clock,
      title: "24/7 operational availability",
      description: "Operational anytime, day or night.",
    },
  ],
  Howitworks: [
    {
      image: "/Products/rfid-tel/setp1.png",
      title: "Tap to Recharge",
      description: "User taps card on VithSutra's recharge machine",
    },
    {
      image: "/Products/rfid-tel/step2.png",
      title: "Insert Card",
      description: "Insert RFID card into the telephone unit",
    },
    {
      image: "/Products/rfid-tel/step3.png",
      title: "Dial and Talk",
      description: "Dial the number and start your call",
    },
    {
      image: "/Products/rfid-tel/step4.png",
      title: "Auto Deduction",
      description: "Amount is deducted from the card",
    },
  ],
  specifications: [
    {
      name: "RFID Technology",
      value: "13.56 MHz ISO 14443",
    },
    {
      name: "Call Duration Limit",
      value: "Configurable per student",
    },
    {
      name: "Balance Alert",
      value: "Low balance notifications",
    },
    {
      name: "Network Support",
      value: "PSTN, VoIP",
    },
  ],
  benefits: [
    "Controlled access to telephone services",
    "Prevents unauthorized usage",
    "Easy balance management",
    "Detailed usage tracking",
    "Cost-effective communication solution",
    "Reduced maintenance overhead",
  ],
  applications: [
    "Educational Institutions",
    "Student Housing",
    "Corporate Campuses",
    "Hostels",
    "Boarding Schools",
    "University Dormitories",
  ],
  gallery: [
    "/appli_image_iiot/Smart-robots.jpg",
    "/appli_image_iiot/Industrial-Automation.jpg",
    "/robotics/The-Future-of-Industrial-IoT.png",
  ],
};

export const biometricProduct: Product = {
  id: "biometric-product",
  name: "Biometric Product",
  tagline:
    "Affordable biometric access with cloud dashboard & real-time monitoring",
  description:
    "Our biometric access system provides secure, reliable, and affordable authentication solutions with real-time monitoring capabilities. The system integrates seamlessly with existing infrastructure while providing advanced security features and comprehensive access control.",
  mainImage: "/robotics/Smart_Manufacturing.png",
  features: [
    {
      title: "Cloud Dashboard",
      description:
        "Real-time monitoring and access control through our intuitive cloud dashboard",
      icon: "/icons/cloud.svg",
    },
    {
      title: "Multi-factor Authentication",
      description:
        "Enhanced security with fingerprint, face recognition, and RFID options",
      icon: "/icons/security.svg",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Instant alerts and comprehensive access logs for better security management",
      icon: "/icons/monitor.svg",
    },
  ],
  specifications: [
    {
      name: "Authentication Methods",
      value: "Fingerprint, Face Recognition, RFID",
    },
    {
      name: "Response Time",
      value: "< 1 second",
    },
    {
      name: "Storage Capacity",
      value: "Up to 10,000 users",
    },
    {
      name: "Connectivity",
      value: "WiFi, Ethernet, 4G",
    },
  ],
  benefits: [
    "Enhanced security with biometric authentication",
    "Real-time monitoring and alerts",
    "Easy integration with existing systems",
    "Cost-effective solution for businesses of all sizes",
    "Cloud-based management for remote access",
    "Comprehensive audit trails and reporting",
  ],
  applications: [
    "Office Buildings",
    "Educational Institutions",
    "Healthcare Facilities",
    "Industrial Facilities",
    "Residential Complexes",
    "Government Buildings",
  ],
  gallery: [
    "/robotics/Smart_Manufacturing.png",
    "/robotics/The-Future-of-Industrial-IoT.png",
    "/appli_image_iiot/Smart-robots.jpg",
  ],
};

export const hydroponicProduct: Product = {
  id: "hydroponic-controller",
  name: "Hydroponic Controller",
  tagline:
    "Smart farming with sensor-driven precision and real-time farm stats display",
  description:
    "Our VIthNet Hydroponic Controller brings precision agriculture to your fingertips. With advanced sensor technology and real-time monitoring, it optimizes growing conditions for maximum yield while minimizing resource usage.",
  mainImage: "/appli_image_iiot/Industrial-Automation.jpg",
  features: [
    {
      title: "Real-time Monitoring",
      description: "Live tracking of all critical growing parameters",
      icon: "/icons/monitor.svg",
    },
    {
      title: "Automated Control",
      description: "Smart adjustment of nutrient levels and environmental conditions",
      icon: "/icons/automation.svg",
    },
    {
      title: "Cloud Dashboard",
      description: "Access your farm's data from anywhere, anytime",
      icon: "/icons/cloud.svg",
    },
  ],
  specifications: [
    {
      name: "Sensors",
      value: "pH, EC, Temperature, Humidity, Light",
    },
    {
      name: "Control Parameters",
      value: "Nutrient dosing, pH adjustment, Climate control",
    },
    {
      name: "Connectivity",
      value: "WiFi, 4G, Ethernet",
    },
    {
      name: "Power Supply",
      value: "AC/DC with backup",
    },
  ],
  benefits: [
    "Increased crop yield",
    "Reduced water and nutrient waste",
    "Lower labor costs",
    "Better crop quality",
    "Remote monitoring capability",
    "Data-driven decision making",
  ],
  applications: [
    "Commercial Greenhouses",
    "Vertical Farms",
    "Research Facilities",
    "Urban Agriculture",
    "Educational Institutions",
    "Home Growers",
  ],
  gallery: [
    "/appli_image_iiot/Industrial-Automation.jpg",
    "/robotics/Smart_Manufacturing.png",
    "/appli_image_iiot/Smart-robots.jpg",
  ],
}; 