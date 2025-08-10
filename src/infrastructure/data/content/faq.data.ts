import { Wrench, HelpCircle, Building2 } from "lucide-react";

/**
 * FAQ data organized by categories
 * This data structure supports the FAQ section with categorized questions and answers
 */

export const faqData = {
  tech: {
    title: "Technical Questions",
    icon: Wrench,
    questions: [
      {
        question: "What types of IoT devices do you support?",
        answer: "We support a wide range of IoT devices including industrial sensors, PLCs, SCADA systems, and custom hardware solutions. Our platform is designed to be device-agnostic, allowing seamless integration with both legacy and modern industrial equipment."
      },
      {
        question: "How does your predictive maintenance system work?",
        answer: "Our predictive maintenance system uses advanced machine learning algorithms to analyze real-time data from your equipment. It identifies patterns and anomalies that could indicate potential failures, allowing you to schedule maintenance before issues occur. The system continuously learns from new data to improve its accuracy over time."
      },
      {
        question: "What security measures do you implement for IoT devices?",
        answer: "We implement multiple layers of security including end-to-end encryption, secure device authentication, regular security updates, and network segmentation. Our platform follows industry best practices and complies with international security standards to protect your industrial infrastructure."
      },
      {
        question: "Can your system integrate with existing industrial equipment?",
        answer: "Yes, our system is designed to integrate with existing industrial equipment through various protocols including Modbus, OPC UA, and custom APIs. We provide adapters and middleware solutions to ensure seamless connectivity with your current infrastructure."
      }
    ]
  },
  support: {
    title: "Support & Implementation",
    icon: HelpCircle,
    questions: [
      {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 technical support through multiple channels including phone, email, and live chat. Our support team consists of certified engineers with extensive experience in industrial automation and IoT systems. We also provide regular maintenance and system health checks."
      },
      {
        question: "How long does implementation typically take?",
        answer: "Implementation time varies depending on the scale and complexity of your project. A typical implementation takes 4-8 weeks, including system design, hardware installation, software configuration, and staff training. We provide a detailed timeline during the initial consultation."
      },
      {
        question: "Do you provide training for our staff?",
        answer: "Yes, we provide comprehensive training programs for your technical and operational staff. Training includes system operation, maintenance procedures, troubleshooting, and best practices. We also offer ongoing training sessions and documentation updates."
      },
      {
        question: "What happens if we encounter issues after implementation?",
        answer: "Our support team is available 24/7 to address any issues. We have a tiered support system that ensures quick response times and effective problem resolution. For critical issues, we can provide on-site support within 24 hours."
      }
    ]
  },
  business: {
    title: "Business & Partnership",
    icon: Building2,
    questions: [
      {
        question: "What are your pricing models?",
        answer: "We offer flexible pricing models including subscription-based and project-based options. Pricing depends on factors such as the number of devices, data volume, and required features. Contact our sales team for a customized quote based on your specific needs."
      },
      {
        question: "Do you offer custom solutions?",
        answer: "Yes, we specialize in developing custom solutions tailored to your specific industrial requirements. Our team works closely with you to understand your needs and develop a solution that addresses your unique challenges and objectives."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including manufacturing, energy, utilities, transportation, and logistics. Our solutions are adaptable to various industrial environments and can be customized to meet industry-specific requirements."
      },
      {
        question: "How do you ensure data privacy and compliance?",
        answer: "We maintain strict data privacy standards and comply with relevant regulations including GDPR, ISO 27001, and industry-specific requirements. All data is encrypted, and we provide tools for data governance and compliance reporting."
      }
    ]
  }
};