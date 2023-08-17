import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../assets/photo-2.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero
        cName="hero" 
        img={heroImg} 
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        
    </div>
  )
}

export default Home