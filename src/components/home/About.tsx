"use client"

import { text } from "../../lib/typography";
import { SectionHeader } from "../ui/section-header";

export default function About() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/3">
            <SectionHeader 
              label="ABOUT US"
              title="Why Choose Vithsutra"
            />
            
            <p className={`${text.cardBodytext} text-[var(--company-mid-gray)]`}>
              To revolutionize how businesses interact with technology by creating
              intelligent, integrated solutions that anticipate future challenges
              and place our clients at the forefront of digital transformation. By
              2030, we aim to be a global leader in technological innovation,
              empowering organizations across continents to achieve unprecedented
              efficiency, growth, and competitive advantage.
            </p>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="aspect-video w-full overflow-hidden rounded-[28px] bg-[var(--company-white)] shadow-xl">
              <video 
                className="w-full h-full object-cover"
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
