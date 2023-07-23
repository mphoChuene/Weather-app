import "./index.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(" ");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88138dfdc16f7b57f722547ba4425c86`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => searchLocation(event.target.value)}
          placeholder=" Enter Location"
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Polokwane</p>
          </div>
          <div className="temp">
            <h1>12 degrees</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">15 degrees</p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
