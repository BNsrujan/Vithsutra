import React from "react";
import Image from "next/image";
import { text } from "@/lib/typography";
interface ProcessStepCardProps {
  image: string;
  title: string;
  description: string;
  showArrow?: boolean;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  image,
  title,
  description,
  showArrow = false,
}) => (
  <div className="relative flex flex-col text-start bg-company-litest-gray justify-center rounded-[28px] p-6 ">
    <div className="w-full flex justify-center border   rounded-[24px]">
      <Image
        src={image}
        width={150}
        height={150}
        alt={title}
        className="w-50 h-50 mb-4 rounded-2xl object-contain"
      />
    </div>
    <div className="bottom-0 flex flex-col  w-full ">
      <h3 className={` ${text.cardBodytext}text-lg font-semibold text-start  `}>
        {title}
      </h3>
      <p className="text-gray-600  mb-2 ">{description}</p>
    </div>
    {showArrow && (
      <div className="hidden md:block absolute right-[-32px] top-1/2 -translate-y-1/2">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )}
  </div>
);

export default ProcessStepCard;
