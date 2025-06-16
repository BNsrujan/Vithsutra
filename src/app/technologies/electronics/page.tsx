import React from 'react'

export default function Electronics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Advanced Electronics Solutions</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          We provide cutting-edge electronic solutions and components for various industrial applications.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Custom PCB design and manufacturing</li>
          <li>Embedded systems development</li>
          <li>Power electronics solutions</li>
          <li>Sensor integration</li>
          <li>Control systems design</li>
        </ul>
      </div>
    </div>
  )
} 