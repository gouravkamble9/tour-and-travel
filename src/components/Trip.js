import React from "react";
import "./TripStyle.css";
import im1 from "../assets/5.jpg";
import TripData from "./TripData";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps</p>
      <div className="trip-card">
        <TripData
          img={im1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut deserunt tempora obcaecati repellendus sapiente voluptatem doloremque nemo aliquam voluptatibus, fugit eveniet voluptate, culpa reiciendis soluta itaque totam, sequi dolores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos assumenda rerum ipsam doloremque in nihil debitis at hic tempora, atque excepturi."
        />
        <TripData
          img={im1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut deserunt tempora obcaecati repellendus sapiente voluptatem doloremque nemo aliquam voluptatibus, fugit eveniet voluptate, culpa reiciendis soluta itaque totam, sequi dolores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos assumenda rerum ipsam doloremque in nihil debitis at hic tempora, atque excepturi."
        />
        <TripData
          img={im1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut deserunt tempora obcaecati repellendus sapiente voluptatem doloremque nemo aliquam voluptatibus, fugit eveniet voluptate, culpa reiciendis soluta itaque totam, sequi dolores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos assumenda rerum ipsam doloremque in nihil debitis at hic tempora, atque excepturi."
        />
        <TripData
          img={im1}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aut deserunt tempora obcaecati repellendus sapiente voluptatem doloremque nemo aliquam voluptatibus, fugit eveniet voluptate, culpa reiciendis soluta itaque totam, sequi dolores!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dignissimos assumenda rerum ipsam doloremque in nihil debitis at hic tempora, atque excepturi."
        />
      </div>
    </div>
  );
};

export default Trip;
