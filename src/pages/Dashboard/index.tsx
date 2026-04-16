import { FileText, Download } from "lucide-react";

import { Plus } from "lucide-react";
import CreateResumeCard from "../../components/ResumerCard/CreateResumerCard";
import ResumeCard from "../../components/ResumerCard/ResumerCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-[#0B2F6B] font-bold texto">
            Seus currículos
          </h1>
          <span className="text-slate-600">
            Gerencie suas narrativas profissionais e destaque-se no mercado
          </span>
        </div>

        <button className="flex flex-row text-white font-semibold gap-4 bg-[#0B2F6B] cursor-pointer rounded-full items-center py-4 px-8 hover:scale-[1.02] transition-all duration-200">
          <Plus />
          <span>Novo Currículo</span>
        </button>
      </div>

      <section className="max-w-6xl grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default">
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
      </section>

      <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CreateResumeCard />
        <ResumeCard />
      </main>
    </div>
  );
}
