export const IIOT = {
  whychose: [
    {
      image: "/industry/iiot/whychossesiiot/improve.png",
      title: "Improve OEE",
      description: "Boost operational efficiency and eliminate production bottlenecks.",
    },
    {
      title: "Maximize Uptime and Productivity",
      image: "/industry/iiot/whychossesiiot/maxismis.png",
      description: "Ensure continuous operations with predictive maintenance and monitoring.",
    },
    {
      title: "Enhance Quality",
      image: "/industry/iiot/whychossesiiot/enhase_ity.png",
      description: "Improve product consistency through real-time process control.",
    },
    {
      title: "Reduce Costs",
      image: "/industry/iiot/whychossesiiot/reduce.png",
      description: "Cut waste, energy use, and unplanned downtime expenses.",
    },
  ],
  
  builtinFeature: [
    {
      image: "/industry/iiot/buitinfeature/seamless.png",
      title: "Seamless Connectivity",
      description:
        "Connect effortlessly with PLCs, VFDs, SCADA systems, and industrial sensors.",
    },

    {
      image: "/industry/iiot/buitinfeature/customerules.png",
      title: "Custom Rule-Based Alerts",
      description:
        "Trigger SMS or email alerts based on threshold, error, or sensor logic.",
    },
    {
      image: "/industry/iiot/buitinfeature/liveDashboards.png",
      title: "Live Dashboards",
      description:
        "Visualize KPIs and machine data instantly via intuitive dashboards.",
    },
    {
      image: "/industry/iiot/buitinfeature/highspeeddata.png",
      title: "High-Speed Data Acquisition",
      description:
        "Capture real-time equipment data at sampling rates up to 1 kHz.",
    },
    {
      image: "/industry/iiot/buitinfeature/erpcrmIntegration.png",
      title: "ERP/CRM Integration",
      description:
        "Sync equipment data directly with your ERP, BI tools, or CRM platforms",
    },
    {
      image: "/industry/iiot/buitinfeature/scalableArchitecture.png",
      title: "Scalable Architecture",
      description: "Deploy from one unit to full-factory monitoring with ease",
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
      id: "1",
      name: "Nikhil Jadhav",
      title: "Project Supervisor",
      company: "AquaSure Infra Pvt. Ltd., Bengaluru",
      quote: `Managing STPs and ETPs across different cities was chaotic until we adopted VithSutra's IIoT platform. 
  From flow sensors to tank levels and pump pressure — we now track everything remotely with precise data logs. 
  It has made SLA compliance easier with on-time overflow alerts and live analytics for pump efficiency. 
  The shift from reactive to proactive control has transformed our operational model completely.`,
      avatar: "/industry/iiot/testimonial/nikel.png",
    },
    {
      id: "2",
      name: "Farhan Khan",
      title: "Maintenance Head",
      company: "CoreFuel Energy Ltd., Mumbai",
      quote: `Safety and uptime are mission-critical in our sector, and VithSutra's solution has elevated both. 
  Our team now monitors pipeline pressure, pump vibration, and leak indicators in real time across multiple sites. 
  The system's threshold-based alarms helped us prevent two major failures in just the first month of deployment. 
  It has reduced our unplanned maintenance and strengthened our remote control and safety protocols.`,
      avatar: "/industry/iiot/testimonial/manoge.png",
    },
  ],
  applications: [
    {
      image: "/industry/iiot/application/foodandbeverage.svg",
      industry: "Food & Beverage Processing",
      description:
        "Monitor critical parameters like temperature, humidity, and machine hygiene in real-time to ensure food safety and compliance with standards.",
    },
    {
      image: "/industry/iiot/application/cementandstel.svg",
      industry: "Cement & Steel Industries",
      description:
        "Monitor kiln temperature, vibration, motor current, and conveyor operation to prevent critical failures.",
    },
    {
      image: "/industry/iiot/application/pharmaceutical.svg",
      industry: "Pharmaceuticals & Chemical Processing",
      description:
        "Monitor critical parameters like temperature, pressure, and flow in real-time to maintain product quality and ensure compliance.",
    },
    {
      image: "/industry/iiot/application/powerohow.svg",
      industry: "Power & Energy",
      description:
        "Track performance of turbines, transformers, and solar panels; automate load balancing and predictive maintenance.",
    },

  ],
  howItWorks: [
    {
      image: "/industry/iiot/howitworks/step1.png",
      title: "Seamlessly interface",
      description:
        "Seamlessly interface with PLCs, VFDs, and SCADA systems via industrial-grade protocols.",
    },
    {
      image: "/industry/iiot/howitworks/step2.png",
      title: "Capture Real-Time Data",
      description:
        "Continuously collect high-speed machine data like status, flow, and temperature up to 1 kHz.",
    },
    {
      image: "/industry/iiot/howitworks/step3.png",
      title: "Analyze & Generate Alerts",
      description:
        "Detect anomalies instantly and trigger intelligent alerts using custom rules and AI models.",
    },
    {
      image: "/industry/iiot/howitworks/step4.png",
      title: "Visualize & Act",
      description:
        "View actionable KPIs and trends on a unified dashboard integrated with your ERP or CRM.",
    },
  ],
    facts: [
    {
      number: 95,
      suffix: "%",
      title: "Process Efficiency",
    },
    {
      number: 99.9,
      suffix: "%",
      title: "System Uptime",
    },
    {
      number: 50,
      suffix: "L+",
      title: "Cost Savings",
    },
    {
      number: 80,
      suffix: "%",
      title: "Reduction",
    },
  ],
};
