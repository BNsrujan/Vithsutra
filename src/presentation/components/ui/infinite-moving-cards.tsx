"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./Skeleton";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
      setStart(true);
    }
  }, [direction, speed]);

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }
      `}</style>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-company-section-width overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item) => (
            <li
              className="relative w-[170px] max-w-full shrink-0 rounded-[8px] overflow-hidden md:w-[200px] "
              key={item.name}
            >
              <div className="flex items-center justify-center h-full">
                {/* <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                /> */}
                <Skeleton/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
