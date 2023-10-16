export interface Artists {
  artists: {
    items: Artist[];
  };
}

export interface Artist {
  id: string;
  name: string;
  genres: string[];
  followers: {
    total: number;
  };
  images: {
    url: string;
  }[];
}

export interface Albums {
  items: Album[];
}

export interface Album {
  id: string;
  name: string;
  total_tracks: number;
  release_date: string;
  album_type: string;
  href: string;
  images: {
    url: string;
  }[];
}

export interface TopTracks {
  tracks: Track[];
}

export interface Track {
  id: string;
  name: string;
  duration_ms: string;
  album: Album;
}
