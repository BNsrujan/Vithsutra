// Centralized product data for all products
import { LucideIcon } from "lucide-react"


export type ProductFeature = {
  title: string;
  description: string;
  image?: string;
  icon?: string | LucideIcon;
};

export type Whychose = {
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
  industry: string;
  image: string;
  description: string;
};

export type ApplicationType = {
  image: string;
  title: string;
  subtext: string;
}


export type Product = {
  id: string;
  name: string;
  tagline?: string | null;
  description: string;
  mainImage: string;
  productSectionImage:string;
  tecnicalimage:string;
  whychose?:Whychose[];
  features: ProductFeature[];
  specifications: ProductSpec[];
  howItWorks?: HowItWorks[];
  applications: ProductApplication[];
  gallery?: string[];
  testimonials?: Testimonial[];
  FaQ: { qution: string; answer: string }[];
  facts:Fact[];
  link:string;
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

  applications: [
    {
      image:"/public/industry/fmog.avif",
      industry: "Food & Beverage Processing",
      description: "Monitor critical parameters like temperature, humidity, and machine hygiene in real-time to ensure food safety and compliance with standards."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Cement & Steel Industries",
      description: "Monitor kiln temperature, vibration, motor current, and conveyor operation to prevent critical failures."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Manufacturing",
      description: "Monitor production lines, reduce unplanned downtime, track OEE (Overall Equipment Effectiveness), and optimize energy usage."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Pharmaceuticals & Chemical Processing",
      description: "Monitor critical parameters like temperature, pressure, and flow in real-time to maintain product quality and ensure compliance."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Power & Energy",
      description: "Track performance of turbines, transformers, and solar panels; automate load balancing and predictive maintenance."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Water & Wastewater Management",
      description: "Automate pump control, track tank levels, detect leaks, and optimize water flow using real-time sensor data."
    }
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
  ],
  link:"/products/rfid-telephone"
};

export const biometricProduct: Product = {
  id: "biometric-product",
  name: "Biometric Product",
  tagline:"Affordable biometric access with cloud dashboard & real-time monitoring",
  description:
    "Our biometric access system provides secure, reliable, and affordable authentication solutions with real-time monitoring capabilities. The system integrates seamlessly with existing infrastructure while providing advanced security features and comprehensive access control.",
  mainImage: "/Products/biometric-product/main_photo2.svg",
  productSectionImage:"/Products/biometric-product/main_productsection.svg",
  features : [
    {
      image: "/Products/biometric-product/features/customrules.svg",
      title: "Custom Rules",
      description: "Set limits for access hours, user roles, or restricted days."
    },
    {
      image: "/Products/biometric-product/features/easyenrollment.svg",
      title: "Easy Enrollment",
      description: "Enroll users in seconds using the guided fingerprint registration system."
    },
    {
      image: "/Products/biometric-product/features/custmdashboard.svg",
      title: "Cloud Dashboard",
      description: "Live access monitoring with admin-level control — anytime, anywhere."
    },
    {
      image: "/Products/biometric-product/features/smartaccesstracker.svg",
      title: "Smart Access Tracking",
      description: "Real-time logging of every fingerprint entry, ready for reports, audits, or investigations."
    },
    {
      image: "/Products/biometric-product/features/24x7.svg",
      title: "24/7 Operational Availability",
      description: "Operational anytime, day or night."
    },
    {
      image: "/Products/biometric-product/features/fingerprintauthentication.svg",
      title: "Fingerprint Authentication",
      description: "Secure access through fast and accurate biometric fingerprint recognition."
    },
    {
      image: "/Products/biometric-product/features/fastrespons.svg",
      title: "Fast Response",
      description: "Built in rust, fast response in 0.5 second."
    },
    {
      image: "/Products/biometric-product/features/file-export-icon-illustration-vector 1.svg",
      title: "Export file in any format",
      description: "Export the file in .csv or .pdf format."
    },
    {
      image: "/Products/biometric-product/features/durablehardware.svg",
      title: "Durable Hardware",
      description: "Rugged build, designed for long-term public use with low maintenance."
    }
  ],
  
  howItWorks: [
    {
      image: "/Products/biometric-product/How_it_works/step1.svg",
      title: "Enroll Fingerprint",
      description: "Admin scans and stores fingerprints securely using the enrollment interface",
    },
    {
      image: "/Products/biometric-product/How_it_works/step2.svg",
      title: "Place Finger",
      description: "User places their finger on the sensor to request access.",
    },
    {
      image: "/Products/biometric-product/How_it_works/step3.svg",
      title: " Authenticate",
      description: "System verifies the fingerprint with stored templates in milliseconds.",
    },
    {
      image: "/Products/biometric-product/How_it_works/step4.svg",
      title: "Access Granted or Denied",
      description: "Based on custom rules and fingerprint match  access is either approved or denied.",
    },
  ],
  tecnicalimage:"/Products/biometric-product/TechPhoto.svg",
  testimonials:[
   
    {
      id: 1,
      avatar:"/Products/biometric-product/testimonialprofilephoto/image_2.png",
      name: "Amitabh Rao",
      title: "College Operations Manager",
      company: "Pragna Institute of Technology",
      quote:
        "Implementing VithSutra’s Biometric System in our engineering college has been a game-changer. Our students now mark attendance through fingerprint scans, replacing the old, time-consuming paper-based method. It has reduced manual errors, saved faculty time, and improved overall efficiency. The deployment was smooth, and the system has been performing consistently across all departments."
    },
    {
      id: 2,
      avatar:"/Products/biometric-product/testimonialprofilephoto/images_1.png",
      name: "Dinesh Rao",
      title: "Operations Officer",
      company: "VMax Die Casting",
      quote:
        "We’ve deployed the Biometric System from VithSutra across our die casting industry units, with over 200+ installations now in place. More than 1,000 employees across India use it daily for secure, hassle-free access and attendance. The system is reliable, efficient, and has proven to be a strong fit for our industrial environment."
    }
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

  applications: [
    {
      image: "/Products/biometric-product/application/biometricfactory1.png",
      industry: "Industries & Manufacturing Units",
      description: "Restricted Area Access: Only authorized personnel can enter hazardous or sensitive zones. Production Floor Time Logs: Track when operators begin and finish tasks for productivity analysis."
    },
    {
      image: "/Products/biometric-product/application/biometricinschool1.png",
      industry: "Educational Institutions (Schools, Colleges, Hostels)",
      description: "Student Attendance Tracking: Eliminate paper registers; automate attendance with fingerprint scans. Staff Clock In/Out: Accurately track faculty and admin staff working hours."
    },
    {
      image: "/Products/biometric-product/application/office.png",
      industry: "Corporate Offices",
      description: "Employee Attendance & HR Integration: Sync biometric data with HR systems for payroll and leave tracking. Meeting Room or Floor Access Control: Control who enters specific workspaces or departments."
    }
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
  ],
  link:"/products/biometric-product"
};

export const hydroponicProduct: Product = {
  id: "hydroponic-controller",
  name: "Hydroponic Controller",
  tagline:"Smart farming with sensor-driven precision and real-time farm stats display",
  description:
    "Our VIthNet Hydroponic Controller brings precision agriculture to your fingertips. With advanced sensor technology and real-time monitoring, it optimizes growing conditions for maximum yield while minimizing resource usage.",
  mainImage: "/Products/vithnet/vithnet_device_2.svg",
  productSectionImage:"/Products/vithnet/vithnet_device_2.svg",
  whychose: [
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
  features:[
    {
      title: "High-Precision Sensors",
      image: "/Products/vithnet/builtin_features/high-precision-sensors.svg",
      description: "Provides accurate environmental readings to support data-driven decisions."
    },
    {
      title: "Mobile & Web Dashboard",
      image: "/Products/vithnet/builtin_features/mobile&webdashboard.svg",
      description: "Real-time sensor data visualization through a user-friendly interface."
    },
    {
      title: "Historical Data Storage",
      image: "/Products/vithnet/builtin_features/historicaldatastorage.svg",
      description: "Helps track environmental trends and crop performance."
    },
    {
      title: "24/7 Customer Support",
      image: "/Products/vithnet/builtin_features/Screenshot_from_2025-07-05_18-35-14-removebg-preview 1.svg",
      description: "Round-the-clock help for setup and troubleshooting."
    },
    {
      title: "Wi-Fi Integrated",
      image: "/Products/vithnet/builtin_features/wifi-integrated.svg",
      description: "Easy sensor configuration and data upload via Wi-Fi."
    },
    {
      title: "Secure Transmission",
      image: "/Products/vithnet/builtin_features/securetransmiss.svg",
      description: "End-to-end encrypted data for safety and compliance."
    }
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
  gallery: [
    "/Products/vithnet/vithnet_device_2.svg",
    "/Products/vithnet/3DproductImage/",
    "/Products/vithnet/Tecnical/",
  ],
  applications: [
    {
      industry: "Hydroponics",
      image: "/images/hydroponics.png", // Replace with actual image path or URL
      description: "Vithnet automates nutrient delivery, pH control, and water flow for soilless hydroponic systems. It ensures healthy root growth and maximizes yield with precise environmental monitoring."
    },
    {
      industry: "Aeroponics",
      image: "/images/aeroponics.png", // Replace with actual image path or URL
      description: "With custom integration, Vithnet can control misting cycles and manage nutrient spray timing. Ideal for high-efficiency root oxygenation in vertical and indoor aeroponic setups."
    },
    {
      industry: "Aquaponics",
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
  ],
  link:"/products/hydroponic-controller"
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
      image:"/public/industry/fmog.avif",
      industry: "Food & Beverage Processing",
      description: "Monitor critical parameters like temperature, humidity, and machine hygiene in real-time to ensure food safety and compliance with standards."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Cement & Steel Industries",
      description: "Monitor kiln temperature, vibration, motor current, and conveyor operation to prevent critical failures."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Manufacturing",
      description: "Monitor production lines, reduce unplanned downtime, track OEE (Overall Equipment Effectiveness), and optimize energy usage."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Pharmaceuticals & Chemical Processing",
      description: "Monitor critical parameters like temperature, pressure, and flow in real-time to maintain product quality and ensure compliance."
    },
    {
      image:"/public/industry/fmog.avif",
      industry: "Power & Energy",
      description: "Track performance of turbines, transformers, and solar panels; automate load balancing and predictive maintenance."
    },
    {
      image:"/public/industry/fmog.avif",
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

export const industries = [
  {
    title: "Food Processing",
    description: "Automating packaging, sorting, and quality control with robotics and smart sensors to boost hygiene and efficiency.",
    link: "/industries/food-processing",
    image: "/industry/food-processing.avif"
  },
  {
    title: "Healthcare & Medical",
    description: "Secure patient access, sample inspection, and hospital automation powered by biometrics, robotics, and IIoT.",
    link: "/industries/healthcare-medical",
    image: "/industry/healthcare.webp"
  },
  {
    title: "Education & Research",
    description: "Providing institutions with IIoT labs and robotics training kits for real-world learning and innovation.",
    link: "/industries/education-research",
    image: "/industry/educationlab.avif"
  },
  {
    title: "Farming & Agriculture",
    description: "Empowering modern farmers with hydroponics automation, sensor-based monitoring, and precision farming tech.",
    link: "/industries/farming-agriculture",
    image: "/industry/farming.avif"
  },
  {
    title: "Manufacturing",
    description: "Streamlining industrial operations through PLC-based automation, SCADA systems, and robotic integration.",
    link: "/industries/manufacturing",
    image: "/industry/manufactureing.avif"
  }
];
