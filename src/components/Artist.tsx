import { Artist } from "../utils/types";

export const ArtistComponent = (props: Artist) => {
  return (
    <div className="md:flex w-full justify-between">
      <h1 className="text-7xl font-bold text-slate-200">{props?.name}</h1>
      <img
        src={props?.images[0].url}
        className="w-44 h-44 mr-[10%] rounded-md"
      />
    </div>
  );
};
