import React from "react";
import SectorLayout  from "@/PagesForApp/IndustrialSectorTemplate/IndustryalSectorLayout";

const foodProcessingData = {
  title: "Food Processing Industry Solutions",
  description:
    "We provide comprehensive automation solutions for food processing, including packaging, sorting, and quality control systems. Our expertise helps boost hygiene, efficiency, and product quality in food manufacturing.",
  carouselItems: [
    {
      image: "/robotics/Smart_Manufacturing.png",
      caption: "Automated Packaging Systems",
      link: "#"
    },
    {
      image: "/robotics/Quality_Control.png",
      caption: "Smart Sorting and Grading",
      link: "#"
    },
    {
      image: "/robotics/Energy_Management.png",
      caption: "Quality Control Automation",
      link: "#"
    }
  ],
  products: [
    {
      id: 1,
      name: "Automated Packaging System",
      description: "High-speed, hygienic packaging for food products.",
      image: "/robotics/Smart_Manufacturing.png",
      link: "#"
    },
    {
      id: 2,
      name: "Smart Sorting Machine",
      description: "AI-powered sorting and grading for quality assurance.",
      image: "/robotics/Quality_Control.png",
      link: "#"
    },
    {
      id: 3,
      name: "Quality Control Platform",
      description: "Automated inspection and reporting for food safety.",
      image: "/robotics/Energy_Management.png",
      link: "#"
    }
  ],
  applications: [
    {
      title: "Automated Packaging",
      description: "Efficient, hygienic, and high-speed packaging lines.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Sorting & Grading",
      description: "AI-driven sorting for consistent product quality.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Quality Control",
      description: "Automated inspection for food safety and compliance.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  solutions: [
    {
      title: "Hygiene Monitoring",
      description: "Real-time monitoring to ensure food safety standards.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Production Efficiency",
      description: "Optimize throughput and reduce waste in production.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Traceability",
      description: "Track products from raw material to finished goods.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  relatedIndustries: [
    {
      title: "Healthcare & Medical",
      description: "Automation and quality control for medical manufacturing.",
      href: "/industries/healthcare-medical"
    },
    {
      title: "Manufacturing",
      description: "Smart automation for industrial manufacturing.",
      href: "/industries/manufacturing"
    }
  ]
};

export default function FoodProcessing() {
  return <SectorLayout data={foodProcessingData} />;
} 