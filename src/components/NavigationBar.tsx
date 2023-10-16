import { SpotifyLogo } from "../assets/SpotifyLogo";
import { User, Library, Mic } from "lucide-react";

export const NavigationBar = () => {
  return (
    <nav className="p-4">
      <SpotifyLogo />

      <div className="flex gap-2 p-4 items-center align-middle">
        <User className="w-5 h-5 text-white" />
        <p className="text-white">Artistas</p>
      </div>

      <div className="flex gap-2 p-4 items-center align-middle">
        <Library className="w-5 h-5 text-white" />
        <p className="text-white">Álbums</p>
      </div>

      <div className="flex gap-2 p-4 items-center align-middle">
        <Mic className="w-5 h-5 text-white" />
        <p className="text-white">Músicas</p>
      </div>
    </nav>
  );
};
