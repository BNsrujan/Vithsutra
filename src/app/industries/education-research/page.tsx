import React from "react";
import { SectorLayout } from "@/components/sectors/SectorLayout";

const educationResearchData = {
  title: "Education & Research Solutions",
  description:
    "We provide educational institutions with cutting-edge IIoT labs and robotics training kits for hands-on learning and innovation. Our solutions empower students and researchers with real-world technology experience.",
  carouselItems: [
    {
      image: "/robotics/Smart_Manufacturing.png",
      caption: "IIoT Laboratory Setup",
      link: "#"
    },
    {
      image: "/robotics/Quality_Control.png",
      caption: "Robotics Training Programs",
      link: "#"
    },
    {
      image: "/robotics/Energy_Management.png",
      caption: "Research Equipment Automation",
      link: "#"
    }
  ],
  products: [
    {
      id: 1,
      name: "IIoT Lab Kit",
      description: "Comprehensive IIoT laboratory setup for educational institutions.",
      image: "/robotics/Smart_Manufacturing.png",
      link: "#"
    },
    {
      id: 2,
      name: "Robotics Training Program",
      description: "Hands-on robotics training using collaborative industrial robots.",
      image: "/robotics/Quality_Control.png",
      link: "#"
    },
    {
      id: 3,
      name: "Research Automation Platform",
      description: "Automated research equipment for advanced studies.",
      image: "/robotics/Energy_Management.png",
      link: "#"
    }
  ],
  applications: [
    {
      title: "IIoT Laboratory",
      description: "State-of-the-art IIoT lab setup for hands-on learning.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Robotics Training",
      description: "Hands-on robotics training using collaborative industrial robots.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Research Automation",
      description: "Automated research equipment for advanced studies.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  solutions: [
    {
      title: "Educational Robotics Kits",
      description: "Comprehensive robotics kits for educational institutions.",
      icon: "/robotics/Smart_Manufacturing.png"
    },
    {
      title: "Smart Classroom Solutions",
      description: "Innovative solutions for modern classroom environments.",
      icon: "/robotics/Quality_Control.png"
    },
    {
      title: "Research Support",
      description: "Advanced research support through automation and IIoT.",
      icon: "/robotics/Energy_Management.png"
    }
  ],
  relatedIndustries: [
    {
      title: "Healthcare & Medical",
      description: "Automation and quality control for medical manufacturing.",
      href: "/industries/healthcare-medical"
    },
    {
      title: "Manufacturing",
      description: "Smart automation for industrial manufacturing.",
      href: "/industries/manufacturing"
    }
  ]
};

export default function EducationResearch() {
  return <SectorLayout data={educationResearchData} />;
} 