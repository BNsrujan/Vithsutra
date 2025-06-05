"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const logisticsData = {
  title: "Logistics Industry Solutions",
  description: "Transforming logistics operations with intelligent automation and real-time tracking solutions. We help logistics companies optimize their supply chain, enhance fleet management, and improve delivery efficiency through cutting-edge technology.",
  carouselItems: [
    {
      image: "/images/industries/logistics/fleet-management.jpg",
      caption: "Advanced Fleet Management and Tracking Systems",
      link: "/solutions/fleet-management"
    },
    {
      image: "/images/industries/logistics/warehouse-automation.jpg",
      caption: "Smart Warehouse Automation Solutions",
      link: "/solutions/warehouse-automation"
    },
    {
      image: "/images/industries/logistics/route-optimization.jpg",
      caption: "AI-Powered Route Optimization",
      link: "/solutions/route-optimization"
    },
    {
      image: "/images/industries/logistics/supply-chain.jpg",
      caption: "End-to-End Supply Chain Visibility",
      link: "/solutions/supply-chain-visibility"
    }
  ],
  products: [
    {
      name: "Fleet Management System",
      description: "Comprehensive fleet tracking and management solution with real-time monitoring and predictive maintenance.",
      image: "/images/products/fleet-management.jpg",
      link: "/products/fleet-management-system"
    },
    {
      name: "Warehouse Automation Suite",
      description: "Integrated warehouse management system with automated inventory tracking and order fulfillment.",
      image: "/images/products/warehouse-automation.jpg",
      link: "/products/warehouse-automation-suite"
    },
    {
      name: "Route Optimization Platform",
      description: "AI-driven route planning and optimization for efficient delivery operations.",
      image: "/images/products/route-optimization.jpg",
      link: "/products/route-optimization-platform"
    },
    {
      name: "Supply Chain Visibility",
      description: "End-to-end supply chain tracking and analytics platform for enhanced operational visibility.",
      image: "/images/products/supply-chain.jpg",
      link: "/products/supply-chain-visibility"
    }
  ],
  applications: [
    "Real-time Fleet Tracking and Management",
    "Automated Warehouse Operations",
    "Intelligent Route Planning and Optimization",
    "Supply Chain Visibility and Analytics",
    "Last-mile Delivery Solutions"
  ],
  solutions: {
    overview: "Our logistics solutions address the complex challenges of modern supply chain management, from warehouse automation to fleet optimization. We help companies reduce costs, improve efficiency, and enhance customer satisfaction through innovative technology.",
    categories: [
      {
        title: "Fleet Management",
        description: "Comprehensive fleet tracking and management solutions with real-time monitoring and predictive maintenance."
      },
      {
        title: "Warehouse Automation",
        description: "Smart warehouse solutions with automated inventory management and order fulfillment systems."
      },
      {
        title: "Route Optimization",
        description: "AI-powered route planning and optimization for efficient delivery operations and reduced fuel costs."
      }
    ]
  },
  relatedIndustries: [
    "Automotive",
    "FMOG",
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

export default function LogisticsPage() {
  return <SectorLayout data={logisticsData} />;
} 