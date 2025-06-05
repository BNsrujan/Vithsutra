"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const newEnergyData = {
  title: "New Energy Industry Solutions",
  description: "Empowering the renewable energy sector with smart automation and intelligent monitoring solutions. We help companies optimize energy production, enhance grid management, and improve operational efficiency through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/new-energy/solar-automation.jpg",
      caption: "Smart Solar Energy Solutions",
      link: "/solutions/solar-automation"
    },
    {
      image: "/images/industries/new-energy/wind-power.jpg",
      caption: "Wind Power Management Systems",
      link: "/solutions/wind-power"
    },
    {
      image: "/images/industries/new-energy/grid-management.jpg",
      caption: "Intelligent Grid Management",
      link: "/solutions/grid-management"
    },
    {
      image: "/images/industries/new-energy/energy-storage.jpg",
      caption: "Energy Storage Solutions",
      link: "/solutions/energy-storage"
    }
  ],
  products: [
    {
      name: "Solar Energy Management System",
      description: "Comprehensive solar power management solution with real-time monitoring and optimization.",
      image: "/images/products/solar-management.jpg",
      link: "/products/solar-energy-management"
    },
    {
      name: "Wind Power Control Platform",
      description: "Advanced wind turbine control and monitoring system for optimal energy production.",
      image: "/images/products/wind-control.jpg",
      link: "/products/wind-power-control"
    },
    {
      name: "Smart Grid Management Suite",
      description: "Intelligent grid management and distribution system for enhanced efficiency.",
      image: "/images/products/grid-management.jpg",
      link: "/products/smart-grid-management"
    },
    {
      name: "Energy Storage Platform",
      description: "Integrated energy storage and management solution for renewable energy systems.",
      image: "/images/products/energy-storage.jpg",
      link: "/products/energy-storage-platform"
    }
  ],
  applications: [
    "Solar Power Generation and Management",
    "Wind Energy Control and Optimization",
    "Smart Grid Management and Distribution",
    "Energy Storage and Management",
    "Renewable Energy Integration"
  ],
  solutions: {
    overview: "Our new energy solutions address the unique challenges of renewable energy production and distribution. We help companies maximize energy output, improve grid stability, and enhance operational efficiency through advanced technology.",
    categories: [
      {
        title: "Renewable Energy Management",
        description: "Smart solutions for solar and wind power generation with real-time monitoring and optimization."
      },
      {
        title: "Grid Management",
        description: "Intelligent grid management and distribution systems for enhanced stability and efficiency."
      },
      {
        title: "Energy Storage",
        description: "Advanced energy storage and management solutions for renewable energy systems."
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
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education"
  ]
};

export default function NewEnergyPage() {
  return <SectorLayout data={newEnergyData} />;
} 