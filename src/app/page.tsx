import WhyVithsutra from "@/components/About";

import WeOfferSection from "@/components/Fratured";
import Hero from "@/components/Hero";
// import { AppleCardsCarouselDemo } from "@/components/ourProduct";
import AutomationSection from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-center m-auto  max-w-[1400px] bg-company-white">
      <Hero />
      <WhyVithsutra />
      <AutomationSection />
      <WeOfferSection />
      {/* <AppleCardsCarouselDemo /> */}
    </div>
  );
}
