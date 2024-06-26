import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technology from './Components/Technology'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Lenis from '@studio-freight/lenis'

const App = () => {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-900 selection:text-pink-700'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App