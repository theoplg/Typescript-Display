// Affiche "Le résultat est: 33333"
document.addEventListener("click", function (event) {
    console.log("x: ".concat(event.clientX, ", y: ").concat(event.clientY));
});
//ici la fonction fléchée reçoit un paramètre de type MouseEvent
//qui sera passé automatiquement par le navigateur lors du clic
//En fait, la fonction fléchée est un callback qui sera appelé par le navigateur
//à chaque clic sur la page. C'est pour cela qu'on dit qu'on "ajoute" un écouteur
//d'événement sur le document. On dit aussi qu'on "écoute" l'événement "click" sur le document.
//On dit aussi qu'on "souscrit" à l'événement "click" sur le document.
