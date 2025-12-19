//voir https://www.json.org/json-fr.html

//dé-sérialisation de JSON vers des objets (eux-même décrits par une interface)

let data = `[
    {
      "id": "1042",
      "name": "Joe",
      "age": 27,
      "scores": [31.4, 29.9, 35.7]
    },
    {
      "id": "1071",
      "name": "Sarah",
      "age": 29,
      "scores": [25.0, 27.1]
    }
  ]`;

interface UserInterface {
  id: string;
  name: string;
  age: number;
  scores: number[];
}

//dé-sérialisation de JSON vers un tableau d'objets

let users: UserInterface[] = JSON.parse(data);

users.forEach((u) => {
  console.log(`id: ${u.id}, name: ${u.name}, age: ${u.age}`);
  u.scores.forEach((s) => {
    console.log(`    score[${u.scores.indexOf(s)}]: ${s}`);
  });
});

//sérialisation d'objets (instanciés depuis une classe qui implémente une interface) vers JSON

class User implements UserInterface {
  id: string;
  name: string;
  age: number;
  scores: number[];
  constructor(id: string, name: string, age: number, scores: number[]) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.scores = scores;
  }
}

//création d'objets (instanciés depuis la classe User
//qui implémente l'interface UserInterface)

let u1: UserInterface, u2: UserInterface;
u1 = new User("456", "Eya", 23, [2.4, 34]);
u2 = new User("789", "Emma", 32, [23.1, 9, 5]);

//sans utiliser de classe cela donne

let u3: UserInterface = {
  id: "1042",
  name: "Joe",
  age: 27,
  scores: [31.4, 29.9, 35.7],
};

//création d'un tableau de 3 objets (instanciés depuis la classe Use
//qui implémente l'interface UserInterface)

let users2: UserInterface[] = [u1, u2, u3];

//sérialisation du tableau users2 vers JSON

let data2: string = JSON.stringify(users2);

console.log(data2);
