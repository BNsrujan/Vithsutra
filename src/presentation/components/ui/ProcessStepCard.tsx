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
  <div className="relative flex flex-col text-start border-company-primary-royalBlue/20 max-w-[266px]  md:h-[390px] border justify-between w-full  rounded-company-button-8 p-company-md-16">
    <div className="w-full flex justify-center  items-center border max-w-[250px] bg-company-litest-gray  rounded-company-button-8">
      <Image
        src={image}
        width={150}
        height={150}
        alt={title}
        className="w-50 h-50 mb-4 rounded-2xl object-contain "
      />
    </div>
    <div className="bottom-0 flex flex-col   justify-center  items-start my-auto   pt-company-xs-8  w-full  ">
      <h3 className={` ${text.cardHeadingsmall}text-lg font-semibold  text-start  `}>
        {title}
      </h3>
      <p className={`${text.cardBodytextlight}text-gray-600  pt-company-xs-8 `}>{description}</p>
    </div>
    {showArrow && (
      <div className="hidden md:block absolute right-[-72px] top-1/2 -translate-y-1/2">
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
