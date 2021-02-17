import React, { useState, useEffect } from "react";
import "../Temp.css";
function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "3c9ab84472c05b6f1dcca909970fe924";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;

      const response = await fetch(url);
      const resJSON = await response.json();
      setCity(resJSON);
    };
    fetchApi();
  }, [search]);
  const showWeather = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="box">
        <div>
          <input
            className="inputData"
            type="text"
            onChange={showWeather}
            value={search}
          />
        </div>

        {/* <button className="btn" onClick={fetchApi}>
          Get Weather
        </button> */}
        {console.log(city)}

        {city && city.cod == "200" ? (
          <div>
            <h2>
              <i className="fas fa-street-view"></i>&nbsp;&nbsp;
              {city.name}
            </h2>
            <div>
              <img
                src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                alt="wthr img"
              />
            </div>

            <h1>{city.main.temp} Ce</h1>
            <h3>
              Min: {city.main.temp_min} Ce | Max: {city.main.temp_max} Ce
            </h3>
          </div>
        ) : (
          <p className="error-msg">No Data Found!</p>
        )}
      </div>
    </>
  );
}

export default TempApp;
