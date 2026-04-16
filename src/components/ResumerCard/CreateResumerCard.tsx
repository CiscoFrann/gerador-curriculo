import { Plus } from "lucide-react";

export default function CreateResumeCard() {
  return (
    <button className="group bg-white rounded-3xl p-8 border-2 border-dashed border-slate-300 shadow-sm flex flex-col items-center justify-center text-center gap-6 h-105 transition-all hover:border-brand-blueAction hover:border-solid hover:bg-slate-50 hover:scale-102 cursor-pointer ">
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-blueAction transition-colors">
        <Plus className="w-10 h-10 text-slate-400 group-hover:text-white group-hover:text-brand-blueAction group-hover:scale-110 transition-all duration-200 " />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-bold text-brand-blueDeep group-hover:text-brand-blueAction transition-colors">
          Começar Novo Projeto
        </h4>

        <p className="text-sm font-medium text-slate-500 max-w-55 leading-relaxed">
          Crie um currículo otimizado do zero com ajuda da nossa IA.
        </p>
      </div>
    </button>
  );
}
