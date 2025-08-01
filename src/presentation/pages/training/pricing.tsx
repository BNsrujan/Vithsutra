"use client";

import { IconButton } from "@/presentation/components/ui/iconhover.ui";
import { motion } from "motion/react";
import {
  Bot,
  Cpu,
  BrainCircuit,
  BookOpen,
  Settings2,
  Move3D,
  Hand,
  Terminal,
  Users,
  ClipboardCheck,
  Code2,
  PackagePlus,
  Radar,
  Projector,
  ShieldCheck,
  Building2,
  GraduationCap,
  BadgeCheck,
  LayoutDashboard,
  Eye,
  Puzzle,
  Wrench,
  Compass,
} from "lucide-react";
import { JSX } from "react";
import { text } from "@/shared/lib/typography";
import Heading from "@/presentation/components/ui/heading.ui";
import { Button } from "@/presentation/components/ui/button.ui";

const iconMap: Record<string, JSX.Element> = {
  "Introduction to Robotics & Industry Applications": (
    <IconButton icon={BookOpen} />
  ),
  "Types of Robots: Cartesian, Articulated, Cobots, etc.": (
    <IconButton icon={Settings2} />
  ),
  "Motion Basics: Joint, Linear, Tool Movements.": <IconButton icon={Move3D} />,
  "Robotic Grippers Demo.": <IconButton icon={Hand} />,
  "Introduction to IRC Software.": <IconButton icon={Terminal} />,
  "Soft Skills Session.": <IconButton icon={Users} />,
  "Career Paths & Quiz-based Recap.": <IconButton icon={ClipboardCheck} />,

  "All content from BASIC Model": <IconButton icon={BookOpen} />,
  "Motion Programming (Joint vs Cartesian)": <IconButton icon={Move3D} />,
  "UR Series Robot Overview & URScript Basics": <IconButton icon={Code2} />,
  "Advanced IRC Software Usage": <IconButton icon={Terminal} />,
  "Pick & Place, Rotate, Tool Actions": <IconButton icon={PackagePlus} />,
  "Safety Protocols & Real-World Demos": <IconButton icon={ShieldCheck} />,

  "All content from BASIC & ADVANCED Models": <IconButton icon={BookOpen} />,
  "ROS Architecture & Custom Package Creation": <IconButton icon={Code2} />,
  "Sensor Integration & Real-Time Data Handling": <IconButton icon={Radar} />,
  "Final Projects by Branch:": <IconButton icon={Projector} />,
  "AIML: Vision-based ML Systems": <IconButton icon={Eye} />,
  "ECE/EEE: Hardware Interfacing": <IconButton icon={Wrench} />,
  "MECH: Motion Path Planning": <IconButton icon={Compass} />,
  "CSE: Web + ROS Dashboards": <IconButton icon={LayoutDashboard} />,
  "Guaranteed Internships": <IconButton icon={GraduationCap} />,
  "Industrial Tour": <IconButton icon={Building2} />,
  "Tech Portfolio & Certification": <IconButton icon={BadgeCheck} />,
};

const models = [
  {
    title: "BASIC MODEL (2 Days)",
    subtitle: "Essentials of Robotics",
    description: "Perfect for beginners exploring the world of robotics.",
    icon: <IconButton icon={Bot} />,
    features: [
      "Introduction to Robotics & Industry Applications",
      "Types of Robots: Cartesian, Articulated, Cobots, etc.",
      "Motion Basics: Joint, Linear, Tool Movements.",
      "Robotic Grippers Demo.",
      "Introduction to IRC Software.",
      "Soft Skills Session.",
      "Career Paths & Quiz-based Recap.",
    ],
  },
  {
    title: "ADVANCED MODEL (2–3 Days)",
    subtitle: "Industrial Cobots & Programming",
    description:
      "For students ready to explore real-world robotics programming.",
    icon: <IconButton icon={Cpu} />,
    features: [
      "All content from BASIC Model",
      "Motion Programming (Joint vs Cartesian)",
      "UR Series Robot Overview & URScript Basics",
      "Advanced IRC Software Usage",
      "Pick & Place, Rotate, Tool Actions",
      "Safety Protocols & Real-World Demos",
    ],
  },
  {
    title: "MASTER MODEL",
    subtitle: "Custom ROS Projects & Specialization Tracks",
    description:
      "For advanced learners aiming to build real-time robotics systems.",
    icon: <IconButton icon={BrainCircuit} />,
    features: [
      "All content from BASIC & ADVANCED Models",
      "ROS Architecture & Custom Package Creation",
      "Sensor Integration & Real-Time Data Handling",
      "Final Projects by Branch:",
      "AIML: Vision-based ML Systems",
      "ECE/EEE: Hardware Interfacing",
      "MECH: Motion Path Planning",
      "CSE: Web + ROS Dashboards",
      "Guaranteed Internships",
      "Industrial Tour",
      "Tech Portfolio & Certification",
    ],
  },
];

export default function PricingModels() {
  return (
    <section className="py-company-xl-48  max-w-company-section-width mx-auto bg-company-white">
      <Heading heading="Training Models" Display="Choose Your Path" />
      <motion.div
        className="md:grid md:grid-cols-3  md:gap-company-lg-24 flex flex-col md:h-[800px] justify-center gap-company-lg-24 md:mb-0 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {models.map((model, index) => (
          <div
            key={index}
            className={`relative  border-1 border-company-primary-royalBlue/40 rounded-card max-w-company-card-width p-company-lg-24 transition duration-300 rounded-company-section-24 ease-in bg-company-litest-gray z-10 text-black`}
          >
            {/* {index == 2 && (
              <div className="absolute -top-4 left-0 max-w-company-card-width w-full h-9 font-semibold px-3 py-1 rounded-t-company-section-24  bg-company-secondary-yello  z-20">
                Master model full pack
              </div>
            )} */}
            <div className="">
              <div className="flex items-center mt-company-sm-12 ">
                <div className="flex  items-center h-full size-6  ">
                  {model.icon}
                </div>
                <div className="h-full  ">
                  <p className={text.cardHeadingsmall + "mb-company-xl-48"}>
                    {model.title}
                  </p>
                  <p
                    className={
                      text.Sectionbodytexts + "  text-company-primary-royalBlue"
                    }
                  >
                    {model.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <p className={text.cardBodytext + "pt-company-xl-48 text-company-text-gray mb-4 "}>
              {model.description}
            </p>
            <hr className=" w-full my-company-lg-24 bg-company-dark-gray" />
            <ul className="space-y-company-md-16">
              {model.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center   gap-company-md-16 group transition duration-300 ease-in group-hover:text-company-primary-royalBlue"
                >
                  {iconMap[feature] ?? <IconButton icon={Puzzle} />}
                  <span
                    className={
                      text.cardBodytext +
                      "  text-company-gray-text group-hover:text-company-primary-royalBlue"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant={"neumorphic"}
              className="w-full absolute bottom-company-lg-24"
            >
              Book a Model
            </Button>
          </div>
        ))}
      </motion.div>

      <section className="text-center py-company-xl-48 space-y-company-xs-8 bg-company-primary-royalBlue rounded-company-section-24 mt-company-lg-24">
        <h2 className={text.SectionHeader + " text-white"}>
          Ready to Start Your Robotics Journey?
        </h2>
        <p
          className={text.cardBodytextlight + " text-white/90 pb-company-md-16"}
        >
          Choose your model and begin hands-on learning with industry experts.
        </p>
        <Button variant={"neumorphicYellow"}>Contact Us</Button>
      </section>
    </section>
  );
}
