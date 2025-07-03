import * as React from "react"

import { cn } from "@/lib/utils"
import {text }from "@/lib/typography"
function Input({ className, type,  placeholder ,...props  }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `file:text-company-white placeholder:text-company-primary-royalBlue/50  md:w-full max-w-[600px]  selection:bg-company-white selection:text-company-white dark:bg-input/30  flex w-full min-w-0 rounded-[8px] border border-company-primary-royalBlue bg-transparent px-[12px] py-[16px] text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 `,
        "focus-visible:border-company-primary-royalBlue focus-visible:ring-company-primary-royalBlue  focus-visible:ring-[1px] duration-500",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  placeholder:font-semibold font-semibold",
        className,
        text.inputplaceholdertext
      )}
      placeholder={placeholder || "Enter Your Name"}
      
      {...props}
    />
  )
}

export { Input }
