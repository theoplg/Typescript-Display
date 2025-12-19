function loadPlayer(mood) {
  const playlistIds = {
    chill: "1290316405",
    workout: "1154685481",
    sad: "934895095",
    pop: "1036183001",
    love: "1356062205",
    relax: "7408405404",
    party: "2097558104",
  };

  const container = document.getElementById("player-container");
  const playlistId = playlistIds[mood];

  if (!playlistId) {
    container.innerHTML = "<p>❌ Aucune playlist disponible.</p>";
    return;
  }

  container.innerHTML = `
    <h2>🎶 Playlist : ${mood.charAt(0).toUpperCase() + mood.slice(1)}</h2>
    <iframe
      title="Lecteur Deezer"
      src="https://widget.deezer.com/widget/light/playlist/${playlistId}"
      width="100%" height="300"
      frameborder="0" allowtransparency="true"
      style="border-radius: 12px;">
    </iframe>
  `;
}
