const size = 11;
let grid = Array.from({ length: size }, () => Array(size).fill(null));
let colors = Array.from({ length: size }, () => Array(size).fill("gray"));

function setValue(i, j, value) {
  console.log(`Setting value at (${i}, ${j}) to ${value}`);
  grid[i][j] = value;
  let cell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
  cell.innerText = value;
}

function getValue(i, j) {
  console.log(`Getting value at (${i}, ${j}): ${grid[i][j]}`);
  return grid[i][j];
}

function setColor(i, j, color) {
  colors[i][j] = color;
  document.querySelector(
    `[data-i="${i}"][data-j="${j}"]`
  ).style.backgroundColor = color;
}

function getColor(i, j) {
  return colors[i][j];
}

function test_setValue() {
  setValue(2, 3, "3");
  console.assert(
    getValue(2, 3) === "3",
    "setValue ou getValue ne fonctionne pas."
  );
}

function test_setColor() {
  setColor(4, 4, "red");
  console.assert(
    getColor(4, 4) === "red",
    "setColor ou getColor ne fonctionne pas."
  );
}

function setListeners() {
  document.querySelectorAll("td").forEach((cell) => {
    cell.addEventListener("click", () => clickedOnCell(cell));
  });
}

function isEmpty(i, j) {
  if (i < 0 || i >= size || j < 0 || j >= size) return false;
  return getValue(i, j) === null;
}

function testisEmpty(i, j) {
  setValue(1, 5, 7);
  console.assert(isEmpty(1, 5) === false, "isEmpty ne fonctionne pas.");
}

function isCorrectAdjacency(i, j) {
  if (i < 0 || i >= size || j < 0 || j >= size) return false;
  if (
    !isEmpty(i - 1, j) ||
    !isEmpty(i + 1, j) ||
    !isEmpty(i, j - 1) ||
    !isEmpty(i, j + 1) ||
    !isEmpty(i - 1, j - 1) ||
    !isEmpty(i - 1, j + 1) ||
    !isEmpty(i + 1, j - 1) ||
    !isEmpty(i + 1, j + 1)
  ) {
    return true;
  } else {
    return false;
  }
}

function testisCorrectAdjacency(i, j) {
  setValue(1, 1, 5);
  console.assert(
    isCorrectAdjacency(1, 1) === true,
    "isCorrectAdjacency ne fonctionne pas."
  );
}

function isCorrectPlacement(i, j, value) {
  if (isEmpty(i, j) && isCorrectAdjacency(i, j)) {
    return true;
  } else if (getValue(i, j) < value && isCorrectAdjacency(i, j)) {
    return true;
  }
  return false;
}

let redlist = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let bluelist = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let greenlist = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let yellowlist = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

function getAndRemoveRandomCard(list) {
  const indicerandom = Math.floor(Math.random() * list.length);
  const card = list[indicerandom];
  list.splice(indicerandom, 1);
  return card;
}

function testgetAndRemoveRandomCard() {
  const taille = redlist.length;
  const card = getAndRemoveRandomCard(redlist);
  console.assert(
    redlist.length === taille - 1,
    "getAndRemoveRandomCard ne fonctionne pas"
  );
  console.assert(
    [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(card) === true,
    "getAndRemoveRandomCard ne fonctionne pas"
  );
}

function hasWin(color) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (
        i + 3 < size &&
        getColor(i, j) === color &&
        getColor(i + 1, j) === color &&
        getColor(i + 2, j) === color &&
        getColor(i + 3, j) === color
      ) {
        return true;
      }
    }
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (
        j + 3 < size &&
        getColor(i, j) === color &&
        getColor(i, j + 1) === color &&
        getColor(i, j + 2) === color &&
        getColor(i, j + 3) === color
      ) {
        return true;
      }
    }
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (
        i + 3 < size &&
        j + 3 < size &&
        getColor(i, j) === color &&
        getColor(i + 1, j + 1) === color &&
        getColor(i + 2, j + 2) === color &&
        getColor(i + 3, j + 3) === color
      ) {
        return true;
      }
    }
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (
        i + 3 < size &&
        j - 3 >= 0 &&
        getColor(i, j) === color &&
        getColor(i + 1, j - 1) === color &&
        getColor(i + 2, j - 2) === color &&
        getColor(i + 3, j - 3) === color
      ) {
        return true;
      }
    }
  }
  return false;
}

function testhasWin() {
  setColor(0, 10, "red");
  setColor(1, 9, "red");
  setColor(2, 8, "red");
  setColor(3, 7, "red");
  console.assert(hasWin("red") === true, "hasWin ne fonctionne pas");
}

function isWithinLimits(i, j) {
  if (i < 0 || i >= size || j < 0 || j >= size) return false;

  let positions = [];

  for (let k = -6; k <= 6; k++) {
    if (i + k >= 0 && i + k < size) {
      if (j - 6 >= 0) positions.push([i + k, j - 6]);
      if (j + 6 < size) positions.push([i + k, j + 6]);
    }
    if (j + k >= 0 && j + k < size) {
      if (i - 6 >= 0) positions.push([i - 6, j + k]);
      if (i + 6 < size) positions.push([i + 6, j + k]);
    }
  }

  for (let [x, y] of positions) {
    if (!isEmpty(x, y)) {
      return false;
    }
  }

  return true;
}

function updateUI(playerColor, card) {
  document.getElementById(
    "player-turn"
  ).innerText = `Tour de ${playerColor} - Carte : ${card}`;
}

const players = [
  { color: "red", deck: redlist },
  { color: "blue", deck: bluelist },
  { color: "green", deck: greenlist },
  { color: "yellow", deck: yellowlist },
];
let currentPlayerIndex = 0;
let currentCard = null;
let drawButton = document.getElementById("draw-card-btn");
drawButton.addEventListener("click", drawCard);

function drawCard() {
  let player = players[currentPlayerIndex];
  if (currentCard) {
    alert("Vous avez déjà une carte en main !");
    return;
  }

  currentCard = getAndRemoveRandomCard(player.deck);

  if (!currentCard) {
    alert(`Le joueur ${player.color} n'a plus de cartes.`);
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    return;
  }

  document.getElementById("drawn-card").innerText = currentCard;
  document.getElementById(
    "current-player"
  ).innerText = `Tour de : ${player.color}`;
}

function clickedOnCell(cell) {
  const i = parseInt(cell.dataset.i);
  const j = parseInt(cell.dataset.j);
  console.log(`clickedOnCell → i: ${i}, j: ${j}`);

  if (i < 0 || i >= size || j < 0 || j >= size) {
    console.error(`Erreur : indices hors limites (${i}, ${j})`);
    return;
  }

  let player = players[currentPlayerIndex];

  if (!currentCard) {
    alert("Veuillez d'abord piocher une carte !");
    return;
  }

  if (isCorrectPlacement(i, j, currentCard) && isWithinLimits(i, j)) {
    setValue(i, j, currentCard);
    setColor(i, j, player.color);

    if (hasWin(player.color)) {
      alert(`Le joueur ${player.color} a gagné !`);
      return;
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    currentCard = null;
    document.getElementById("drawn-card").innerText = "?";
    document.getElementById(
      "current-player"
    ).innerText = `Tour de : ${players[currentPlayerIndex].color}`;
  } else {
    alert("Placement invalide, essayez une autre case.");
  }
}

function PremierTour() {
  let firstPlayerIndex = Math.floor(Math.random() * players.length);
  let firstPlayer = players[firstPlayerIndex];

  let firstCard = getAndRemoveRandomCard(firstPlayer.deck);

  setValue(5, 5, firstCard);
  setColor(5, 5, firstPlayer.color);

  console.log(
    `Le joueur ${
      firstPlayer.color
    } est le plus jeune, il commence avec la carte ${firstCard} au centre (${5}, ${5}).`
  );

  currentPlayerIndex = (firstPlayerIndex + 1) % players.length;
}

document.addEventListener("DOMContentLoaded", () => {
  let infoBox = document.createElement("div");
  infoBox.id = "player-turn";
  infoBox.style.position = "absolute";
  infoBox.style.top = "10px";
  infoBox.style.left = "50%";
  infoBox.style.transform = "translateX(-50%)";
  infoBox.style.fontSize = "20px";
  infoBox.style.fontWeight = "bold";
  document.body.appendChild(infoBox);

  document.querySelectorAll("td").forEach((cell) => {
    cell.addEventListener("click", () => clickedOnCell(cell));
  });
  PremierTour();
  clickedOnCell({ dataset: {} });
});

function main() {
  //test_setValue();
  //test_setColor();
  //setListeners();
  //testisEmpty();
  //testisCorrectAdjacency();
  //testgetAndRemoveRandomCard();
  //testhasWin();
}

document.addEventListener("DOMContentLoaded", main);
