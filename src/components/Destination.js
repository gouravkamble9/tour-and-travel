import React from "react";
import './DestinationStyle.css'
import DestinationData from "./DestinationData";
import moun1 from '../assets/1.jpg'
import moin2 from '../assets/amer fort.jpg'
import moun3 from '../assets/Darjeeling.webp'
import moun4 from '../assets/sikkim.jpg'

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame</p>
        <DestinationData
        heading="Rajasthan"
        text="Step into the enchanting realm of Rajasthan, where history, culture, and splendor converge. This magnificent Indian state is a tapestry of regal palaces, vibrant bazaars, and vast desert landscapes. Immerse yourself in the royal heritage of Jaipur, the Pink City, adorned with ornate architecture and bustling markets. Wander through the labyrinthine lanes of Udaipur, the City of Lakes, and be captivated by its romantic allure. Explore the golden dunes of Jaisalmer and witness the ethereal beauty of the Thar Desert. From the grandeur of Jodhpur's Mehrangarh Fort to the spiritual aura of Pushkar's sacred ghats, Rajasthan offers a kaleidoscope of experiences that transport you to a bygone era. Embark on a journey through time and color, as Rajasthan's rich history and vibrant traditions paint an unforgettable picture of India's royal past."
        img1={moun1}
        img2={moin2}
        />
        <DestinationData
        heading="Darjeeling "
        text="Nestled among the rolling hills of the Himalayas, Darjeeling is a serene haven that beckons travelers with its breathtaking vistas and tranquil charm. Known as the Queen of the Hills, this picturesque town offers a soothing retreat from the bustling world. Wake up to the soft melody of mist-covered tea plantations, and savor the world-famous Darjeeling tea as you gaze at the majestic Kanchenjunga peak, the third-highest mountain in the world. Wander through the bustling markets, where colorful handicrafts and aromatic spices tell tales of local culture. Ride the iconic Darjeeling Himalayan Railway, a UNESCO World Heritage Site, and take in the unmatched views of lush valleys and dense forests. Whether you're an adventurer seeking hiking trails or a seeker of serenity, Darjeeling promises an unforgettable escape into the lap of nature's tranquility."
        img1={moun3}
        img2={moun4}
        cName="first-des-reverse"
        />
    </div>
  );
};

export default Destination;
