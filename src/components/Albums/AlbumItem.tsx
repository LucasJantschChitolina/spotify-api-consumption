import { Album } from "../../utils/types";

export const AlbumItem = (props: Album) => {
  return (
    <div className="flex flex-col ">
      <img
        src={props.images[0].url}
        alt={props.name}
        className="w-15 h-15 rounded-md"
      />
      <p className="text-emerald-100 font-light mt-4">{props.name}</p>
    </div>
  );
};
