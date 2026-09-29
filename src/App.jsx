import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Journey from './components/Journey.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

// Story order:
// INTRODUCTION → WHO I AM → MY JOURNEY → WHAT I BUILD WITH →
// WHAT I'VE BUILT → LET'S CONNECT
export default function App() {
  useReveal()

  return (
    <div className="min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8" aria-hidden="true">
          <div className="shimmer-line h-px w-full opacity-50" />
        </div>
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
