import React from 'react'
import About from './About'
import Hero from './herosection'
import WeOfferSection from './domain'
import CardSection from './OurProducti'
import IndustriesSection from './IndustriesSection'
import { VentureCapital } from './VentureCaopital'
import QuickFacts from './QuickFacts'
import UniqueFeatures from './UniqueFeatures'

function Homepage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 ">
        <div className="space-y-24">
          <About />
          <WeOfferSection />
          <CardSection />
          <UniqueFeatures />
          <IndustriesSection />
          <VentureCapital/>
          <QuickFacts />
          
        </div>
      </div>
    </main>
  )
}

export default Homepage