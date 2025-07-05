import React from 'react'
import Navbar from '../../compents/welcome/Navbar'
import Hero from '../../compents/welcome/Hero'
import LogoTicker from '../../compents/welcome/LogoTicker'
import Intro from '../../compents/welcome/Intro'
import Feature from '../../compents/welcome/Feature'
import Integrations from '../../compents/welcome/Integrations'
import FAQ from '../../compents/welcome/FAQ'
import Try from '../../compents/welcome/Try'
import Footer from '../../compents/welcome/Footer'

const Welcome = () => (
  <div className='bg-neutral-950  '>
    <Navbar />
    <Hero/>
    <LogoTicker/>
    <Intro/>
    <Feature/>
    <Integrations/>
    <FAQ/>
    <Try />
    <Footer/>
  </div>
)

export default Welcome