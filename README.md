# GetCurrentForecast-JS
Bookmarklet that gets the current forecast from api.weather.gov at the location specified.

## Known issues
1. **Does not work on certain sites.** This is likely due to active website's Content Security Policy, which disallows fetch requests to external websites. The only way I could fix it is by making this into an extension, but [that's a different project](https://github.com/JMVRy/Weatherly).
2. **Shows the wrong forecast.** The default forecast is somewhere near Chicago, Illinois. Read [the first use](#first-use) section on how to change the location to the correct area.
3. **My location is not a selectable region.** Weather.gov is a US government website, which means it only gives US-based forecast information. If you are not located in the US, then you'll have to modify the code to make requests to your own government's weather service (if they have one available). If you *are* located in the US, then that sounds like a bug that only the NOAA can solve. [Send them a report here.](https://www.weather.gov/Contact)

## Included
Included are two different files: 1) bookmarklet-version.js, which is the version that you copy into a bookmarklet, and 2) source-version.js, which you can use to understand how it works in a human-readable format.

## Usage
Click the bookmarklet to get your current detailed forecast.

## FIRST USE
Before you follow the "installation" instructions, you must first go to weather.gov, find your location, and copy the longitude and latitude of your location. Next, you must go to `https://api.weather.gov/points/{latitude},{longitude}`, changing the {longitude} and {latitude} for the respective values. Finally, go to the "properties" field, and under "forecast", copy the link and paste it into `const response = await fetch("<PUT THE FORECAST LINK HERE>");`. Voila, you will now get your current detailed forecast!

## Installation
To "install" the bookmarklet, first copy the data from `bookmarklet-version.js` into the bookmark page field. Next, add `javascript:` to the beginning of the field. Finally, save the bookmarklet. Congrats, you now have a bookmarklet that, when clicked, will give you your current detailed forecast.
