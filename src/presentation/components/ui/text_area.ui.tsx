import * as React from "react"
import { cn } from "@/shared/lib/utils"
import { typography } from "@/shared/lib/typography";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  id?: string;
  helpText?: string;
}

function Textarea({ label, id, helpText, className, ...props }: TextareaProps) {
  return (
    <div className="px-company-lg-24">
      {label && (
        <label htmlFor={id} className={`${typography.label.medium} text-company-gray pt-[14px]`}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        data-slot="textarea"
        className={cn(
          `border-company-primary-royalBlue my-[10px] px-company-md-16 py-company-md-16 dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-company-button-8 border bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50 file:text-company-white placeholder:text-company-primary-royalBlue/50 md:w-full max-w-[600px] selection:bg-company-white selection:text-company-white text-base transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-company-primary-royalBlue focus-visible:ring-company-primary-royalBlue focus-visible:ring-[1px] duration-500 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive placeholder:font-semibold font-semibold`,
          className,
          typography.body.medium
        )}
        {...props}
      />
      <div className="h-[14px]">
        {helpText && (
          <p className={`${typography.label.medium} text-red-600`}>
            {helpText}
          </p>
        )}
      </div>
    </div>
  )
}

export { Textarea }
