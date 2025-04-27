"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Shubhang.C.S",
    designation: "Design Head & Quality Assurence Manager",
    image:
      "/TeamProfile/shubhang_cs.png",
  },
  {
    id: 2,
    name: "Gowtham.M.A",
    designation: "Chief Technical Manager",
    image:
      "/TeamProfile/gowtham_ma.png",
  },
  {
    id: 3,
    name: "Sumith.K.S",
    designation: "Chief Operational Manager",
    image:
      "/TeamProfile/sumith_ks.png",
  },
  {
    id: 4,
    name: "Srujan.K.M",
    designation: "Developer & Product Resource Manager",
    image:
      "/TeamProfile/srujan.png",
  },
  {
    id: 5,
    name: "Kiran Kashyap",
    designation: "Marketing Head & Company Relationship Manager",
    image:
      "/TeamProfile/kiran_kashyap.png",
  },
  {
    id: 6,
    name: "Sathwik.K.D",
    designation: "Developer & Media Officer",
    image:
      "/TeamProfile/sathwik_kd.png",
  },
  {
    id:7,
    name:"Gagan",
    designation:"solder artist",
    image:"/TeamProfile/gagan.png"
  }
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full h-30">
      <AnimatedTooltip items={people} />
    </div>
  );
}
