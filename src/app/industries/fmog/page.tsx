"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const fmogData = {
  title: "FMOG Industry Solutions",
  description: "Revolutionizing Fast Moving Consumer Goods operations with smart automation and data-driven insights. We help FMOG companies optimize production, streamline distribution, and enhance retail execution through innovative technology solutions.",
  carouselItems: [
    {
      image: "/images/industries/fmog/production-automation.jpg",
      caption: "Smart Production and Packaging Automation",
      link: "/solutions/production-automation"
    },
    {
      image: "/images/industries/fmog/inventory-management.jpg",
      caption: "Intelligent Inventory Management Systems",
      link: "/solutions/inventory-management"
    },
    {
      image: "/images/industries/fmog/quality-control.jpg",
      caption: "Advanced Quality Control Solutions",
      link: "/solutions/quality-control"
    },
    {
      image: "/images/industries/fmog/retail-analytics.jpg",
      caption: "Retail Analytics and Execution",
      link: "/solutions/retail-analytics"
    }
  ],
  products: [
    {
      name: "Production Automation Suite",
      description: "End-to-end production and packaging automation solution for enhanced efficiency and quality control.",
      image: "/images/products/production-automation.jpg",
      link: "/products/production-automation-suite"
    },
    {
      name: "Smart Inventory Management",
      description: "AI-powered inventory management system with real-time tracking and predictive analytics.",
      image: "/images/products/inventory-management.jpg",
      link: "/products/smart-inventory-management"
    },
    {
      name: "Quality Control Platform",
      description: "Advanced quality control and inspection system for FMOG products and packaging.",
      image: "/images/products/quality-control.jpg",
      link: "/products/quality-control-platform"
    },
    {
      name: "Retail Analytics Suite",
      description: "Comprehensive retail analytics and execution platform for improved market performance.",
      image: "/images/products/retail-analytics.jpg",
      link: "/products/retail-analytics-suite"
    }
  ],
  applications: [
    "Automated Production and Packaging Lines",
    "Real-time Inventory Tracking and Management",
    "Quality Control and Inspection Systems",
    "Retail Execution and Analytics",
    "Supply Chain Optimization"
  ],
  solutions: {
    overview: "Our FMOG solutions address the unique challenges of fast-moving consumer goods, from production automation to retail execution. We help companies improve efficiency, reduce waste, and enhance product quality through innovative technology.",
    categories: [
      {
        title: "Production Automation",
        description: "Smart production and packaging solutions with automated quality control and efficiency optimization."
      },
      {
        title: "Inventory Management",
        description: "Intelligent inventory tracking and management systems with predictive analytics and real-time visibility."
      },
      {
        title: "Retail Execution",
        description: "Comprehensive retail analytics and execution platform for improved market performance and customer satisfaction."
      }
    ]
  },
  relatedIndustries: [
    "Automotive",
    "Logistics",
    "Chemical & Pharma",
    "Plastics & Polymers",
    "Metal & Machining",
    "New Energy",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education"
  ]
};

export default function FMOGPage() {
  return <SectorLayout data={fmogData} />;
} 