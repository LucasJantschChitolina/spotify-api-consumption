import { useState, useEffect } from "react";
import { performSpotifyRequest } from "../utils/api";
import { Artist, TopTracks, Track } from "../utils/types";
import { convertTrackDuration } from "../utils/convertTrackDuration";

export const TopTracksComponent = (props: Artist) => {
  const [topTracks, setTopTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    performSpotifyRequest<TopTracks>(`artists/${props.id}/top-tracks`, {
      market: "BR",
    }).then((result) => {
      setTopTracks(result.data.tracks);
    });
  }, [props.id]);

  return (
    <div className="w-full">
      <p className="font-normal text-slate-200">{props.name}'s</p>
      <h2 className="text-3xl font-bold text-slate-100 mb-3">Top tracks</h2>

      {topTracks?.slice(0, 5).map((item, index) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b-2 border-teal-800 text-slate-200"
          >
            <p className="font-semibold text-xl">
              {index + 1} - {item.name}
            </p>
            <p className="mr-8">
              {convertTrackDuration(Number(item.duration_ms))}
            </p>
          </div>
        );
      })}
    </div>
  );
};
