import { text } from "@/lib/typography";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mx-auto w-full pb-5 md:pb-12 ${className}`}>
      <div className="">
        <span className="text-xs sm:text-sm  font-medium tracking-wider text-company-gray-text">
          {label}
        </span>
      </div>
    
      <h1 className={`${text.Sectiontext} text-company-black mb-2 md:mb-6`}>
        {title}
      </h1>
    </div>
  );
} 