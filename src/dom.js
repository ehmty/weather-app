function showCurrentWeather(processedData) {
  const address = document.querySelector(".location-info h2");
  const description = document.querySelector(".location-info p");
  const temperature = document.querySelector(".temp-value");
  const condition = document.querySelector(".condition");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");

  address.textContent = processedData.address;
  description.textContent = processedData.description;
  temperature.textContent = `${processedData.currentConditions.temp}°`;
  condition.textContent = `${processedData.currentConditions.conditions}`;
  feelsLike.textContent = `${processedData.currentConditions.feelslike}°`;
  humidity.textContent = `${processedData.currentConditions.humidity}%`;
  wind.textContent = `${processedData.currentConditions.windspeed} km/h`;
}

function showForecast(processedData) {
  const forecastDays = document.querySelectorAll(".forecast-day");
  forecastDays.forEach((forecastDay, index) => {
    const day = processedData.days[index];

    if (index === 0) {
      forecastDay.querySelector(".weekday").textContent = "Today";
    } else {
      forecastDay.querySelector(".weekday").textContent = day.weekday;
    }
    forecastDay.querySelector(".tempmax").textContent = `${day.tempmax}°`;
    forecastDay.querySelector(".tempmin").textContent = `${day.tempmin}°`;
  });
}

export { showCurrentWeather, showForecast };
