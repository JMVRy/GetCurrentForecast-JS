(async () => {
	const response = await fetch("https://api.weather.gov/gridpoints/ILX/47,91/forecast");
	if (response.ok) {
		const jsonValue = await response.json();
		return Promise.resolve(jsonValue);
	} else {
		return Promise.reject("ERROR");
	}
})().then(
	(data) => alert(data["properties"]["periods"][0]["detailedForecast"])
).catch(console.error)