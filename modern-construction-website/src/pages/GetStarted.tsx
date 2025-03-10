// src/pages/GetStarted.tsx
import React from 'react'

const GetStarted: React.FC = () => {
  return (
    <section className="flex-grow bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Our Properties & Projects</h1>
        <p className="text-gray-700 mb-8">
          Explore our range of offerings, from apartments and houses to ongoing and upcoming constructions.
        </p>

        {/* A simple grid layout showcasing different categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Apartments for Sale */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Apartments for Sale</h2>
            <p className="text-gray-600 mb-4">
              Find modern apartments with top-notch amenities and prime locations.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Apartments
            </button>
          </div>

          {/* Houses for Sale */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Houses for Sale</h2>
            <p className="text-gray-600 mb-4">
              Spacious houses built with premium materials, perfect for families.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Houses
            </button>
          </div>

          {/* Ongoing Constructions */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Ongoing Constructions</h2>
            <p className="text-gray-600 mb-4">
              Stay updated on our latest projects currently under construction.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Upcoming Constructions */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Upcoming Constructions</h2>
            <p className="text-gray-600 mb-4">
              Get a sneak peek at our future projects and planned developments.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
