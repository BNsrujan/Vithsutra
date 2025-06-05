"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const retailData = {
  title: "Retail Industry Solutions",
  description: "Revolutionizing retail operations with smart automation and customer experience solutions. We help retailers optimize inventory management, enhance customer engagement, and improve operational efficiency through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/retail/inventory-management.jpg",
      caption: "Smart Inventory Management",
      link: "/solutions/inventory-management"
    },
    {
      image: "/images/industries/retail/customer-experience.jpg",
      caption: "Enhanced Customer Experience",
      link: "/solutions/customer-experience"
    },
    {
      image: "/images/industries/retail/retail-automation.jpg",
      caption: "Retail Process Automation",
      link: "/solutions/retail-automation"
    },
    {
      image: "/images/industries/retail/analytics.jpg",
      caption: "Retail Analytics Solutions",
      link: "/solutions/retail-analytics"
    }
  ],
  products: [
    {
      name: "Smart Inventory Management System",
      description: "Advanced inventory tracking and management solution with real-time analytics.",
      image: "/images/products/inventory-management.jpg",
      link: "/products/smart-inventory-management"
    },
    {
      name: "Customer Experience Platform",
      description: "Comprehensive customer engagement and experience management system.",
      image: "/images/products/customer-experience.jpg",
      link: "/products/customer-experience-platform"
    },
    {
      name: "Retail Automation Suite",
      description: "Intelligent retail process automation system for enhanced efficiency.",
      image: "/images/products/retail-automation.jpg",
      link: "/products/retail-automation-suite"
    },
    {
      name: "Retail Analytics Platform",
      description: "Integrated retail analytics solution for data-driven decision making.",
      image: "/images/products/retail-analytics.jpg",
      link: "/products/retail-analytics-platform"
    }
  ],
  applications: [
    "Inventory Management and Optimization",
    "Customer Experience Enhancement",
    "Retail Process Automation",
    "Analytics and Business Intelligence",
    "Supply Chain Optimization"
  ],
  solutions: {
    overview: "Our retail solutions address the unique challenges of modern retail operations, from inventory management to customer experience. We help retailers improve efficiency, enhance customer satisfaction, and drive growth through innovative technology.",
    categories: [
      {
        title: "Inventory Management",
        description: "Smart inventory tracking and management solutions with real-time analytics and optimization."
      },
      {
        title: "Customer Experience",
        description: "Comprehensive customer engagement and experience management systems for enhanced satisfaction."
      },
      {
        title: "Process Automation",
        description: "Intelligent retail process automation solutions for improved efficiency and cost reduction."
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
    "Healthcare",
    "Manufacturing",
    "Education"
  ]
};

export default function RetailPage() {
  return <SectorLayout data={retailData} />;
} 