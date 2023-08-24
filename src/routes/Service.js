import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../assets/pexels-ian-beckley-2440021.jpg'
import Trip from '../components/Trip'

function Service() {
  return (
    <div>
        <Hero
        cName="hero-mid" 
        img={heroImg} 
        title="Service"
        btnClass="hide"
        />
        <Trip/>
    </div>
  )
}

export default Service