export function processWeatherData(result) {
  return {
    address: result.address,
    description: result.description,
    icon: result.currentConditions.icon,
    currentConditions: {
      temp: result.currentConditions.temp,
      feelslike: result.currentConditions.feelslike,
      humidity: result.currentConditions.humidity,
      windspeed: result.currentConditions.windspeed,
      conditions: result.currentConditions.conditions,
    },
    days: result.days.slice(0, 5).map((day) => ({
      weekday: new Date(day.datetime).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      tempmax: day.tempmax,
      tempmin: day.tempmin,
      icon: day.icon,
    })),
  };
}
