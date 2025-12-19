export class DeezerService {
  async getTopPlaylists() {
    const response = await fetch("https://api.deezer.com/chart/0/playlists");
    const json = await response.json();
    return json.data;
  }

  async searchPlaylistsByMood(mood) {
    try {
      const url = `https://api.deezer.com/search/playlist?q=${encodeURIComponent(
        mood
      )}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("Error fetching playlists:", error);
      return [];
    }
  }
}
