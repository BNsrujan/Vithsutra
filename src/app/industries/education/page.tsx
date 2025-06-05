"use client";

import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const educationData = {
  title: "Education Industry Solutions",
  description: "Empowering educational institutions with smart learning and management solutions. We help schools and universities enhance learning experiences, optimize operations, and improve resource management through innovative technology.",
  carouselItems: [
    {
      image: "/images/industries/education/smart-learning.jpg",
      caption: "Smart Learning Solutions",
      link: "/solutions/smart-learning"
    },
    {
      image: "/images/industries/education/campus-management.jpg",
      caption: "Campus Management Systems",
      link: "/solutions/campus-management"
    },
    {
      image: "/images/industries/education/student-analytics.jpg",
      caption: "Student Analytics Platform",
      link: "/solutions/student-analytics"
    },
    {
      image: "/images/industries/education/remote-learning.jpg",
      caption: "Remote Learning Solutions",
      link: "/solutions/remote-learning"
    }
  ],
  products: [
    {
      name: "Smart Learning Platform",
      description: "Comprehensive learning management system with interactive features and analytics.",
      image: "/images/products/smart-learning.jpg",
      link: "/products/smart-learning-platform"
    },
    {
      name: "Campus Management System",
      description: "Advanced campus management solution for educational institutions.",
      image: "/images/products/campus-management.jpg",
      link: "/products/campus-management-system"
    },
    {
      name: "Student Analytics Suite",
      description: "Intelligent student performance analytics and tracking system.",
      image: "/images/products/student-analytics.jpg",
      link: "/products/student-analytics-suite"
    },
    {
      name: "Remote Learning Platform",
      description: "Integrated remote learning solution for virtual education delivery.",
      image: "/images/products/remote-learning.jpg",
      link: "/products/remote-learning-platform"
    }
  ],
  applications: [
    "Smart Learning Management",
    "Campus Operations Management",
    "Student Performance Analytics",
    "Remote Learning and Collaboration",
    "Resource Optimization"
  ],
  solutions: {
    overview: "Our education solutions address the unique challenges of modern education, from learning management to campus operations. We help educational institutions improve learning outcomes, enhance operational efficiency, and optimize resource utilization through innovative technology.",
    categories: [
      {
        title: "Learning Management",
        description: "Smart learning management solutions with interactive features and performance analytics."
      },
      {
        title: "Campus Operations",
        description: "Comprehensive campus management systems for enhanced operational efficiency."
      },
      {
        title: "Student Analytics",
        description: "Intelligent student performance tracking and analytics solutions for improved outcomes."
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
    "Manufacturing"
  ]
};

export default function EducationPage() {
  return <SectorLayout data={educationData} />;
} 