let tab: number[] = [0, 2, 4, 7, 1, 8];
console.log("tab: " + tab);

function fois2(x: number): number {
  return x * 2;
}

//impossible de faire let tab2 : number[] = fois2(tab); (a tester et voir l'erreur)

//utilisation de map

let tab2: number[] = tab.map(fois2);
console.log("tab.map(fois2): " + tab2);

//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }

let fois3: (number) => number = (x: number): number => {
  let result = x * 3;
  return result;
};

let tab3: number[] = tab.map(fois3);
console.log("tab.map(fois3): " + tab3);

//avec expression
//(<paramètres> ...) => <expression>
let fois4: (number) => number = (x: number): number => x * 4;

let tab4: number[] = tab.map(fois4);
console.log("tab.map(fois4): " + tab4);

//fonction de filtrage
let estPair = (x: number): boolean => x % 2 === 0;

let tabPair = tab.filter(estPair);
console.log("tab.filter(estPair): " + tabPair);

//fonction de reduce (ici la somme de tous les éléments du tableau)
let somme = (a: number, b: number) => a + b;
let tabSomme = tab.reduce(somme);
console.log("tab.reduce(somme): " + tabSomme);

//chaînage
let tabSumPairFois2 = tab.filter(estPair).map(fois2).map(fois3).reduce(somme);
console.log(
  "tab.filter(estPair).map(fois2).map(fois3).reduce(somme): " + tabSumPairFois2
);

//fonction de chaînage
function ma_chaine(tab: number[]): number {
  return tab.filter(estPair).map(fois2).map(fois3).reduce(somme);
}
let tabSumPairFois2Bis = ma_chaine(tab);
console.log("ma_chaine(tab): " + tabSumPairFois2Bis);

//fonction de chaînage avec fonctions en paramètres
function ma_chaine2(
  tab: number[],
  f_filter: (x: number) => boolean,
  f_map1: (x: number) => number,
  f_map2: (x: number) => number,
  f_reduce: (a: number, b: number) => number
): number {
  return tab.filter(f_filter).map(f_map1).map(f_map2).reduce(f_reduce);
}
let tabSumPairFois2Ter = ma_chaine2(tab, estPair, fois2, fois3, somme);
console.log("ma_chaine2(tab,estPair,fois2,fois3,somme): " + tabSumPairFois2Ter);

//fonction de recherche
let plusGrandQue5 = (a: number): boolean => a > 5;
let valeur = tab.find(plusGrandQue5);
let index = tab.findIndex(plusGrandQue5);
console.log(
  `${valeur} est le premier élément supérieur à 5 et il est situé à la position ${index}`
);

//différence avec forEach

//La différence principale entre forEach et map est que
// map crée un nouveau tableau avec les résultats de
// l'appel d'une fonction fournie sur chaque élément
// du tableau appelant, tandis que forEach exécute
// une fonction fournie une fois pour chaque élément
// du tableau, sans modifier le tableau lui-même
// et sans créer un nouveau tableau.

// Voici un exemple de code qui illustre cette différence :
let other_tab: number[] = [1, 2, 3, 4, 5];

// Avec map
let tabMap: number[] = other_tab.map((x) => x * 2);
console.log("Avec map: ", tabMap); // Affiche [2, 4, 6, 8, 10]

// Avec forEach
other_tab.forEach((x, i, arr) => (arr[i] = x * 2));
console.log("Avec forEach: ", other_tab); // Affiche [2, 4, 6, 8, 10]

// Exemple avec le talbeau initial
// différence avec forEach (attention ici il y a un retour à la ligne
// à chaque console.log, donc pour chaque élément !)
// forEach retourne void donc ne pas mettre le retour de forEach
// dans une variable sinon sa valeur sera undefined !
tab.forEach((x) => {
  x = fois2(x);
  console.log("for each (fois2): " + x);
});

let fruits = [
  "pomme",
  "kiwi",
  "banane",
  "cerise",
  "orange",
  "poire",
  "fraise",
  "prune",
  "ananas",
  "pêche",
];
let fruitsMajuscules = fruits.map((fruit) => fruit.toUpperCase());
console.log("Fruits en MAJUSCULES :", fruitsMajuscules);
let fruitsAvecP = fruits.filter((fruit) => fruit[0] === "p");
console.log("Fruits qui commencent par 'p' :", fruitsAvecP);
let fruitsEnLigne = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log("Fruits en ligne :", fruitsEnLigne);
let fruitLong = fruits.find((fruit) => fruit.length > 5);
console.log("Premier fruit avec plus de 5 lettres :", fruitLong);
