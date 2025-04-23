"use client";
import React, { FC, SVGProps, useState } from "react";
import { cn } from "@/lib/utils"; 

interface IconButtonProps{
  icon:FC<SVGProps<SVGSVGElement>>;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon:Icon}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out",
        "bg-transparent text-gray-400 hover:text-blue-600"
      )}
    >
     
      <div
        className={cn(
          "absolute inset-0 z-0 rounded-full transition-opacity duration-500 ease-in-out",
          isHovered ? "opacity-100" : "opacity-0",
          "bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.4)_0%,_transparent_80%)]"
        )}
      ></div>
      <Icon className="w-4 h-4 z-10" />
    </button>
  );
};
