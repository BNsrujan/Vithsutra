import { type Variants } from "motion/react"

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // <motion.div
  //           initial={{ opacity: 0, y: 30 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
  //           key={`${index}+${feature.title}`}
  //           className="rounded-[24px] p-12 h-96 relative bg-cover bg-company-light-light-gray "
  //           style={{ backgroundImage: `url(${feature.bgImage}) opacity-20 ` }}
  //         >
  //           <div className="max-w-md">
  //             <h3 className="text-xl font-semibold text-company-white mb-1">
  //               {feature.title}
  //             </h3>
  //             <p className="text-company-text-gray text-sm">
  //               {feature.description}
  //             </p>
  //           </div>
  //         </motion.div>

  // Fade in from bottom
  export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: { opacity: 0, y: 20 }
  }

  // Fade in from top
  export const fadeInDown: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: { opacity: 0, y: -20 }
  }

  // Scale in
  export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }

  // Stagger children
  export const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Fade in with delay
  export const fadeInWithDelay = (delay: number = 0): Variants => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay }
  })

  // Modal animations
  export const modalOverlay: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  export const modalContent: Variants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 }
  }

  // Card hover animations
  export const cardHover: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
  }

  // Grid item animations
  export const gridItem: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  }

  // Bento grid item animations
  export const bentoItem: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  // Navigation menu animations
  export const navigationMenu: Variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  // Testimonial card animations
  export const testimonialCard: Variants = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  }

  // Hero section animations
  export const heroContent: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  }

  // Feature card animations
  export const featureCard: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }

  // Case study card animations
  export const caseStudyCard: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  // Partner logo animations
  export const partnerLogo: Variants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.3 }
  }

  // Form field animations
  export const formField: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }

  // Button animations
  export const buttonHover: Variants = {
    initial: { scale: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }

  // Image hover animations
  export const imageHover: Variants = {
    initial: { scale: 1 },
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 }
  }

  // Text reveal animations
  export const textReveal: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  }

  // Section title animations
  export const sectionTitle: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  }

  // List item animations
  export const listItem: Variants = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }
  }

  // Page transition animations
  export const pageTransition: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  }