var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // le navigateur appelle cette méthode à chaque fois que l'élément est ajouté
    // au DOM (c'est à dire inséré dans la page)
    // vous pouvez aussi appeler cette méthode manuellement
    // pour mettre à jour l'élément
    HelloWorld.prototype.connectedCallback = function () {
        this.textContent = "Hello World!";
    };
    return HelloWorld;
}(HTMLElement));
// ici on enregistre notre élément <hello-world> dans le navigateur
// pour qu'il soit reconnu et utilisable dans le HTML
// le nom de la balise est le premier paramètre
// le deuxième paramètre est la classe qui définit le comportement de l'élément
customElements.define("hello-world", HelloWorld);
var HelloName = /** @class */ (function (_super) {
    __extends(HelloName, _super);
    function HelloName() {
        var _this = _super.call(this) || this;
        _this.name = "Remi";
        return _this;
    }
    Object.defineProperty(HelloName, "observedAttributes", {
        // le navigateur appelle cette méthode pour savoir
        // quels attributs observer (c'est à dire surveiller les changements de valeur)
        // et pour ensuite appeler attributeChangedCallback
        get: function () {
            return ["name"];
        },
        enumerable: false,
        configurable: true
    });
    // le navigateur appelle cette méthode à chaque fois qu'un attribut
    // observé change de valeur (voir observedAttributes)
    // puis il appelle connectedCallback pour mettre à jour l'élément
    HelloName.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        if (name === "name") {
            console.log("Attribute ".concat(name, " changed from ").concat(oldValue, " to ").concat(newValue));
            this.name = newValue;
        }
    };
    // cette méthode est appelée à chaque fois que l'attribut name change
    // (voir ci-dessus)
    HelloName.prototype.connectedCallback = function () {
        console.log("Hello ".concat(this.name, "!"));
        this.textContent = "Hello ".concat(this.name, "!");
    };
    return HelloName;
}(HTMLElement));
customElements.define("hello-name", HelloName);
//ajouter un élément <hello-name> programmatiquement
var helloName = document.createElement("hello-name");
helloName.setAttribute("name", "Monsieur DEBUT");
document.body.appendChild(helloName);
//toujours attendre que le DOM soit chargé (événement window.onload) avant de manipuler les éléments!
//en particulier, ne pas utiliser getElementById avant que le DOM soit chargé en entier!
//ici on utilise une fonction fléchée donnée en paramètre de window.onload
//qui va manipuler divers éléments du DOM
window.onload = function () {
    //d'abord modifier l'attribut du troisième élément hello-name
    var thirdHelloName = document.getElementById("third");
    if (thirdHelloName) {
        //changer la valeur de l'attribut name
        thirdHelloName.setAttribute("name", "John");
        //mettre à jour le contenu de l'élément
        thirdHelloName.connectedCallback();
    }
    else {
        console.error("Element not found");
    }
    //ajouter un élément <hello-name> programmatiquement
    var helloName = document.createElement("hello-name");
    helloName.setAttribute("name", "Madame FIN");
    document.body.appendChild(helloName);
};
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateTime.prototype.connectedCallback = function () {
        var _this = this;
        this.update();
        this.intervalId = window.setInterval(function () { return _this.update(); }, 1000);
    };
    DateTime.prototype.disconnectedCallback = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    DateTime.prototype.update = function () {
        var now = new Date();
        this.textContent = now.toLocaleString();
    };
    return DateTime;
}(HTMLElement));
customElements.define("date-time", DateTime);
var GreetCustom = /** @class */ (function (_super) {
    __extends(GreetCustom, _super);
    function GreetCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreetCustom.prototype.connectedCallback = function () {
        var hour = new Date().getHours();
        var greeting = "";
        if (hour >= 6 && hour < 12) {
            greeting = "Bonjour";
        }
        else if (hour >= 12 && hour < 18) {
            greeting = "Bon après-midi";
        }
        else if (hour >= 18 && hour < 22) {
            greeting = "Bonsoir";
        }
        else {
            greeting = "Bonne nuit";
        }
        this.textContent = greeting;
    };
    return GreetCustom;
}(HTMLElement));
customElements.define("greet-custom", GreetCustom);
