import {
    calculerJoursRestants as calculerJoursRestantsVac
} from "./moduleVacances.ts"

import {
    calculerJoursRestants as calculerJoursRestantsTrav
} from "./moduleTravail.ts"
const resultat: HTMLHeadingElement = document.createElement("div");
resultat.textContent = `Il reste ${calculerJoursRestantsVac(10)} jours de vacances et ${calculerJoursRestantsTrav(10)} jours de travail`;

document.body.appendChild(resultat);