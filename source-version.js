(async () => {
	const response = await fetch("https://api.weather.gov/gridpoints/LOT/73,73/forecast");
	if (response.ok) {
		const jsonValue = await response.json();
		return Promise.resolve(jsonValue);
	} else {
		return Promise.reject("ERROR");
	}
})().then(
	(data) => {
		const currentForecast = data["properties"]["periods"][0];
		if (currentForecast["detailedForecast"] == "" || currentForecast["detailedForecast"] == null) {
			alert(currentForecast["shortForecast"] + " at " + currentForecast["temperature"] + "º" + currentForecast["temperatureUnit"] + ". " + currentForecast["windDirection"] + " winds at " + currentForecast["windSpeed"] ".");
		} else {
			alert(currentForecast["detailedForecast"]);
		}
	}
).catch(console.error)
