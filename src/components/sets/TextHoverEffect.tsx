import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
 
export function TextHoverEffects() {
  return (
    <div className="h-[400px] flex items-center justify-center bg-black ">
      <TextHoverEffect text="Vithsutra" automatic={true} />
    </div>
  );
}