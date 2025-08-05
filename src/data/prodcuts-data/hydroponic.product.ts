import { Product } from "@/core/entities/product";

export const hydroponicProduct: Product = {
    id: "hydroponic-controller",
    name: "Hydroponic Controller",
    tagline: "Smart Farming Automation System",
    description:
      "VITHNET is an IoT-powered automation system for Controlled Environment Agriculture (CEA) that helps optimize crop growth using minimal water and space. VITHNET offers real-time monitoring, automated sensing, and precise climate control, ensuring healthier crops and higher yields with minimal manual effort.",
    mainImage: "/Products/vithnet/vithnet_device_2.svg",
    productSectionImage: "/Products/vithnet/vithnet_device_2.svg",
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
    features: [
      {
        title: "High-Precision Sensors",
        image: "/Products/vithnet/builtin_features/high-precision-sensors.svg",
        description:
          "Provides accurate environmental readings to support data-driven decisions.",
      },
      {
        title: "Mobile & Web Dashboard",
        image: "/Products/vithnet/builtin_features/mobile&webdashboard.svg",
        description:
          "Real-time sensor data visualization through a user-friendly interface.",
      },
      {
        title: "Historical Data Storage",
        image: "/Products/vithnet/builtin_features/historicaldatastorage.svg",
        description: "Helps track environmental trends and crop performance.",
      },
      {
        title: "24/7 Customer Support",
        image:
          "/Products/vithnet/builtin_features/Screenshot_from_2025-07-05_18-35-14-removebg-preview 1.svg",
        description: "Round-the-clock help for setup and troubleshooting.",
      },
      {
        title: "Wi-Fi Integrated",
        image: "/Products/vithnet/builtin_features/wifi-integrated.svg",
        description: "Easy sensor configuration and data upload via Wi-Fi.",
      },
      {
        title: "Secure Transmission",
        image: "/Products/vithnet/builtin_features/securetransmiss.svg",
        description: "End-to-end encrypted data for safety and compliance.",
      },
    ],
    howItWorks: [
      {
        image: "/Products/vithnet/how_it_work/step1.svg",
        title: "Sensor Data Collection",
        description:
          "VithNet is connected to multiple environmental sensors installed in the hydroponic setup.",
      },
      {
        image: "/Products/vithnet/how_it_work/step2.svg",
        title: " Instant Data Processing",
        description:
          "The system processes the incoming sensor data to ensure it's clean and reliable.",
      },
      {
        image: "/Products/vithnet/how_it_work/step3.svg",
        title: " Live Dashboard Display",
        description:
          "All sensor data is instantly sent to the VithNet web & mobile dashboard.",
      },
      {
        image: "/Products/vithnet/how_it_work/step4.svg",
        title: "Custom Threshold Alerts",
        description:
          "Users can set custom limits or warning levels for any parameter.",
      },
    ],
  
    tecnicalimage: "/Products/vithnet/vithnet_device_2.svg",
    testimonials: [
      {
        id: "1",
        name: "Rahul Gupta,",
        title: "Director",
        company: "Aerotech Hydroponics Lab ",
        quote:
          "We customized Vithnet to control misting intervals and root zone temperature for our aeroponics lab. Its precise timer controls and sensor integration made daily maintenance almost effortless. Even complex schedules are now handled automatically with great reliability. This has significantly improved our root oxygenation and reduced plant stress.",
        avatar: "/Products/vithnet/testimonal_profile/image2.png",
      },
      {
        id: "2",
        name: "Anita Deshmukh",
        title: "Owner",
        company: "GreenSprout Hydro Farms",
        quote:
          "Vithnet transformed our hydroponic farm by automating pH balancing, nutrient delivery, and water flow. We no longer rely on manual checks, and our system now runs smoothly around the clock. The dashboard gives us complete visibility into every parameter in real time. Our crop yield improved by over 20% within just two months.",
        avatar: "/Products/vithnet/testimonal_profile/image1.png",
      },
    ],
    // specifications: [
    //   {
    //     name: "Sensors",
    //     value: "pH, EC, Temperature, Humidity, Light",
    //   },
    //   {
    //     name: "Control Parameters",
    //     value: "Nutrient dosing, pH adjustment, Climate control",
    //   },
    //   {
    //     name: "Connectivity",
    //     value: "WiFi, 4G, Ethernet",
    //   },
    //   {
    //     name: "Power Supply",
    //     value: "AC/DC with backup",
    //   },
    // ],
    // gallery: [
    //   "/Products/vithnet/vithnet_device_2.svg",
    //   "/Products/vithnet/3DproductImage/",
    //   "/Products/vithnet/Tecnical/",
    // ],
    applications: [
      {
        industry: "Hydroponics",
        image: "/Products/vithnet/application/Hydrophonics.png",
        description:
          "Vithnet automates nutrient delivery, pH control, and water flow for soilless hydroponic systems. It ensures healthy root growth and maximizes yield with precise environmental monitoring.",
      },
      {
        industry: "Aeroponics",
        image: "/Products/vithnet/application/planet-rescue-101.png",
        description:
          "With custom integration, Vithnet can control misting cycles and manage nutrient spray timing. Ideal for high-efficiency root oxygenation in vertical and indoor aeroponic setups.",
      },
      {
        industry: "Aquaponics",
        image: "/Products/vithnet/application/aquaponics.png",
        description:
          "Vithnet supports plant-side automation by managing pH, water flow, and temperature. It complements fish-plant systems by enabling consistent crop-side conditions.",
      },
      {
        industry: "Container Farming",
        image: "/Products/vithnet/application/Containerforming.png",
        description:
          "Using shipping containers or enclosed units outfitted with full climate and nutrient control for urban or space-efficient agriculture.",
      },
    ],
    FaQ: [
      {
        question: "Can I automate my hydroponics system using VithNet?",
        answer:
          "Yes, VithNet has been deployed across multiple hydroponic farms, helping automate pH, EC, and nutrient cycle monitoring.",
      },
      {
        question: "What exactly does VithNet monitor in a closed farming setup?",
        answer:
          "It tracks temperature, humidity, soil moisture, CO₂ levels, and light intensity for better crop control and yield consistency.",
      },
      {
        question: "Is VithNet only limited to greenhouses or polyhouses?",
        answer:
          "No, it also works in vertical farms, indoor grow rooms, aquaponics, and other controlled environment systems.",
      },
      {
        question: "Does VithNet require internet to function?",
        answer:
          "No. VithNet is equipped with local data logging and offline processing. Even if your internet is down, it continues recording sensor data, and syncs it to the dashboard once the connection is restored.",
      },
      {
        question: "Can I view my farm's data remotely?",
        answer:
          "Yes. VithNet offers both mobile and web dashboards, allowing you to access real-time data, historical trends, and alerts from anywhere. It puts complete environmental control right in your pocket.",
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
    link: "/products/hydroponic-controller",
  };
  