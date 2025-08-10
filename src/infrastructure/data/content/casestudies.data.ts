/**
 * Case studies data
 * This data defines the case studies showcasing successful implementations
 */
export const caseStudiesData = [
  {
    id: "1",
    title: "Smart Factory Transformation",
    industry: "Manufacturing",
    client: "TechManufacture Inc.",
    logo: "/images/clients/tech-manufacture.png",
    problem: "High production downtime and inefficient resource utilization",
    solution: "Implemented IIoT sensors and AI-powered predictive maintenance system",
    results: [
      { metric: "Downtime Reduction", value: "35%" },
      { metric: "Energy Savings", value: "28%" },
      { metric: "Production Efficiency", value: "42%" }
    ],
    fullStory: "TechManufacture Inc. was facing significant challenges with their production line efficiency and maintenance costs. By implementing our IIoT solution, they achieved remarkable improvements in operational efficiency and cost savings. The AI-powered predictive maintenance system helped prevent unexpected breakdowns, while real-time monitoring enabled better resource allocation.",
    image: "/images/case-studies/manufacturing.jpg",
    publishedAt: new Date('2024-01-15'),
    featured: true,
  },
  {
    id: "2",
    title: "Energy Management Optimization",
    industry: "Energy",
    client: "PowerGrid Solutions",
    logo: "/images/clients/powergrid.png",
    problem: "Inefficient energy distribution and high operational costs",
    solution: "Deployed smart grid monitoring and automated load balancing system",
    results: [
      { metric: "Cost Reduction", value: "25%" },
      { metric: "Efficiency Gain", value: "40%" },
      { metric: "Carbon Footprint", value: "30%" }
    ],
    fullStory: "PowerGrid Solutions needed to modernize their energy distribution network. Our IIoT platform provided real-time monitoring and automated load balancing, resulting in significant cost savings and improved efficiency. The system also helped reduce their carbon footprint through optimized energy distribution.",
    image: "/images/case-studies/energy.jpg",
    publishedAt: new Date('2024-01-20'),
    featured: true,
  },
  {
    id: "3",
    title: "Quality Control Automation",
    industry: "Automotive",
    client: "AutoTech Motors",
    logo: "/images/clients/autotech.png",
    problem: "Inconsistent quality control and high defect rates",
    solution: "Integrated computer vision and AI-based quality inspection system",
    results: [
      { metric: "Defect Reduction", value: "45%" },
      { metric: "Inspection Speed", value: "60%" },
      { metric: "Cost Savings", value: "22%" }
    ],
    fullStory: "AutoTech Motors was struggling with quality control issues in their production line. Our AI-powered inspection system revolutionized their quality control process, significantly reducing defects while increasing inspection speed. The solution also provided valuable insights for continuous improvement.",
    image: "/images/case-studies/automotive.jpg",
    publishedAt: new Date('2024-01-25'),
    featured: false,
  },
  {
    id: "4",
    title: "Supply Chain Optimization",
    industry: "Logistics",
    client: "Global Logistics Co.",
    logo: "/images/clients/global-logistics.png",
    problem: "Inefficient inventory management and supply chain visibility",
    solution: "Implemented end-to-end supply chain tracking and analytics platform",
    results: [
      { metric: "Inventory Accuracy", value: "95%" },
      { metric: "Delivery Time", value: "40%" },
      { metric: "Cost Reduction", value: "28%" }
    ],
    fullStory: "Global Logistics Co. needed better visibility and control over their supply chain operations. Our IIoT solution provided real-time tracking and analytics, enabling better inventory management and faster delivery times. The platform also helped identify optimization opportunities throughout the supply chain.",
    image: "/images/case-studies/logistics.jpg",
    publishedAt: new Date('2024-02-01'),
    featured: false,
  }
];