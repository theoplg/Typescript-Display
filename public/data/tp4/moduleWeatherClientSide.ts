//exemple d'utilisation de l'API open meteo
/*$ curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

{
  "current": {
    "time": "2022-01-01T15:00"
    "temperature_2m": 2.4,
    "wind_speed_10m": 11.9,
  },
  "hourly": {
    "time": ["2022-07-01T00:00","2022-07-01T01:00", ...]
    "wind_speed_10m": [3.16,3.02,3.3,3.14,3.2,2.95, ...],
    "temperature_2m": [13.7,13.3,12.8,12.3,11.8, ...],
    "relative_humidity_2m": [82,83,86,85,88,88,84,76, ...],
  }
}
*/
//les coordonnées de Telecom Paris sont 48.713325087950466, 2.19976830245 

export async function getCurrentHumidity() {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=48.713325087950466&longitude=2.19976830245&current=relative_humidity_2m";
    let response = await fetch(url);
    let data = await response.json();
    console.log("v1")
    return data.current.relative_humidity_2m;
}

export async function getCurrentWind() {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=48.713325087950466&longitude=2.19976830245&current=wind_speed_10m";
    let response = await fetch(url);
    let data = await response.json();
    console.log("v2")
    return data.current.wind_speed_10m;
}