"use client"

import { text } from "../../lib/typography";
import { SectionHeader } from "../ui/section-header";

export default function About() {
  return (
    <section className="h-full  md:h-screen flex justify-center items-center">
      <div className="mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-[28px] w-full">
          <div className="w-full lg:w-2/3">
            <SectionHeader 
              label="ABOUT US"
              title="Why Choose Vithsutra"
            />
            
            <p className={`${text.cardBodytext} text-[var(--company-mid-gray)]`}>
            To be a global leader in IoT and robotics, delivering precision-engineered products that seamlessly blend advanced technology with elegant design. We envision a world where simplicity drives innovation, and every solution we create empowers businesses and individuals through reliable, beautifully crafted technology.
            </p>
          </div>

          <div className="w-full lg:w-1/3 h-full">
            <div className="aspect-video w-full overflow-hidden rounded-[16px] bg-[var(--company-white)] shadow-xl">
              <video 
                className="w-full h-full object-cover m-0 p-0"
                autoPlay 
                loop 
                muted
                playsInline
              >
                <source src="/video/video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
