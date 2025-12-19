interface Electrical {
  getVoltage(): number;
}
interface Good {
  getPrice(): number;
}

class TV implements Electrical, Good {
  private voltage: number;
  private price: number;

  getVoltage(): number {
    return this.voltage;
  }

  getPrice(): number {
    return this.price;
  }

  constructor(price: number, voltage: number) {
    this.price = price;
    this.voltage = voltage;
  }
}

class Salad implements Good {
  private price: number;
  getPrice(): number {
    return this.price;
  }
  constructor(price: number) {
    this.price = price;
  }
}

let s1: Salad = new Salad(2.3);
let s2: Salad = new Salad(2.5);
let tv1: TV = new TV(1399, 220);
let tv2: TV = new TV(999, 220);
let tv3: TV = new TV(1499, 110);

let tabElectrical: Electrical[] = [];
tabElectrical.push(tv1);
tabElectrical.forEach((e: Electrical) =>
  console.log("electrical: " + e.getVoltage() + "V")
);

interface PersonInterface {
  logPerson(): void;
}

abstract class Person implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  abstract logPerson(): void;
}

class User extends Person {
  occupation: string;
  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }
  logPerson(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`
    );
  }
}

class Admin extends Person {
  role: string;
  constructor(name: string, age: number, role: string) {
    super(name, age);
    this.role = role;
  }
  logPerson(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`);
  }
}

//il vaut mieux toujours utiliser l'interface pour déclarer le type
//plutôt que la classe abstraite
const persons: PersonInterface[] = [
  new User("Max", 30, "Frontend Developer"),
  new Admin("Max", 30, "Administrator"),
];

persons.forEach((person: PersonInterface) => person.logPerson());

console.log("Filter Users only");
//ici le as User est nécessaire pour dire à TypeScript que le filter
//retourne un tableau de User et non de Person ou de PersonInterface
const usersOnly: User[] = persons.filter(
  (person: PersonInterface) => person instanceof User
) as User[];
usersOnly.forEach((person: Person) => person.logPerson());

// composition

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

//un vecteur est composé de deux points

interface Distance {
  distanceTo(Vector: Vector): number;
}

class Vector implements Distance {
  start: Point;
  end: Point;
  constructor(start: Point, end: Point) {
    this.start = start;
    this.end = end;
  }

  distanceTo(Vector: Vector): number {
    const dx = this.end.x - this.start.x;
    const dy = this.end.y - this.start.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1: Point = new Point(2, 3);
const p2: Point = new Point(5, 6);
const p3: Point = new Point(7, 9);
const p4: Point = new Point(10, 12);
let v1: Vector = new Vector(p1, p2);
let v2: Vector = new Vector(p3, p4);
console.log("Distance between v1 and v2", v1.distanceTo(v2));

//statisme

class Numero {
  static numeroStatique: number = 0;
  numero: number = 0;
  constructor() {
    Numero.numeroStatique++;
    this.numero++;
  }
  getNumeroStatique(): number {
    return Numero.numeroStatique;
  }
  getNumero(): number {
    return this.numero;
  }
}

const n1: Numero = new Numero();
const n2: Numero = new Numero();
const n3: Numero = new Numero();
console.log("n1", n1.getNumeroStatique(), n1.getNumero());
console.log("n2", n2.getNumeroStatique(), n2.getNumero());
console.log("n3", n3.getNumeroStatique(), n3.getNumero());
console.log("numeroStatique", Numero.numeroStatique);


