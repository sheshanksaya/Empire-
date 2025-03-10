// src/components/Footer.tsx
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Empire Constructions. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
