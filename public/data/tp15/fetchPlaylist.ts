export interface DeezerPlaylist {
  tracks: {
    data: Datum[];
  };
}

export interface Datum {
  title: string;
  preview: string;
  artist: {
    name: string;
  };
  album: {
    title: string;
    cover_small: string;
  };
}

export async function fetchPlaylist(): Promise<Datum[]> {
  const res = await fetch("https://api.deezer.com/playlist/11846226041");
  if (!res.ok) {
    throw new Error(
      `Erreur lors de la récupération de la playlist: ${res.statusText}`
    );
  }
  const data: DeezerPlaylist = await res.json();
  return data.tracks.data;
}
