import React from "react";
import Image from "next/image";

function Backgroundimagelogo() {
  return (
    <div>
      <div className="hidden absolute top-0 right-0 -z-10 md:flex items-end w-[800px] h-full">
        <Image
          src="/home/herosection.png"
          alt="Company Logo"
          fill
          className=" object-contain"
        />
      </div>
    </div>
  );
}

export default Backgroundimagelogo;
