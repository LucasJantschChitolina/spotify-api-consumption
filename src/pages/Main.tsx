import { useState, ChangeEvent, useEffect } from "react";
import { Input } from "../components/Input";
import { performSpotifyRequest } from "../utils/api";
import { Artist as ArtistType, Artists } from "../utils/types";
import { ArtistComponent } from "../components/Artist";
import { AlbumsComponent } from "../components/Albums";
import { TopTracksComponent } from "../components/TopTracks";
import { Search } from "lucide-react";

export const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTimeoutId, setSearchTimeoutId] = useState<number | null>(null);
  const [artist, setArtist] = useState<ArtistType | null>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchTimeoutId !== null) {
      clearTimeout(searchTimeoutId);
    }

    if (searchValue) {
      const timeoutId = setTimeout(() => {
        performSpotifyRequest<Artists>("/search", {
          q: searchValue,
          type: "artist",
        }).then((results) => {
          setArtist(results.data.artists.items[0]);
        });
      }, 1000);

      setSearchTimeoutId(timeoutId);
    }

    if (searchValue === "") {
      setArtist(null);
    }
  }, [searchValue]);

  return (
    <main className="max-w-screen bg-zinc-700 p-8 space-y-8 ">
      <Input onChange={handleSearch} />

      {artist ? (
        <>
          <ArtistComponent {...artist} />
          <TopTracksComponent {...artist} />
          <AlbumsComponent {...artist} />
        </>
      ) : (
        <div>
          <span className="flex items-center gap-1 text-slate-100">
            <Search className="h-5 w-5" />
            Search something
          </span>
        </div>
      )}
    </main>
  );
};
