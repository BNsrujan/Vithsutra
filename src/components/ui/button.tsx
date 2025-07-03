import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { text } from "@/lib/typography";

const buttonVariants = cva(
  `inline-flex items-center justify-center ${text.Buttontext} whitespace-nowrap text-sm font-medium transition-all duration-200 ease-in-out 
   disabled:pointer-events-none 
   [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 
   outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
   aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default:
          "bg-company-primary-royalBlue rounded-[8px] text-company-white hover:bg-primary/90 hover:text-blue-100",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary rounded-[8px] border border-company-primary-royalBlue text-secondary-foreground  hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link:
          "text-primary underline-offset-4 hover:underline",

        neumorphic: `
          rounded-[8px] px-[20px] py-[10px] font-semibold text-white
          duration-300
          bg-gradient-to-b from-[#214CCE] to-[#4169E1]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.33),0_3px_4px_rgba(65,105,225,0.15),0_0_0_1px_rgba(65,105,225,1)]
          hover:from-[#214CC4] hover:to-[#4169E1] hover:duration-700
          hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_6px_rgba(65,105,225,0.25),0_0_0_1px_rgba(65,105,225,1)]
          active:translate-y-[1px] active:shadow-[inset_0_2px_1px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.1)]
        `
      },

      size: {
        default: "h-9 px-9 py-6 has-[>svg]:px-3",
        sm: "h-8 rounded-[12px] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
