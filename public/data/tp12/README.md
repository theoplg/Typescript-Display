# Exceptions

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/12_exceptions/README.md)

Le traitement des exceptions est un mécanisme de gestion des erreurs qui permet à un programme de continuer à s'exécuter même lorsqu'une erreur se produit. Il permet de séparer le code qui gère les erreurs du code normal, ce qui rend le code plus lisible et plus facile à maintenir.

`throw` est une instruction qui permet de créer une exception personnalisée. Lorsqu'une instruction `throw` est exécutée, le flux d'exécution normal du programme est interrompu et le système commence à chercher un bloc `catch` qui peut gérer l'exception.

Le bloc `try/catch/finally` est utilisé pour capturer et gérer les exceptions. Le code à l'intérieur du bloc `try` est exécuté en premier. Si une exception est levée dans le bloc `try`, le bloc `catch` est exécuté. Le bloc `finally`, si présent, est exécuté après le bloc `try` et `catch`, qu'une exception soit levée ou non.

La différence entre `throw` et `try/catch/finally` est que `throw` est utilisé pour créer et lancer une exception, tandis que `try/catch/finally` est utilisé pour capturer et gérer les exceptions.

Le paramètre `e` dans le bloc `catch` représente l'exception qui a été levée. Lorsqu'une exception est levée (soit par le système, soit par une instruction `throw`), elle est passée au bloc `catch` le plus proche qui peut la gérer. Le paramètre `e` est une variable qui contient cette exception. Vous pouvez lui donner n'importe quel nom, pas seulement `e`.

Dans l'exemple ci-dessous, si la fonction `convertirEnNombre` lance une exception (ce qui se produit lorsque l'entrée ne peut pas être convertie en nombre), cette exception est capturée par le bloc `catch` et stockée dans la variable `e`. Vous pouvez ensuite utiliser `e` pour accéder aux informations sur l'exception, comme le message d'erreur en utilisant `e.message`. Cette variable est de type `Error` en TypeScript, donc vous pouvez accéder à toutes les propriétés et méthodes de l'objet `Error` en utilisant `e`.

vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")

Pour rappel, vous pouvez accéder au code source de toutes les parties (à partir de 06) sur le dépôt suivant : https://gitlab.com/webdev101/webdev101.gitlab.io/-/tree/main/public/

# lecture

21 Gestion des exceptions.pdf

# Exercice

1. Créer la classe `Rectangle` avec les propriétés `longueur` et `largeur` et un constructeur qui prend deux paramètres pour initialiser ces propriétés.
2. Ajoutez une méthode `calculerSurface`. N'oubliez pas de gérer le cas où la longueur ou la largeur sont négatives ou nulles en utilisant throw.
3. Ajouter la méthode `essayerCalculSurface` à la classe Rectangle qui utilise un bloc `try-catch-finally` pour appeler la méthode `calculerSurface` et gérer les erreurs potentielles.
4. Enfin, créez trois instances de la classe Rectangle pour tester les cas où la longueur ou la largeur sont négatives ou nulles et utilisez ces instances pour appeler la méthode `essayerCalculSurface` pour voir comment elle gère les erreurs.
