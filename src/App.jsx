import React from 'react'
import  './Style.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Second from './components/Second'
import Hub from './components/Hub'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Second />
      <Hub />
      <Footer />

    </div>
  )
}

export default App