export async function fetchWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=XLV78DYTEJAKVH3LNL8CYE8JV`,
  );

  if (!response.ok) {
    throw new Error("Location not found");
  }

  return response.json();
}
