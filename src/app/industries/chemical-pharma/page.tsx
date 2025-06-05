"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const chemicalPharmaData = {
  title: "Chemical & Pharmaceutical Industry Solutions",
  description: "Empowering chemical and pharmaceutical companies with advanced automation and compliance solutions. We help organizations maintain strict quality standards, optimize production processes, and ensure regulatory compliance through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/chemical-pharma/lab-automation.jpg",
      caption: "Laboratory Automation and Analysis",
      link: "/solutions/lab-automation"
    },
    {
      image: "/images/industries/chemical-pharma/process-control.jpg",
      caption: "Advanced Process Control Systems",
      link: "/solutions/process-control"
    },
    {
      image: "/images/industries/chemical-pharma/quality-assurance.jpg",
      caption: "Quality Assurance and Compliance",
      link: "/solutions/quality-assurance"
    },
    {
      image: "/images/industries/chemical-pharma/research-development.jpg",
      caption: "Research & Development Solutions",
      link: "/solutions/research-development"
    }
  ],
  products: [
    {
      name: "Laboratory Automation System",
      description: "Comprehensive laboratory automation solution with advanced analytics and quality control.",
      image: "/images/products/lab-automation.jpg",
      link: "/products/laboratory-automation-system"
    },
    {
      name: "Process Control Platform",
      description: "Advanced process control and monitoring system for chemical and pharmaceutical manufacturing.",
      image: "/images/products/process-control.jpg",
      link: "/products/process-control-platform"
    },
    {
      name: "Quality Management Suite",
      description: "End-to-end quality management and compliance solution for regulated industries.",
      image: "/images/products/quality-management.jpg",
      link: "/products/quality-management-suite"
    },
    {
      name: "R&D Management System",
      description: "Integrated research and development management platform with data analytics and collaboration tools.",
      image: "/images/products/research-development.jpg",
      link: "/products/rd-management-system"
    }
  ],
  applications: [
    "Laboratory Automation and Analysis",
    "Process Control and Optimization",
    "Quality Assurance and Compliance",
    "Research and Development Management",
    "Supply Chain and Inventory Control"
  ],
  solutions: {
    overview: "Our chemical and pharmaceutical solutions address the unique challenges of regulated industries, from laboratory automation to quality assurance. We help companies maintain compliance, improve efficiency, and accelerate innovation through advanced technology.",
    categories: [
      {
        title: "Laboratory Automation",
        description: "Comprehensive laboratory automation solutions with advanced analytics and quality control systems."
      },
      {
        title: "Process Control",
        description: "Advanced process control and monitoring systems for optimized manufacturing operations."
      },
      {
        title: "Quality Assurance",
        description: "End-to-end quality management and compliance solutions for regulated industries."
      }
    ]
  },
  relatedIndustries: [
    "Automotive",
    "Logistics",
    "FMOG",
    "Plastics & Polymers",
    "Metal & Machining",
    "New Energy",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education"
  ]
};

export default function ChemicalPharmaPage() {
  return <SectorLayout data={chemicalPharmaData} />;
} 