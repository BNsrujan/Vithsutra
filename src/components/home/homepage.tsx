import React from 'react'
import About from './About'
import Hero from './herosection'
import WeOfferSection from './domain'
import CardSection from './cardSection'
import IndustriesSection from './IndustriesSection'

import { VentureCapital } from './VentureCaopital'
import { Unique } from './Unique'
function Homepage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          <About />
          <WeOfferSection />
          <CardSection />
          <IndustriesSection />
          <VentureCapital/>
          <Unique/>
        </div>
      </div>
    </main>
  )
}

export default Homepage