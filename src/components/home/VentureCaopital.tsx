"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { SectionHeader } from "../ui/section-header";

export function VentureCapital() {
  return (
    <div className="w-full">
      <SectionHeader label="" title="Worked With" />

      <div className="h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          className=""
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 1",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 2",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 3",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 4",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 5",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 6",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 7",
  },
  {
    image: "/logo/company_logo_with_text.png",
    name: "Company 8",
  },
];
