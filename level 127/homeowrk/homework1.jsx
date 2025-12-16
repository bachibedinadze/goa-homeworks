import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");

  const API_KEY = "აქ_ჩასვი_შენი_API_KEY";

  const fetchWeather = async () => {
    if (!city) return; 

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}

export default App;