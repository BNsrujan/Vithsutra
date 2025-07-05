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

export type ProductApplication = string | {
  title: string;
  image: string;
  description: string;
};

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
  applications: ProductApplication[];
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
    "/Products/rfid-tel/telephone[1].png",
    "/Products/rfid-tel/id_card[1].png",
    "/Products/rfid-tel/tec_telephone.png",
  ],
  FaQ: [
    { qution: "What is an RFID-based telephone, and how does it work?", answer: "It allows calls only after scanning an authorized RFID card, ensuring secure and trackable communication." },
    { qution: "Where is this system typically used?", answer: "Commonly deployed in hostels, schools, factories, and offices to allow monitored communication for students, workers, or guests." },
    { qution: "Can calling time be limited or scheduled for each user?", answer: "Yes, administrators can configure time limits, allowed hours, and even daily call quotas per RFID card." },
    { qution: "Is call history or usage tracked for each card?", answer: "Absolutely — every call made through an RFID card is logged with time, duration, and optionally the phone number dialed." },
    { qution: "Can this telephone be connected to normal phone lines or VoIP?", answer: "Yes, the system can be configured to work with standard landlines or VoIP services based on deployment needs." }
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
      image: "/Products/biometric-product/features/cloud-data-server-animation-download-in-lottie-json-gif-static-svg-file-formats--database-pack-network-communication-animations-4011782 1.svg",
    },
    {
      title: "Multi-factor Authentication",
      description:
        "Enhanced security with fingerprint, face recognition, and RFID options",
      image: "/Products/biometric-product/features/image 15.svg",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Instant alerts and comprehensive access logs for better security management",
      image: "/Products/biometric-product/features/image 16.svg",
    },
    {
      title: "Custom Rules",
      description:
        "Set custom access rules and restrictions for different user groups",
      image: "/Products/biometric-product/features/custem rules 1.svg",
    },
    {
      title: "Availability",
      description:
        "24/7 system availability with backup and redundancy",
      image: "/Products/biometric-product/features/availability 1.svg",
    },
    {
      title: "Advanced Security",
      description:
        "Multi-layered security with encryption and audit trails",
      image: "/Products/biometric-product/features/image 17.svg",
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
    "/Products/biometric-product/main_photo2.svg",
    "/Products/biometric-product/biometric-singal-photo.svg",
    "/Products/biometric-product/TechPhoto.svg",
  ],
  FaQ: [
    { qution: "How does the biometric system help in student attendance?", answer: "It accurately records each student's attendance using thumbprint authentication, eliminating proxies and manual errors." },
    { qution: "Is the biometric device suitable for children of all ages?", answer: "Yes, it's ergonomically designed and installed at a height suitable for children, making thumb scanning easy and quick." },
    { qution: "Does it work without an internet connection?", answer: "Yes, it can store attendance offline and sync data later when reconnected to the internet." },
    { qution: "Can the system generate attendance reports for teachers or parents?", answer: "Absolutely, it can generate automated reports and can be integrated with dashboards or parent notification systems." },
    { qution: "Is the biometric data secure and compliant with privacy standards?", answer: "Yes, all biometric data is encrypted and securely stored to protect student privacy and comply with institutional guidelines." }
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
      title: "Multi Season",
      description: "Grow in any season or location",
      image: "/Products/vithnet/features/wether.png",
    },
    {
      title: "Water Consumption",
      description: "Use up to 90% less water",
      image: "/Products/vithnet/features/waterconsumtion.png",
    },
    {
      title: "Achieve Consistent",
      description: "Achieve consistent, high-quality output",
      image: "/Products/vithnet/features/isolate.png",
    },
    {
      title: "Real-Time Analytics",
      description: "Track and optimize conditions in real-time",
      image: "/Products/vithnet/features/analitecs.png",
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

  gallery: [
    "/Products/vithnet/vithnet_device_2.svg",
    "/Products/vithnet/3DproductImage/",
    "/Products/vithnet/Tecnical/",
  ],

  applications: [
    {
      title: "Hydroponics",
      image: "/images/hydroponics.png", // Replace with actual image path or URL
      description: "Vithnet automates nutrient delivery, pH control, and water flow for soilless hydroponic systems. It ensures healthy root growth and maximizes yield with precise environmental monitoring."
    },
    {
      title: "Aeroponics",
      image: "/images/aeroponics.png", // Replace with actual image path or URL
      description: "With custom integration, Vithnet can control misting cycles and manage nutrient spray timing. Ideal for high-efficiency root oxygenation in vertical and indoor aeroponic setups."
    },
    {
      title: "Aquaponics",
      image: "/images/aquaponics.png", // Replace with actual image path or URL
      description: "Vithnet supports plant-side automation by managing pH, water flow, and temperature. It complements fish-plant systems by enabling consistent crop-side conditions."
    }
  ],
  FaQ: [
    { qution: "Can I automate my hydroponics system using VithNet?", answer: "Yes, VithNet has been deployed across multiple hydroponic farms, helping automate pH, EC, and nutrient cycle monitoring." },
    { qution: "What exactly does VithNet monitor in a closed farming setup?", answer: "It tracks temperature, humidity, soil moisture, CO₂ levels, and light intensity for better crop control and yield consistency." },
    { qution: "Is VithNet only limited to greenhouses or polyhouses?", answer: "No, it also works in vertical farms, indoor grow rooms, aquaponics, and other controlled environment systems." },
    { qution: "Does VithNet require internet to function?", answer: "No. VithNet is equipped with local data logging and offline processing. Even if your internet is down, it continues recording sensor data, and syncs it to the dashboard once the connection is restored." },
    { qution: "Can I view my farm's data remotely?", answer: "Yes. VithNet offers both mobile and web dashboards, allowing you to access real-time data, historical trends, and alerts from anywhere. It puts complete environmental control right in your pocket." }
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

export const IIOT = {
  builtinFeature: [
    {
      title: "Seamless Connectivity",
      description: "Connect effortlessly with PLCs, VFDs, SCADA systems, and industrial sensors."
    },
    {
      title: "Custom Rule-Based Alerts",
      description: "Trigger SMS or email alerts based on threshold, error, or sensor logic."
    },
    {
      title: "Live Dashboards",
      description: "Visualize KPIs and machine data instantly via intuitive dashboards."
    },
    {
      title: "High-Speed Data Acquisition",
      description: "Capture real-time equipment data at sampling rates up to 1 kHz."
    },
    {
      title: "ERP/CRM Integration",
      description: "Sync equipment data directly with your ERP, BI tools, or CRM platforms."
    },
    {
      title: "Scalable Architecture",
      description: "Deploy from one unit to full-factory monitoring with ease."
    }
  ],
  title: "Technical Specifications",
  subtitle: "Detailed technical information for system integration and deployment",
  specifications: [
    {
      label: "Protocols Supported",
      description: "Modbus RTU/TCP, OPC UA, Ethernet/IP, Profibus, Profinet, MQTT"
    },
    {
      label: "Hardware Compatibility",
      description: "Siemens, Allen-Bradley, Delta, Fanuc, Mazak, Makino, and more"
    },
    {
      label: "Edge & Cloud",
      description: "Local gateway with cloud sync via MQTT/HTTPS"
    },
    {
      label: "Data Handling",
      description: "High-speed DB, data compression, export options (CSV, PDF)"
    },
    {
      label: "Security",
      description: "End-to-end encryption, role-based access, device authentication"
    },
    {
      label: "Scalability",
      description: "Supports growth from few machines to entire factories with granular control"
    }
  ],
  faq: [
    {
      question: "What types of equipment and protocols does your system support?",
      answer: "We integrate seamlessly with all major PLCs, VFDs, SCADA systems, and industrial sensors using Modbus, OPC-UA, Profibus, and other industry-standard protocols."
    },
    {
      question: "Can it work without internet connectivity?",
      answer: "Yes, our edge gateways ensure that data continues to be captured, processed, and stored locally even during internet outages — ensuring zero data loss."
    },
    {
      question: "How do I receive alerts when a machine parameter crosses a limit?",
      answer: "You can set custom thresholds, and our system will automatically send real-time alerts via SMS, email, or dashboard notifications whenever a parameter deviates."
    },
    {
      question: "Can it integrate with ERP, CRM, or BI tools?",
      answer: "Absolutely. We offer robust APIs and built-in integrations to connect with your existing ERP, CRM, or business intelligence platforms for end-to-end automation."
    },
    {
      question: "Is my factory's data secure on your platform?",
      answer: "Yes, we use enterprise-grade encryption, firewall protection, and role-based access control to ensure your operational data remains private and secure at all times."
    }
  ],
  testimonials: [
    {
      name: "Nikhil Jadhav",
      designation: "Project Supervisor – AquaSure Infra Pvt. Ltd.",
      location: "Bengaluru",
      feedback: `"Managing STPs and ETPs across different cities was chaotic until we adopted VithSutra's IIoT platform. 
From flow sensors to tank levels and pump pressure — we now track everything remotely with precise data logs. 
It has made SLA compliance easier with on-time overflow alerts and live analytics for pump efficiency. 
The shift from reactive to proactive control has transformed our operational model completely."`
    },
    {
      name: "Farhan Khan",
      designation: "Maintenance Head – CoreFuel Energy Ltd.",
      location: "Mumbai",
      feedback: `"Safety and uptime are mission-critical in our sector, and VithSutra's solution has elevated both. 
Our team now monitors pipeline pressure, pump vibration, and leak indicators in real time across multiple sites. 
The system's threshold-based alarms helped us prevent two major failures in just the first month of deployment. 
It has reduced our unplanned maintenance and strengthened our remote control and safety protocols."`
    }
  ],
  applications: [
    {
      industry: "Food & Beverage Processing",
      description: "Monitor critical parameters like temperature, humidity, and machine hygiene in real-time to ensure food safety and compliance with standards."
    },
    {
      industry: "Cement & Steel Industries",
      description: "Monitor kiln temperature, vibration, motor current, and conveyor operation to prevent critical failures."
    },
    {
      industry: "Manufacturing",
      description: "Monitor production lines, reduce unplanned downtime, track OEE (Overall Equipment Effectiveness), and optimize energy usage."
    },
    {
      industry: "Pharmaceuticals & Chemical Processing",
      description: "Monitor critical parameters like temperature, pressure, and flow in real-time to maintain product quality and ensure compliance."
    },
    {
      industry: "Power & Energy",
      description: "Track performance of turbines, transformers, and solar panels; automate load balancing and predictive maintenance."
    },
    {
      industry: "Water & Wastewater Management",
      description: "Automate pump control, track tank levels, detect leaks, and optimize water flow using real-time sensor data."
    }
  ],
  howItWorks: {
    heading: "How VithSutra's IIoT Automation Works",
    subheading: "Real-time data. Smarter decisions. Seamless automation.",
    steps: [
      {
        title: "Seamlessly interface",
        description: "Seamlessly interface with PLCs, VFDs, and SCADA systems via industrial-grade protocols."
      },
      {
        title: "Capture Real-Time Data",
        description: "Continuously collect high-speed machine data like status, flow, and temperature up to 1 kHz."
      },
      {
        title: "Analyze & Generate Alerts",
        description: "Detect anomalies instantly and trigger intelligent alerts using custom rules and AI models."
      },
      {
        title: "Visualize & Act",
        description: "View actionable KPIs and trends on a unified dashboard integrated with your ERP or CRM."
      }
    ]
  }
};


export const roboticsWorkshop = {
  heading: "Our Workshop Includes",
  subheading: "Designed for factories. Engineered for intelligence.",
  features: [
    {
      title: "Robot on Campus",
      description: "We bring the industrial robotic arm directly to your institution for live, hands-on sessions."
    },
    {
      title: "Modular Curriculum Tracks",
      description: "Training paths are tailored based on academic level — school, diploma, or engineering."
    },
    {
      title: "Real-World Projects",
      description: "Students work on practical tasks like writing, grid navigation, and AI-based sorting."
    },
    {
      title: "Project Mentoring Support",
      description: "We guide students even after the session to help with innovation and competitions."
    },
    {
      title: "Multi-Domain Integration",
      description: "Covers concepts from AI, electronics, coding, and mechanical design under one program."
    }
  ],
  faq: [
    {
      question: "We already have a robotics club. How is this different?",
      answer: "Most robotics clubs use basic DIY kits. We offer real industrial-grade training with robotic arms, something that's rarely found in student environments."
    },
    {
      question: "What infrastructure do we need to host this training?",
      answer: "Nothing special. We only need a small lab/classroom with a table and power outlet. We carry the robot and all necessary tools."
    },
    {
      question: "Is this suitable for school-level students?",
      answer: "Yes! We have designed custom models for schools, diploma, and engineering levels — each with age-appropriate content."
    },
    {
      question: "What duration does the training cover?",
      answer: "Our programs range from 2-day workshops to 1-week bootcamps — depending on the institution's preference and learning goals."
    },
    {
      question: "Will students receive certification?",
      answer: "Yes, each participant will receive a Vithsutra Robotics Training Certificate, adding credibility to their resumes and profiles."
    }
  ],
  testimonials: [
    {
      name: "Dr. Nalini Rao",
      role: "Managing Trustee",
      organization: "Vidya Vihar Educational Trust, Maharashtra",
      statement: "Vithsutra's robotics training brought our students face-to-face with real automation. The hands-on sessions with industrial robots helped them understand concepts that textbooks alone could never deliver. It was a game-changing experience for our institution."
    },
    {
      name: "Mr. Suresh Deshmukh",
      role: "",
      organization: "",
      statement: "We were impressed by how Vithsutra seamlessly blended advanced robotics with an easy-to-understand curriculum. Their approach ignited interest even in non-technical students and created a buzz across our campus. Highly recommended for any institution serious about future-ready education."
    }
  ]
};
