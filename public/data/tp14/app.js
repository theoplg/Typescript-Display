class EarthquakeService {
  async getEarthquakesFromUSGS() {
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4"
    );
    const earthquakejson = await response.json();
    return earthquakejson.features;
  }

  async displayEarthquakes() {
    try {
      const earthquakes = await this.getEarthquakesFromUSGS();
      const ul = document.createElement("ul");

      earthquakes.forEach((earthquake) => {
        const date = new Date(earthquake.properties.time);
        const options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        };
        const dateString = date.toLocaleDateString("fr-FR", options);
        const finalString = `${dateString} - ${earthquake.properties.mag} - ${earthquake.properties.place}`;
        console.log(finalString);

        const li = document.createElement("li");
        li.textContent = finalString;
        ul.appendChild(li);
      });

      document.body.appendChild(ul);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération des données de tremblement de terre :",
        error
      );
    }
  }
}

const earthquakeService = new EarthquakeService();
earthquakeService.displayEarthquakes();
