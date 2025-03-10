// src/pages/Services.tsx
import React from 'react'

const Services: React.FC = () => {
  return (
    <section className="flex-grow bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-700 mb-6">
          We offer a wide range of construction and renovation services to meet your needs:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Residential Construction</li>
          <li>Commercial Construction</li>
          <li>Renovation & Remodeling</li>
          <li>Architectural Design & Planning</li>
          <li>Project Management & Consultation</li>
        </ul>
      </div>
    </section>
  )
}

export default Services
