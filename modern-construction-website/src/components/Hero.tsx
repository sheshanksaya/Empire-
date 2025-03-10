// src/components/Hero.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1400x900/?construction')`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empire Constructions
        </h1>
        <p className="text-lg mb-8 max-w-md mx-auto">
          We deliver modern construction solutions that combine quality,
          innovation, and sustainability.
        </p>
        <div className="space-x-4">
          <Link
            to="/get-started"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="inline-block bg-gray-600 text-white py-3 px-6 rounded hover:bg-gray-700"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
