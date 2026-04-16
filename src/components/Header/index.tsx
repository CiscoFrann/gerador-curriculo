import { Search } from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center w-full h-16  justify-around px-10 bg-white border-b border-slate-200">
      <div className="relative w-[70%]">
        <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar currículos..."
          className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-full py-2 pl-15 pr-4 outline-none focus:bg-white focus:ring-2 focus:ring-slate-500 transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="h-10 w-px bg-slate-200"></div>

        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <h1 className="font-semibold text-slate-700 text-sm">
            Francisco Alexandre da Silva
          </h1>
          <div className="bg-black w-10 h-10 rounded-full shrink-0"></div>
        </div>
      </div>
    </header>
  );
}
