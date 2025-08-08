"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { typography } from "@/shared/lib/typography";
import { containerVariants, itemVariants } from "@/shared/lib/motion";
import Heading from "./ui/heading.ui";

function Counter({
  end,
  suffix,
  duration = 2,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min(
              (currentTime - startTime) / (duration * 1000),
              1
            );
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
      {count}
      {suffix}
    </span>
  );
}

interface Fact {
  number: number;
  title: string;
  suffix: string;
}

interface factsProps {
  facts: Fact[];
}

export default function QuickFacts({ facts }: factsProps) {
  return (
    <section className=" md:px-0 py-24 flex justify-center w-full">
      <div className="max-w-company-section-width w-full ">
        <section className="w-full max-w-company-section-width   ">
          <motion.div
            className="w-full mx-auto "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Heading heading="Achievements" Display="What We've Built So Far" />

            <motion.div
              className="grid grid-cols-2 md:h-[300px]  pt-company-xs-8  xl:grid-cols-4 my-company-xl-48"
              variants={containerVariants}
            >
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  variants={itemVariants}
                  custom={index}
                  className="text-center "
                >
                  <div className="mb-company-sm-12">
                    <span
                      className={`${typography.display.large} text-[var(--company-primary-royalBlue)]`}
                    >
                      <Counter end={fact.number} suffix={fact.suffix} />
                    </span>
                  </div>
                  <h3
                    className={`${typography.title.large} text-[var(--company-blue-black)] `}
                  >
                    {fact.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
