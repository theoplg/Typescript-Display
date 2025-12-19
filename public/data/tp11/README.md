# Generics

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/11_generics/README.md)

La généricité est un concept de programmation qui permet de créer des composants réutilisables qui peuvent travailler avec différents types de données, sans sacrifier la sécurité des types.

Dans le code ci-dessous, `GenericStorage<T>` est une classe générique. Le `<T>` est un paramètre de type qui est remplacé par un type réel lorsque vous utilisez la classe. Par exemple, lorsque vous créez une instance de `GenericStorage<number>`, `T` est remplacé par `number`, ce qui signifie que cette instance de `GenericStorage` peut seulement stocker des nombres.

La généricité est utile car elle permet d'écrire du code qui est flexible et réutilisable tout en conservant la sécurité des types. Sans la généricité, vous devriez écrire une classe de stockage distincte pour chaque type de données que vous voulez stocker, ce qui serait répétitif et difficile à maintenir.

Remarquez dans le code ci-dessous que la méthode `get` de la classe `Map` en TypeScript renvoie `undefined` si la clé spécifiée n'existe pas dans la `Map`.

Dans la classe `GenericStorage<T>`, la méthode `get` utilise la méthode `get` de `Map`, donc elle hérite de ce comportement. C'est pourquoi le type de retour de la méthode `get` est `T | undefined` : elle renvoie une valeur de type `T` si la clé existe, et `undefined` si la clé n'existe pas.

C'est une bonne pratique en TypeScript car cela force le programmeur à gérer le cas où la clé n'existe pas.

Dans le code, les chevrons `<>` sont utilisés pour définir et utiliser des types génériques en TypeScript.

1. **Définition** de types génériques : Lors de la définition de la classe `GenericStorage<T>`, vous utilisez les chevrons pour spécifier un paramètre de type. Ici, `T` est un paramètre de type que vous avez défini.
2. **Utilisation** de types génériques : Lorsque vous créez une instance de la classe `GenericStorage`, vous utilisez les chevrons pour spécifier le type réel que `T` doit représenter. Par exemple, dans `new GenericStorage<number>()`, vous indiquez que `T` doit être remplacé par `number`. De même, dans `new GenericStorage<string>()`, vous indiquez que `T` doit être remplacé par `string`.
Ainsi, `numberStorage` est une instance de `GenericStorage` qui peut seulement stocker des nombres, et `stringStorage` est une instance de `GenericStorage` qui peut seulement stocker des chaînes de caractères.

vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")


# lecture

40 Introduction.pdf

41 Declaration de base.pdf

42 Classes et interfaces.pdf

43 Contraintes.pdf

44 Generique et constructeur.pdf

# Exercice

1. Créez une classe `Queue` qui utilise les génériques. Cette classe doit avoir les méthodes suivantes :

- `enqueue(element: T)`: Ajoute un élément à la queue.
- `dequeue()`: Supprime et renvoie l'élément en tête de la queue. Si la queue est vide, cette méthode doit renvoyer undefined.
- `size()`: Renvoie le nombre d'éléments dans la queue.

2. Créez une instance de `Queue` qui stocke des nombres et une autre qui stocke des chaînes de caractères. Testez les méthodes `enqueue`, `dequeue` et `size` sur ces instances.

Voici un squelette de code pour vous aider à démarrer :

```typescript
class Queue<T> {
  // TODO: Implementez les methodes ici

  enqueue(element: T): void {
    // TODO
  }

  dequeue(): T | undefined {
    // TODO
  }

  size(): number {
    // TODO
  }
}

// Testez votre code ici
let numberQueue = new Queue<number>();
// TODO

let stringQueue = new Queue<string>();
// TODO
```
