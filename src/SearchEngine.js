import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    console.log(response.data.main.temp);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function hendelSubmit(event) {
    event.preventDefault();
    let apiKey = "ca7745c62af7423fef43b67fd5568c1a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    console.log(apiUrl);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={hendelSubmit}>
      <input
        className="one"
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button className="two" type="submit">
        Search
      </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="parent">
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {Math.round(weather.wind)}km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
