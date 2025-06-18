import { text } from "@/lib/typography";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mx-auto w-full pb-[10px] md:pb-[24px] ${className}`}>
      <div className="">
        <span className="text-xs sm:text-sm pb-[24px] uppercase font-medium tracking-wider text-company-gray-text">
          {label}
        </span>
      </div>
    
      <h1 className={`${text.Sectiontexthead} text-company-black `}>
        {title}
      </h1>
    </div>
  );
} 