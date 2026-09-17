import "./style.css";
import { fetchWeatherData } from "./api.js";
import { processWeatherData } from "./weather.js";


const result = await fetchWeatherData("london");
console.log(processWeatherData(result));
