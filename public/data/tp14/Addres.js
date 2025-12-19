// Interface simulée en commentaire pour info développeur
// interface Address {
//   city: string;
//   postcode: string;
//   street: string;
//   housenumber: string;
//   context: string;
//   lat: number;
//   lon: number;
// }

class AddressService {
  async searchAddress(query, limit) {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);

      const data = await response.json();

      return data.features.map((feature) => {
        const props = feature.properties;
        const coords = feature.geometry.coordinates;
        return {
          city: props.city,
          postcode: props.postcode,
          street: props.street,
          housenumber: props.housenumber,
          context: props.context, // ex : "75, Paris, Île-de-France"
          lat: coords[1],
          lon: coords[0],
        };
      });
    } catch (err) {
      console.error("Erreur lors de la recherche :", err);
      return [];
    }
  }
}

function afficherResultats(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p>Aucun résultat trouvé.</p>";
    return;
  }

  const ul = document.createElement("ul");

  results.forEach((addr) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${addr.housenumber ?? ""} ${addr.street ?? ""}</strong><br/>
      ${addr.postcode ?? ""} ${addr.city ?? ""}<br/>
      ${addr.context ?? ""}<br/>
      Lat: ${addr.lat}, Lon: ${addr.lon}
    `;
    ul.appendChild(li);
    console.log(addr); // log en console
  });

  container.appendChild(ul);
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    const service = new AddressService();
    const results = await service.searchAddress(query, 5);
    afficherResultats(results);
  });
});
