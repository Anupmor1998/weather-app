import React, { useState, useEffect } from "react";
import "./App.css";
import "./Temp.css";
import TempApp from "./components/TempApp";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "3c9ab84472c05b6f1dcca909970fe924";
      // const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${apiKey}`;

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
    <div className="App">
      <TempApp
        city={city.list[0]}
        search={search}
        showWeather={showWeather}
        cod={city.cod}
        cityName={city.city.name}
      />
    </div>
  );
}

export default App;
