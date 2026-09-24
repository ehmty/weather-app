import "./style.css";
import { fetchWeatherData } from "./api.js";
import { processWeatherData } from "./weather.js";
import { showCurrentWeather, showForecast, toggleUnitButton, showLocationError, clearLocationError } from "./dom.js";

let currentUnit = "celsius";
let processedData;

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  clearLocationError();

  const formData = new FormData(form);
  const location = formData.get("location");

  try {
    const fetchedData = await fetchWeatherData(location);
    processedData = processWeatherData(fetchedData);

    showCurrentWeather(processedData, currentUnit);
    showForecast(processedData, currentUnit);

    form.reset();
  } catch {
    showLocationError();
  }
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (!processedData) return;

  currentUnit = currentUnit === "fahrenheit" ? "celsius" : "fahrenheit";

  toggleUnitButton(currentUnit);

  showCurrentWeather(processedData, currentUnit);
  showForecast(processedData, currentUnit);
});
