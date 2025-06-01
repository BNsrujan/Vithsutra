import React from 'react'
import About from './About'
import Hero from './herosection'
import WeOfferSection from './domain'
import AutomationSection from './sectore'
import { CarouselSpacing } from './carouselApplication'

function Homepage() {
  return (
    <div className='flex flex-col justify-center overflow-x-hidden'>
      <Hero/>
      <div className='flex flex-col  justify-center m-auto pt-30 max-w-[1399px]'>
      <div className='lg:pb-[800px]'>
      <About/>
      </div>
      <AutomationSection/>
      <WeOfferSection/>
      <CarouselSpacing/>
      </div>
    </div>
  )
}

export default Homepage