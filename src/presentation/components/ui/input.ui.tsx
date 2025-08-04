import * as React from "react"
import { cn } from "@/shared/lib/utils"
import {text }from "@/shared/lib/typography"

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  helpText?: string;
  id?:string;
}

function Input({ className, id, label, helpText, type, placeholder, ...props }: InputProps) {
  return (
    <div className="px-company-lg-24">
      {label && (
        <label htmlFor={id} className={`${text.labelText}  text-company-gray  pt-company-sm-12 `}>
          {label}
        </label>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          `file:text-company-white placeholder:text-company-primary-royalBlue/50  md:w-full max-w-[600px]  selection:bg-company-white selection:text-company-white my-[8px] px-company-md-16 py-company-md-16 dark:bg-input/30  flex w-full min-w-0 rounded-company-button-8 border border-company-primary-royalBlue bg-transparent   outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 `,
          "focus-visible:border-company-primary-royalBlue focus-visible:ring-company-primary-royalBlue  focus-visible:ring-[1px] duration-500",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  placeholder:font-semibold font-semibold",
          className,
          text.inputplaceholdertext
        )}
        placeholder={placeholder || "Enter Your Name"}
        
        {...props}
      />
      <div className="h-company-md-16">
      {helpText && (
        <p className={`${text.labelText}  text-red-600 `}>
          {helpText}
        </p>
      )}
      </div>
    </div>
  )
}

export { Input }
