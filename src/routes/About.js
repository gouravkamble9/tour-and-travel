import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../assets/night.jpg'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
        <Hero
        cName="hero-mid" 
        img={heroImg} 
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
    </div>
  )
}

export default About