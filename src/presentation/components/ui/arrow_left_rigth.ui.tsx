import React from "react";
import { Button } from "./button.ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowLeftRightProps {
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

export default function ArrowLeftRight({
  scrollLeft,
  scrollRight,
  canScrollLeft,
  canScrollRight,
}: ArrowLeftRightProps) {
  return (
    <div>
      <div className="absolute -bottom-16 sm:-bottom-12 right-12 sm:right-16 md:right-20 flex gap-2 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 border-company-primary-royalBlue/20 hover:bg-company-primary-royalBlue/20 text-gray-600 shadow-lg backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 border-company-primary-royalBlue/20 hover:bg-company-primary-royalBlue/20 text-gray-600 shadow-lg backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}
