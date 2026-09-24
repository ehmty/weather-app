import "./style.css";
import { fetchWeatherData } from "./api.js";
import { processWeatherData } from "./weather.js";
import { showCurrentWeather, showForecast, toggleUnitButton } from "./dom.js";

let currentUnit = "celsius";
let processedData;

const form = document.querySelector(".search-bar");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const location = formData.get("location");
  const fetchedData = await fetchWeatherData(location);
  processedData = processWeatherData(fetchedData);

  showCurrentWeather(processedData, currentUnit);
  showForecast(processedData, currentUnit);
  form.reset();
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (!processedData) return;

  currentUnit = currentUnit === "fahrenheit" ? "celsius" : "fahrenheit";

  toggleUnitButton(currentUnit);

  showCurrentWeather(processedData, currentUnit);
  showForecast(processedData, currentUnit);
});
