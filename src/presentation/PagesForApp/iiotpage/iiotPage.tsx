import React from 'react'
import { text } from '@/lib/typography';
import Image from 'next/image';
import { motion } from 'motion/react';
import { containerVariants, fadeInDown, fadeInUp } from '@/lib/animations';
import Heading from '@/presentation/components/ui/heading';

export const IIOT = {
  builtinFeature: [
    {
      title: "Seamless Connectivity",
      description:
        "Connect effortlessly with PLCs, VFDs, SCADA systems, and industrial sensors.",
    },
    {
      title: "Custom Rule-Based Alerts",
      description:
        "Trigger SMS or email alerts based on threshold, error, or sensor logic.",
    },
    {
      title: "Live Dashboards",
      description:
        "Visualize KPIs and machine data instantly via intuitive dashboards.",
    },
    {
      title: "High-Speed Data Acquisition",
      description:
        "Capture real-time equipment data at sampling rates up to 1 kHz.",
    },
    {
      title: "ERP/CRM Integration",
      description:
        "Sync equipment data directly with your ERP, BI tools, or CRM platforms.",
    },
    {
      title: "Scalable Architecture",
      description: "Deploy from one unit to full-factory monitoring with ease.",
    },
  ],
  title: "Technical Specifications",
  subtitle:
    "Detailed technical information for system integration and deployment",
  specifications: [
    {
      label: "Protocols Supported",
      description:
        "Modbus RTU/TCP, OPC UA, Ethernet/IP, Profibus, Profinet, MQTT",
    },
    {
      label: "Hardware Compatibility",
      description:
        "Siemens, Allen-Bradley, Delta, Fanuc, Mazak, Makino, and more",
    },
    {
      label: "Edge & Cloud",
      description: "Local gateway with cloud sync via MQTT/HTTPS",
    },
    {
      label: "Data Handling",
      description: "High-speed DB, data compression, export options (CSV, PDF)",
    },
    {
      label: "Security",
      description:
        "End-to-end encryption, role-based access, device authentication",
    },
    {
      label: "Scalability",
      description:
        "Supports growth from few machines to entire factories with granular control",
    },
  ],
  faq: [
    {
      question:
        "What types of equipment and protocols does your system support?",
      answer:
        "We integrate seamlessly with all major PLCs, VFDs, SCADA systems, and industrial sensors using Modbus, OPC-UA, Profibus, and other industry-standard protocols.",
    },
    {
      question: "Can it work without internet connectivity?",
      answer:
        "Yes, our edge gateways ensure that data continues to be captured, processed, and stored locally even during internet outages — ensuring zero data loss.",
    },
    {
      question:
        "How do I receive alerts when a machine parameter crosses a limit?",
      answer:
        "You can set custom thresholds, and our system will automatically send real-time alerts via SMS, email, or dashboard notifications whenever a parameter deviates.",
    },
    {
      question: "Can it integrate with ERP, CRM, or BI tools?",
      answer:
        "Absolutely. We offer robust APIs and built-in integrations to connect with your existing ERP, CRM, or business intelligence platforms for end-to-end automation.",
    },
    {
      question: "Is my factory's data secure on your platform?",
      answer:
        "Yes, we use enterprise-grade encryption, firewall protection, and role-based access control to ensure your operational data remains private and secure at all times.",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Nikhil Jadhav",
      title: "Project Supervisor",
      company: "AquaSure Infra Pvt. Ltd., Bengaluru",
      quote: `Managing STPs and ETPs across different cities was chaotic until we adopted VithSutra's IIoT platform. 
From flow sensors to tank levels and pump pressure — we now track everything remotely with precise data logs. 
It has made SLA compliance easier with on-time overflow alerts and live analytics for pump efficiency. 
The shift from reactive to proactive control has transformed our operational model completely.`,
      avatar: "",
    },
    {
      id: 2,
      name: "Farhan Khan",
      title: "Maintenance Head",
      company: "CoreFuel Energy Ltd., Mumbai",
      quote: `Safety and uptime are mission-critical in our sector, and VithSutra's solution has elevated both. 
Our team now monitors pipeline pressure, pump vibration, and leak indicators in real time across multiple sites. 
The system's threshold-based alarms helped us prevent two major failures in just the first month of deployment. 
It has reduced our unplanned maintenance and strengthened our remote control and safety protocols.`,
      avatar: "",
    },
  ],
  applications: [
    {
      image: "/public/industry/fmog.avif",
      industry: "Food & Beverage Processing",
      description:
        "Monitor critical parameters like temperature, humidity, and machine hygiene in real-time to ensure food safety and compliance with standards.",
    },
    {
      image: "/public/industry/fmog.avif",
      industry: "Cement & Steel Industries",
      description:
        "Monitor kiln temperature, vibration, motor current, and conveyor operation to prevent critical failures.",
    },
    {
      image: "/public/industry/fmog.avif",
      industry: "Manufacturing",
      description:
        "Monitor production lines, reduce unplanned downtime, track OEE (Overall Equipment Effectiveness), and optimize energy usage.",
    },
    {
      image: "/public/industry/fmog.avif",
      industry: "Pharmaceuticals & Chemical Processing",
      description:
        "Monitor critical parameters like temperature, pressure, and flow in real-time to maintain product quality and ensure compliance.",
    },
    {
      image: "/public/industry/fmog.avif",
      industry: "Power & Energy",
      description:
        "Track performance of turbines, transformers, and solar panels; automate load balancing and predictive maintenance.",
    },
    {
      image: "/public/industry/fmog.avif",
      industry: "Water & Wastewater Management",
      description:
        "Automate pump control, track tank levels, detect leaks, and optimize water flow using real-time sensor data.",
    },
  ],
  howItWorks: {
    heading: "How VithSutra's IIoT Automation Works",
    subheading: "Real-time data. Smarter decisions. Seamless automation.",
    steps: [
      {
        title: "Seamlessly interface",
        description:
          "Seamlessly interface with PLCs, VFDs, and SCADA systems via industrial-grade protocols.",
      },
      {
        title: "Capture Real-Time Data",
        description:
          "Continuously collect high-speed machine data like status, flow, and temperature up to 1 kHz.",
      },
      {
        title: "Analyze & Generate Alerts",
        description:
          "Detect anomalies instantly and trigger intelligent alerts using custom rules and AI models.",
      },
      {
        title: "Visualize & Act",
        description:
          "View actionable KPIs and trends on a unified dashboard integrated with your ERP or CRM.",
      },
    ],
  },
};


function IIOTPages() {
  return (
    <div> 
      <div>
      <section className="relative min-h-[70vh]  w-full  ">
        <div className="container mx-auto px-4 flex flex-wrap-reverse items-center justify-between w-full h-full py-20 gap-company-xl-48 md:gap-0">
          {/* Right side - Image */}
          <div className="relative w-full lg:w-1/2 h-[260px] md:h-[350px] lg:h-[700px] flex justify-center items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative h-full w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[700px] max-w-full overflow-visible rounded-[28px]"
            >
              <Image
                src={"/Products/vithnet/CEA1.png"}
                alt={"iiot photo"}
                fill
                className="object-contain md:object-contain overflow-visible rounded-4xl"
                priority
              />
            </motion.div>
          </div>

          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-black flex  flex-col justify-center h-full items-center lg:items-start ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className=" space-y-company-md-16 md:space-y-company-lg-24 text-center lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} `}
                variants={fadeInDown}
              >
               What Is IIoT?
              </motion.h1>
              <motion.p
                className={`${text.cardBodytext} max-w-2xl `}
                variants={fadeInUp}
              >
                Industrial IoT, or Industrial Internet of Things, means networking industrial machines and sensors to continuously collect, exchange, and analyze data. This enables real-time monitoring, predictive maintenance, automated alerts, and data-driven decision-making across operations .
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative min-h-[70vh]  w-full  ">
        <div className="container mx-auto px-4 flex flex-wrap-reverse items-center justify-between w-full h-full py-20 gap-company-xl-48 md:gap-0">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 text-black flex  flex-col justify-center h-full items-center lg:items-start ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className=" space-y-company-md-16 md:space-y-company-lg-24 text-center lg:text-left"
            >
              <motion.h1
                className={`${text.Sectiontexthead} `}
                variants={fadeInDown}
              >
                Why Choose IIoT for Your Factory?
              </motion.h1>
              <motion.p
                className={`${text.cardBodytext} max-w-2xl `}
                variants={fadeInUp}
              >
               IIoT empowers industries to move from guesswork to precision. With real-time  monitoring, predictive insights, and scalable automation, it transforms operations into smart, efficient, and future-ready ecosystems.
              </motion.p>
            </motion.div>
          </div>

      
            <div className="md:w-1/2 mx-auto">
              <Heading heading="FEATURES" Display="Key Features" />
              <div className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-company-xl-48">
                  {IIOT.specifications.map((whychose, idx) => {
                    const IconComponent = whychose ? (
                      <Image
                        src={whychose.description}
                        alt={whychose.label}
                        width={50}
                        height={50}
                      />
                    ) : typeof whychose === "function" ? (
                      React.createElement(whychose, {
                        className: " text-gray-700",
                      })
                    ) : null;

                    return (
                      <div
                        key={whychose.label + idx}
                        className="flex items-start gap-company-xs-8 justify-center "
                      >
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-white border border-gray-200 rounded-company-button-8  flex items-center justify-center">
                            {IconComponent}
                          </div>
                        </div>
                        <div className="flex-1 justify-center h-full">
                          <h3
                            className={` ${text.cardHeadingsmall} pb-company-xs-8 text-gray-900 `}
                          >
                            {whychose.label}
                          </h3>
                          <p
                            className={`${text.cardBodytextlight}text-sm text-gray-600 leading-relaxed`}
                          >
                            {whychose.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          
        </div>
      </section>
      </div>
    </div>
  )
}

export default IIOTPages