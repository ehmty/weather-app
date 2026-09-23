import "./style.css";
import { fetchWeatherData } from "./api.js";
import { processWeatherData } from "./weather.js";
import { showCurrentWeather, showForecast } from "./dom.js";

const form = document.querySelector(".search-bar");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const location = formData.get("location");
  const fetchedData = await fetchWeatherData(location);
  const processedData = processWeatherData(fetchedData);

  showCurrentWeather(processedData);
  showForecast(processedData);
  form.reset();
});
