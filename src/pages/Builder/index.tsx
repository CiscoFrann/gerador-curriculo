import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/* TIPOS                                                              */
/* ------------------------------------------------------------------ */
type Modalidade = "Presencial" | "Remoto" | "Híbrido";
type NivelFluencia =
  | "Básico"
  | "Intermediário"
  | "Avançado"
  | "Fluente"
  | "Nativo";
type Etapa =
  | "pessoal"
  | "resumo"
  | "habilidades"
  | "experiencia"
  | "formacao"
  | "idiomas";

interface InfoPessoal {
  nome: string;
  rua: string;
  numero: string;
  bairro: string;
  estado: string;
  linkedin: string;
  celular: string;
  email: string;
  github: string;
}
interface Experiencia {
  id: string;
  funcao: string;
  empresa: string;
  modalidade: Modalidade;
  inicio: string;
  fim: string;
  atual: boolean;
  descricao: string;
}
interface Formacao {
  id: string;
  curso: string;
  instituicao: string;
  cidade: string;
  estado: string;
  inicio: string;
  fim: string;
  atual: boolean;
  descricao: string;
}
interface Idioma {
  id: string;
  idioma: string;
  nivel: NivelFluencia;
}

/* ------------------------------------------------------------------ */
/* UTILIDADES E DADOS INICIAIS COMPACTADOS                            */
/* ------------------------------------------------------------------ */
const MESES = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const uid = () => Math.random().toString(36).slice(2, 9);
const formatarMes = (v: string) =>
  !v
    ? ""
    : isNaN(parseInt(v.split("-")[1]) - 1)
      ? v
      : `${MESES[parseInt(v.split("-")[1]) - 1]} ${v.split("-")[0]}`;
const montarEndereco = (p: InfoPessoal) =>
  [
    [p.rua, p.numero].filter(Boolean).join(", "),
    [p.bairro, p.estado].filter(Boolean).join(", "),
  ]
    .filter(Boolean)
    .join(" — ");
const montarPeriodo = (
  inicio: string,
  fim: string,
  atual: boolean,
  textoAtual: string,
) =>
  !inicio
    ? ""
    : `${formatarMes(inicio)} — ${atual ? textoAtual : formatarMes(fim) || "—"}`;

const DADOS_INICIAIS = {
  info: {
    nome: "Rafael Monteiro",
    rua: "Rua das Acácias",
    numero: "245",
    bairro: "Vila Madalena",
    estado: "SP",
    linkedin: "linkedin.com/in/rafaelmonteiro",
    celular: "(11) 98765-4321",
    email: "rafael.monteiro@email.com",
    github: "github.com/rafaelmonteiro",
  },
  resumo:
    "Desenvolvedor full-stack com foco em aplicações web escaláveis e código limpo. Experiência sólida em JavaScript/TypeScript, do back-end com Node.js e PostgreSQL ao front-end com React.",
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "PostgreSQL",
    "Clean Code",
  ],
  experiencias: [
    {
      id: uid(),
      funcao: "Desenvolvedor Full-Stack Pleno",
      empresa: "Nuvem Tecnologia",
      modalidade: "Remoto" as Modalidade,
      inicio: "2023-03",
      fim: "",
      atual: true,
      descricao:
        "Desenvolvimento e manutenção de APIs REST em Node.js e interfaces em React.",
    },
    {
      id: uid(),
      funcao: "Desenvolvedor Front-End Júnior",
      empresa: "Studio Digital",
      modalidade: "Híbrido" as Modalidade,
      inicio: "2021-06",
      fim: "2023-02",
      atual: false,
      descricao: "Construção de telas responsivas com React e consumo de APIs.",
    },
  ],
  formacoes: [
    {
      id: uid(),
      curso: "Análise e Dev de Sistemas",
      instituicao: "Universidade Federal",
      cidade: "São Paulo",
      estado: "SP",
      inicio: "2019-02",
      fim: "2021-12",
      atual: false,
      descricao: "Formação técnica em software.",
    },
  ],
  idiomas: [
    { id: uid(), idioma: "Inglês", nivel: "Avançado" as NivelFluencia },
    { id: uid(), idioma: "Espanhol", nivel: "Intermediário" as NivelFluencia },
  ],
};

/* ------------------------------------------------------------------ */
/* ÍCONES COMPACTADOS                                                 */
/* ------------------------------------------------------------------ */
const IconeUser = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const IconeDoc = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </svg>
);
const IconeCode = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const IconeMaleta = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const IconeGraduacao = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M22 10 12 5 2 10l10 5 10-5ZM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
  </svg>
);
const IconeGlobo = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);
const IconePin = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconeFone = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);
const IconeMail = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const IconeLinkedin = (p: any) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0Z" />
  </svg>
);
const IconeGithub = (p: any) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);
const IconePlus = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const IconeLixeira = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14ZM10 11v6M14 11v6" />
  </svg>
);
const IconeSeta = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const IconeVoltar = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const IconeSalvar = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2ZM17 21v-8H7v8M7 3v5h8" />
  </svg>
);
const IconeDownload = (p: any) => (
  <svg
    className={p.className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const ETAPAS: { id: Etapa; label: string; Icone: any }[] = [
  { id: "pessoal", label: "Pessoal", Icone: IconeUser },
  { id: "resumo", label: "Resumo", Icone: IconeDoc },
  { id: "habilidades", label: "Habilidades", Icone: IconeCode },
  { id: "experiencia", label: "Experiências", Icone: IconeMaleta },
  { id: "formacao", label: "Formação", Icone: IconeGraduacao },
  { id: "idiomas", label: "Idiomas", Icone: IconeGlobo },
];

/* ------------------------------------------------------------------ */
/* COMPONENTE REUTILIZÁVEL DE CAMPO DE FORMULÁRIO                     */
/* ------------------------------------------------------------------ */
const Campo = ({
  label,
  as: Tag = "input",
  wrapperClass = "",
  ...props
}: any) => (
  <div className={`flex flex-col gap-1.5 ${wrapperClass}`}>
    <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500">
      {label}
    </label>
    <Tag
      className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20 disabled:opacity-50"
      {...props}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/* COMPONENTE PRINCIPAL                                               */
/* ------------------------------------------------------------------ */
export default function Builder() {
  const [etapaAtual, setEtapaAtual] = useState<Etapa>("pessoal");
  const [info, setInfo] = useState<InfoPessoal>(DADOS_INICIAIS.info);
  const [resumo, setResumo] = useState<string>(DADOS_INICIAIS.resumo);
  const [skills, setSkills] = useState<string[]>(DADOS_INICIAIS.skills);
  const [skillInput, setSkillInput] = useState<string>("");
  const [experiencias, setExperiencias] = useState<Experiencia[]>(
    DADOS_INICIAIS.experiencias,
  );
  const [formacoes, setFormacoes] = useState<Formacao[]>(
    DADOS_INICIAIS.formacoes,
  );
  const [linguaMaterna, setLinguaMaterna] = useState<string>("Português");
  const [idiomas, setIdiomas] = useState<Idioma[]>(DADOS_INICIAIS.idiomas);

  // Lógica Genérica com tipagem correta para o React
  const atualizarInfo = (c: keyof InfoPessoal, v: string) =>
    setInfo((p) => ({ ...p, [c]: v }));
  const atualizarItem = <T extends { id: string }>(
    setFn: React.Dispatch<React.SetStateAction<T[]>>,
    id: string,
    campo: keyof T,
    valor: any,
  ) => setFn((p) => p.map((i) => (i.id === id ? { ...i, [campo]: valor } : i)));
  const removerItem = (setFn: any, id: string) =>
    setFn((p: any[]) => p.filter((i) => i.id !== id));

  const adicionarSkill = () => {
    if (
      skillInput.trim() &&
      !skills.some((s) => s.toLowerCase() === skillInput.trim().toLowerCase())
    )
      setSkills((p) => [...p, skillInput.trim()]);
    setSkillInput("");
  };

  const endereco = montarEndereco(info);
  const temIdiomas = Boolean(linguaMaterna.trim()) || idiomas.length > 0;

  return (
    <div className="flex flex-col w-full h-screen min-h-160 font-sans text-slate-800 bg-slate-50 overflow-hidden antialiased">
      {/* HEADER */}
      <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 z-20 shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0B2F6B] text-white font-serif font-bold text-base shadow-sm">
            CV
          </div>
          <button
            type="button"
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <IconeVoltar className="w-5 h-5" />
          </button>
          <input
            type="text"
            defaultValue="Desenvolvedor Full-Stack"
            className="font-sans text-lg font-bold text-[#0B2F6B] bg-transparent border-b-2 border-transparent outline-none px-1 py-0.5 w-64 focus:border-[#0B2F6B]"
          />
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-transparent rounded-lg hover:bg-slate-100 cursor-pointer">
            <IconeSalvar className="w-4 h-4" /> Salvar
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0B2F6B] rounded-lg hover:bg-[#08224e] shadow-sm cursor-pointer">
            <IconeDownload className="w-4 h-4" /> Exportar PDF
          </button>
        </div>
      </header>

      {/* ABAS */}
      <nav className="flex gap-2 px-6 py-3 bg-white border-b border-slate-200 overflow-x-auto shrink-0">
        {ETAPAS.map(({ id, label, Icone }) => (
          <button
            key={id}
            onClick={() => setEtapaAtual(id)}
            className={`inline-flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-full border font-semibold text-[13px] whitespace-nowrap cursor-pointer ${id === etapaAtual ? "bg-blue-50 border-blue-200 text-[#0B2F6B]" : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"}`}
          >
            <Icone className="w-4 h-4" /> {label}
          </button>
        ))}
      </nav>

      {/* ÁREA DE TRABALHO */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* FORMULÁRIOS */}
        <aside className="w-full max-w-140 bg-white border-r border-slate-200 overflow-y-auto">
          <div className="p-8 pb-16" key={etapaAtual}>
            {etapaAtual === "pessoal" && (
              <section>
                <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800 mb-5">
                  <span className="text-[#0B2F6B] mr-3">01</span>Informações
                  pessoais
                </h2>
                <Campo
                  label="Nome completo"
                  value={info.nome}
                  onChange={(e: any) => atualizarInfo("nome", e.target.value)}
                />
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <Campo
                    wrapperClass="col-span-2"
                    label="Rua"
                    value={info.rua}
                    onChange={(e: any) => atualizarInfo("rua", e.target.value)}
                  />
                  <Campo
                    label="Número"
                    value={info.numero}
                    onChange={(e: any) =>
                      atualizarInfo("numero", e.target.value)
                    }
                  />
                  <Campo
                    wrapperClass="col-span-2 mt-3"
                    label="Bairro"
                    value={info.bairro}
                    onChange={(e: any) =>
                      atualizarInfo("bairro", e.target.value)
                    }
                  />
                  <Campo
                    wrapperClass="mt-3"
                    label="Estado"
                    value={info.estado}
                    onChange={(e: any) =>
                      atualizarInfo("estado", e.target.value)
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Campo
                    label="Celular"
                    value={info.celular}
                    onChange={(e: any) =>
                      atualizarInfo("celular", e.target.value)
                    }
                  />
                  <Campo
                    label="E-mail"
                    type="email"
                    value={info.email}
                    onChange={(e: any) =>
                      atualizarInfo("email", e.target.value)
                    }
                  />
                  <Campo
                    wrapperClass="mt-3"
                    label="LinkedIn"
                    value={info.linkedin}
                    onChange={(e: any) =>
                      atualizarInfo("linkedin", e.target.value)
                    }
                  />
                  <Campo
                    wrapperClass="mt-3"
                    label="GitHub"
                    value={info.github}
                    onChange={(e: any) =>
                      atualizarInfo("github", e.target.value)
                    }
                  />
                </div>
              </section>
            )}

            {etapaAtual === "resumo" && (
              <section>
                <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800 mb-5">
                  <span className="text-[#0B2F6B] mr-3">02</span>Resumo / Sobre
                  mim
                </h2>
                <Campo
                  as="textarea"
                  rows={6}
                  label="Um parágrafo sobre você"
                  value={resumo}
                  onChange={(e: any) => setResumo(e.target.value)}
                />
              </section>
            )}

            {etapaAtual === "habilidades" && (
              <section>
                <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800 mb-5">
                  <span className="text-[#0B2F6B] mr-3">03</span>Conhecimentos /
                  Habilidades
                </h2>
                <div className="flex gap-2">
                  <Campo
                    wrapperClass="flex-1"
                    label="Digite e aperte Enter"
                    value={skillInput}
                    onChange={(e: any) => setSkillInput(e.target.value)}
                    onKeyDown={(e: any) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), adicionarSkill())
                    }
                  />
                  <button
                    onClick={adicionarSkill}
                    className="w-10 h-10 mt-auto flex items-center justify-center rounded-lg border border-[#0B2F6B] bg-blue-50 text-[#0B2F6B]"
                  >
                    <IconePlus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((s, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[#0B2F6B] bg-blue-50 border border-blue-200 rounded-md py-1 pl-2.5 pr-1.5"
                    >
                      {s}{" "}
                      <button
                        onClick={() =>
                          setSkills((p) => p.filter((_, idx) => idx !== i))
                        }
                        className="text-blue-400 hover:text-[#0B2F6B]"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </section>
            )}

            {etapaAtual === "experiencia" && (
              <section>
                <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800 mb-5">
                  <span className="text-[#0B2F6B] mr-3">04</span>Experiências
                </h2>
                <div className="flex flex-col gap-3">
                  {experiencias.map((exp, i) => (
                    <div
                      key={exp.id}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <div className="flex justify-between mb-3">
                        <span className="font-mono text-[10px] uppercase text-[#0B2F6B]">
                          Experiência {i + 1}
                        </span>
                        <button
                          onClick={() => removerItem(setExperiencias, exp.id)}
                          className="text-slate-400 hover:text-red-500"
                        >
                          <IconeLixeira className="w-4 h-4" />
                        </button>
                      </div>
                      <Campo
                        label="Função / Cargo"
                        value={exp.funcao}
                        onChange={(e: any) =>
                          atualizarItem(
                            setExperiencias,
                            exp.id,
                            "funcao",
                            e.target.value,
                          )
                        }
                      />
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <Campo
                          wrapperClass="col-span-2"
                          label="Empresa"
                          value={exp.empresa}
                          onChange={(e: any) =>
                            atualizarItem(
                              setExperiencias,
                              exp.id,
                              "empresa",
                              e.target.value,
                            )
                          }
                        />
                        <div className="flex flex-col gap-1.5 relative">
                          <label className="font-mono text-[10px] uppercase text-slate-500">
                            Modalidade
                          </label>
                          <select
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none appearance-none"
                            value={exp.modalidade}
                            onChange={(e: any) =>
                              atualizarItem(
                                setExperiencias,
                                exp.id,
                                "modalidade",
                                e.target.value,
                              )
                            }
                          >
                            {["Presencial", "Remoto", "Híbrido"].map((m) => (
                              <option key={m}>{m}</option>
                            ))}
                          </select>
                          <IconeSeta className="absolute right-3 top-9 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <Campo
                          type="month"
                          label="Início"
                          value={exp.inicio}
                          onChange={(e: any) =>
                            atualizarItem(
                              setExperiencias,
                              exp.id,
                              "inicio",
                              e.target.value,
                            )
                          }
                        />
                        <Campo
                          type="month"
                          label="Fim"
                          value={exp.fim}
                          disabled={exp.atual}
                          onChange={(e: any) =>
                            atualizarItem(
                              setExperiencias,
                              exp.id,
                              "fim",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <label className="inline-flex gap-2 mt-3 text-[13px]">
                        <input
                          type="checkbox"
                          checked={exp.atual}
                          onChange={(e: any) =>
                            atualizarItem(
                              setExperiencias,
                              exp.id,
                              "atual",
                              e.target.checked,
                            )
                          }
                        />{" "}
                        Trabalho aqui atualmente
                      </label>
                      <Campo
                        as="textarea"
                        rows={3}
                        wrapperClass="mt-3"
                        label="Descrição"
                        value={exp.descricao}
                        onChange={(e: any) =>
                          atualizarItem(
                            setExperiencias,
                            exp.id,
                            "descricao",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setExperiencias((p) => [
                      ...p,
                      {
                        id: uid(),
                        funcao: "",
                        empresa: "",
                        modalidade: "Presencial",
                        inicio: "",
                        fim: "",
                        atual: false,
                        descricao: "",
                      },
                    ])
                  }
                  className="w-full mt-4 p-3 flex items-center justify-center gap-2 text-slate-500 border-2 border-dashed border-slate-300 rounded-xl hover:text-[#0B2F6B] hover:border-[#0B2F6B]"
                >
                  <IconePlus className="w-4 h-4" /> Adicionar experiência
                </button>
              </section>
            )}

            {etapaAtual === "formacao" && (
              <section>
                <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800 mb-5">
                  <span className="text-[#0B2F6B] mr-3">05</span>Formação
                </h2>
                <div className="flex flex-col gap-3">
                  {formacoes.map((f, i) => (
                    <div
                      key={f.id}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <div className="flex justify-between mb-3">
                        <span className="font-mono text-[10px] uppercase text-[#0B2F6B]">
                          Formação {i + 1}
                        </span>
                        <button
                          onClick={() => removerItem(setFormacoes, f.id)}
                          className="text-slate-400 hover:text-red-500"
                        >
                          <IconeLixeira className="w-4 h-4" />
                        </button>
                      </div>
                      <Campo
                        label="Curso"
                        value={f.curso}
                        onChange={(e: any) =>
                          atualizarItem(
                            setFormacoes,
                            f.id,
                            "curso",
                            e.target.value,
                          )
                        }
                      />
                      <Campo
                        wrapperClass="mt-3"
                        label="Instituição"
                        value={f.instituicao}
                        onChange={(e: any) =>
                          atualizarItem(
                            setFormacoes,
                            f.id,
                            "instituicao",
                            e.target.value,
                          )
                        }
                      />
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <Campo
                          wrapperClass="col-span-2"
                          label="Cidade"
                          value={f.cidade}
                          onChange={(e: any) =>
                            atualizarItem(
                              setFormacoes,
                              f.id,
                              "cidade",
                              e.target.value,
                            )
                          }
                        />
                        <Campo
                          label="Estado"
                          value={f.estado}
                          onChange={(e: any) =>
                            atualizarItem(
                              setFormacoes,
                              f.id,
                              "estado",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <Campo
                          type="month"
                          label="Início"
                          value={f.inicio}
                          onChange={(e: any) =>
                            atualizarItem(
                              setFormacoes,
                              f.id,
                              "inicio",
                              e.target.value,
                            )
                          }
                        />
                        <Campo
                          type="month"
                          label="Fim"
                          value={f.fim}
                          disabled={f.atual}
                          onChange={(e: any) =>
                            atualizarItem(
                              setFormacoes,
                              f.id,
                              "fim",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <label className="inline-flex gap-2 mt-3 text-[13px]">
                        <input
                          type="checkbox"
                          checked={f.atual}
                          onChange={(e: any) =>
                            atualizarItem(
                              setFormacoes,
                              f.id,
                              "atual",
                              e.target.checked,
                            )
                          }
                        />{" "}
                        Cursando atualmente
                      </label>
                      <Campo
                        as="textarea"
                        rows={3}
                        wrapperClass="mt-3"
                        label="Descrição"
                        value={f.descricao}
                        onChange={(e: any) =>
                          atualizarItem(
                            setFormacoes,
                            f.id,
                            "descricao",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setFormacoes((p) => [
                      ...p,
                      {
                        id: uid(),
                        curso: "",
                        instituicao: "",
                        cidade: "",
                        estado: "",
                        inicio: "",
                        fim: "",
                        atual: false,
                        descricao: "",
                      },
                    ])
                  }
                  className="w-full mt-4 p-3 flex items-center justify-center gap-2 text-slate-500 border-2 border-dashed border-slate-300 rounded-xl hover:text-[#0B2F6B] hover:border-[#0B2F6B]"
                >
                  <IconePlus className="w-4 h-4" /> Adicionar formação
                </button>
              </section>
            )}

            {etapaAtual === "idiomas" && (
              <section>
                <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800 mb-5">
                  <span className="text-[#0B2F6B] mr-3">06</span>Idiomas
                </h2>
                <Campo
                  label="Língua materna"
                  value={linguaMaterna}
                  onChange={(e: any) => setLinguaMaterna(e.target.value)}
                />
                <div className="flex flex-col gap-2.5 mt-3">
                  <label className="font-mono text-[10px] uppercase text-slate-500">
                    Outros idiomas
                  </label>
                  {idiomas.map((lang) => (
                    <div key={lang.id} className="flex gap-2 items-center">
                      <input
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none"
                        value={lang.idioma}
                        onChange={(e) =>
                          atualizarItem(
                            setIdiomas,
                            lang.id,
                            "idioma",
                            e.target.value,
                          )
                        }
                      />
                      <select
                        className="w-36 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none appearance-none"
                        value={lang.nivel}
                        onChange={(e) =>
                          atualizarItem(
                            setIdiomas,
                            lang.id,
                            "nivel",
                            e.target.value,
                          )
                        }
                      >
                        {[
                          "Básico",
                          "Intermediário",
                          "Avançado",
                          "Fluente",
                          "Nativo",
                        ].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => removerItem(setIdiomas, lang.id)}
                        className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500"
                      >
                        <IconeLixeira className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setIdiomas((p) => [
                      ...p,
                      { id: uid(), idioma: "", nivel: "Intermediário" },
                    ])
                  }
                  className="w-full mt-4 p-3 flex items-center justify-center gap-2 text-slate-500 border-2 border-dashed border-slate-300 rounded-xl hover:text-[#0B2F6B] hover:border-[#0B2F6B]"
                >
                  <IconePlus className="w-4 h-4" /> Adicionar idioma
                </button>
              </section>
            )}
          </div>
        </aside>

        {/* PREVIEW DA FOLHA */}
        <main className="flex-1 bg-slate-100 overflow-y-auto p-10 flex flex-col items-center">
          <div className="w-full max-w-190 bg-white text-slate-900 rounded-sm p-14 shadow-xl border border-slate-200 font-serif">
            <header>
              <h2 className="font-bold text-4xl tracking-tight leading-none">
                {info.nome || "Seu Nome"}
              </h2>
              <div className="w-12 h-1 bg-[#0B2F6B] rounded-full my-4" />
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13.5px] text-slate-600 font-sans">
                {endereco && (
                  <span className="inline-flex gap-1.5">
                    <IconePin className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
                    {endereco}
                  </span>
                )}
                {info.celular && (
                  <span className="inline-flex gap-1.5">
                    <IconeFone className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
                    {info.celular}
                  </span>
                )}
                {info.email && (
                  <span className="inline-flex gap-1.5">
                    <IconeMail className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
                    {info.email}
                  </span>
                )}
                {info.linkedin && (
                  <span className="inline-flex gap-1.5">
                    <IconeLinkedin className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
                    {info.linkedin}
                  </span>
                )}
                {info.github && (
                  <span className="inline-flex gap-1.5">
                    <IconeGithub className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
                    {info.github}
                  </span>
                )}
              </div>
            </header>

            {resumo && (
              <section className="mt-8">
                <h3 className="font-sans font-bold text-xs tracking-widest uppercase pb-2 mb-4 border-b border-slate-200 relative after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
                  Sobre mim
                </h3>
                <p className="text-sm leading-relaxed text-justify">{resumo}</p>
              </section>
            )}

            {skills.length > 0 && (
              <section className="mt-8">
                <h3 className="font-sans font-bold text-xs tracking-widest uppercase pb-2 mb-4 border-b border-slate-200 relative after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
                  Conhecimentos
                </h3>
                <p className="font-mono text-xs leading-loose">
                  {skills.map((s, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="text-[#0B2F6B] mx-1">|</span>}{" "}
                      {s}{" "}
                    </React.Fragment>
                  ))}
                </p>
              </section>
            )}

            {experiencias.length > 0 && (
              <section className="mt-8">
                <h3 className="font-sans font-bold text-xs tracking-widest uppercase pb-2 mb-4 border-b border-slate-200 relative after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
                  Experiência
                </h3>
                <div className="relative pl-5 before:absolute before:left-1 before:top-1 before:bottom-1 before:w-[1.5px] before:bg-slate-200 space-y-6">
                  {experiencias.map((exp) => (
                    <article
                      key={exp.id}
                      className="relative before:absolute before:-left-5 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-white before:border-[2.5px] before:border-[#0B2F6B]"
                    >
                      <div className="flex justify-between font-sans">
                        <h4 className="font-bold text-base">{exp.funcao}</h4>
                        <span className="font-mono text-[11px] text-slate-500">
                          {montarPeriodo(
                            exp.inicio,
                            exp.fim,
                            exp.atual,
                            "Atual",
                          )}
                        </span>
                      </div>
                      <div className="text-[13.5px] font-semibold text-[#0B2F6B] font-sans">
                        {exp.empresa}{" "}
                        <span className="text-slate-400 font-normal">
                          · {exp.modalidade}
                        </span>
                      </div>
                      {exp.descricao && (
                        <p className="text-sm mt-2 text-justify">
                          {exp.descricao}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {formacoes.length > 0 && (
              <section className="mt-8">
                <h3 className="font-sans font-bold text-xs tracking-widest uppercase pb-2 mb-4 border-b border-slate-200 relative after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
                  Formação
                </h3>
                <div className="relative pl-5 before:absolute before:left-1 before:top-1 before:bottom-1 before:w-[1.5px] before:bg-slate-200 space-y-6">
                  {formacoes.map((f) => (
                    <article
                      key={f.id}
                      className="relative before:absolute before:-left-5 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-white before:border-[2.5px] before:border-[#0B2F6B]"
                    >
                      <div className="flex justify-between font-sans">
                        <h4 className="font-bold text-base">{f.curso}</h4>
                        <span className="font-mono text-[11px] text-slate-500">
                          {montarPeriodo(f.inicio, f.fim, f.atual, "Cursando")}
                        </span>
                      </div>
                      <div className="text-[13.5px] font-semibold text-[#0B2F6B] font-sans">
                        {f.instituicao}{" "}
                        <span className="text-slate-400 font-normal">
                          · {[f.cidade, f.estado].filter(Boolean).join(", ")}
                        </span>
                      </div>
                      {f.descricao && (
                        <p className="text-sm mt-2 text-justify">
                          {f.descricao}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {temIdiomas && (
              <section className="mt-8">
                <h3 className="font-sans font-bold text-xs tracking-widest uppercase pb-2 mb-4 border-b border-slate-200 relative after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
                  Idiomas
                </h3>
                <div className="font-sans text-sm space-y-2">
                  {linguaMaterna && (
                    <div>
                      <span className="font-semibold">{linguaMaterna}</span>{" "}
                      <span className="text-slate-300">—</span>{" "}
                      <span className="text-slate-600">Nativo</span>
                    </div>
                  )}
                  {idiomas.map(
                    (l) =>
                      l.idioma && (
                        <div key={l.id}>
                          <span className="font-semibold">{l.idioma}</span>{" "}
                          <span className="text-slate-300">—</span>{" "}
                          <span className="text-slate-600">{l.nivel}</span>
                        </div>
                      ),
                  )}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
