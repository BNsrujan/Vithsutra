"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const plasticsPolymersData = {
  title: "Plastics & Polymers Industry Solutions",
  description: "Transforming plastics and polymers manufacturing with smart automation and quality control solutions. We help companies optimize production processes, ensure product quality, and reduce waste through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/plastics-polymers/injection-molding.jpg",
      caption: "Smart Injection Molding Solutions",
      link: "/solutions/injection-molding"
    },
    {
      image: "/images/industries/plastics-polymers/quality-control.jpg",
      caption: "Advanced Quality Control Systems",
      link: "/solutions/quality-control"
    },
    {
      image: "/images/industries/plastics-polymers/process-optimization.jpg",
      caption: "Process Optimization and Monitoring",
      link: "/solutions/process-optimization"
    },
    {
      image: "/images/industries/plastics-polymers/recycling.jpg",
      caption: "Recycling and Sustainability Solutions",
      link: "/solutions/recycling"
    }
  ],
  products: [
    {
      name: "Smart Injection Molding System",
      description: "Intelligent injection molding solution with real-time monitoring and quality control.",
      image: "/images/products/injection-molding.jpg",
      link: "/products/smart-injection-molding"
    },
    {
      name: "Quality Control Platform",
      description: "Advanced quality control and inspection system for plastic products and components.",
      image: "/images/products/quality-control.jpg",
      link: "/products/quality-control-platform"
    },
    {
      name: "Process Optimization Suite",
      description: "Comprehensive process optimization and monitoring system for enhanced efficiency.",
      image: "/images/products/process-optimization.jpg",
      link: "/products/process-optimization-suite"
    },
    {
      name: "Recycling Management System",
      description: "Integrated recycling and sustainability management platform for plastic waste reduction.",
      image: "/images/products/recycling.jpg",
      link: "/products/recycling-management-system"
    }
  ],
  applications: [
    "Smart Injection Molding and Extrusion",
    "Quality Control and Inspection",
    "Process Optimization and Monitoring",
    "Recycling and Waste Management",
    "Supply Chain Optimization"
  ],
  solutions: {
    overview: "Our plastics and polymers solutions address the industry's key challenges, from production efficiency to sustainability. We help companies improve quality, reduce costs, and enhance environmental performance through innovative technology.",
    categories: [
      {
        title: "Production Automation",
        description: "Smart injection molding and extrusion solutions with real-time monitoring and quality control."
      },
      {
        title: "Quality Management",
        description: "Advanced quality control and inspection systems for plastic products and components."
      },
      {
        title: "Sustainability",
        description: "Comprehensive recycling and waste management solutions for improved environmental performance."
      }
    ]
  },
  relatedIndustries: [
    "Automotive",
    "Logistics",
    "FMOG",
    "Chemical & Pharma",
    "Metal & Machining",
    "New Energy",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education"
  ]
};

export default function PlasticsPolymersPage() {
  return <SectorLayout data={plasticsPolymersData} />;
} 