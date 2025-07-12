import React from "react";
import Image from "next/image";
import { text } from "@/lib/typography";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, company, quote, avatar }) => (
  <div className="bg-company-primary-royalBlue/10    border-company-primary-royalBlue/20 border rounded-2xl p-8 md:p-12  transition-all duration-500 ease-in-out flex items-center min-h-[320px] md:min-h-[230px] w-full lg:min-w-[500px] lg:h-[280px]">
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-[4rem] h-[4rem] md:w-24 overflow-hidden md:h-24 bg-gray-300 rounded-full flex items-center justify-center">
          {avatar ? (
            <Image className="h-full w-full object-cover" src={avatar} width={100} height={100} alt={name} />
          ) : (
            <span className="text-2xl md:text-3xl font-bold text-gray-600">{name.charAt(0)}</span>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 space-y-4">
        <div>
          <h3 className={`${text.cardHeadingtext}`}>{name}</h3>
          <p className={`${text.Navtext} font-medium text-gray-500`}>
            {title}, {company}
          </p>
        </div>
        <blockquote className={`${text.cardBodytext} text-gray-900 leading-relaxed`}>
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </div>
  </div>
);

export default TestimonialCard; 