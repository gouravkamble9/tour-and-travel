import React from "react";
import "./TripStyle.css";
import im1 from "../assets/taj.jpeg";
import im2 from "../assets/golden.jpg";
import im3 from "../assets/charminar.jpg";
import im4 from "../assets/tirupati.jpg";
import TripData from "./TripData";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps</p>
      <div className="trip-card">
        <TripData
          img={im1}
          heading="Taj Mahal: Timeless Love in Marble"
          text="The Taj Mahal, a masterpiece of eternal love, stands as a symbol of architectural brilliance in Agra, India. Built by Emperor Shah Jahan in memory of his beloved wife, this white marble marvel evokes awe with its intricate details and serene reflection pools. A visit to the Taj Mahal is a journey into a love story that transcends time, leaving visitors enchanted by its timeless beauty and emotional resonance."
        />
        <TripData
          img={im2}
          heading="Golden Temple: Radiance of Spiritual Harmony"
          text="The Golden Temple in Amritsar, India, stands as a luminous beacon of spiritual unity. With its gilded exterior reflecting in the sacred pool, this Sikh shrine invites visitors to find solace in its serene ambiance. Beyond its gleaming beauty, the temple offers a glimpse into the heart of Sikh traditions, a place where all are welcomed with open arms. A visit here is a moment of tranquility and connection that resonates long after you leave."
        />
        <TripData
          img={im3}
          heading="Charminar: A Gateway to Hyderabad's Past"
          text="Charminar, nestled in the heart of Hyderabad, India, is a timeless symbol of the city's rich past. With its four graceful minarets, it beckons travelers to explore the vibrant bazaars and immerse themselves in the fusion of tradition and modernity. Ascend its minarets for a panoramic glimpse of Hyderabad's charm. A visit to Charminar is a journey through time, unveiling the essence of this captivating city."
        />
        <TripData
          img={im4}
          heading="Gwalior Fort: Where History Echoes Through Time"
          text="Perched regally above Gwalior, the Gwalior Fort is a living testament to India's past. Its towering presence, historic structures, and intricate details offer a captivating journey through time. This fortress encapsulates the tales of dynasties and valor, making each step a discovery of India's rich heritage. Explore its palaces and temples for a glimpse into the nation's history and architectural marvels. A visit to Gwalior Fort is an immersive experience that connects the present with a storied past."
        />
      </div>
    </div>
  );
};

export default Trip;
