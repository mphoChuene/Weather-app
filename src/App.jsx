import "./index.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=88138dfdc16f7b57f722547ba4425c86`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Polokwane</p>
          </div>
          <div className="temp">
            <h1>12 degrees celsius</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>12 degrees celsius</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">12 MPH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
