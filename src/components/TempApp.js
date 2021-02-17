import React from "react";
import "../Temp.css";
function TempApp(props) {
  const { city, search, showWeather, cod, cityName } = props;
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

        {city && cod == "200" ? (
          <div>
            <h2>
              <i className="fas fa-street-view"></i>&nbsp;&nbsp;
              {cityName}
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
