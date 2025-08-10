import { MenuSection } from "@/core/entities/navbar";

/**
 * Navigation menu data for the main navbar
 * This data defines the structure and content of the navigation menu
 */
export const navbarData: Record<string, MenuSection> = {
  projects: {
    title: "Solutions",
    description: "Explore our diverse range of successful Products.",
    href: "/Solutions",
    items: [
              // {
      //   title: "RFID-Based Telephone",
      //   description:
      //     "Secure RFID calling system with student-specific digital balance recharge",
      //   href: "/products/rfid-telephone",
      // },
      {
        title: "Biometric System",
        description:
          "Affordable biometric authentication with cloud integration and live access logs",
        href: "/products/biometric-product",
      },
      {
        title: "Hydroponics Controller",
        description:
          "Precision-controlled farming using industrial-grade sensors and real-time dashboards",
        href: "/products/hydroponic-controller",
      },
      {
        title: "Robotics Training Program",
        description:
          "Hands-on robotics education using collaborative industrial robots like IGUS ReBeL",
        href: "/technologies/robotics",
      },
      {
        title: "Industrial Automation Suite",
        description:
          "End-to-end automation using PLCs, SCADA, sensors, and remote dashboards",
        href: "/technologies/iiot",
      },
    ],
  },
  technologies: {
    title: "CoreExpertise",
    description: "Explore our cutting-edge technology solutions.",
    href: "/technologies",
    items: [
      {
        title: "IIOT",
        description: "Industrial IoT",
        href: "/technologies/iiot",
      },
      {
        title: "Robotics",
        description: "Robotic Automation Solutions",
        href: "/technologies/robotics/training",
      },
      {
        title: "Softwares",
        description: "Real time Cloud based Dashboard",
        href: "/technologies/Softwares",
      },
    ],
  },
  industries: {
    title: "Industries We Empower",
    description:
      "Discover our comprehensive solutions tailored for various industries.",
    href: "/industries",
    items: [
      {
        title: "Food Processing",
        description:
          "Automating packaging, sorting, and quality control with robotics and smart sensors to boost hygiene and efficiency.",
        href: "/industries/food-processing",
      },
      {
        title: "Healthcare & Medical",
        description:
          "Secure patient access, sample inspection, and hospital automation powered by biometrics, robotics, and IIoT.",
        href: "/industries/healthcare-medical",
      },
      {
        title: "Education & Research",
        description:
          "Providing institutions with IIoT labs and robotics training kits for real-world learning and innovation.",
        href: "/industries/education-research",
      },
      {
        title: "Farming & Agriculture",
        description:
          "Empowering modern farmers with hydroponics automation, sensor-based monitoring, and precision farming tech.",
        href: "/industries/farming-agriculture",
      },
      {
        title: "Manufacturing",
        description:
          "Streamlining industrial operations through PLC-based automation, SCADA systems, and robotic integration.",
        href: "/industries/manufacturing",
      },
    ],
  },
  company: {
    title: "About Us",
    description: "Learn more about our company and mission.",
    href: "/about",
    items: [
      { title: "Blog", description: "Latest news and insights", href: "/blog" },
      {
        title: "Case Studies",
        description: "Explore our successful projects and implementations",
        href: "/case-studies",
      },
      { title: "Career", description: "Join our team", href: "/careers" },
      { title: "F&Q", description: "Have any Questions", href: "/faq" },
      { title: "Team", description: "Our Team", href: "/about/team" },
    ],
  },
};