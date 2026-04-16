import { FileText, Eye, Download, Star } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* A MÁGICA DO GRID: 
        grid-cols-1 no celular (um em cima do outro)
        lg:grid-cols-4 em telas grandes (4 colunas perfeitas)
        gap-6 é a distância exata entre eles 
      */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* CARD 1: Currículos Criados */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default">
          {/* O quadrado azul clarinho do ícone */}
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#012169] leading-none mb-1">
              12
            </span>
            <span className="text-sm font-semibold text-slate-400 leading-tight">
              Currículos
              <br />
              Criados
            </span>
          </div>
        </div>

        {/* CARD 2: Visualizações */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
            <Eye className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#012169] leading-none mb-1">
              458
            </span>
            <span className="text-sm font-semibold text-slate-400 leading-tight">
              Visualizações
              <br />
              Totais
            </span>
          </div>
        </div>

        {/* CARD 3: Downloads */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
            <Download className="w-6 h-6 text-purple-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#012169] leading-none mb-1">
              24
            </span>
            <span className="text-sm font-semibold text-slate-400 leading-tight">
              Downloads
              <br />
              Realizados
            </span>
          </div>
        </div>

        {/* CARD 4: Score Médio */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
            <Star className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#012169] leading-none mb-1">
              98
            </span>
            <span className="text-sm font-semibold text-slate-400 leading-tight">
              Score Médio
              <br />
              IA
            </span>
          </div>
        </div>
      </section>

      {/* O resto da sua página vai aqui para baixo... */}
    </div>
  );
}
