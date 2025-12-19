"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moduleVacances_ts_1 = require("./moduleVacances.ts");
var moduleTravail_ts_1 = require("./moduleTravail.ts");
var resultat = document.createElement("div");
resultat.textContent = "Il reste ".concat((0, moduleVacances_ts_1.calculerJoursRestants)(10), " jours de vacances et ").concat((0, moduleTravail_ts_1.calculerJoursRestants)(10), " jours de travail");
document.body.appendChild(resultat);
