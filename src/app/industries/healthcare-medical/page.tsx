import React from "react";
import SectorLayout  from "@/PagesForApp/IndustrialSectorTemplate/IndustryalSectorLayout";

const healthcareMedicalData = {
  title: "Healthcare & Medical Solutions",
  description:
    "Our healthcare solutions combine biometrics, robotics, and IIoT to enhance patient care and hospital operations. We provide secure patient access, automated sample inspection, and comprehensive hospital automation systems.",
  carouselItems: [
    {
      image: "/robotics/Smart_Manufacturing.png",
      caption: "Secure Patient Access Control",
      link: "#"
    },
    {
      image: "/robotics/Quality_Control.png",
      caption: "Automated Sample Inspection",
      link: "#"
    },
    {
      image: "/robotics/Energy_Management.png",
      caption: "Hospital Automation Systems",
      link: "#"
    }
  ],
  products: [
    {
      id: 1,
      name: "Patient Access System",
      description: "Secure, biometric-based access control for patient areas.",
      image: "/robotics/Smart_Manufacturing.png",
      link: "#"
    },
    {
      id: 2,
      name: "Sample Inspection Platform",
      description: "Automated inspection and reporting for medical samples.",
      image: "/robotics/Quality_Control.png",
      link: "#"
    },
    {
      id: 3,
      name: "Hospital Automation Suite",
      description: "Comprehensive automation for hospital operations.",
      image: "/robotics/Energy_Management.png",
      link: "#"
    }
  ],
  applications: [
    {
      title: "Patient Access Control",
      description: "Secure, biometric-based access for patient areas.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Sample Inspection",
      description: "Automated inspection for medical samples.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Hospital Automation",
      description: "Comprehensive automation for hospital operations.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  solutions: [
    {
      title: "Medical Equipment Monitoring",
      description: "Real-time monitoring and maintenance for medical equipment.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Patient Care Optimization",
      description: "Enhance patient care through smart automation.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Data Security",
      description: "Secure handling of patient and medical data.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  relatedIndustries: [
    {
      title: "Food Processing",
      description: "Automation and quality control for food manufacturing.",
      href: "/industries/food-processing"
    },
    {
      title: "Manufacturing",
      description: "Smart automation for industrial manufacturing.",
      href: "/industries/manufacturing"
    }
  ]
};

export default function HealthcareMedical() {
  return <SectorLayout data={healthcareMedicalData} />;
} 