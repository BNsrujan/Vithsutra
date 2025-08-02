import React from 'react'
import About from './about.section'
import Hero from './herosection.section'
import WeOfferSection from './domain.section'
import CardSection from './ourproduct.section'
import IndustriesSection from './Industries.section'
// import  VentureCapital  from './venturecaopital.section'
import QuickFacts from '../../components/quickfactes.section'
import UniqueFeatures from './uniquefeatures.section'


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