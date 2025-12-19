# webcomponents

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/18_webcomponents/README.md)


Les webcomponents sont des éléments HTML personnalisés (des balises avec des noms personnalisés) qui peuvent être réutilisés dans une application web. Ils permettent de créer des composants réutilisables et modulaires qui peuvent être facilement intégrés dans une page web.

Ce code en exemple permet de créer une nouvelle balise HTML personnalisée appelée <hello-name>. Cette balise a un attribut name qui peut être modifié. Lorsque l'attribut name est modifié, le contenu de la balise est mis à jour pour afficher "Hello {name}!".

Voici une explication détaillée :

Une nouvelle classe HelloName est définie, qui étend HTMLElement. C'est la base pour créer un nouvel élément HTML personnalisé.

Dans cette classe, un getter et un setter pour l'attribut name sont définis. Le setter met à jour la valeur de name et appelle la méthode connectedCallback.

La méthode connectedCallback est une méthode de cycle de vie spéciale qui est appelée lorsque l'élément est inséré dans le DOM. Ici, elle met à jour le contenu de l'élément pour afficher "Hello {name}!".

La nouvelle balise est enregistrée avec customElements.define("hello-name", HelloName);.

Ensuite, un nouvel élément <hello-name> est créé programmatiquement, son attribut name est défini sur "Monsieur DEBUT", et il est ajouté au corps du document.

Une fonction est définie pour être exécutée lorsque le DOM est entièrement chargé (window.onload). Cette fonction fait deux choses :

Elle modifie l'attribut name du troisième élément <hello-name> dans le document (si il existe) pour être "John".
Elle crée un autre nouvel élément <hello-name>, définit son attribut name sur "Madame FIN", et l'ajoute au corps du document.
C'est un exemple de comment vous pouvez créer et utiliser des éléments HTML personnalisés en TypeScript et JavaScript.

## lire et comprendre

vous devez lire et comprendre le code source de `src/app.ts` que voici

[src/scripts/app.ts](src/scripts/app.ts ":include :type=code typescript")

# Exercice

1. Créez un nouvel élément HTML personnalisé appelé `<date-time>` qui affiche la date et l'heure actuelles.
2. Créez un nouvel élément HTML personnalisé appelé `<greet-custom>` qui affiche un message de salutation personnalisé en fonction de l'heure de la journée (par exemple, "Bonjour" le matin, "Bon après-midi" l'après-midi, "Bonsoir" le soir).

# ressources autres 

https://webcomponents.today/

https://open-wc.org/

https://custom-elements-everywhere.com/

https://storybook.js.org/

https://github.com/web-padawan/awesome-web-components?tab=readme-ov-file#design-systems

# Différence entre Design Systems et Component Libraries

## Microsoft Fast

https://www.fast.design/

## Google Material

https://material-web.dev/

## IBM Carbon

https://www.carbondesignsystem.com/

## Adobe Spectrum

https://spectrum.adobe.com/

## Shoelace

https://shoelace.style

## Crayons

https://crayons.freshworks.com/


## United States Web Design System

https://designsystem.digital.gov/



