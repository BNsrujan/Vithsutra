'use client';

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
  Globe,
} from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  'Introduction to Robotics & Industry Applications': <BookOpen className="w-5 h-5 text-gray-700 hover:text-red-600 hover:bg-red-300 duration-300 p-1  rounded-full  " />,
  'Types of Robots: Cartesian, Articulated, Cobots, etc.': <Settings2 className="w-4 h-4 text-gray-700" />,
  'Motion Basics: Joint, Linear, Tool Movements.': <Move3D className="w-4 h-4 text-gray-700" />,
  'Robotic Grippers Demo.': <Hand className="w-4 h-4 text-gray-700" />,
  'Introduction to IRC Software.': <Terminal className="w-4 h-4 text-gray-700" />,
  'Soft Skills Session.': <Users className="w-4 h-4 text-gray-700" />,
  'Career Paths & Quiz-based Recap.': <ClipboardCheck className="w-4 h-4 text-gray-700" />,

  'All content from BASIC Model': <BookOpen className="w-4 h-4 text-gray-700" />,
  'Motion Programming (Joint vs Cartesian)': <Move3D className="w-4 h-4 text-gray-700" />,
  'UR Series Robot Overview & URScript Basics': <Code2 className="w-4 h-4 text-gray-700" />,
  'Advanced IRC Software Usage': <Terminal className="w-4 h-4 text-gray-700" />,
  'Pick & Place, Rotate, Tool Actions': <PackagePlus className="w-4 h-4 text-gray-700" />,
  'Safety Protocols & Real-World Demos': <ShieldCheck className="w-4 h-4 text-gray-700" />,

  'All content from BASIC & ADVANCED Models': <BookOpen className="w-4 h-4 text-gray-700" />,
  'ROS Architecture & Custom Package Creation': <Code2 className="w-4 h-4 text-gray-700" />,
  'Sensor Integration & Real-Time Data Handling': <Radar className="w-4 h-4 text-gray-700" />,
  'Final Projects by Branch:': <Projector className="w-4 h-4 text-gray-700" />,
  '• AIML: Vision-based ML Systems': <Eye className="w-4 h-4 text-gray-700" />,
  '• ECE/EEE: Hardware Interfacing': <Wrench className="w-4 h-4 text-gray-700" />,
  '• MECH: Motion Path Planning': <Compass className="w-4 h-4 text-gray-700" />,
  '• CSE: Web + ROS Dashboards': <LayoutDashboard className="w-4 h-4 text-gray-700" />,
  'Guaranteed Internships': <GraduationCap className="w-4 h-4 text-gray-700" />,
  'Industrial Tour': <Building2 className="w-4 h-4 text-gray-700" />,
  'Tech Portfolio & Certification': <BadgeCheck className="w-4 h-4 text-gray-700" />,
};

const models = [
  {
    title: 'BASIC MODEL (2 Days)',
    subtitle: 'Essentials of Robotics',
    description: 'Perfect for beginners exploring the world of robotics.',
    icon: <Bot className="w-10 h-10 text-gray-700" />,
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
    icon: <Cpu className="w-10 h-10 text-gray-700" />,
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
    icon: <BrainCircuit className="w-10 h-10 text-gray-700" />,
    features: [
      'All content from BASIC & ADVANCED Models',
      'ROS Architecture & Custom Package Creation',
      'Sensor Integration & Real-Time Data Handling',
      'Final Projects by Branch:',
      '• AIML: Vision-based ML Systems',
      '• ECE/EEE: Hardware Interfacing',
      '• MECH: Motion Path Planning',
      '• CSE: Web + ROS Dashboards',
      'Guaranteed Internships',
      'Industrial Tour',
      'Tech Portfolio & Certification',
    ],
  },
];

export default function PricingModels() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <div key={index} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              {model.icon}
              <div>
                <h2 className="text-lg font-bold text-gray-900">{model.title}</h2>
                <p className="text-sm text-gray-600">{model.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-sm">{model.description}</p>
            <ul className="space-y-2 text-sm text-gray-800">
              {model.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {iconMap[feature] ?? <Puzzle className="w-4 h-4 text-gray-500" />}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="text-center py-12 bg-gray-100 rounded-xl mt-10">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Robotics Journey?</h2>
  <p className="text-gray-600 mb-6">Choose your model and begin hands-on learning with industry experts.</p>
  <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">Enroll Now</button>
</section>

    </section>
  );
}
