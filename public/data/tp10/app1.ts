interface IUser {
  id: number;
  name: string;
  age: number;
  score: number[];
  getMaxScore(): number;
  getAverageScore(): number;
}

class User implements IUser {
  id: number;
  name: string;
  age: number;
  score: number[];
  getMaxScore(): number {
    const maxScore = Math.max(...this.score);
    console.log("le score max est :", maxScore);
    return maxScore;
  }
  getAverageScore(): number {
    const sum = this.score.reduce((a, b) => a + b);
    const moy = sum / this.score.length;
    console.log("la moyenne est :", moy);
    return moy;
  }
  constructor(id: number, name: string, age: number, score: number[]) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.score = score;
  }
}

let yifan: User = new User(1, "yifan", 20, [10, 40, 20]);
let théo: User = new User(2, "théo", 20, [10, 20, 30]);
let théophile: User = new User(3, "théophile", 19, [1, 4, 6]);

yifan.getAverageScore();
théo.getAverageScore();
yifan.getMaxScore();

let tabIUser: IUser[] = [];
tabIUser.push(yifan);
tabIUser.push(théo);
tabIUser.push(théophile);
console.log(tabIUser);

function serializeUsers(User: IUser[]): string {
  let serializedData: string = JSON.stringify(User);
  console.log(serializedData);
  return serializedData;
}

serializeUsers(tabIUser);

function deserializeUsers(serializedData: string): IUser[]{
  let users: IUser[] = JSON.parse(serializedData);
  console.log(users)
  return users 
}

tabstring = deserializeUsers(serializeUsers(tabIUser)) // la fonction affiche le résultat comme l-on l'avait au début mais sans afficher les méthodes

// il n'est donc pas possible d'appeler les méthodes d'objets déserialisés

for (let a of tabstring){
  const index = tabstring.indexof(a)
  tabstring[index] = new User(a.id, a.name, a.age, a.score)   
}

console.log(tabstring) // on redéfinie des users