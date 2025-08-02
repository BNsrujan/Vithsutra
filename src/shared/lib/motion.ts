import { type Variants } from "motion/react";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, type: "spring", damping: 20, stiffness: 50 },
  },
};


export const aboutSection: Variants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  }
};

export const aboutContent: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }
};

export const aboutVideo: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  }
}; 

// Fade in from bottoml
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: { opacity: 0, y: 20 },
};

// Fade in from top
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: { opacity: 0, y: -20 },
};

// Scale in
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

// Stagger children
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Fade in with delay
export const fadeInWithDelay = (delay: number = 0): Variants => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

// Modal animations
export const modalOverlay: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContent: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
};

// Card hover animations
export const cardHover: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Grid item animations
export const gridItem: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

// Bento grid item animations
export const bentoItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

// Navigation menu animations
export const navigationMenu: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

// Testimonial card animations
export const testimonialCard: Variants = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Hero section animations
export const heroContent: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Feature card animations
export const featureCard: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// Case study card animations
export const caseStudyCard: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

// Partner logo animations
export const partnerLogo: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

// Form field animations
export const formField: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

// Button animations
export const buttonHover: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Image hover animations
export const imageHover: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
};

// Text reveal animations
export const textReveal: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

// Section title animations
export const sectionTitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: 0.2,
    },
  },
};

// List item animations
export const listItem: Variants = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
