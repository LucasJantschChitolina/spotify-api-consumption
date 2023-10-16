import { useEffect, useState } from "react";
import { performSpotifyRequest } from "../../utils/api";
import { Album, Albums, Artist } from "../../utils/types";
import { AlbumItem } from "./AlbumItem";

export const AlbumsComponent = (props: Artist) => {
  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {
    performSpotifyRequest<Albums>(`artists/${props.id}/albums`).then(
      (result) => {
        setAlbums(result.data.items);
      }
    );
  }, [props.id]);

  return (
    <div className="w-full">
      <p className="font-normal text-slate-200">Featured</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-3">Albums</h2>

      <div className="flex gap-4 py-4">
        {albums?.slice(0, 8).map((item) => {
          return <AlbumItem {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
