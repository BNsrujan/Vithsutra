"use client";
import { Plus, Server, Cpu, Layers } from "lucide-react";
import * as motion from "motion/react-client";
import { text } from "@/lib/typography";

const features = [
  {
    title: "Software Solutions",
    description:
      "Custom applications and systems that streamline operations and drive data-driven decision making.",
    icon: Server,
  },
  {
    title: "Hardware Solutions",
    description:
      "IoT devices and robotics that automate processes and integrate physical with digital.",
    icon: Cpu,
  },
  {
    title: "Integrated Approach",
    description:
      "Software-hardware ecosystems delivering solutions with maximum performance and reliability.",
    icon: Layers,
  },
];

export default function AutomationSection() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-company-light-light-gray mb-4">
          <span className="text-sm font-medium tracking-wider text-company-text-gray">
            FEATURED
          </span>
        </div>

        <h1 className={`${text.Sectiontext} text-company-black mb-6`}>
          Automation at All Levels
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              key={feature.title}
              className="group bg-company-light-light-gray rounded-[28px] p-8 relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <Icon className="h-8 w-8 text-company-blue transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-company-black group-hover:text-company-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-company-text-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
                <button className="absolute bottom-6 right-6 bg-company-white rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-company-blue group-hover:text-white">
                  <Plus
                    className="h-5 w-5 text-company-text-gray group-hover:text-white transition-colors"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-company-light-light-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
