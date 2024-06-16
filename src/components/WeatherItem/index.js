

import React from 'react';


import { FaWind } from "react-icons/fa";

import { WiHumidity } from "react-icons/wi";



import './index.css'



const WeatherItem = (props) => {
  const { weatherData } = props;
  const { location, temperature, humidity, windspeed,icon} = weatherData;
  
  const datetime = new Date().toLocaleString();
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;


  return (
    <div>
        <img src={iconUrl} alt="weather-condition"/>
      <h1>{temperature}°C</h1>
      <p className="item"><strong>Location:</strong> {location}</p>
      <p className="item"><strong>Date and Time:</strong> {datetime}</p>
      <div className="container">
      <WiHumidity/>
      <p className='special-item'><strong>Humidity:</strong> {humidity}%</p>
      </div>
      <div className="container">
      <FaWind/>
      <p className='special-item'><strong>Windspeed:</strong> {windspeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherItem;
