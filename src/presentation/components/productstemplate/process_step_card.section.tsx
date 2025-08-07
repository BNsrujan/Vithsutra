import React from "react";
import Image from "next/image";
import { typography } from "@/shared/lib/typography";
import Heading from "../ui/heading.ui";
import { Product } from "@/core/entities/product";



interface ProcessStepCardProps {
  image: string;
  title: string;
  description: string;
  showArrow?: boolean;
}


export default function Howitworks ({howItWorks}:{howItWorks:Product["howItWorks"]}) {
  return(
    <section className="px-company-md-16 md:px-8  min-h-screen flex  justify-center items-center w-full">
    <div className="max-w-company-section-width mx-auto w-full">
      <Heading
        heading="Simple, secure, and streamlined - our four-step process ensures reliable communication access"
        Display="How It Works"
        className="flex flex-col-reverse"
      />
      <div className="flex flex-col py-company-xl-48 md:flex-row items-center justify-between gap-company-xl-48 w-full">
        {howItWorks?.map((step, idx, arr) => (
          <ProcessStepCard
            key={step.title}
            image={step.image}
            title={step.title}
            description={step.description}
            showArrow={idx < arr.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
  )
}


export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
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
      <h3 className={` ${typography.body.large} text-start  `}>
        {title}
      </h3>
      <p className={`${typography.body.medium} text-gray-600`}>{description}</p>
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


