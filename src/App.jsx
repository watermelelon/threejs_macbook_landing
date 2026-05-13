import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

//Make sure its globally accesible 
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />  
      <ProductViewer />
    </main>
  )
}

export default App