// <hello-world>
class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello World!";
  }
}
customElements.define("hello-world", HelloWorld);

// <hello-name>
class HelloName extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "name") {
      this.textContent = `Hello ${newValue}!`;
    }
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Remi";
    this.textContent = `Hello ${name}!`;
  }
}
customElements.define("hello-name", HelloName);

// <date-time>
class DateTime extends HTMLElement {
  private intervalId!: number;

  connectedCallback() {
    this.update();
    this.intervalId = window.setInterval(() => this.update(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
  }

  update() {
    const now = new Date();
    this.textContent = now.toLocaleString();
  }
}
  
customElements.define("date-time", DateTime);

// <greet-custom>
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

// ✅ Après chargement du DOM
window.onload = () => {
  // Modifier le troisième <hello-name>
  const third = document.getElementById("third");
  if (third) {
    third.setAttribute("name", "John");
  }

  // ✅ Créer dynamiquement des éléments
  const hello1 = document.createElement("hello-name");
  hello1.setAttribute("name", "Monsieur DEBUT");
  document.body.appendChild(hello1);

  const hello2 = document.createElement("hello-name");
  hello2.setAttribute("name", "Madame FIN");
  document.body.appendChild(hello2);

  const greet = document.createElement("greet-custom");
  document.body.appendChild(greet);

  const date = document.createElement("date-time");
  document.body.appendChild(date);
};
