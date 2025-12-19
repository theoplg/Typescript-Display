// Liste de morceaux utilisés pour le blind test, avec ID Deezer et titre
const tracks = [
  { id: "3135553", title: "One More Time" }, // Daft Punk
  { id: "172920142", title: "Blinding Lights" }, // The Weeknd
  { id: "12209331", title: "Don't Stop Me Now" }, // Queen
  { id: "655095912", title: "Bad Guy" }, // Billie Eilish
  { id: "916424", title: "Without Me" }, // Eminem
  { id: "440381667", title: "La faille" }, // Jul
  { id: "302378", title: "Harder, Better, Faster..." }, // Daft Punk
  { id: "279863", title: "Bohemian Rhapsody" }, // Queen
  { id: "1109731", title: "Lose Yourself" }, // Eminem
  { id: "664107", title: "Take On Me" }, // a-ha
  { id: "4603408", title: "Billie Jean" }, // Michael Jackson
  { id: "13791930", title: "Smells Like Teen Spirit" }, // Nirvana
];

// Variable pour stocker la chanson actuellement en cours
let currentTrack = null;

// Score du joueur
let score = 0;

function startBlindTest() {
  const zone = document.getElementById("player-zone");
  const answerZone = document.getElementById("answer-zone");
  const feedback = document.getElementById("feedback");

  // Réinitialise le message de feedback
  feedback.textContent = "";

  // Choisit un morceau aléatoire
  const track = tracks[Math.floor(Math.random() * tracks.length)];
  currentTrack = track;

  // Injecte le lecteur Deezer dans la page avec l'ID du morceau
  zone.innerHTML = `
        <iframe
          title="Lecteur Blind Test"
          src="https://widget.deezer.com/widget/light/track/${track.id}"
          width="100%" height="90"
          frameborder="0" allowtransparency="true"
          style="border-radius: 8px;">
        </iframe>
      `;

  // Affiche le champ de réponse et le bouton valider
  answerZone.style.display = "block";
  // Vide l'ancien texte saisi
  document.getElementById("user-answer").value = "";
}

function checkAnswer() {
  // Récupère la réponse de l'utilisateur en minuscules, sans espaces
  const input = document
    .getElementById("user-answer")
    .value.trim()
    .toLowerCase();

  const feedback = document.getElementById("feedback");
  const scoreDisplay = document.getElementById("score");

  // Sécurité : on vérifie qu'une chanson est bien en cours
  if (!currentTrack) return;

  const correct = currentTrack.title.toLowerCase();

  // Si la réponse est correcte
  if (input === correct) {
    score++;
    feedback.textContent = "✅ Bonne réponse !";
    feedback.style.color = "green";
    scoreDisplay.textContent = `Score : ${score}`;
    // Relance automatiquement un autre morceau après 1,5 seconde
    setTimeout(startBlindTest, 1500);
  } else {
    // Réponse incorrecte → on affiche la bonne réponse
    feedback.textContent = `❌ Faux ! C'était : "${currentTrack.title}"`;
    feedback.style.color = "red";
    // Passe au morceau suivant après 2 secondes
    setTimeout(startBlindTest, 2000);
  }
}
