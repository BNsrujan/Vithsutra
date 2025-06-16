import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const farmingAgricultureData = {
  title: "Farming & Agriculture Solutions",
  description:
    "We empower modern farmers with advanced hydroponics automation, sensor-based monitoring, and precision farming technology. Our solutions enhance crop management, efficiency, and sustainability in agriculture.",
  carouselItems: [
    {
      image: "/robotics/Smart_Manufacturing.png",
      caption: "Hydroponics Automation Systems",
      link: "#"
    },
    {
      image: "/robotics/Quality_Control.png",
      caption: "Sensor-Based Crop Monitoring",
      link: "#"
    },
    {
      image: "/robotics/Energy_Management.png",
      caption: "Precision Farming Technology",
      link: "#"
    }
  ],
  products: [
    {
      id: 1,
      name: "Hydroponics Controller",
      description: "Precision-controlled farming using industrial-grade sensors.",
      image: "/robotics/Smart_Manufacturing.png",
      link: "#"
    },
    {
      id: 2,
      name: "Crop Monitoring System",
      description: "Real-time monitoring and analytics for crop management.",
      image: "/robotics/Quality_Control.png",
      link: "#"
    },
    {
      id: 3,
      name: "Precision Farming Platform",
      description: "Advanced farming technology for optimal crop yield.",
      image: "/robotics/Energy_Management.png",
      link: "#"
    }
  ],
  applications: [
    {
      title: "Hydroponics Automation",
      description: "Automated nutrient delivery and climate control for hydroponics.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Crop Monitoring",
      description: "Sensor-based monitoring for optimal crop management.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Precision Farming",
      description: "Advanced farming technology for optimal crop yield.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  solutions: [
    {
      title: "Automated Irrigation",
      description: "Smart irrigation systems for efficient water management.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Smart Greenhouse",
      description: "Automated greenhouse solutions for controlled farming.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Data-Driven Farming",
      description: "Leverage data analytics for improved farming decisions.",
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

export default function FarmingAgriculture() {
  return <SectorLayout data={farmingAgricultureData} />;
} 