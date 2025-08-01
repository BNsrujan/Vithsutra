import { Product } from "@/core/entities/product";
export const biometricProduct: Product = {
    id: "biometric-product",
    name: "Biometric Product",
    tagline: "Biometric Access System",
    description:
      "A fingerprint-based biometric system for hostels, institutions, and workplaces that replaces manual logs with fast, secure, and automated entry tracking",
    mainImage: "/Products/biometric-product/TechPhoto.svg",
    productSectionImage: "/Products/biometric-product/main_productsection.svg",
    features: [
      {
        image: "/Products/biometric-product/features/customrules.svg",
        title: "Custom Rules",
        description:
          "Set limits for access hours, user roles, or restricted days.",
      },
      {
        image: "/Products/biometric-product/features/easyenrollment.svg",
        title: "Easy Enrollment",
        description:
          "Enroll users in seconds using the guided fingerprint registration system.",
      },
      {
        image: "/Products/biometric-product/features/custmdashboard.svg",
        title: "Cloud Dashboard",
        description:
          "Live access monitoring with admin-level control — anytime, anywhere.",
      },
      {
        image: "/Products/biometric-product/features/smartaccesstracker.svg",
        title: "Smart Access Tracking",
        description:
          "Real-time logging of every fingerprint entry, ready for reports, audits, or investigations.",
      },
      {
        image: "/Products/biometric-product/features/24x7.svg",
        title: "24/7 Operational Availability",
        description: "Operational anytime, day or night.",
      },
      {
        image:
          "/Products/biometric-product/features/fingerprintauthentication.svg",
        title: "Fingerprint Authentication",
        description:
          "Secure access through fast and accurate biometric fingerprint recognition.",
      },
      {
        image: "/Products/biometric-product/features/fastrespons.svg",
        title: "Fast Response",
        description: "Built in rust, fast response in 0.5 second.",
      },
      {
        image:
          "/Products/biometric-product/features/file-export-icon-illustration-vector 1.svg",
        title: "Export file in any format",
        description: "Export the file in .csv or .pdf format.",
      },
      {
        image: "/Products/biometric-product/features/durablehardware.svg",
        title: "Durable Hardware",
        description:
          "Rugged build, designed for long-term public use with low maintenance.",
      },
    ],
  
    howItWorks: [
      {
        image: "/Products/biometric-product/How_it_works/step1.svg",
        title: "Enroll Fingerprint",
        description:
          "Admin scans and stores fingerprints securely using the enrollment interface",
      },
      {
        image: "/Products/biometric-product/How_it_works/step2.svg",
        title: "Place Finger",
        description: "User places their finger on the sensor to request access.",
      },
      {
        image: "/Products/biometric-product/How_it_works/step3.svg",
        title: " Authenticate",
        description:
          "System verifies the fingerprint with stored templates in milliseconds.",
      },
      {
        image: "/Products/biometric-product/How_it_works/step4.svg",
        title: "Access Granted or Denied",
        description:
          "Based on custom rules and fingerprint match  access is either approved or denied.",
      },
    ],
    tecnicalimage: "/Products/biometric-product/main_photo2.svg",
    testimonials: [
      {
        id: 1,
        avatar: "/Products/biometric-product/testimonialprofilephoto/image_2.png",
        name: "Amitabh Rao",
        title: "College Operations Manager",
        company: "Pragna Institute of Technology",
        quote:
          "Implementing VithSutra’s Biometric System in our engineering college has been a game-changer. Our students now mark attendance through fingerprint scans, replacing the old, time-consuming paper-based method. It has reduced manual errors, saved faculty time, and improved overall efficiency. The deployment was smooth, and the system has been performing consistently across all departments.",
      },
      {
        id: 2,
        avatar:
          "/Products/biometric-product/testimonialprofilephoto/images_1.png",
        name: "Dinesh Rao",
        title: "Operations Officer",
        company: "VMax Die Casting",
        quote:
          "We’ve deployed the Biometric System from VithSutra across our die casting industry units, with over 200+ installations now in place. More than 1,000 employees across India use it daily for secure, hassle-free access and attendance. The system is reliable, efficient, and has proven to be a strong fit for our industrial environment.",
      },
    ],
    productspecification:[
      {
        description:"Dust and tamper resistent casing",
        heading:"Durabel casing",
        icon:"/Products/biometric-product/Technical/durabel.png"
      },
      {
        description:"Operates on 5V or 12v DC",
        heading:"Power",
        icon:"/Products/biometric-product/Technical/thunderbolt.png"
      },
      {
        description:"USB/Serial/Wi-Fi (based on model)" ,
        heading:"",
        icon:"/Products/biometric-product/Technical/no-connection.png",
      },
      {
        description:"Time and role based rule engine",
        heading:"Custom Access Logic",
        icon:"/Products/biometric-product/Technical/custome.png",
      }
      ,{
        description:"Ensures secure communication over USB,Wi-Fi or Serial",
        heading:"Encripted Communication",
        icon:"/Products/biometric-product/Technical/custome.png",
      }
      ,{
        description:"Supports dry wet and rough fingerprints",
        heading:"High-Precision Sensor",
        icon:"/Products/biometric-product/Technical/senser.png"
      }
    ],
    applications: [
      {
        image: "/Products/biometric-product/application/biometricfactory1.png",
        industry: "Industries & Manufacturing Units",
        description:
          "Restricted Area Access: Only authorized personnel can enter hazardous or sensitive zones. Production Floor Time Logs: Track when operators begin and finish tasks for productivity analysis.",
      },
      {
        image: "/Products/biometric-product/application/biometricinschool1.png",
        industry: "Educational Institutions (Schools, Colleges, Hostels)",
        description:
          "Student Attendance Tracking: Eliminate paper registers; automate attendance with fingerprint scans. Staff Clock In/Out: Accurately track faculty and admin staff working hours.",
      },
      {
        image: "/Products/biometric-product/application/office.png",
        industry: "Corporate Offices",
        description:
          "Employee Attendance & HR Integration: Sync biometric data with HR systems for payroll and leave tracking. Meeting Room or Floor Access Control: Control who enters specific workspaces or departments.",
      },
    ],
    // gallery: [
    //   "/Products/biometric-product/main_photo2.svg",
    //   "/Products/biometric-product/biometric-singal-photo.svg",
    //   "/Products/biometric-product/TechPhoto.svg",
    // ],
    FaQ: [
      {
        qution: "How does the biometric system help in student attendance?",
        answer:
          "It accurately records each student's attendance using thumbprint authentication, eliminating proxies and manual errors.",
      },
      {
        qution: "Is the biometric device suitable for children of all ages?",
        answer:
          "Yes, it's ergonomically designed and installed at a height suitable for children, making thumb scanning easy and quick.",
      },
      {
        qution: "Does it work without an internet connection?",
        answer:
          "Yes, it can store attendance offline and sync data later when reconnected to the internet.",
      },
      {
        qution:
          "Can the system generate attendance reports for teachers or parents?",
        answer:
          "Absolutely, it can generate automated reports and can be integrated with dashboards or parent notification systems.",
      },
      {
        qution:
          "Is the biometric data secure and compliant with privacy standards?",
        answer:
          "Yes, all biometric data is encrypted and securely stored to protect student privacy and comply with institutional guidelines.",
      },
    ],
    facts: [
      {
        number: 2000,
        suffix: "+",
        title: "Students Educated",
      },
      {
        number: 1000,
        suffix: "+",
        title: "Products Deployed",
      },
    ],
    link: "/products/biometric-product",
  };