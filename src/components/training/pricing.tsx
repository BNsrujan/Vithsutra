'use client';

import { IconButton } from '@/components/ui/iconhover';
import {motion} from "motion/react"
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
} from 'lucide-react';
import { JSX } from 'react';

const iconMap: Record<string,JSX.Element > = {
  'Introduction to Robotics & Industry Applications': <IconButton icon={BookOpen} />,
  'Types of Robots: Cartesian, Articulated, Cobots, etc.': <IconButton icon={Settings2} />,
  'Motion Basics: Joint, Linear, Tool Movements.': <IconButton icon={Move3D} />,
  'Robotic Grippers Demo.': <IconButton icon={Hand} />,
  'Introduction to IRC Software.': <IconButton icon={Terminal} />,
  'Soft Skills Session.': <IconButton icon={Users} />,
  'Career Paths & Quiz-based Recap.': <IconButton icon={ClipboardCheck} />,

  'All content from BASIC Model': <IconButton icon={BookOpen} />,
  'Motion Programming (Joint vs Cartesian)': <IconButton icon={Move3D} />,
  'UR Series Robot Overview & URScript Basics': <IconButton icon={Code2} />,
  'Advanced IRC Software Usage': <IconButton icon={Terminal} />,
  'Pick & Place, Rotate, Tool Actions': <IconButton icon={PackagePlus} />,
  'Safety Protocols & Real-World Demos': <IconButton icon={ShieldCheck} />,

  'All content from BASIC & ADVANCED Models': <IconButton icon={BookOpen} />,
  'ROS Architecture & Custom Package Creation': <IconButton icon={Code2} />,
  'Sensor Integration & Real-Time Data Handling': <IconButton icon={Radar} />,
  'Final Projects by Branch:': <IconButton icon={Projector} />,
  'AIML: Vision-based ML Systems': <IconButton icon={Eye} />,
  'ECE/EEE: Hardware Interfacing': <IconButton icon={Wrench} />,
  'MECH: Motion Path Planning': <IconButton icon={Compass} />,
  'CSE: Web + ROS Dashboards': <IconButton icon={LayoutDashboard} />,
  'Guaranteed Internships': <IconButton icon={GraduationCap} />,
  'Industrial Tour': <IconButton icon={Building2} />,
  'Tech Portfolio & Certification': <IconButton icon={BadgeCheck} />,
};

const models = [
  {
    title: 'BASIC MODEL (2 Days)',
    subtitle: 'Essentials of Robotics',
    description: 'Perfect for beginners exploring the world of robotics.',
    icon: <IconButton icon={Bot} />,
    features: [
      'Introduction to Robotics & Industry Applications',
      'Types of Robots: Cartesian, Articulated, Cobots, etc.',
      'Motion Basics: Joint, Linear, Tool Movements.',
      'Robotic Grippers Demo.',
      'Introduction to IRC Software.',
      'Soft Skills Session.',
      'Career Paths & Quiz-based Recap.',
    ],
  },
  {
    title: 'ADVANCED MODEL (2–3 Days)',
    subtitle: 'Industrial Cobots & Programming',
    description: 'For students ready to explore real-world robotics programming.',
    icon: <IconButton icon={Cpu} />,
    features: [
      'All content from BASIC Model',
      'Motion Programming (Joint vs Cartesian)',
      'UR Series Robot Overview & URScript Basics',
      'Advanced IRC Software Usage',
      'Pick & Place, Rotate, Tool Actions',
      'Safety Protocols & Real-World Demos',
    ],
  },
  {
    title: 'MASTER MODEL',
    subtitle: 'Custom ROS Projects & Specialization Tracks',
    description: 'For advanced learners aiming to build real-time robotics systems.',
    icon: <IconButton icon={BrainCircuit} />,
    features: [
      'All content from BASIC & ADVANCED Models',
      'ROS Architecture & Custom Package Creation',
      'Sensor Integration & Real-Time Data Handling',
      'Final Projects by Branch:',
      'AIML: Vision-based ML Systems',
      'ECE/EEE: Hardware Interfacing',
      'MECH: Motion Path Planning',
      'CSE: Web + ROS Dashboards',
      'Guaranteed Internships',
      'Industrial Tour',
      'Tech Portfolio & Certification',
    ],
  },
];

export default function PricingModels() {
  return (
    <section className="py-12  max-w-[1400px] mx-auto bg-white">
      <div className="mb-2 text-company-text-gray">Training Models</div>
      <h2 className="section-head text-company-black mb-5">Choose Your Path</h2>
      
      <motion.div
        className="md:grid md:grid-cols-3 md:gap-4  flex flex-col  justify-center gap-5  md:mb-0 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {models.map((model, index) => (
          <div
            key={index}
            
            className={`relative  ${index == 2 ?`border-none`:`border-r`}    rounded-[15px]    max-w-[500px] p-6  transition duration-300 ease-in bg-company-light-light-gray z-10 text-black`}
            >
            {index == 2 && <div className="absolute -top-4  left-0 max-w-[500px] w-full h-9  font-semibold px-4 py-1  -t  -l  -r rounded-t-[12px] text-white bg-[#E1B941]
             z-20">
              Master model full pack</div>}
            <div className="flex items-center mb-4 mr-3">
              <div className='flex justify-center items-center h-full '>
              {model.icon}
              </div>
              <div className='h-full '>
                <p className=" text-base/tight   ">{model.title}</p>
                <p className="label-text ">{model.subtitle}</p>
              </div>
            </div>
            <p className="body-text text-company-text-gray mb-4  ">{model.description}</p>
            <ul className="">
              {model.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 group transition duration-300 ease-in group-hover:text-blue-600"
                >
                  {iconMap[feature] ?? <IconButton icon={Puzzle} />}
                  <span className="body-text text-company-text-gray group-hover:text-blue-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <section className="text-center py-12 bg-gray-100 rounded-xl mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Start Your Robotics Journey?
        </h2>
        <p className="text-gray-600 mb-6">
          Choose your model and begin hands-on learning with industry experts.
        </p>
        <button className="bg-company-primary-royalBlue text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Contact Us
        </button>
      </section>
    </section>
  );
}
