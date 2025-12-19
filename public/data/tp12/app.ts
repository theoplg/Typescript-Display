class Calculatrice {
  diviser(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division par zéro n'est pas autorisée");
    }
    return a / b;
  }

  essayerDivision(a: number, b: number) {
    try {
      console.log(this.diviser(a, b));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("Fin de la tentative de division.");
    }
  }
}

const calc = new Calculatrice();
calc.essayerDivision(10, 0);

//deuxième exemple

class Convertisseur {
  convertirEnNombre(input: string): number {
    const resultat = Number(input);
    if (isNaN(resultat)) {
      throw new Error(`'${input}' ne peut pas être converti en nombre`);
    }
    return resultat;
  }

  essayerConversion() {
    try {
      console.log(this.convertirEnNombre("123"));
      console.log(this.convertirEnNombre("abc"));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("Fin de la tentative de conversion.");
    }
  }
}

const convertisseur = new Convertisseur();
convertisseur.essayerConversion();

class Rectangle {
  largeur: number;
  longueur: number;
  constructor(largeur: number, longueur: number) {
    this.largeur = largeur;
    this.longueur = longueur;
  }
  calculerSurface(largeur: number, longueur: number): number {
    if (largeur <= 0 || longueur <= 0) {
      throw new Error(
        "la longueur ou la largeur est négative ou nul, impossible "
      );
    }
    return largeur * longueur;
  }
  essayerCalculSurface(largeur: number, longueur: number) {
    try {
      console.log(this.calculerSurface(longueur, largeur));
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("fin de la tentative de calcule de surface")
    }
  }
}

let rect1 = new Rectangle(-5,10);
rect1.essayerCalculSurface(rect1.largeur, rect1.longueur)

let rect2 = new Rectangle(3,7);
rect2.essayerCalculSurface(rect2.largeur, rect2.longueur)

const rect3 = new Rectangle(8, 0);
rect3.essayerCalculSurface(rect3.largeur, rect3.longueur);