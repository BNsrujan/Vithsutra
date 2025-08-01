

export const IIOT = {
  whychose :[

    {
      image:"/industry/iiot/whychossesiiot/improve.png",
      title:"Improve OEE",
    },
    {
      title:"maximize uptime and productivity ",
      image:"/industry/iiot/whychossesiiot/maxismis.png",
    },
    {
      title:"Enhance Quality",
      image:"/industry/iiot/whychossesiiot/enhase_ity.png",
    },
    {
      title:"Reduce Costs",
      image:"/industry/iiot/whychossesiiot/reduce.png",
    }

  ],
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
      icon: "🔗",
    },
    {
      label: "Hardware Compatibility",
      description:
        "Siemens, Allen-Bradley, Delta, Fanuc, Mazak, Makino, and more",
      icon: "⚙️",
    },
    {
      label: "Edge & Cloud",
      description: "Local gateway with cloud sync via MQTT/HTTPS",
      icon: "☁️",
    },
    {
      label: "Data Handling",
      description: "High-speed DB, data compression, export options (CSV, PDF)",
      icon: "📊",
    },
    {
      label: "Security",
      description:
        "End-to-end encryption, role-based access, device authentication",
      icon: "🔒",
    },
    {
      label: "Scalability",
      description:
        "Supports growth from few machines to entire factories with granular control",
      icon: "📈",
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
