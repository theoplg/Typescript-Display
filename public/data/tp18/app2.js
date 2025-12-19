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
// <hello-world>
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.connectedCallback = function () {
        this.textContent = "Hello World!";
    };
    return HelloWorld;
}(HTMLElement));
customElements.define("hello-world", HelloWorld);
// <hello-name>
var HelloName = /** @class */ (function (_super) {
    __extends(HelloName, _super);
    function HelloName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelloName, "observedAttributes", {
        get: function () {
            return ["name"];
        },
        enumerable: false,
        configurable: true
    });
    HelloName.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        if (name === "name") {
            this.textContent = "Hello ".concat(newValue, "!");
        }
    };
    HelloName.prototype.connectedCallback = function () {
        var name = this.getAttribute("name") || "Remi";
        this.textContent = "Hello ".concat(name, "!");
    };
    return HelloName;
}(HTMLElement));
customElements.define("hello-name", HelloName);
// <date-time>
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
        clearInterval(this.intervalId);
    };
    DateTime.prototype.update = function () {
        var now = new Date();
        this.textContent = now.toLocaleString();
    };
    return DateTime;
}(HTMLElement));
customElements.define("date-time", DateTime);
// <greet-custom>
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
// ✅ Après chargement du DOM
window.onload = function () {
    // Modifier le troisième <hello-name>
    var third = document.getElementById("third");
    if (third) {
        third.setAttribute("name", "John");
    }
    // ✅ Créer dynamiquement des éléments
    var hello1 = document.createElement("hello-name");
    hello1.setAttribute("name", "Monsieur DEBUT");
    document.body.appendChild(hello1);
    var hello2 = document.createElement("hello-name");
    hello2.setAttribute("name", "Madame FIN");
    document.body.appendChild(hello2);
    var greet = document.createElement("greet-custom");
    document.body.appendChild(greet);
    var date = document.createElement("date-time");
    document.body.appendChild(date);
};
