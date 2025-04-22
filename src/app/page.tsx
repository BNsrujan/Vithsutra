import WhyVithsutra from "@/components/homepage/About";

import WeOfferSection from "@/components/homepage/Fratured";
import Hero from "@/components/homepage/Hero";
import Application from "@/components/homepage/Application";
import AutomationSection from "@/components/homepage/Services";
import Products from "@/components/homepage/Products";

export default function Home() {
  return (
    <div className="flex flex-col justify-center m-auto  max-w-[1800px]  bg-company-white">
      <Hero />
      <WhyVithsutra />
      <AutomationSection />
      <WeOfferSection />
      <Application/>
      <Products/>
    </div>
  );
}
