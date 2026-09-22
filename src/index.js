import "./style.css";
import { fetchWeatherData } from "./api.js";
import { processWeatherData } from "./weather.js";
import { showCurrentWeather, showForecast } from "./dom.js";

// const test = {
//   address: "london",
//   description: "Similar temperatures continuing with a chance of rain Tuesday.",
//   currentConditions: {
//     temp: 76.3,
//     feelslike: 76.3,
//     humidity: 55.2,
//     windspeed: 0.8,
//     conditions: "Partially cloudy",
//   },
//   days: [
//     {
//       datetime: "2026-09-21",
//       tempmax: 77.2,
//       tempmin: 56.7,
//     },
//     {
//       datetime: "2026-09-22",
//       tempmax: 72.6,
//       tempmin: 57.2,
//     },
//     {
//       datetime: "2026-09-23",
//       tempmax: 68.6,
//       tempmin: 50.1,
//     },
//     {
//       datetime: "2026-09-24",
//       tempmax: 74.4,
//       tempmin: 50.8,
//     },
//     {
//       datetime: "2026-09-25",
//       tempmax: 66.7,
//       tempmin: 54,
//     },
//   ],
// };


const form = document.querySelector(".search-bar");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const location = formData.get("location");
  const fetchedData = await fetchWeatherData(location);
  const processedData = processWeatherData(fetchedData);
  
  showCurrentWeather(processedData);
  showForecast(processedData);
})
