import "./index.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(""); // Removed extra space here

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=88138dfdc16f7b57f722547ba4425c86`;

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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
            {/* <h1>{data.main.temp} degrees</h1> */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like} °C</p>
              ) : null}
              <p>feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
              <p>Wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
