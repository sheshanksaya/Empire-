// src/components/Navbar.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Clicking this will navigate back to the home page */}
        <Link to="/" className="text-xl font-bold text-gray-800 hover:underline">
          Empire Constructions
        </Link>
        <div>
          <Link className="text-gray-600 hover:text-gray-800 mx-2" to="/">Home</Link>
          <Link className="text-gray-600 hover:text-gray-800 mx-2" to="/about">About</Link>
          <Link className="text-gray-600 hover:text-gray-800 mx-2" to="/services">Services</Link>
          <Link className="text-gray-600 hover:text-gray-800 mx-2" to="/contact">Contact</Link>
          <Link className="text-gray-600 hover:text-gray-800 mx-2" to="/get-started">Get Started</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
