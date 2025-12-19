# Async Await

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/13_async_await/README.md)

L'asynchronisme est un concept de programmation qui permet à des opérations de s'exécuter en parallèle sans bloquer le fil d'exécution principal. Cela est particulièrement utile pour des opérations qui prennent du temps, comme les requêtes réseau, les lectures de fichiers, etc.

Une promesse en JavaScript (et donc en TypeScript) est un objet qui représente l'achèvement ou l'échec éventuel d'une opération asynchrone. Une promesse est dans l'un des trois états suivants : en attente (pending), résolue (fulfilled), ou rejetée (rejected). Une fois qu'une promesse est résolue ou rejetée, elle ne peut plus changer d'état.

`async` et `await` sont des mots-clés en JavaScript (et donc en TypeScript) qui permettent de travailler avec des promesses de manière plus lisible et plus facile à comprendre. Une fonction marquée avec le mot-clé `async` retourne toujours une promesse. Le mot-clé `await` ne peut être utilisé que dans une fonction `async` et fait que l'exécution de la fonction est mise en pause jusqu'à ce que la promesse soit résolue ou rejetée.

Dans le code ci-dessous, la fonction `fetchData` est une fonction asynchrone qui utilise la fonction `delay` préalablement définie au dessus. La fonction `delay` est une fonction qui prend un nombre de millisecondes comme argument et retourne une promesse qui se résout après ce nombre de millisecondes. Ceci permet de simuler une opération asynchrone (comme une requête réseau). Lorsque vous appelez `await delay(2000);` dans `fetchData`, l'exécution de `fetchData` est mise en pause pendant 2 secondes, après quoi elle reprend et retourne "Some data". Remarquez que `delay` utilise `setTimeout` (une fonction JavaScript déjà existante qui permet d'exécuter du code après un certain délai, exprimé en millisecondes) pour créer une promesse qui se résout après un certain délai. Cela est nécessaire car `setTimeout` ne retourne pas une promesse, mais `delay` retourne une promesse qui se résout après le délai spécifié. Remarque aussi que `setTimeout` appelle `resolve` après le délai spécifié, ce qui résout la promesse.

`resolve` et `reject` sont deux fonctions fournies par le constructeur de la Promesse en JavaScript. Elles sont utilisées pour indiquer le résultat d'une opération asynchrone.

`resolve` est une fonction qui, lorsqu'elle est appelée, fait passer la promesse de l'état "en attente" à l'état "résolue", et fixe la valeur de la promesse à la valeur passée à `resolve`.

`reject` est une fonction qui, lorsqu'elle est appelée, fait passer la promesse de l'état "en attente" à l'état "rejetée", et fixe la raison du rejet de la promesse à la valeur passée à `reject`.

Voici un exemple de leur utilisation :
    
```typescript
new Promise((resolve, reject) => {
    // Simuler une opération asynchrone
    setTimeout(() => {
        const error = false; // Supposons que nous vérifions une condition ici

        if (error) {
            reject("Une erreur s'est produite");
        } else {
            resolve("Opération réussie");
        }
    }, 2000);
})
.then(result => console.log(result)) // Affiche "Opération réussie" si la promesse est résolue
.catch(error => console.error(error)); // Affiche "Une erreur s'est produite" si la promesse est rejetée
```

Dans cet exemple, nous créons une nouvelle promesse qui simule une opération asynchrone avec `setTimeout`. Le premier paramètre de `setTimeout` est une fonction fléchée qui est exécutée après 2 secondes. Cette fonction fléchée contient une simulation de condition qui peut être vraie ou fausse. Par exemple ici, si `error` est `false`, nous appelons `resolve` avec la chaîne "Opération réussie", ce qui résout la promesse. Si `error` était `true`, nous pourrions appeler `reject` avec la chaîne "Une erreur s'est produite", ce qui rejetterait la promesse. Ensuite, nous utilisons `then` pour gérer le cas où la promesse est résolue, et `catch` pour gérer le cas où la promesse est rejetée.

Le `.then(...)` est une méthode qui est utilisée pour spécifier ce qui doit être fait lorsque la promesse est résolue. Le `.catch(...)` est une méthode qui est utilisée pour spécifier ce qui doit être fait lorsque la promesse est rejetée. Remarquez que `.then(...)` prend comme paramètre une fonction qui est appelée avec la valeur de la promesse lorsqu'elle est résolue. Remarquez aussi que `.catch(...)` est équivalent à `.then(undefined, ...)`. C'est une façon de gérer l'asynchronisme en JavaScript : au lieu de bloquer l'exécution du code en attendant que `fetchData()` soit terminé, vous spécifiez une fonction de rappel à exécuter une fois que les données sont prêtes.

Enfin, dans l'exemple ci-dessous, dans la classe `DataService`, nous utilisons un `async/await` pour gérer les opérations asynchrones. La méthode `retrieveData` est une méthode asynchrone qui attend que la méthode `fetchData` soit résolue avant de continuer. C'est pourquoi il n'y a pas besoin d'utiliser `.then()` pour gérer la résolution de la promesse.

Remarquez que l'exécution du code continue après `dataService.retrieveData();`. Cette méthode retourne une promesse qui est résolue de manière asynchrone, ce qui signifie que le reste du code peut continuer à s'exécuter pendant que `retrieveData` attend que `fetchData` soit résolu.

Si vous voulez attendre que `retrieveData` soit terminé avant de continuer, vous pouvez utiliser `await` :

```typescript
await dataService.retrieveData();
```

Cependant, notez que await ne peut être utilisé que dans une fonction asynchrone ou un module ES6. Si vous n'êtes pas dans une fonction asynchrone, vous pouvez utiliser `then` pour attendre que la promesse soit résolue :

```typescript
dataService.retrieveData().then(() => {
    // Le code ici ne sera exécuté qu'après que retrieveData soit terminé
});
```

vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# lecture

48 Introduction.pdf

49 Callback hell.pdf

50 Promesse.pdf

51 Asyncawait.pdf

# Exercice 1

1. Créez une fonction `calculateSumAsync` qui prend deux nombres comme arguments et retourne une promesse (`Promise`) qui se résout à leur somme après un délai de 3 secondes.
2. Utilisez `async` et `await` pour appeler `calculateSumAsync` dans une autre fonction `printSum`. `printSum` doit afficher le message "Calcul en cours..." avant d'appeler `calculateSumAsync`, puis afficher le résultat une fois qu'il est prêt.

# Exercice 2

1. Créez une fonction `verifyUser` qui prend un nom d'utilisateur et un mot de passe comme arguments. Cette fonction doit retourner une promesse (`Promise`) qui se résout (`resolve`) si le nom d'utilisateur et le mot de passe sont corrects, et se rejette (`reject`) si l'un d'eux est incorrect.
2. Utilisez `then` et `catch` pour gérer la promesse retournée par `verifyUser`. Si la promesse est résolue, affichez un message de bienvenue à l'utilisateur. Si la promesse est rejetée, affichez un message d'erreur.

# Exercice 3

Reprenez les exercices 1 et 2 mais cette fois-ci utilisez des classes (`Calculator` pour l'exercice 1 et `User` pour l'exercice 2). La fonction `calculateSumAsync` doit être une méthode de la classe `Calculator` et la fonction `verifyUser` doit être une méthode de la classe `User`.
