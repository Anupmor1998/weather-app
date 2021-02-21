import React, { useState } from "react";
import "../components/Temp.css";

function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  const fetchApi = async () => {
    const apiKey = "3c9ab84472c05b6f1dcca909970fe924";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const resJSON = await response.json();
    setCity(resJSON);
  };

  const showWeather = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="box">
        <div className="header">Weather App</div>

        <div>
          <h4>Enter the name of the city to get started!</h4>
          <input
            className="inputData"
            type="text"
            onChange={showWeather}
            value={search}
          />
          <button className="btn" onClick={fetchApi}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {city && city.cod == "200" ? (
          <div>
            <p className="para1">Weather Forecast of {city.name}</p>

            <div>
              <img
                src={`https://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                alt="wthr img"
              />
            </div>
            <div className="mid-section">
              <p className="para2">Temperture</p>
              <h1>{city.main.temp} °C</h1>
            </div>
            <div className="mid-section">
              <p className="para2">Min Temperture</p>
              <h1>{city.main.temp} °C</h1>
            </div>
            <div className="mid-section">
              <p className="para2">Max Temperture</p>
              <h1>{city.main.temp} °C</h1>
            </div>
          </div>
        ) : (
          ""
        )}
        <hr></hr>
        <p className="para3">Made with ❤️ by Anup Mor</p>
      </div>
    </>
  );
}

export default TempApp;
