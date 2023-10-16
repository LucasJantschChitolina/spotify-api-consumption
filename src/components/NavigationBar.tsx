import { SpotifyLogo } from "../assets/SpotifyLogo";
import { User, Library, Mic } from "lucide-react";

export const NavigationBar = () => {
  return (
    <nav className="p-4 relative">
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

      <footer className="bottom-0 p-4">
        <p className="text-slate-200 font-medium">Lucas Jantsch Chitolina</p>
        <p className="font-light text-slate-400 text-md">
          Fundamentos ao Desenvolvimento Web
        </p>
      </footer>
    </nav>
  );
};
