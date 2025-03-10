// src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted'

function App() {
  return (
    <BrowserRouter>
      {/* 
        1) Make the container a flex column with min-h-screen 
           so it spans the entire viewport height.
      */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* 
          2) The main content is set to flex-grow, 
             so it expands to fill available space.
        */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>

        {/* 3) The Footer sits at the bottom once main has grown */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
