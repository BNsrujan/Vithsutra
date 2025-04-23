"use client";
import * as motion from "motion/react-client";
import { ArrowRight, Cpu, Server, BrainCircuit, Shield, Layers, Dot } from "lucide-react";

const products = [
  {
    title: "Industrial IoT Solutions",
    description: "Smart sensors and monitoring systems for industrial automation and predictive maintenance",
    icon: Cpu,
    features: [
      "Real-time monitoring",
      "Predictive analytics",
      "Remote control",
      "Energy optimization"
    ]
  },
  {
    title: "Robotic Process Automation",
    description: "Advanced robotics systems for manufacturing and industrial applications",
    icon: BrainCircuit,
    features: [
      "Precision control",
      "Multi-axis movement",
      "Safety protocols",
      "Easy integration"
    ]
  },
  {
    title: "Smart Infrastructure",
    description: "IoT-enabled infrastructure solutions for smart cities and buildings",
    icon: Server,
    features: [
      "Energy management",
      "Security systems",
      "Environmental monitoring",
      "Asset tracking"
    ]
  },
  {
    title: "Security Solutions",
    description: "Advanced security systems with IoT integration",
    icon: Shield,
    features: [
      "Real-time monitoring",
      "Access control",
      "Emergency response",
      "Data encryption"
    ]
  },
  {
    title: "Integration Services",
    description: "Seamless integration of IoT and robotics systems",
    icon: Layers,
    features: [
      "System integration",
      "Custom solutions",
      "Technical support",
      "Training programs"
    ]
  }
];

export default function Products() {
  return (
    <div className="max-w-[1400px] mx-auto  py-16">
      <div className="mb-2 text-company-text-gray">Products</div>
      <h2 className="section-head text-company-black mb-8">Our Solutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-company-light-light-gray rounded-[24px] p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white rounded-xl">
                  <Icon className="w-6 h-6 text-company-black" />
                </div>
                <div>
                  <h3 className="container-supporting-half text-company-black mb-1">
                    {product.title}
                  </h3>
                  <p className="text-company-text-gray body-text ">
                    {product.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 label-text text-company-text-gray">
                    <Dot/>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full button-text py-2 px-4 bg-white text-company-black rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 