import Hero from "./herosection.section";
import About from "./about.section";
import WeOfferSection from "./domain.section";
import CardSection from "./ourproduct.section";
import IndustriesSection from "./Industries.section";
import UniqueFeatures from "./uniquefeatures.section";
import QuickFacts from "@/presentation/components/quick_factes.section";
// import VentureCapital from "./venturecapital.section";

const facts = [
  {
    number: 2000,
    suffix: "+",
    title: "Students Educated",
  },
  {
    number: 1000,
    suffix: "+",
    title: "Products Deployed",
  },
  
  {
    number: 15,
    suffix: "+",
    title: "Domains Served",
  },
  {
    number: 2,
    suffix: "+",
    title: "Years Of Experience",
  },
];


function Homepage() {
  return (
    <main className="w-full ">
      <Hero />
      <div className="container mx-auto ">
        <div className="space-y-24 max-w-company-section-width mx-auto px-company-xs-8">
          <About />
          <WeOfferSection />
          <CardSection />
          <IndustriesSection />
          {/* <VentureCapital /> */}
          <UniqueFeatures />
          <QuickFacts facts={facts} />
        </div>
      </div>
    </main>
  )
}

export default Homepage