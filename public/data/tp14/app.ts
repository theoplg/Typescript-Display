//fetch the latest earthquake data from the USGS API with this url
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4

interface Earthquake {
  properties: {
    time: number;
    place: string;
    mag: number;
  };
}

class EarthquakeService {
  private async getEarthquakesFromUSGS(): Promise<Earthquake[]> {
    // fonction async qui renvoie une promesse de tableau d'objets Earthquake
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4" //requête HTTP à l'API de ce site
    );
    const earthquakejson = await response.json(); // tant que la requête n'est pas terminée on ne peut pas utiliser la réponse
    return earthquakejson.features;
  }

  async displayEarthquakes() {
    try {
      // code exécuté en premier dans le bloc try
      // Await the promise to resolve
      const earthquakes = await this.getEarthquakesFromUSGS(); // appelle de la fonction getEarthquakesFromUSGS
      //première ligne à ajouter
      const ul: HTMLUListElement = document.createElement("ul"); // ul est un élément HTML de liste non ordonnée
      earthquakes.forEach((earthquake) => {
        // on utilise forEach pour parcourir le tableau d'objets Earthquake
        // Use forEach on the resolved earthquakes array
        const date: Date = new Date(earthquake.properties.time);
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        };
        const dateString: string = date.toLocaleDateString("fr-FR", options);
        const finalString: string = `${dateString} - ${earthquake.properties.mag} - ${earthquake.properties.place}`;
        console.log(finalString);
        //deuxième ligne à ajouter
        const li: HTMLLIElement = document.createElement("li"); // li est un élément HTML de liste
        //troisième ligne à ajouter
        li.textContent = finalString;
        //quatrième ligne à ajouter
        ul.appendChild(li);
      });
      document.body.appendChild(ul);
    } catch (error) {
      // code exécuté en cas d'erreur dans le bloc try
      console.error(
        "Une erreur est survenue lors de la récupération des données de tremblement de terre :",
        error
      );
    }
  }
}

const earthquakeService = new EarthquakeService();
earthquakeService.displayEarthquakes();
