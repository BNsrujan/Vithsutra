"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const manufacturingData = {
  title: "Manufacturing Industry Solutions",
  description: "Transforming manufacturing operations with smart automation and Industry 4.0 solutions. We help manufacturers optimize production processes, enhance quality control, and improve operational efficiency through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/manufacturing/production-automation.jpg",
      caption: "Smart Production Automation",
      link: "/solutions/production-automation"
    },
    {
      image: "/images/industries/manufacturing/quality-control.jpg",
      caption: "Advanced Quality Control",
      link: "/solutions/quality-control"
    },
    {
      image: "/images/industries/manufacturing/predictive-maintenance.jpg",
      caption: "Predictive Maintenance",
      link: "/solutions/predictive-maintenance"
    },
    {
      image: "/images/industries/manufacturing/supply-chain.jpg",
      caption: "Supply Chain Optimization",
      link: "/solutions/supply-chain"
    }
  ],
  products: [
    {
      name: "Production Automation System",
      description: "Comprehensive production automation solution with real-time monitoring and control.",
      image: "/images/products/production-automation.jpg",
      link: "/products/production-automation-system"
    },
    {
      name: "Quality Control Platform",
      description: "Advanced quality control and inspection system for manufacturing processes.",
      image: "/images/products/quality-control.jpg",
      link: "/products/quality-control-platform"
    },
    {
      name: "Predictive Maintenance Suite",
      description: "Intelligent predictive maintenance system for enhanced equipment reliability.",
      image: "/images/products/predictive-maintenance.jpg",
      link: "/products/predictive-maintenance-suite"
    },
    {
      name: "Supply Chain Management Platform",
      description: "Integrated supply chain management solution for optimized operations.",
      image: "/images/products/supply-chain.jpg",
      link: "/products/supply-chain-management"
    }
  ],
  applications: [
    "Production Process Automation",
    "Quality Control and Inspection",
    "Predictive Maintenance",
    "Supply Chain Management",
    "Resource Optimization"
  ],
  solutions: {
    overview: "Our manufacturing solutions address the key challenges of modern production, from process automation to quality control. We help manufacturers improve efficiency, reduce costs, and enhance product quality through innovative technology.",
    categories: [
      {
        title: "Production Automation",
        description: "Smart production automation solutions with real-time monitoring and process optimization."
      },
      {
        title: "Quality Management",
        description: "Advanced quality control and inspection systems for manufacturing processes."
      },
      {
        title: "Maintenance Optimization",
        description: "Intelligent predictive maintenance solutions for enhanced equipment reliability and uptime."
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
    "Retail",
    "Education"
  ]
};

export default function Manufacturing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Manufacturing Solutions</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          We streamline industrial operations through PLC-based automation, SCADA systems, and robotic integration.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Solutions</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>PLC-based automation</li>
          <li>SCADA system integration</li>
          <li>Robotic manufacturing solutions</li>
          <li>Production line optimization</li>
          <li>Quality control automation</li>
        </ul>
      </div>
    </div>
  )
} 