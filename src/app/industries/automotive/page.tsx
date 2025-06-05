"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const automotiveData = {
  title: "Automotive Industry Solutions",
  description: "Empowering the future of mobility with cutting-edge technology solutions. From connected vehicles to smart manufacturing, we deliver innovative solutions that drive efficiency, safety, and sustainability in the automotive sector.",
  carouselItems: [
    {
      image: "/images/industries/automotive/connected-vehicles.jpg",
      caption: "Connected Vehicle Solutions for Enhanced Safety and Efficiency",
      link: "/solutions/connected-vehicles"
    },
    {
      image: "/images/industries/automotive/smart-manufacturing.jpg",
      caption: "Smart Manufacturing Systems for Automotive Production",
      link: "/solutions/smart-manufacturing"
    },
    {
      image: "/images/industries/automotive/quality-control.jpg",
      caption: "Advanced Quality Control and Inspection Systems",
      link: "/solutions/quality-control"
    },
    {
      image: "/images/industries/automotive/supply-chain.jpg",
      caption: "Optimized Supply Chain Management Solutions",
      link: "/solutions/supply-chain"
    }
  ],
  products: [
    {
      name: "Connected Vehicle Platform",
      description: "End-to-end solution for vehicle connectivity, enabling real-time monitoring, diagnostics, and over-the-air updates.",
      image: "/images/products/connected-vehicle.jpg",
      link: "/products/connected-vehicle-platform"
    },
    {
      name: "Smart Manufacturing Suite",
      description: "Comprehensive manufacturing management system with real-time monitoring and predictive maintenance capabilities.",
      image: "/images/products/smart-manufacturing.jpg",
      link: "/products/smart-manufacturing-suite"
    },
    {
      name: "Quality Control System",
      description: "AI-powered quality inspection system for automotive components and assembly processes.",
      image: "/images/products/quality-control.jpg",
      link: "/products/quality-control-system"
    },
    {
      name: "Supply Chain Optimization",
      description: "Intelligent supply chain management solution with predictive analytics and real-time tracking.",
      image: "/images/products/supply-chain.jpg",
      link: "/products/supply-chain-optimization"
    }
  ],
  applications: [
    "Connected Vehicle Systems for Fleet Management",
    "Smart Manufacturing and Assembly Line Automation",
    "Quality Control and Inspection Systems",
    "Supply Chain and Inventory Management",
    "Predictive Maintenance Solutions"
  ],
  solutions: {
    overview: "Our comprehensive suite of automotive solutions addresses the industry's most pressing challenges, from manufacturing efficiency to vehicle connectivity. We combine cutting-edge technology with industry expertise to deliver measurable results.",
    categories: [
      {
        title: "Connected Vehicle Solutions",
        description: "Enable real-time vehicle monitoring, diagnostics, and over-the-air updates for enhanced safety and performance."
      },
      {
        title: "Smart Manufacturing",
        description: "Optimize production processes with AI-powered automation, predictive maintenance, and quality control systems."
      },
      {
        title: "Supply Chain Optimization",
        description: "Streamline operations with intelligent inventory management and real-time tracking solutions."
      }
    ]
  },
  relatedIndustries: [
    "Logistics",
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

export default function AutomotivePage() {
  return <SectorLayout data={automotiveData} />;
} 