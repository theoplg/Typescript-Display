var Calculatrice = /** @class */ (function () {
    function Calculatrice() {
    }
    Calculatrice.prototype.diviser = function (a, b) {
        if (b === 0) {
            throw new Error("Division par zéro n'est pas autorisée");
        }
        return a / b;
    };
    Calculatrice.prototype.essayerDivision = function (a, b) {
        try {
            console.log(this.diviser(a, b));
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("Fin de la tentative de division.");
        }
    };
    return Calculatrice;
}());
var calc = new Calculatrice();
calc.essayerDivision(10, 0);
//deuxième exemple
var Convertisseur = /** @class */ (function () {
    function Convertisseur() {
    }
    Convertisseur.prototype.convertirEnNombre = function (input) {
        var resultat = Number(input);
        if (isNaN(resultat)) {
            throw new Error("'".concat(input, "' ne peut pas \u00EAtre converti en nombre"));
        }
        return resultat;
    };
    Convertisseur.prototype.essayerConversion = function () {
        try {
            console.log(this.convertirEnNombre("123"));
            console.log(this.convertirEnNombre("abc"));
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("Fin de la tentative de conversion.");
        }
    };
    return Convertisseur;
}());
var convertisseur = new Convertisseur();
convertisseur.essayerConversion();
var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    Rectangle.prototype.calculerSurface = function (largeur, longueur) {
        if (largeur <= 0 || longueur <= 0) {
            throw new Error("la longueur ou la largeur est négative ou nul, impossible ");
        }
        return largeur * longueur;
    };
    Rectangle.prototype.essayerCalculSurface = function (largeur, longueur) {
        try {
            console.log(this.calculerSurface(longueur, largeur));
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("fin de la tentative de calcule de surface");
        }
    };
    return Rectangle;
}());
var rect1 = new Rectangle(-5, 10);
rect1.essayerCalculSurface(rect1.largeur, rect1.longueur);
var rect2 = new Rectangle(3, 7);
rect2.essayerCalculSurface(rect2.largeur, rect2.longueur);
var rect3 = new Rectangle(8, 0);
rect3.essayerCalculSurface(rect3.largeur, rect3.longueur);
