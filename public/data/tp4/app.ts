import {getCurrentHumidity, getCurrentWind} from './moduleWeatherClientSide';

let humidity : number = await getCurrentHumidity() as number;
let wind : number = await getCurrentWind() as number;

let windSpeedDiv = document.getElementById("windSpeed");
let humidityDiv = document.getElementById("humidity");

if (windSpeedDiv != null) {
    windSpeedDiv.innerHTML = wind.toString();
}

if (humidityDiv != null) {
    humidityDiv.innerHTML = humidity.toString();
}


