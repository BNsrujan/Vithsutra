// app/components/IndustrySkillsHighlights.tsx
"use client";

import { text } from "@/shared/lib/typography";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Bridge the gap between academics and industry skills",
  "Equip students with future ready automation knowledge",
  "Provide hands-on exposure with real industrial robots",
  "Boost placements through practical, project-based learning",
];

export default function IndustrySkillsHighlights() {
  return (
    <section className="w-full bg-white  ">
      <div className=" mx-auto text-center">
        
        <ul className="grid gap-6 grid-cols-1 text-left">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-green-600 mt-1" size={22} />
              <span className={`${text.Extratext} text-gray-700`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
