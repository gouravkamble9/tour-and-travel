import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../assets/sea.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero
        cName="hero" 
        img={heroImg} 
        title="Welcome to City"
        text="Where Culture Meets Heritage"
        btnText="Explore"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        
    </div>
  )
}

export default Home