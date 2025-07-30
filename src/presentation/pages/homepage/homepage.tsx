import React from 'react'
import About from './About'
import Hero from './herosection'
import WeOfferSection from './domain'
import CardSection from './OurProducti'
import IndustriesSection from './IndustriesSection'
import  VentureCapital  from './VentureCaopital'
import QuickFacts from '../../components/QuickFacts'
import UniqueFeatures from './UniqueFeatures'


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
          <VentureCapital/>
          <UniqueFeatures />
          <QuickFacts facts={facts} />
        </div>
      </div>
    </main>
  )
}

export default Homepage