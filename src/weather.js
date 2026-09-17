export function processWeatherData(result) {
  return {
    address: result.address,
    description: result.description,
    currentConditions: result.currentConditions,
    days: result.days, 
  }
}