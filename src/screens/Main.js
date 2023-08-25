import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Hero from '../components/Hero'
import Network from '../components/Network'
import HeroBelow from '../components/HeroBelow'
const Main = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeroBelow/>
      <Network/>
      <Partners/> 
      <Footer/>
    </>
  )
}

export default Main