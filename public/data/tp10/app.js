//voir https://www.json.org/json-fr.html
//dé-sérialisation de JSON vers des objets (eux-même décrits par une interface)
var data = "[\n    {\n      \"id\": \"1042\",\n      \"name\": \"Joe\",\n      \"age\": 27,\n      \"scores\": [31.4, 29.9, 35.7]\n    },\n    {\n      \"id\": \"1071\",\n      \"name\": \"Sarah\",\n      \"age\": 29,\n      \"scores\": [25.0, 27.1]\n    }\n  ]";
//dé-sérialisation de JSON vers un tableau d'objets
var users = JSON.parse(data);
users.forEach(function (u) {
    console.log("id: ".concat(u.id, ", name: ").concat(u.name, ", age: ").concat(u.age));
    u.scores.forEach(function (s) {
        console.log("    score[".concat(u.scores.indexOf(s), "]: ").concat(s));
    });
});
//sérialisation d'objets (instanciés depuis une classe qui implémente une interface) vers JSON
var User = /** @class */ (function () {
    function User(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    return User;
}());
//création d'objets (instanciés depuis la classe User
//qui implémente l'interface UserInterface)
var u1, u2;
u1 = new User("456", "Eya", 23, [2.4, 34]);
u2 = new User("789", "Emma", 32, [23.1, 9, 5]);
//sans utiliser de classe cela donne
var u3 = {
    id: "1042",
    name: "Joe",
    age: 27,
    scores: [31.4, 29.9, 35.7],
};
//création d'un tableau de 3 objets (instanciés depuis la classe Use
//qui implémente l'interface UserInterface)
var users2 = [u1, u2, u3];
//sérialisation du tableau users2 vers JSON
var data2 = JSON.stringify(users2);
console.log(data2);
