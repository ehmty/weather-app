import clearDay from "./asset/clear-day.svg";
import clearNight from "./asset/clear-night.svg";
import cloudy from "./asset/cloudy.svg";
import fog from "./asset/fog.svg";
import partlyCloudyDay from "./asset/partly-cloudy-day.svg";
import partlyCloudyNight from "./asset/partly-cloudy-night.svg";
import rain from "./asset/rain.svg";
import snow from "./asset/snow.svg";
import wind from "./asset/wind.svg";
import thermometer from "./asset/thermometer.svg";
import raindrop from "./asset/raindrop.svg";

const weatherIcons = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy: cloudy,
  fog: fog,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  rain: rain,
  snow: snow,
  wind: wind,
};

function showCurrentWeather(processedData) {
  const currentWeather = document.querySelector(".current-weather");

  currentWeather.textContent = "";

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("location-info");

  const address = document.createElement("h2");
  address.textContent = processedData.address;

  const description = document.createElement("p");
  description.textContent = processedData.description;

  locationInfo.append(address, description);

  const weatherMain = document.createElement("div");
  weatherMain.classList.add("weather-main");

  const currentDayIcon = document.createElement("img");
  currentDayIcon.src = weatherIcons[processedData.icon];
  currentDayIcon.alt = processedData.currentConditions.conditions;

  const temperature = document.createElement("div");
  temperature.classList.add("temperature");

  const tempValue = document.createElement("div");
  tempValue.classList.add("temp-value");
  tempValue.textContent = `${processedData.currentConditions.temp}°`;

  const condition = document.createElement("div");
  condition.classList.add("condition");
  condition.textContent = processedData.currentConditions.conditions;

  temperature.append(tempValue, condition);
  weatherMain.append(currentDayIcon, temperature);

  const weatherDetails = document.createElement("div");
  weatherDetails.classList.add("weather-details");

  const details = [
    {
      label: "Feels like",
      value: `${processedData.currentConditions.feelslike}°`,
      icon: thermometer,
    },
    {
      label: "Humidity",
      value: `${processedData.currentConditions.humidity}%`,
      icon: raindrop,
    },
    {
      label: "Wind",
      value: `${processedData.currentConditions.windspeed} km/h`,
      icon: wind,
    },
  ];

  details.forEach((item) => {
    const detail = document.createElement("div");
    detail.classList.add("detail");

    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.alt = "";

    const label = document.createElement("div");
    label.textContent = item.label;

    const value = document.createElement("div");
    value.textContent = item.value;

    detail.append(icon, label, value);
    weatherDetails.append(detail);
  });

  currentWeather.append(locationInfo, weatherMain, weatherDetails);
}

function showForecast(processedData) {
  const forecast = document.querySelector(".forecast");

  forecast.textContent = "";

  processedData.days.slice(0, 5).forEach((day, index) => {
    const forecastDay = document.createElement("div");
    forecastDay.classList.add("forecast-day");

    const weekday = document.createElement("div");
    weekday.classList.add("weekday");
    weekday.textContent = index === 0 ? "Today" : day.weekday;

    const icon = document.createElement("img");
    icon.src = weatherIcons[day.icon];
    icon.alt = day.conditions;

    const tempMax = document.createElement("div");
    tempMax.classList.add("tempmax");
    tempMax.textContent = `${day.tempmax}°`;

    const tempMin = document.createElement("div");
    tempMin.classList.add("tempmin");
    tempMin.textContent = `${day.tempmin}°`;

    forecastDay.append(weekday, icon, tempMax, tempMin);
    forecast.append(forecastDay);
  });
}

export { showCurrentWeather, showForecast };
