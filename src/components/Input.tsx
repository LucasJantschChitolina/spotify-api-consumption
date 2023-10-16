import { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: ControlProps) => {
  return (
    <div className="mx-1 flex items-center gap-2 rounded-lg border border-zinc-500 px-3 py-2 focus-within:ring-2 focus-within:ring-slate-300">
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        {...props}
        type="text"
        placeholder="Search"
        className="flex-1 placeholder-zinc-500 text-slate-200 outline-none bg-transparent"
      />
    </div>
  );
};
