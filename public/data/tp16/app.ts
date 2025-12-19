interface AlloResto {
  restaurants: Restaurant[];
  categories: Category[];
  restaurantCategories: RestaurantCategory[];
}

interface Category {
  id?: string;
  name?: string;
  restaurantIds?: string[];
}

interface RestaurantCategory {
  id?: string;
  restaurantId?: string;
  categoryId?: string;
}

interface Restaurant {
  id?: string;
  name?: string;
  description?: string;
  categoryIds?: string[];
}

abstract class HttpClient<T> {
  protected url: string;
  protected options: RequestInit;

  constructor(url: string) {
    this.url = url;
    this.options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  public async execute(): Promise<T | void> {
    try {
      const response = await fetch(this.url, this.options);
      if (response.ok) {
        const data: T = await response.json();
        return data;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  }
}

class CreateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "POST";
    this.options.body = JSON.stringify(data);
  }
}

class ReadClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "GET";
  }
}

class UpdateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "PATCH";
    this.options.body = JSON.stringify(data);
  }
}

class DeleteClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "DELETE";
  }
}

// --------------------------------------
// Gestion des relations lors des suppressions
// --------------------------------------

const baseUrl = "http://localhost:3000";

async function updateRelationsAfterRestaurantDelete(restaurantId: string) {
  // Supprimer les relations dans restaurantCategories
  const relationsRes = await fetch(`${baseUrl}/restaurantCategories`);
  const relations: RestaurantCategory[] = await relationsRes.json();

  for (const rel of relations) {
    if (rel.restaurantId === restaurantId) {
      await fetch(`${baseUrl}/restaurantCategories/${rel.id}`, {
        method: "DELETE",
      });
    }
  }

  // Mettre à jour les catégories concernées
  const categoriesRes = await fetch(`${baseUrl}/categories`);
  const categories: Category[] = await categoriesRes.json();

  for (const category of categories) {
    if (category.restaurantIds?.includes(restaurantId)) {
      const newIds = category.restaurantIds.filter((id) => id !== restaurantId);
      await fetch(`${baseUrl}/categories/${category.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ restaurantIds: newIds }),
      });
    }
  }
}

async function updateRelationsAfterCategoryDelete(categoryId: string) {
  // Supprimer les relations dans restaurantCategories
  const relationsRes = await fetch(`${baseUrl}/restaurantCategories`);
  const relations: RestaurantCategory[] = await relationsRes.json();

  for (const rel of relations) {
    if (rel.categoryId === categoryId) {
      await fetch(`${baseUrl}/restaurantCategories/${rel.id}`, {
        method: "DELETE",
      });
    }
  }

  // Mettre à jour les restaurants concernés
  const restaurantsRes = await fetch(`${baseUrl}/restaurants`);
  const restaurants: Restaurant[] = await restaurantsRes.json();

  for (const restaurant of restaurants) {
    if (restaurant.categoryIds?.includes(categoryId)) {
      const newIds = restaurant.categoryIds.filter((id) => id !== categoryId);
      await fetch(`${baseUrl}/restaurants/${restaurant.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryIds: newIds }),
      });
    }
  }
}

// --------------------------------------
// Exécution des opérations
// --------------------------------------

const url = `${baseUrl}/restaurants`;

// Lecture de tous les restaurants
const readClient = new ReadClient<Restaurant[]>(url);
readClient.execute().then((restaurants) => {
  if (restaurants) {
    restaurants.forEach((restaurant) => {
      console.log(`READ id : ${restaurant.id} name : ${restaurant.name} `);
    });
  }
});

// Suppression du restaurant "Le Café Rigolo" + mise à jour des relations
const restaurantIdToDelete = "3aa8";
const deleteClient = new DeleteClient<Restaurant>(
  `${url}/${restaurantIdToDelete}`
);
deleteClient.execute().then(async (restaurant) => {
  if (restaurant) {
    console.log(`DELETE id : ${restaurant.id} name : ${restaurant.name}`);
    await updateRelationsAfterRestaurantDelete(restaurantIdToDelete);
  }
});

// Création du restaurant "Le Restaurant de la Joie"
const data: Restaurant = {
  name: "Le Restaurant de la Joie",
  description: "Un restaurant où la joie est au menu",
  categoryIds: ["71b2"],
};

const createClient = new CreateClient<Restaurant>(url, data);
createClient.execute().then((restaurant) => {
  if (restaurant) {
    console.log(`CREATE id : ${restaurant.id} name : ${restaurant.name} `);
  }
});

// Modification du restaurant "Le Grill Marrant"
const updatedData: Restaurant = {
  name: "Le Grill Super Marrant",
};

const updateClient = new UpdateClient<Restaurant>(`${url}/12b3`, updatedData);
updateClient.execute().then((restaurant) => {
  if (restaurant) {
    console.log(`UPDATE id : ${restaurant.id} name : ${restaurant.name} `);
  }
});
