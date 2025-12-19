const additionner = (a: number, b: number): number => a + b;
const soustraire = (a: number, b: number): number => a - b;
const multiplier = (a: number, b: number): number => a * b;
const diviser = (a: number, b: number): number => a / b;

const calculatrice = (a: number, b: number, operation: string): void => {
  let resultat: number;

  switch (operation) {
    case "additionner":
      resultat = additionner(a, b);
      console.log(`La somme est: ${resultat}`);
      break;
    case "soustraire":
      resultat = soustraire(a, b);
      console.log(`La différence est: ${resultat}`);
      break;
    case "multiplier":
      resultat = multiplier(a, b);
      console.log(`Le produit est: ${resultat}`);
      break;
    case "diviser":
      resultat = diviser(a, b);
      console.log(`Le quotient est: ${resultat}`);
      break;
    default:
      console.log("Opération inconnue.");
  }
};
calculatrice(5, 3, "additionner");

// Affiche "Le résultat est: 33333"
document.addEventListener("click", (event: MouseEvent) => {
  console.log(`x: ${event.clientX}, y: ${event.clientY}`);
});

//ici la fonction fléchée reçoit un paramètre de type MouseEvent
//qui sera passé automatiquement par le navigateur lors du clic
//En fait, la fonction fléchée est un callback qui sera appelé par le navigateur
//à chaque clic sur la page. C'est pour cela qu'on dit qu'on "ajoute" un écouteur
//d'événement sur le document. On dit aussi qu'on "écoute" l'événement "click" sur le document.
//On dit aussi qu'on "souscrit" à l'événement "click" sur le document.

let mouseX = 0;
let mouseY = 0;

// 🎯 Met à jour les coordonnées à chaque mouvement de souris
document.addEventListener("mousemove", (event: MouseEvent) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// ⏱ Affiche les coordonnées toutes les secondes
setInterval(() => {
  console.log(`Coordonnées : x = ${mouseX}, y = ${mouseY}`);
}, 1000);
