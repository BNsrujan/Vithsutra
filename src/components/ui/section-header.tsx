import { text } from "@/lib/typography";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mx-auto pb-12 ${className}`}>
      <div className="inline-block rounded-full bg-company-light-light-gray">
        <span className="text-sm font-medium tracking-wider text-company-gray-text">
          {label}
        </span>
      </div>
    
      <h1 className={`${text.Sectiontext} text-company-black mb-6`}>
        {title}
      </h1>
    </div>
  );
} 