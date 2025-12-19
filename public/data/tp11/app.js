//Supposons que nous voulons créer une classe GenericStorage
//qui peut stocker des éléments de n'importe quel type :
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        // <T> signife que la classe va manipuler des élemts de type qlc
        this.data = new Map(); // la class contient un attribue data qui est une map avec des clé de type string et des valeurs  type T
    }
    GenericStorage.prototype.set = function (key, value) {
        // on ajoute une paire clé/valeur
        this.data.set(key, value);
    };
    GenericStorage.prototype.get = function (key) {
        // ici get récupère la valeur associé à la clé key, le type retourné et soit T (ce que l'on a dit dans la class) soit undefined si la clé n'est associé à rien
        return this.data.get(key);
    };
    GenericStorage.prototype.size = function () {
        // retourne le nombre d'elmt de la map
        return this.data.size;
    };
    return GenericStorage;
}());
// Utilisation de la classe GenericStorage avec des nombres
var numberStorage = new GenericStorage(); // ici T est donc un nombre
numberStorage.set("one", 1);
numberStorage.set("two", 2);
console.log(numberStorage.get("one")); // Affiche 1
// Utilisation de la classe GenericStorage avec des chaînes de caractères
var stringStorage = new GenericStorage(); // ici c'est une chaine de carac
stringStorage.set("hello", "world");
stringStorage.set("goodbye", "cruel world");
console.log(stringStorage.get("hello")); // Affiche "world"
var Queue = /** @class */ (function () {
    function Queue() {
        // TODO: Implementez les methodes ici
        this.elements = []; // tableau d'éléments de type T
    }
    Queue.prototype.enqueue = function (element) {
        this.elements.push(element); // on ajoute un élement à la fin du tableau
    };
    Queue.prototype.dequeue = function () {
        if (this.size() === 0) {
            return undefined; // si la taille de la queue est 0 on retourne undefined
        }
        return this.elements.shift(); // on supprime le premier élement du tableau et le retourne
    };
    Queue.prototype.size = function () {
        return this.elements.length; // retourne la taille du tableau
    };
    return Queue;
}());
// Testez votre code ici
var numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
numberQueue.enqueue(4);
numberQueue.enqueue(5);
console.log(numberQueue.size());
console.log(numberQueue);
numberQueue.dequeue();
numberQueue.dequeue();
console.log(numberQueue.size());
var stringQueue = new Queue();
stringQueue.enqueue("Salut");
stringQueue.enqueue("le ");
stringQueue.enqueue("TP");
stringQueue.enqueue("11");
console.log(stringQueue.size());
console.log(stringQueue);
stringQueue.dequeue();
stringQueue.dequeue();
console.log(stringQueue.size());
console.log(stringQueue);
