import { MoreVertical, Calendar } from "lucide-react";

export default function ResumeCard() {
  return (
    <button className="group bg-white rounded-3xl border-2 border-slate-200 shadow-sm flex flex-col h-105 w-full text-left transition-all hover:scale-[1.02] hover:border-slate-300 hover:shadow-md overflow-hidden ">
      {/* TOPO: Área de Preview visual (Fundo cinza claro) */}
      <div className="bg-slate-50 w-full h-1/2 flex items-center justify-center border-b border-slate-100 transition-colors">
        {/* Um mini "papel A4" para representar o currículo visualmente */}
        <div className="w-24 h-32 bg-white shadow-sm border border-slate-200 rounded-sm transition-transform group-hover:-translate-y-1"></div>
      </div>

      {/* BASE: Informações de Texto */}
      <div className="flex flex-col bg-white flex-1 p-6 justify-between w-full">
        <div className="w-full">
          {/* Cabeçalho com Título e Botão de Opções */}
          <div className="flex justify-between items-start w-full mb-1">
            <h3 className="text-slate-800 text-xl font-bold group-hover:text-brand-blueAction transition-colors line-clamp-1">
              Product Designer 2024
            </h3>
            {/* Ícone de 3 pontinhos para futuras opções (editar, excluir) */}
            <div className="text-slate-400 hover:text-slate-700 transition-colors p-1">
              <MoreVertical className="w-5 h-5" />
            </div>
          </div>

          <p className="text-sm text-slate-500 font-medium">
            Modelo Profissional
          </p>
        </div>

        <div>
          {/* Linha Divisória */}
          <div className="w-full h-px bg-slate-100 my-4"></div>

          {/* Rodapé com Status e Data */}
          <div className="flex flex-col gap-2.5 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-slate-700">Concluído 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 opacity-70" />
              <span>Atualizado há 2 dias</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
