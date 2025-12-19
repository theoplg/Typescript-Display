var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Une fonction qui retourne une promesse qui se résout après un délai spécifié
function delay(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds); //ici resolve est une fonction qui ne prend pas de paramètre
        //et qui sera appelée après le délai spécifié
        //on ne voit pas le code de resolve mais elle est fournie par la promesse
        //cette fonction doit être appelée pour résoudre la promesse
        //or setTimeout appelle la fonction passée en paramètre après le délai spécifié
        //donc la promesse sera résolue après le délai spécifié
    });
}
// Une fonction asynchrone qui utilise la fonction de délai
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Fetching data...");
                    return [4 /*yield*/, delay(2000)];
                case 1:
                    _a.sent(); // Attendre 2 secondes
                    console.log("Data fetched!");
                    return [2 /*return*/, "Some data"];
            }
        });
    });
}
// Appeler la fonction asynchrone
fetchData().then(function (data) { return console.log(data); });
//ici le then est appelé après que la promesse retournée par fetchData soit résolue
//et on récupère la valeur de la promesse (ici "Some data") dans le callback de then
//et on l'affiche
//même exemple mais dans une classe
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.delay = function (milliseconds) {
        return new Promise(function (resolve) {
            setTimeout(resolve, milliseconds);
        });
    };
    DataService.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Fetching data...");
                        return [4 /*yield*/, this.delay(2000)];
                    case 1:
                        _a.sent(); // Attendre 2 secondes
                        console.log("Data fetched!");
                        return [2 /*return*/, "Some data"];
                }
            });
        });
    };
    DataService.prototype.retrieveData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fetchData()];
                    case 1:
                        data = _a.sent();
                        //car la fonction fetchData retourne une promesse de string
                        //et on a utilisé await pour attendre la résolution de la promesse
                        //ce qui nous donne directement la valeur de la promesse
                        //or la valeur de la promesse est de type string
                        //donc data est de type string
                        console.log(data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Une erreur est survenue lors de la récupération des données", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DataService;
}());
var dataService = new DataService();
dataService.retrieveData(); //ici on utilise pas then ni await
//car retrieveData est une méthode asynchrone qui utilise elle-même await
//autre exemple
// Une fonction qui retourne une promesse qui se résout
// si la lecture réussit, et se rejette si elle échoue
function readFile(filename) {
    return new Promise(function (resolve, reject) {
        // Simuler une opération de lecture de fichier
        var success = Math.random() > 0.5; // 50% de chance de réussir
        setTimeout(function () {
            if (success) {
                //ici simuler la lecture du fichier réussie
                resolve("Lecture du fichier OK");
            }
            else {
                //ici simuler la lecture du fichier échouée
                reject(new Error("Erreur de lecture du fichier!"));
            }
        }, 2000);
    });
}
// Utiliser la promesse
readFile("monFichier.txt") //ici ce fichier n'existe pas, mais comme vous pouvez le voir au dessus, la lecture réussit 50% du temps sans "vraiment" lire un fichier, il s'agit d'une simulation
    .then(function (retour) { return console.log(retour); }) //ici on affiche le retour de la promesse, c'est à dire "Lecture du fichier OK"
    .catch(function (error) { return console.error(error.message); });
//même exemple mais dans une classe
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.prototype.readFileInsideClass = function (filename) {
        return new Promise(function (resolve, reject) {
            var success = Math.random() > 0.5;
            setTimeout(function () {
                if (success) {
                    resolve("Lecture du fichier OK (depuis une classe)");
                }
                else {
                    reject(new Error("Erreur de lecture du fichier (depuis une classe)"));
                }
            }, 2000);
        });
    };
    FileService.prototype.retrieveFileContent = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var retour, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.readFileInsideClass(filename)];
                    case 1:
                        retour = _a.sent();
                        console.log(retour); //ici le retour est "Lecture du fichier OK (depuis une classe)"
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2.message); //ici on affiche "Erreur de lecture du fichier (depuis une classe)"
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FileService;
}());
var fileService = new FileService();
fileService.retrieveFileContent("monFichier.txt");
//ici le fichier n'existe pas, mais comme vous pouvez le voir au dessus, la lecture réussit 50% du temps sans "vraiment" lire un fichier, il s'agit d'une simulation
// EXERCICE 1
function calculateSumAsync(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(a + b);
        }, 3000);
    });
}
// you need to use async and await to use the function
function printSum(a, b) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Calcul en cours...");
                    return [4 /*yield*/, calculateSumAsync(a, b)];
                case 1:
                    result = _a.sent();
                    console.log("La somme de ".concat(a, " et ").concat(b, " est ").concat(result));
                    return [2 /*return*/];
            }
        });
    });
}
printSum(5, 10);
// EXERCICE 2
function verifyuser(username, password) {
    return new Promise(function (resolve, reject) {
        if (username === "admin" && password === "password") {
            resolve(true);
        }
        else {
            reject(new Error("Nom d'utilisateur ou mot de passe incorrect"));
        }
    });
}
verifyuser("admin", "password")
    .then(function (result) {
    console.log("Bienvenue, utilisateur !");
})
    .catch(function (error) {
    console.error("Erreur :", error.message);
});
verifyuser("theo", "palagi")
    .then(function (result) {
    console.log("Bienvenue, utilisateur !");
})
    .catch(function (error) {
    console.error("Erreur :", error.message);
});
// EXERCICE 3
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculateSumAsync = function (a, b) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(a + b);
            }, 3000);
        });
    };
    Calculator.prototype.printSum = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Calcul en cours...");
                        return [4 /*yield*/, this.calculateSumAsync(a, b)];
                    case 1:
                        result = _a.sent();
                        console.log("La somme de ".concat(a, " et ").concat(b, " est ").concat(result));
                        return [2 /*return*/];
                }
            });
        });
    };
    return Calculator;
}());
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.verifyuser = function (username, password) {
        return new Promise(function (resolve, reject) {
            if (username === "admin" && password === "password") {
                resolve(true);
            }
            else {
                reject(new Error("Nom d'utilisateur ou mot de passe incorrect"));
            }
        });
    };
    return User;
}());
var user = new User();
user
    .verifyuser("admin", "password")
    .then(function (result) {
    console.log("Bienvenue, utilisateur !");
})
    .catch(function (error) {
    console.error("Erreur :", error.message);
});
