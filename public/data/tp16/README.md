# HTTP CRUD

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/16_http_CRUD/README.md)

Le protocole HTTP (HyperText Transfer Protocol) est un protocole de communication client-serveur. Il est utilisé pour le transfert de données sur le World Wide Web. Il est basé sur le modèle requête/réponse. Les requêtes sont envoyées par le client et les réponses sont renvoyées par le serveur. Les requêtes et les réponses sont composées, entre autres, d'un statut, d'un header, d'une méthode (GET, POST, PUT, PATCH, DELETE, etc) et d'un corps (body).

CRUD signifie Create, Read, Update, Delete. C'est un acronyme qui désigne les quatre opérations de base pour la persistance des données. Les requêtes HTTP sont généralement des requêtes de type CRUD mais les verbes utilisés sont `GET` (Read), `POST` (Create), `PUT`/`PATCH` (Update) et `DELETE` (Delete); la différence entre `PUT` et `PATCH` est que `PUT` remplace l'objet entier alors que `PATCH` ne remplace que les champs spécifiés. Les réponses sont généralement des réponses de type CRUD mais les codes de statut HTTP sont utilisés pour indiquer le succès ou l'échec de l'opération. Les codes de statut HTTP les plus courants sont `200` (OK), `201` (Created), `204` (No Content), `400` (Bad Request), `404` (Not Found), `500` (Internal Server Error), etc

Attention dans le cas d'un UPDATE avec `PUT` ou `PATCH`, si l'objet à modifier n'existe pas ou n'est pas correctement identifié, le comportement du serveur est indéterminé: il peut créer de nouveaux objets ou renvoyer une erreur, cela dépend du serveur... 

Dans ce TP nous allons démarrer un serveur HTTP et écrire une application client en TypeScript qui va effectuer des opérations CRUD sur ce serveur. Pour cela nous utilisons le projet `json-server` qui est un serveur HTTP qui utilise un fichier JSON comme base de données. Nous avons un début de base de donnée dans le fichier `db.json` qui contient des restaurants et des catégories. Voici le contenu de ce fichier :

[db.json](db.json ":include :type=code json")

Pour démarrer le serveur, il suffit d'installer json-server avec la commande suivante :

```terminal
bun install json-server
```

Puis de démarrer le serveur avec la commande suivante :

```terminal
bun json-server db.json
```

Le serveur est alors démarré sur le port 3000. Vous pouvez accéder à la base de données en utilisant l'URL suivante : http://localhost:3000/ (par exemple http://localhost:3000/restaurants pour accéder à la liste des restaurants ou http://localhost:3000/categories pour accéder à la liste des catégories).

Attention: quand le serveur reçoit des requêtes de type POST, PUT/PATCH ou DELETE, il modifie le fichier `db.json` en conséquence. Il est donc possible que les données soient modifiées ou supprimées. 

Explication du code source:

Ce fichier TypeScript définit plusieurs interfaces pour représenter des données de restaurant, ainsi qu'une série de classes pour interagir avec une API REST qui gère ces données.

Interfaces : Les interfaces `AlloResto`, `Category`, `RestaurantCategory` et `Restaurant` sont utilisées pour définir la structure des données attendues de l'API.

`HttpClient` : C'est une classe abstraite qui définit des méthodes communes pour effectuer des requêtes HTTP. Elle a une méthode `fetch` pour effectuer la requête HTTP et une méthode `execute` pour déclencher la requête et afficher les données reçues.

`CreateClient`, `ReadClient`, `UpdateClient`, `DeleteClient` : Ces classes héritent de `HttpClient` et sont spécialisées pour effectuer des opérations CRUD spécifiques (Create, Read, Update, Delete). Par exemple, `CreateClient` est configuré pour effectuer une requête `POST` avec des données fournies, tandis que `ReadClient` est configuré pour effectuer une requête `GET`.

Utilisation des clients : Enfin, le fichier utilise ces classes pour effectuer des opérations sur l'API. Il crée un `ReadClient` pour lire tous les restaurants, un `DeleteClient` pour supprimer un restaurant spécifique, un `CreateClient` pour créer un nouveau restaurant, et un `UpdateClient` pour mettre à jour un restaurant existant.

En résumé, ce fichier définit une série d'outils pour interagir avec une API REST de restaurant, et utilise ces outils pour effectuer une série d'opérations.

Vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")

Si vous exécutez une deuxième fois le code, les modifications ayant déjà été effectuées,
vous aurez deux problèmes:

1. pour la suppression: erreur 404 car le restaurant a déjà été supprimé et n'existe plus = introuvable = 404

2. pour la création:
vous aurez en doublon le restaurant "Le Restaurant de la Joie"
avec une nouvelle id
car le serveur json-server ne gère pas les doublons

Pas de problème pour la lecture ou la modification (car on les modifie avec les mêmes données)


remarquez que les requêtes sont asynchrones
et que l'ordre d'exécution n'est pas garanti

remarquez aussi que `restaurantCategories` (qui est une table de relation entre `restaurants` et `categories`) n'est pas du tout géré par ce programme

Autres remarques sur le code: notez que grâce au type générique <T> nous aurions pu réutiliser `CreateClient` pour les Catégories avec `CreateClient<Category>` 

Concernant les `?` dans les interfaces, cela signifie que les champs sont optionnels. En TypeScript, c'est une pratique courante de rendre certains champs optionnels lorsque ces champs ne sont pas toujours nécessaires ou sont générés automatiquement par le serveur. Par exemple ici `id` est généré automatiquement par le serveur et n'est pas nécessaire pour les requêtes de type CREATE (POST). De plus pour les requêtes de type UPDATE (PUT/PATCH) il est possible de ne donner que les champs à modifier et pas tous les champs de l'objet, ils sont donc tous optionnels. 

Concernant les headers en HTTP, il est possible de spécifier le header `Content-Type` avec la valeur `application/json` pour indiquer que le corps de la requête est en JSON. C'est une pratique courante en HTTP, vous pouvez le voir dans le code suivant :

```typescript
this.options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
```

D'ailleurs, vous serez vite confrontés à l'authentification auprès des serveurs, pour cela il est possible de spécifier le header `Authorization` avec des valeurs souvent au format `Bearer <token>` ou bien parfois seulement `<token>`.
 C'est une pratique courante en HTTP, vous pouvez le voir dans le code suivant :

```typescript
this.options = {
      headers: {
        "Authorization":"Bearer <token>"  //ou bien "Authorization":"<token>"
      },
    };
```


# Lecture

pas de lecture particulière si vous voulez approfondir vous pouvez parcourir https://developer.mozilla.org/fr/docs/Web/HTTP

# Exercice

Modifiez le fichier `app.ts` pour bien gérer les modifications des relations entre les restaurants et les catégories:

- à chaque suppression/modification d'une catégorie, modifiez les `categoryIds` de tous les restaurants qui la contiennent
- à chaque suppression/modification d'un restaurant, modifiez les `restaurantIds` de toutes les catégories qui le contiennent
- à chaque suppression/modification modifiez les relations dans `restaurantCategories`
