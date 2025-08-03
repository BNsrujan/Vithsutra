import { IconButton } from "@/presentation/components/ui/iconhover.ui";
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
    Wrench,
    Compass,
  } from "lucide-react";
  import { JSX } from "react";

export const faqs = [
    {
      question: "What prerequisites are required for the training?",
      answer: "Basic knowledge of programming and electronics is helpful but not mandatory. We start from fundamentals and build up to advanced concepts."
    },
    {
      question: "How long does each training module take?",
      answer: "The BASIC model takes 2 days, ADVANCED model takes 2-3 days, and the MASTER model duration varies based on the specialization track chosen."
    },
    {
      question: "Do you provide certification after completion?",
      answer: "Yes, we provide a certification upon successful completion of each training module, which is recognized by industry partners."
    },
    {
      question: "Can I get hands-on experience with real robots?",
      answer: "Absolutely! Our training includes practical sessions with industrial robots and IoT devices in our state-of-the-art lab."
    },
    {
      question: "What kind of support is available after training?",
      answer: "We provide ongoing support through our online community, regular webinars, and access to our technical team for project guidance."
    }
  ];
  
  export const iconMap: Record<string, JSX.Element> = {
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
  
  export const models = [
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

 export  const testimonials = [
{
    id: "1",
    avatar: "/images/testimonials/testimonial-1.jpg",
    name: "Alice Johnson",
    title: "Robotics Student",
    company: "Tech University",
    quote: "The robotics training program was incredibly insightful and hands-on. I learned so much about industrial robots and ROS. Highly recommended!"
  },
  {
    id: "2",
    avatar: "/images/testimonials/testimonial-2.jpg",
    name: "Bob Williams",
    title: "Engineering Graduate",
    company: "Future Innovations Inc.",
    quote: "The Master Model course provided me with the practical skills and industry exposure I needed. The guaranteed internship was a huge plus!"
  },
  {
    id: "3",
    avatar: "/images/testimonials/testimonial-3.jpg",
    name: "Charlie Brown",
    title: "Educator",
    company: "RoboTech Academy",
    quote: "Vithsutra's training modules are well-structured and comprehensive. My students gained valuable experience with real-world robotics applications."
  },
  {
    id: "4",
    avatar: "/images/testimonials/testimonial-4.jpg",
    name: "Diana Miller",
    title: "Industrial Automation Engineer",
    company: "Global Manufacturing Co.",
    quote: "The advanced model helped me bridge the gap between theoretical knowledge and practical industrial applications. Excellent instructors!"
  }
  
  ];