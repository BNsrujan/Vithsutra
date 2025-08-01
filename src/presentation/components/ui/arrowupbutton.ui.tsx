import { ArrowUpRightIcon } from "lucide-react";



interface ArrowButtonProps {
  onClick?: () => void;
  className?: string;
  isTouched?: boolean;
}

export default function ArrowButtons ({
    onClick,
    className = "",
    isTouched = false,
  }: ArrowButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`absolute  z-50 sm:right-1 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 bg-company-white rounded-full p-4 sm:p-5 md:p-8 transition-all duration-700 ease-in-out  text-company-black group-hover:bg-company-primary-royalBlue group-hover:text-company-white-text'} ${className}`}
      >
        <ArrowUpRightIcon
          className={`h-4 w-4 sm:h-6 sm:w-6 text-company-black ${
            isTouched
              ? "text-company-white Group-hover:text-company-primary-royalBlue"
              : "text-company-text-gray group-hover:text-company-white-text"
          } transition-all  duration-700 ease-in-out`}
          strokeWidth={3}
        />
      </button>
    );
  };