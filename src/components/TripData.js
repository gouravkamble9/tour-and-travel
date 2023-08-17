import React from 'react'
import './TripStyle.css'


const TripData = ({img,heading,text}) => {
  return (
    <div className='t-card'>
        <div className='t-img'>
            <img src={img} alt="img" />
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
    </div>
  )
}

export default TripData