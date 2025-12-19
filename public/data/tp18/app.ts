class HelloWorld extends HTMLElement {
  // le navigateur appelle cette méthode à chaque fois que l'élément est ajouté
  // au DOM (c'est à dire inséré dans la page)
  // vous pouvez aussi appeler cette méthode manuellement
  // pour mettre à jour l'élément
  connectedCallback() {
    this.textContent = "Hello World!";
  }
}

// ici on enregistre notre élément <hello-world> dans le navigateur
// pour qu'il soit reconnu et utilisable dans le HTML
// le nom de la balise est le premier paramètre
// le deuxième paramètre est la classe qui définit le comportement de l'élément
customElements.define("hello-world", HelloWorld);

class HelloName extends HTMLElement {
  name: string = "Remi";
  constructor() {
    super();
  }

  // le navigateur appelle cette méthode pour savoir
  // quels attributs observer (c'est à dire surveiller les changements de valeur)
  // et pour ensuite appeler attributeChangedCallback
  static get observedAttributes(): string[] {
    return ["name"];
  }

  // le navigateur appelle cette méthode à chaque fois qu'un attribut
  // observé change de valeur (voir observedAttributes)
  // puis il appelle connectedCallback pour mettre à jour l'élément
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "name") {
      console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
      this.name = newValue;
    }
  }

  // cette méthode est appelée à chaque fois que l'attribut name change
  // (voir ci-dessus)
  connectedCallback() {
    console.log(`Hello ${this.name}!`);
    this.textContent = `Hello ${this.name}!`;
  }
}

customElements.define("hello-name", HelloName);

//ajouter un élément <hello-name> programmatiquement
const helloName: HelloName = document.createElement("hello-name") as HelloName;
helloName.setAttribute("name", "Monsieur DEBUT");
document.body.appendChild(helloName);

//toujours attendre que le DOM soit chargé (événement window.onload) avant de manipuler les éléments!
//en particulier, ne pas utiliser getElementById avant que le DOM soit chargé en entier!

//ici on utilise une fonction fléchée donnée en paramètre de window.onload
//qui va manipuler divers éléments du DOM

window.onload = () => {
  //d'abord modifier l'attribut du troisième élément hello-name
  const thirdHelloName: HelloName = document.getElementById(
    "third"
  ) as HelloName;
  if (thirdHelloName) {
    //changer la valeur de l'attribut name
    thirdHelloName.setAttribute("name", "John");
    //mettre à jour le contenu de l'élément
    thirdHelloName.connectedCallback();
  } else {
    console.error("Element not found");
  }

  //ajouter un élément <hello-name> programmatiquement
  const helloName: HelloName = document.createElement(
    "hello-name"
  ) as HelloName;
  helloName.setAttribute("name", "Madame FIN");
  document.body.appendChild(helloName);
};
class DateTime extends HTMLElement {
  intervalId: number | undefined;

  connectedCallback() {
    this.update();
    this.intervalId = window.setInterval(() => this.update(), 1000);
  }

  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  update() {
    const now = new Date();
    this.textContent = now.toLocaleString();
  }
}

customElements.define("date-time", DateTime);

class GreetCustom extends HTMLElement {
  connectedCallback() {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 6 && hour < 12) {
      greeting = "Bonjour";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Bon après-midi";
    } else if (hour >= 18 && hour < 22) {
      greeting = "Bonsoir";
    } else {
      greeting = "Bonne nuit";
    }

    this.textContent = greeting;
  }
}

customElements.define("greet-custom", GreetCustom);
