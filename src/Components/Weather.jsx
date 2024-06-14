import React, { useState } from "react";
import "./Weather.css";
import { FaSearch } from "react-icons/fa";
import { RiCelsiusFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";


const Weather = () => {
  let [weather, setWeather] = useState(null);
  let [input, setInput] = useState("");

  let fetchApi = async () => {
    let city = input;
    let apiKey = `358a8dc4cea7e294135d02b1f3259d19`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(apiUrl);
    let data = await response.json();
    setWeather(data);
  };

  let searchWeather = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <div className="weather">
      <div className="search">
        <input
          type="text"
          onChange={searchWeather}
          placeholder="Enter your city name"
        />
        <button onClick={fetchApi}>
          <FaSearch />
        </button>
      </div>
      {/* <div className="img">
        <img src="./src/assets/images.jpg" height="180px" width="200px" />
      </div> */}
      {weather && (
        <div className="data">
          <h1>
            {weather.main.temp} <RiCelsiusFill />
          </h1>

          <h2>
            <FaLocationDot style={{color:"green"}} /> {weather.name}
          </h2>
          <h3><TiWeatherPartlySunny />{weather.weather[0].description}</h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
