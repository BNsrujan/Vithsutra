// Centralized product data for all products
import { LucideIcon } from "lucide-react"

export type ProductFeature = {
  title: string;
  description: string;
  image?: string;
  icon?: string | LucideIcon;
};

export type ProductSpec = {
  name: string;
  value: string;
};

export type HowItWorks = {
  image: string;
  title: string;
  description: string;
};
export interface Fact {
  number:number;
  title:string;
  suffix:string;
}

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mainImage: string;
  productSectionImage:string;
  tecnicalimage:string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  howItWorks?: HowItWorks[];
  benefits: string[];
  applications: string[];
  gallery?: string[];
  testimonials?: Testimonial[];
  FaQ: { qution: string; answer: string }[];
  facts:Fact[];
};

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const rfidProduct: Product = {
  id: "rfid-telephone",
  name: "RFID-Based Telephone",
  tagline: "RFID-Based Telephone",
  productSectionImage:"/Products/rfid-tel/telephone[1].png",
  description:
    "This RFID-based telephone is made for hostels, schools, and campuses. It replaces coin phones with smart, secure RFID cards. Each call is tracked, timed, and easy to manage.",
  mainImage: "/Products/rfid-tel/telephone[1].png",
  features:[
    {
      image: "/Products/rfid-tel/feature/image 37.svg",
      title: "RFID Security",
      description: "Secure access with individual RFID card authentication.",
    },
    {
      image: "/Products/rfid-tel/feature/image 38.svg",
      title: "Cloud Dashboard",
      description: "Live data monitoring with admin-level access from anywhere.",
    },
    {
      image: "/Products/rfid-tel/feature/image 39.svg",
      title: "Smart Billing",
      description: "$1 is deducted for every 60 seconds of talktime.",
    },
    {
      image: "/Products/rfid-tel/feature/image 40.svg",
      title: "Custom Rules",
      description: "Set limits for call time, users, or access hours.",
    },
    {
      image: "/Products/rfid-tel/feature/image 41.svg",
      title: "Easy Recharge",
      description: "Top and recharge using VINSura's recharge machine.",
    },
    {
      image: "/Products/rfid-tel/feature/image 42.svg",
      title: "Durable Hardware",
      description: "Built for long-term public use with low power",
    },
    {
      image: "/Products/rfid-tel/feature/image 43.svg",
      title: "24/7 operational availability",
      description: "Operational anytime, day or night.",
    },
  ],
  howItWorks: [
    {
      image: "/Products/rfid-tel/how_it_works/setp1.png",
      title: "Tap to Recharge",
      description: "User taps card on VithSutra's recharge machine",
    },
    {
      image: "/Products/rfid-tel/how_it_works/step2.png",
      title: "Insert Card",
      description: "Insert RFID card into the telephone unit",
    },
    {
      image: "/Products/rfid-tel/how_it_works/step3.png",
      title: "Dial and Talk",
      description: "Dial the number and start your call",
    },
    {
      image: "/Products/rfid-tel/how_it_works/step4.png",
      title: "Auto Deduction",
      description: "Amount is deducted from the card",
    },
  ],
  tecnicalimage:"/Products/rfid-tel/tec_telephone.svg",
  testimonials:[
    {
      id: 1,
      name: "Ragavendra  Shetty",
      title: "Hostel Manager",
      company: "Ski-line Boys Hostel, Mysore",
      quote:
        "Managing communication in a boys' hostel with over 300 students was always a challenge especially when students' personalphones were often misplaced or misused. Since installing these RFID-based telephones, daily communication has become streamlined and secure. Each student now has verified access, and calls can be tracked for accountability. The product has drastically reduced misuse and brought a sense of discipline in the hostel. It's become an essential part of our daily routine.",
    },
    {
      id: 2,
      name: "Surjeet Yadav",
      title: "Site Operations Head",
      company: "Mahadev Mining Corporation, Jharkhand",
      quote:"Our mining site is located deep in a region where mobile networks from different SIM providers constantly fail. Communication was a huge bottleneck affecting both safety and coordination. After implementing these telephones with wide coverage antennas,  we've finally found a reliable solution. Now, our teams stay connected across the entire site, without worrying about poor signal  strength. It's a game-changer for the mining industry."
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
  FaQ: [
    { qution: "What is the warranty period?", answer: "The product comes with a 1-year warranty." },
    { qution: "Can I recharge the card online?", answer: "Yes, online recharge is supported via the dashboard." },
    { qution: "Is installation included?", answer: "Yes, installation is included in the package." }
  ],
  facts:[
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
    
    {
      number: 15,
      suffix: "+",
      title: "Domains Served",
    },
    {
      number: 2,
      suffix: "+",
      title: "Years Of Experience",
    },
  ]
};

export const biometricProduct: Product = {
  id: "biometric-product",
  name: "Biometric Product",
  tagline:
    "Affordable biometric access with cloud dashboard & real-time monitoring",
  description:
    "Our biometric access system provides secure, reliable, and affordable authentication solutions with real-time monitoring capabilities. The system integrates seamlessly with existing infrastructure while providing advanced security features and comprehensive access control.",
  mainImage: "/Products/biometric-product/main_photo2.svg",
  productSectionImage:"/Products/biometric-product/main_productsection.svg",
  features: [
    {
      title: "Cloud Dashboard",
      description:
        "Real-time monitoring and access control through our intuitive cloud dashboard",
      icon: "Cloud",
    },
    {
      title: "Multi-factor Authentication",
      description:
        "Enhanced security with fingerprint, face recognition, and RFID options",
      icon: "Shield",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Instant alerts and comprehensive access logs for better security management",
      icon: "Monitor",
    },
  ],
  howItWorks: [
    {
      image: "/Products/biometric-product/How_it_works/setp1.png",
      title: "Enroll Fingerprint",
      description: "Admin scans and stores fingerprints securely using the enrollment interface",
    },
    {
      image: "/Products/biometric-product/How_it_works/step2.png",
      title: "Place Finger",
      description: "User places their finger on the sensor to request access.",
    },
    {
      image: "/Products/biometric-product/How_it_works/step3.png",
      title: " Authenticate",
      description: "System verifies the fingerprint with stored templates in milliseconds.",
    },
    {
      image: "/Products/biometric-product/How_it_works/step4.png",
      title: "Access Granted or Denied",
      description: "Based on custom rules and fingerprint match  access is either approved or denied.",
    },
  ],
  tecnicalimage:"/Products/biometric-product/TechPhoto.svg",
  testimonials:[
    {
      id: 1,
      name: "Ragavendra  Shetty",
      title: "Hostel Manager",
      company: "Ski-line Boys Hostel, Mysore",
      quote:
        "Managing communication in a boys' hostel with over 300 students was always a challenge especially when students' personalphones were often misplaced or misused. Since installing these RFID-based telephones, daily communication has become streamlined and secure. Each student now has verified access, and calls can be tracked for accountability. The product has drastically reduced misuse and brought a sense of discipline in the hostel. It's become an essential part of our daily routine.",
    },
    {
      id: 2,
      name: "Surjeet Yadav",
      title: "Site Operations Head",
      company: "Mahadev Mining Corporation, Jharkhand",
      quote:"Our mining site is located deep in a region where mobile networks from different SIM providers constantly fail. Communication was a huge bottleneck affecting both safety and coordination. After implementing these telephones with wide coverage antennas,  we've finally found a reliable solution. Now, our teams stay connected across the entire site, without worrying about poor signal  strength. It's a game-changer for the mining industry."
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
  FaQ: [
    { qution: "What biometric methods are supported?", answer: "Fingerprint, face recognition, and RFID." },
    { qution: "Is the dashboard cloud-based?", answer: "Yes, you can access it from anywhere." },
    { qution: "How many users can be stored?", answer: "Up to 10,000 users." }
  ],
  facts:[
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
    
    {
      number: 15,
      suffix: "+",
      title: "Domains Served",
    },
    {
      number: 2,
      suffix: "+",
      title: "Years Of Experience",
    },
  ]
};

export const hydroponicProduct: Product = {
  id: "hydroponic-controller",
  name: "Hydroponic Controller",
  tagline:
    "Smart farming with sensor-driven precision and real-time farm stats display",
  description:
    "Our VIthNet Hydroponic Controller brings precision agriculture to your fingertips. With advanced sensor technology and real-time monitoring, it optimizes growing conditions for maximum yield while minimizing resource usage.",
  mainImage: "/Products/vithnet/vithnet_device_2.svg",
  productSectionImage:"/Products/vithnet/vithnet_device_2.svg",
  features: [
    {
      title: "Multi Seasen ",
      description: "Grow in any season or location",
      icon: "/Products/vithnet/features/wether.png",
    },
    {
      title: "Water Consumtion",
      description: "Use up to 90% less water",
      icon: "/Products/vithnet/features/waterconsumtion.png",
    },
    {
      title: "Achieve consistent",
      description: "Achieve consistent,high-quality output",
      icon: "/Products/vithnet/features/isolate.png",
    },
    {
      title: "Real-Time",
      description: " Track and optimize conditions in real-time",
      icon: "/Products/vithnet/features/analitecs.png",
    },
  ],
  howItWorks: [
    {
      image: "/Products/vithnet/how_it_work/step1.svg",
      title: "Sensor Data Collection",
      description: "VithNet is connected to multiple environmental sensors installed in the hydroponic setup.",
    },
    {
      image: "/Products/vithnet/how_it_work/step2.svg",
      title: " Instant Data Processing",
      description: "The system processes the incoming sensor data to ensure it's clean and reliable.",
    },
    {
      image: "/Products/vithnet/how_it_work/step3.svg",
      title: " Live Dashboard Display",
      description: "All sensor data is instantly sent to the VithNet web & mobile dashboard.",
    },
    {
      image: "/Products/vithnet/how_it_work/step4.svg",
      title: "Custom Threshold Alerts",
      description: "Users can set custom limits or warning levels for any parameter.",
    },
  ],
  tecnicalimage:"/Products/vithnet/vithnet_device_2.svg",
  testimonials:[
    {
      id: 1,
      name: "Ragavendra  Shetty",
      title: "Hostel Manager",
      company: "Ski-line Boys Hostel, Mysore",
      quote:
        "Managing communication in a boys' hostel with over 300 students was always a challenge especially when students' personalphones were often misplaced or misused. Since installing these RFID-based telephones, daily communication has become streamlined and secure. Each student now has verified access, and calls can be tracked for accountability. The product has drastically reduced misuse and brought a sense of discipline in the hostel. It's become an essential part of our daily routine.",
    },
    {
      id: 2,
      name: "Surjeet Yadav",
      title: "Site Operations Head",
      company: "Mahadev Mining Corporation, Jharkhand",
      quote:"Our mining site is located deep in a region where mobile networks from different SIM providers constantly fail. Communication was a huge bottleneck affecting both safety and coordination. After implementing these telephones with wide coverage antennas,  we've finally found a reliable solution. Now, our teams stay connected across the entire site, without worrying about poor signal  strength. It's a game-changer for the mining industry."
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
  FaQ: [
    { qution: "What sensors are included?", answer: "pH, EC, temperature, humidity, and light sensors." },
    { qution: "Can I monitor remotely?", answer: "Yes, remote monitoring is available via the cloud dashboard." },
    { qution: "Is there a backup power option?", answer: "Yes, AC/DC with backup is supported." }
  ],
  facts:[
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
    
    {
      number: 15,
      suffix: "+",
      title: "Domains Served",
    },
    {
      number: 2,
      suffix: "+",
      title: "Years Of Experience",
    },
  ]
}; 