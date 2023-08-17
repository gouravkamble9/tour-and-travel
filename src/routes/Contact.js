import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../assets/2.jpg'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <div>
        <Hero
        cName="hero-mid" 
        img={heroImg} 
        title="Contact"
        btnClass="hide"
        />
        <ContactUs/>
    </div>
  )
}

export default Contact