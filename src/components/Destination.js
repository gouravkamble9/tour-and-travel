import React from "react";
import './DestinationStyle.css'
import DestinationData from "./DestinationData";
import moun1 from '../assets/1.jpg'
import moin2 from '../assets/2.jpg'
import moun3 from '../assets/photo-1.jpeg'
import moun4 from '../assets/photo-2.jpg'

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame</p>
        <DestinationData
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut deserunt tempora obcaecati repellendus sapiente voluptatem doloremque nemo aliquam voluptatibus, fugit eveniet voluptate, culpa reiciendis soluta itaque totam, sequi dolores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos assumenda rerum ipsam doloremque in nihil debitis at hic tempora, atque excepturi."
        img1={moun1}
        img2={moin2}
        />
        <DestinationData
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut deserunt tempora obcaecati repellendus sapiente voluptatem doloremque nemo aliquam voluptatibus, fugit eveniet voluptate, culpa reiciendis soluta itaque totam, sequi dolores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos assumenda rerum ipsam doloremque in nihil debitis at hic tempora, atque excepturi."
        img1={moun3}
        img2={moun4}
        cName="first-des-reverse"
        />
    </div>
  );
};

export default Destination;
