# GetCurrentForecast-JS
Bookmarklet that gets the current forecast from api.weather.gov at the location specified

## Included
Included are two different files: 1) bookmarklet-version.js, which is the version that you copy into a bookmarklet, and 2) source-version.js, which you can use to understand how it works in a human-readable format.

## Usage
Click the bookmarklet to get your current detailed forecast.

## FIRST USE
Before you follow the "installation" instructions, you must first go to weather.gov, find your location, and copy the longitude and latitude of your location. Next, you must go to `https://api.weather.gov/points/{latitude},{longitude}`, changing the {longitude} and {latitude} for the respective values. Finally, go to the "properties" field, and under "forecast", copy the link and paste it into `const response = await fetch("<PUT THE FORECAST LINK HERE>");`. Voila, you will now get your current detailed forecast!

## Installation
To "install" the bookmarklet, first copy the data from `bookmarklet-version.js` into the bookmark page field. Next, add `javascript:` to the beginning of the field. Finally, save the bookmarklet. Congrats, you now have a bookmarklet that, when clicked, will give you your current detailed forecast.
