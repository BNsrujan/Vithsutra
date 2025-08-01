import { Product } from "@/core/entities/product";

export const rfidProduct: Product = {
    id: "rfid-telephone",
    name: "RFID-Based Telephone",
    tagline: "RFID-Based Telephone",
    description:
    "This RFID-based telephone is made for hostels, schools, and campuses. It replaces coin phones with smart, secure RFID cards. Each call is tracked, timed, and easy to manage.",
    mainImage: "/Products/rfid-tel/tec_telephone.svg",
    productSectionImage: "/Products/rfid-tel/telephone[1].png",
    tecnicalimage: "/Products/rfid-tel/telephone[1].png",
   features: [
      {
        image: "/Products/rfid-tel/feature/image 37.svg",
        title: "RFID Security",
        description: "Secure access with individual RFID card authentication.",
      },
      {
        image: "/Products/rfid-tel/feature/image 38.svg",
        title: "Cloud Dashboard",
        description:
          "Live data monitoring with admin-level access from anywhere.",
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
      {
        image: "/public/industry/fmog.avif",
        industry: "High-Security Zones (Defence, Government, R&D Labs)",
        description:
          "Used in Indian Army Bases, DRDO Labs, and research facilities to allow only authorized personnel to initiate secure calls. RFID authentication ensures identity verification and prevents unauthorized communication.",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Ragavendra  Shetty",
        title: "Hostel Manager",
        company: "Ski-line Boys Hostel, Mysore",
        quote:
          "Managing communication in a boys' hostel with over 300 students was always a challenge especially when students' personalphones were often misplaced or misused. Since installing these RFID-based telephones, daily communication has become streamlined and secure. Each student now has verified access, and calls can be tracked for accountability. The product has drastically reduced misuse and brought a sense of discipline in the hostel. It's become an essential part of our daily routine.",
        avatar: "/Products/rfid-tel/testimonial_profilephoto/image_1.png",
      },
      {
        id: 2,
        name: "Surjeet Yadav",
        title: "Site Operations Head",
        company: "Mahadev Mining Corporation, Jharkhand",
        quote:
          "Our mining site is located deep in a region where mobile networks from different SIM providers constantly fail. Communication was a huge bottleneck affecting both safety and coordination. After implementing these telephones with wide coverage antennas,  we've finally found a reliable solution. Now, our teams stay connected across the entire site, without worrying about poor signal  strength. It's a game-changer for the mining industry.",
        avatar: "/Products/rfid-tel/testimonial_profilephoto/images_2.png",
      },
    ],
    // specifications: [
    //   {
    //     name: "RFID Technology",
    //     value: "13.56 MHz ISO 14443",
    //   },
    //   {
    //     name: "Call Duration Limit",
    //     value: "Configurable per student",
    //   },
    //   {
    //     name: "Balance Alert",
    //     value: "Low balance notifications",
    //   },
    //   {
    //     name: "Network Support",
    //     value: "PSTN, VoIP",
    //   },
    // ],
  

    // gallery: [
    //   "/Products/rfid-tel/telephone[1].png",
    //   "/Products/rfid-tel/id_card[1].png",
    //   "/Products/rfid-tel/tec_telephone.png",
    // ],
    FaQ: [
      {
        qution: "What is an RFID-based telephone, and how does it work?",
        answer:
          "It allows calls only after scanning an authorized RFID card, ensuring secure and trackable communication.",
      },
      {
        qution: "Where is this system typically used?",
        answer:
          "Commonly deployed in hostels, schools, factories, and offices to allow monitored communication for students, workers, or guests.",
      },
      {
        qution: "Can calling time be limited or scheduled for each user?",
        answer:
          "Yes, administrators can configure time limits, allowed hours, and even daily call quotas per RFID card.",
      },
      {
        qution: "Is call history or usage tracked for each card?",
        answer:
          "Absolutely — every call made through an RFID card is logged with time, duration, and optionally the phone number dialed.",
      },
      {
        qution: "Can this telephone be connected to normal phone lines or VoIP?",
        answer:
          "Yes, the system can be configured to work with standard landlines or VoIP services based on deployment needs.",
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
    link: "/products/rfid-telephone",
  };