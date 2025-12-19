var User = /** @class */ (function () {
    function User(id, name, age, score) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = score;
    }
    User.prototype.getMaxScore = function () {
        var maxScore = Math.max.apply(Math, this.score);
        console.log("le score max est :", maxScore);
        return maxScore;
    };
    User.prototype.getAverageScore = function () {
        var sum = this.score.reduce(function (a, b) { return a + b; });
        var moy = sum / this.score.length;
        console.log("la moyenne est :", moy);
        return moy;
    };
    return User;
}());
var yifan = new User(1, "yifan", 20, [10, 40, 20]);
var théo = new User(2, "théo", 20, [10, 20, 30]);
var théophile = new User(3, "théophile", 19, [1, 4, 6]);
yifan.getAverageScore();
théo.getAverageScore();
yifan.getMaxScore();
var tabIUser = [];
tabIUser.push(yifan);
tabIUser.push(théo);
tabIUser.push(théophile);
console.log(tabIUser);
function serializeUsers(User) {
    var serializedData = JSON.stringify(User);
    console.log(serializedData);
    return serializedData;
}
serializeUsers(tabIUser);
function deserializeUsers(serializedData) {
    var users = JSON.parse(serializedData);
    console.log(users);
    return users;
}
tabstring = deserializeUsers(serializeUsers(tabIUser)); // la fonction affiche le résultat comme l-on l'avait au début mais sans afficher les méthodes
// il n'est donc pas possible d'appeler les méthodes d'objets déserialisés
for (var _i = 0, tabstring_1 = tabstring; _i < tabstring_1.length; _i++) {
    var a = tabstring_1[_i];
    var index = tabstring.indexof(a);
    tabstring[index] = new User(a.id, a.name, a.age, a.score);
}
console.log(tabstring); // on redéfinie des users
