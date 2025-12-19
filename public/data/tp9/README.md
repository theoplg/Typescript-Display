# Les objets en TypeScript: héritage, polymorphisme, interfaces, classes abstraites

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/09_objects/README.md)

Ce code introduit des concepts de programmation orientée objet tels que les classes, les interfaces, l'héritage et le polymorphisme. Voici une explication de ces concepts tels qu'ils sont utilisés dans ce code :

- Classes et Héritage : Dans ce code, nous avons deux classes, `User` et `Admin`, qui héritent de la classe `Person`. C'est ce qu'on appelle l'héritage, qui est un mécanisme permettant à une classe de gagner des propriétés et des méthodes d'une autre classe. Ici, `User` et `Admin` héritent de `Person`, ce qui signifie qu'ils ont accès aux propriétés `name` et `age` ainsi qu'à toute méthode définie dans `Person`.
- Polymorphisme : Le polymorphisme est un concept qui permet à une méthode d'avoir de nombreuses formes. Dans ce code, la méthode `logPerson()` est un exemple de polymorphisme. Bien qu'elle soit définie dans la classe `Person`, elle peut être appelée sur des instances de `User` et `Admin` grâce à l'héritage. De plus, si `User` ou `Admin` redéfinissait `logPerson()`, cette nouvelle définition serait utilisée à la place lors de l'appel de la méthode sur une instance de ces classes.
- Interfaces : L'interface `PersonInterface` est définie avec une méthode `logPerson()`. Cette interface est utilisée comme un contrat pour la classe `Person`, ce qui signifie que toute classe qui implémente `PersonInterface` doit fournir une implémentation pour `logPerson()`.
- Classes abstraites : La classe `Person` est définie comme une classe abstraite et implémente l'interface `PersonInterface`. Comme `Person` est une classe abstraite, elle ne peut pas être instanciée directement. Elle définit également la méthode `logPerson()` comme une méthode abstraite, ce qui signifie que toute classe qui hérite de `Person` doit fournir sa propre implémentation de `logPerson()`.

Quelques détails d'implémentation :
- le mot-clé `class` est utilisé pour définir une classe. Une classe est un modèle pour créer des objets (des instances de la classe). Elle contient des propriétés (variables) et des méthodes (fonctions). Le mot-clé `public` est utilisé pour déclarer une propriété ou une méthode comme accessible en dehors de la classe. Le mot-clé `private` est utilisé pour déclarer une propriété ou une méthode comme accessible uniquement à l'intérieur de la classe. Le mot-clé `protected` est utilisé pour déclarer une propriété ou une méthode comme accessible uniquement à l'intérieur de la classe et des classes filles (voir ci-dessous).
- les getteurs et les setteurs sont des méthodes spéciales qui permettent d'accéder et de modifier les propriétés d'une classe. Ils sont en général définis avec des méthodes qui commencent par `get` et `set` respectivement, suivis du nom de la propriété. Ils sont utilisés pour encapsuler l'accès aux propriétés d'une classe, ce qui signifie qu'ils permettent de contrôler l'accès à ces propriétés (par exemple, pour valider les valeurs avant de les affecter à la propriété).
- le mot-clé `interface` est utilisé pour définir une interface. Elle peut contenir des propriétés et des méthodes, mais ne peut pas contenir d'implémentation (de code pour les méthodes).
- le constructeur d'une classe est défini par une méthode appelée `constructor`. Il est appelé lorsqu'une instance de la classe est créée. 
- le mot-clé `new` est utilisé pour créer une nouvelle instance d'une classe. Il est suivi du nom de la classe et de ses paramètres entre parenthèses (s'il y en a). Le constructeur de la classe est appelé avec ces paramètres pour initialiser l'instance.
- le mot-clé `implements` est utilisé pour indiquer qu'une classe implémente une interface. Cela signifie que la classe doit fournir une implémentation pour toutes les méthodes définies dans l'interface. C'est une sorte de contrat que la classe doit respecter.
- le mot-clé `extends` est utilisé pour indiquer qu'une classe hérite d'une autre classe: on parle alors de classe fille et de classe mère ou de classe parente. La classe fille hérite des propriétés et des méthodes de la classe mère. Elle peut également redéfinir les méthodes de la classe mère pour fournir une implémentation spécifique.
- le mot-clé `abstract` est utilisé pour indiquer qu'une classe est abstraite (ne peut pas être instanciée directement) ou qu'une méthode est abstraite (doit être redéfinie dans les classes filles avec son implémentation).
- la méthode `super()` est utilisée pour appeler le constructeur de la classe mère (ou parente) depuis le constructeur de la classe fille. Cette instruction doit toujours être la première instruction dans le constructeur de la classe fille. Elle est utilisée pour initialiser les propriétés héritées de la classe mère et peut donc prendre des paramètres.
- le mot-clé `this` est utilisé pour faire référence à l'objet courant (l'instance de la classe sur laquelle la méthode est appelée). Il est utilisé pour accéder aux propriétés et aux méthodes de l'objet courant (de l'instance courante).
- le mot-clé `instanceof` est utilisé pour vérifier si un objet est une instance d'une classe ou d'une classe fille. Il renvoie `true` si l'objet est une instance de la classe spécifiée, sinon il renvoie `false`.

Vous devez lire et comprendre le code source de `app.ts` que voici

[app.ts](app.ts ":include :type=code typescript")


# lecture

22 Introduction.pdf

23 Les classes.pdf

24 Les proprietes.pdf

25 Les methodes.pdf

26 Les constructeurs.pdf

27 Le statisme.pdf

28 L'accessibilite des membres.pdf

29 L'encapsulation.pdf

30 L'heritage.pdf

31 L'abstraction.pdf

32 Les interfaces.pdf

33 Le polymorphisme.pdf

34 Les principes SOLID.pdf

# Exercice

1. Créez une interface `IVehicle` qui définit une méthode `drive` qui renvoie `void` et une méthode `honk` qui renvoie `void`.
2. Créez une classe abstraite `Vehicle` qui implémente `IVehicle` et qui a une propriété `speed` et une méthode abstraite `honk` (qui renvoie `void`) et qui donne l'implémentation de `drive` = affichage de `Driving at ${this.speed} km/h` dans la console.
3. Créez une classe `Car` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Beep beep!" dans la console.
4. Créez une classe `Bicycle` qui étend `Vehicle` et implémente la méthode `honk` = affichage de "Ring Ring" dans la console.
5. Créez deux instances de Car et trois de Bicycle et ajoutez-les à un tableau `vehicles` de type `IVehicle[]` (on utilise plutôt l'interface que la classe abstraite pour déclarer le type des éléments du tableau).
6. Parcourez le tableau `vehicles` avec une boucle `for...of` et appelez les méthodes `drive` et `honk` à chaque itération.
