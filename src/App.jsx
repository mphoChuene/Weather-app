import "./index.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(""); // Removed extra space here

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88138dfdc16f7b57f722547ba4425c86`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
      setLocation(""); // Clear the location after the search
    }
  };

  // Updated the onChange event to set the location state properly
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder=" Enter Location"
          onKeyPress={searchLocation}
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
