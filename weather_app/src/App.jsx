import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("C"); // WeatherAPI uses C/F
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "623fe10b1d954052a9365450262004 ";

  const getWeather = async (cityName) => {
    if (!cityName.trim()) return;

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
  `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`
);

      setWeather(res.data);
    } catch (err) {
      if (err.response?.status === 400) {
        setError("City not found");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // Auto-detect location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;

        const res = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
        );

        setWeather(res.data);
      } catch {
        setError("Location fetch failed");
      }
    });
  }, []);

  return (
    <div className="app">
      <h1>🌦 Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => getWeather(city)}>Search</button>
      </div>

      <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
        Toggle °C / °F
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.location.name}</h2>

          <p>
            🌡 Temp:{" "}
            {unit === "C"
              ? weather.current.temp_c
              : weather.current.temp_f}
            °
          </p>

          <p>☁ {weather.current.condition.text}</p>

          <p>💧 Humidity: {weather.current.humidity}%</p>
          <p>🌬 Wind: {weather.current.wind_kph} kph</p>

          <img
            src={weather.current.condition.icon}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;