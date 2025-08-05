import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "./button.ui";

interface ArrowButtonProps {
  onClick?: () => void;
  className?: string;
  isTouched?: boolean;
}

export default function ArrowButtons({
  onClick,
  className = "",
  isTouched = false,
}: ArrowButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`absolute z-50 right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 bg-company-white rounded-full p-5 md:p-8 md:w-16 transition-all duration-700 ease-in-out  text-company-black group-hover:bg-company-primary-royalBlue group-hover:text-company-white-text ${className}`}
    >
      <ArrowUpRightIcon
        className={`  w-icon-width h-icon-height ${
          isTouched
            ? "text-company-white"
            : "text-company-text-gray group-hover:text-company-white-text"
        } transition-all duration-700 ease-in-out`}
        strokeWidth={2.5}
        
      />
    </Button>
  );
}
