"use client";
import { Plus, Server, Cpu, Layers } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import * as motion from "motion/react-client";
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
    <div className="px-12 py-16  h-screen flex flex-col justify-center items-center text-company-black">
      <div className="m mx-auto">
        <div className="mt-1 font-medium text-sm tracking-wider text-company-text-gray">
          FEATURED
        </div>

        <TextAnimate className="section-head text-company-black mb-4">
          Automation at All Levels
        </TextAnimate>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3.5 ">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                key={feature.title}
                className="bg-company-light-light-gray w-[var(--box-small-square-width)] h-[var(--box-small-square-height)] p-[var(--box-small-square-padding)]  rounded-[28px] relative"
              >
                <div className="mb-4">
                  <Icon className="h-6 w-6 text-company-black" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">{feature.title}</h3>
                <p className="text-company-text-gray text-sm">
                  {feature.description}
                </p>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="absolute bottom-4 right-4 bg-company-white rounded-full p-1.5  hover:bg-gray-50">
                  <Plus
                    className="h-5 w-5  text-company-text-gray"
                    strokeWidth={3}
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
