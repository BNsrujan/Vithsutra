"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const healthcareData = {
  title: "Healthcare Industry Solutions",
  description: "Transforming healthcare delivery with smart automation and intelligent monitoring solutions. We help healthcare providers enhance patient care, optimize operations, and improve resource management through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/healthcare/patient-monitoring.jpg",
      caption: "Smart Patient Monitoring Systems",
      link: "/solutions/patient-monitoring"
    },
    {
      image: "/images/industries/healthcare/medical-devices.jpg",
      caption: "Medical Device Management",
      link: "/solutions/medical-devices"
    },
    {
      image: "/images/industries/healthcare/healthcare-automation.jpg",
      caption: "Healthcare Process Automation",
      link: "/solutions/healthcare-automation"
    },
    {
      image: "/images/industries/healthcare/telemedicine.jpg",
      caption: "Telemedicine Solutions",
      link: "/solutions/telemedicine"
    }
  ],
  products: [
    {
      name: "Patient Monitoring System",
      description: "Advanced patient monitoring solution with real-time data collection and analysis.",
      image: "/images/products/patient-monitoring.jpg",
      link: "/products/patient-monitoring-system"
    },
    {
      name: "Medical Device Management Platform",
      description: "Comprehensive medical device tracking and management system for healthcare facilities.",
      image: "/images/products/medical-devices.jpg",
      link: "/products/medical-device-management"
    },
    {
      name: "Healthcare Automation Suite",
      description: "Intelligent healthcare process automation system for enhanced efficiency.",
      image: "/images/products/healthcare-automation.jpg",
      link: "/products/healthcare-automation-suite"
    },
    {
      name: "Telemedicine Platform",
      description: "Integrated telemedicine solution for remote patient care and consultation.",
      image: "/images/products/telemedicine.jpg",
      link: "/products/telemedicine-platform"
    }
  ],
  applications: [
    "Patient Monitoring and Care",
    "Medical Device Management",
    "Healthcare Process Automation",
    "Telemedicine and Remote Care",
    "Resource Optimization"
  ],
  solutions: {
    overview: "Our healthcare solutions address the unique challenges of modern healthcare delivery, from patient monitoring to resource management. We help healthcare providers improve patient outcomes, enhance operational efficiency, and reduce costs through innovative technology.",
    categories: [
      {
        title: "Patient Care",
        description: "Smart patient monitoring and care solutions with real-time data analysis and alerts."
      },
      {
        title: "Device Management",
        description: "Comprehensive medical device tracking and management systems for healthcare facilities."
      },
      {
        title: "Process Automation",
        description: "Intelligent healthcare process automation solutions for enhanced efficiency and quality of care."
      }
    ]
  },
  relatedIndustries: [
    "Automotive",
    "Logistics",
    "FMOG",
    "Chemical & Pharma",
    "Plastics & Polymers",
    "Metal & Machining",
    "New Energy",
    "Retail",
    "Manufacturing",
    "Education"
  ]
};

export default function HealthcarePage() {
  return <SectorLayout data={healthcareData} />;
} 