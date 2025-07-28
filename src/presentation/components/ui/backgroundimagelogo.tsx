import React from "react";
import Image from "next/image";

function backgroundimagelogo() {
  return (
    <div>
      {" "}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/logo/company_logo_without_text.png"
          alt="Company Logo"
          fill
          className="opacity-10 object-contain"
        />
      </div>
    </div>
  );
}

export default backgroundimagelogo;
