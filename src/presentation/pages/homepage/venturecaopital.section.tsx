"use client";

import React from "react";
import { InfiniteMovingCards } from "@/presentation/components/ui/infinitemovingcards.component";
import Heading from "@/presentation/components/ui/heading.ui";

export default function VentureCapital() {
  return (
    <div className="w-full">
      <Heading heading="" Display="Worked With" />
      {/* <h1  className="text-4xl font-bold  ">Worked With</h1> */}
      <div className="w-full h-[400px]  flex flex-col justify-center content-center">
        <div className="h-[7rem] md:h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    image: "/favicon/favicon.svg",
    name: "Company 1",
  },
  {
    image: "/favicon/favicon.svg",
    name: "Company 2",
  },
  {
    image: "/favicon/favicon.svg",
    name: "Company 3",
  },
  {
    image: "/favicon/favicon.svg",
    name: "Company 4",
  },
  {
    image: "/favicon/favicon.svg",
    name: "Company 5",
  },
];
