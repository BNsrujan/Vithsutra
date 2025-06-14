"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { text } from "@/lib/typography";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "../ui/section-header";

const facts = [
  {
    number: 100,
    suffix: "+",
    title: "Projects Completed",
    description: "Successfully delivered innovative solutions across various industries"
  },
  {
    number: 50,
    suffix: "+",
    title: "Expert Team",
    description: "Skilled professionals dedicated to delivering excellence"
  },
  {
    number: 15,
    suffix: "+",
    title: "Years Experience",
    description: "Decades of expertise in industrial automation and innovation"
  },

];

function Counter({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = React.useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef} className="inline-block">
      {count}{suffix}
    </span>
  );
}

export default function QuickFacts() {
  return (
    <section className="flex flex-col justify-center">
      <motion.div 
        className="max-w-[1400px] mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader 
          label="QUICK FACTS"
          title="Our Impact in Numbers"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 "
          variants={containerVariants}
        >
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              variants={itemVariants}
              custom={index}
              className="text-center"
            >
              <div className="mb-4">
                <span className={`${text.Sectiontext} text-[var(--company-primary-royalBlue)]`}>
                  <Counter end={fact.number} suffix={fact.suffix} />
                </span>
              </div>
              <h3 className={`${text.Sectionbodytext} text-[var(--company-blue-black)] mb-2`}>
                {fact.title}
              </h3>
              
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
} 