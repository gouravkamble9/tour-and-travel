import "./DestinationStyle.css";
import React from "react";

const DestinationData = ({ heading, text, img1, img2, cName }) => {
  return (
    <div
      className={
        cName == "first-des-reverse" ? "first-des-reverse" : "first-des"
      }
    >
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={img1} alt="l-img" />
        <img src={img2} alt="r-img" />
      </div>
    </div>
  );
};

export default DestinationData;
