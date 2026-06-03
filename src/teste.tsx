// import React, { useState } from "react";

// /* ------------------------------------------------------------------ */
// /* Tipos                                                             */
// /* ------------------------------------------------------------------ */

// interface InfoPessoal {
//   nome: string;
//   rua: string;
//   numero: string;
//   bairro: string;
//   estado: string;
//   linkedin: string;
//   celular: string;
//   email: string;
//   github: string;
// }

// type Modalidade = "Presencial" | "Remoto" | "Híbrido";

// interface Experiencia {
//   id: string;
//   funcao: string;
//   empresa: string;
//   modalidade: Modalidade;
//   inicio: string; // "AAAA-MM"
//   fim: string; // "AAAA-MM"
//   atual: boolean;
//   descricao: string;
// }

// interface Formacao {
//   id: string;
//   curso: string;
//   instituicao: string;
//   cidade: string;
//   estado: string;
//   inicio: string; // "AAAA-MM"
//   fim: string; // "AAAA-MM"
//   atual: boolean;
//   descricao: string;
// }

// type NivelFluencia =
//   | "Básico"
//   | "Intermediário"
//   | "Avançado"
//   | "Fluente"
//   | "Nativo";

// interface Idioma {
//   id: string;
//   idioma: string;
//   nivel: NivelFluencia;
// }

// type Etapa =
//   | "pessoal"
//   | "resumo"
//   | "habilidades"
//   | "experiencia"
//   | "formacao"
//   | "idiomas";

// /* ------------------------------------------------------------------ */
// /* Utilidades                                                        */
// /* ------------------------------------------------------------------ */

// const MESES = [
//   "Jan",
//   "Fev",
//   "Mar",
//   "Abr",
//   "Mai",
//   "Jun",
//   "Jul",
//   "Ago",
//   "Set",
//   "Out",
//   "Nov",
//   "Dez",
// ];

// const uid = (): string => Math.random().toString(36).slice(2, 9);

// function formatarMes(valor: string): string {
//   if (!valor) return "";
//   const [ano, mes] = valor.split("-");
//   const idx = parseInt(mes, 10) - 1;
//   if (isNaN(idx) || !MESES[idx]) return valor;
//   return `${MESES[idx]} ${ano}`;
// }

// function montarEndereco(p: InfoPessoal): string {
//   const linha1 = [p.rua, p.numero].filter(Boolean).join(", ");
//   const linha2 = [p.bairro, p.estado].filter(Boolean).join(", ");
//   return [linha1, linha2].filter(Boolean).join(" — ");
// }

// function montarPeriodo(
//   inicio: string,
//   fim: string,
//   atual: boolean,
//   palavraAtual: string,
// ): string {
//   if (!inicio) return "";
//   return `${formatarMes(inicio)} — ${atual ? palavraAtual : formatarMes(fim) || "—"}`;
// }

// /* ------------------------------------------------------------------ */
// /* Ícones (SVG inline, sem dependências)                             */
// /* ------------------------------------------------------------------ */

// type IconeProps = { className?: string };

// const IconeUser: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//     <circle cx="12" cy="7" r="4" />
//   </svg>
// );

// const IconeDoc: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
//     <path d="M14 2v6h6" />
//     <path d="M9 13h6M9 17h6" />
//   </svg>
// );

// const IconeCode: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
//   </svg>
// );

// const IconeMaleta: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="2" y="7" width="20" height="14" rx="2" />
//     <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//   </svg>
// );

// const IconeGraduacao: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 10 12 5 2 10l10 5 10-5Z" />
//     <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
//   </svg>
// );

// const IconeGlobo: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="12" cy="12" r="10" />
//     <path d="M2 12h20" />
//     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
//   </svg>
// );

// const IconePin: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const IconeFone: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
//   </svg>
// );

// const IconeMail: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 7-10 6L2 7" />
//   </svg>
// );

// const IconeLinkedin: React.FC<IconeProps> = ({ className }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0Z" />
//   </svg>
// );

// const IconeGithub: React.FC<IconeProps> = ({ className }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
//   </svg>
// );

// const IconePlus: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12 5v14M5 12h14" />
//   </svg>
// );

// const IconeLixeira: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.7"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14ZM10 11v6M14 11v6" />
//   </svg>
// );

// const IconeSeta: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m6 9 6 6 6-6" />
//   </svg>
// );

// const IconeVoltar: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M19 12H5M12 19l-7-7 7-7" />
//   </svg>
// );

// const IconeSalvar: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
//     <path d="M17 21v-8H7v8M7 3v5h8" />
//   </svg>
// );

// const IconeDownload: React.FC<IconeProps> = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <path d="M7 10l5 5 5-5M12 15V3" />
//   </svg>
// );

// /* ------------------------------------------------------------------ */
// /* Configuração                                                      */
// /* ------------------------------------------------------------------ */

// const ETAPAS: { id: Etapa; label: string; Icone: React.FC<IconeProps> }[] = [
//   { id: "pessoal", label: "Pessoal", Icone: IconeUser },
//   { id: "resumo", label: "Resumo", Icone: IconeDoc },
//   { id: "habilidades", label: "Habilidades", Icone: IconeCode },
//   { id: "experiencia", label: "Experiências", Icone: IconeMaleta },
//   { id: "formacao", label: "Formação", Icone: IconeGraduacao },
//   { id: "idiomas", label: "Idiomas", Icone: IconeGlobo },
// ];

// const MODALIDADES: Modalidade[] = ["Presencial", "Remoto", "Híbrido"];
// const NIVEIS: NivelFluencia[] = [
//   "Básico",
//   "Intermediário",
//   "Avançado",
//   "Fluente",
//   "Nativo",
// ];

// /* ------------------------------------------------------------------ */
// /* Estado inicial (dados de exemplo — editáveis)                     */
// /* ------------------------------------------------------------------ */

// const INFO_INICIAL: InfoPessoal = {
//   nome: "Rafael Monteiro",
//   rua: "Rua das Acácias",
//   numero: "245",
//   bairro: "Vila Madalena",
//   estado: "SP",
//   linkedin: "linkedin.com/in/rafaelmonteiro",
//   celular: "(11) 98765-4321",
//   email: "rafael.monteiro@email.com",
//   github: "github.com/rafaelmonteiro",
// };

// const RESUMO_INICIAL =
//   "Desenvolvedor full-stack com foco em aplicações web escaláveis e código limpo. " +
//   "Experiência sólida em JavaScript/TypeScript, do back-end com Node.js e PostgreSQL " +
//   "ao front-end com React. Movido por entregar produto, colaborar em times ágeis e " +
//   "transformar requisitos complexos em soluções simples e bem testadas.";

// const SKILLS_INICIAIS: string[] = [
//   "JavaScript",
//   "TypeScript",
//   "Git",
//   "Node.js",
//   "PostgreSQL",
//   "React.js",
//   "React Native",
//   "Express",
//   "Sequelize",
//   "Prisma",
//   "REST",
//   "JWT",
//   "Java",
//   "Figma",
//   "Python",
//   "Clean Code",
//   "Metodologias Ágeis",
// ];

// const EXPERIENCIAS_INICIAIS: Experiencia[] = [
//   {
//     id: uid(),
//     funcao: "Desenvolvedor Full-Stack Pleno",
//     empresa: "Nuvem Tecnologia",
//     modalidade: "Remoto",
//     inicio: "2023-03",
//     fim: "",
//     atual: true,
//     descricao:
//       "Desenvolvimento e manutenção de APIs REST em Node.js e interfaces em React. " +
//       "Autenticação com JWT, modelagem de dados em PostgreSQL com Prisma e participação " +
//       "ativa nas cerimônias ágeis do time.",
//   },
//   {
//     id: uid(),
//     funcao: "Desenvolvedor Front-End Júnior",
//     empresa: "Studio Digital",
//     modalidade: "Híbrido",
//     inicio: "2021-06",
//     fim: "2023-02",
//     atual: false,
//     descricao:
//       "Construção de telas responsivas a partir de protótipos no Figma, com React e " +
//       "consumo de APIs. Refatoração de componentes legados aplicando Clean Code.",
//   },
// ];

// const FORMACOES_INICIAIS: Formacao[] = [
//   {
//     id: uid(),
//     curso: "Análise e Desenvolvimento de Sistemas",
//     instituicao: "Universidade Federal de São Paulo",
//     cidade: "São Paulo",
//     estado: "SP",
//     inicio: "2019-02",
//     fim: "2021-12",
//     atual: false,
//     descricao:
//       "Formação técnica em desenvolvimento de software, banco de dados, estruturas de dados e engenharia de sistemas.",
//   },
// ];

// const IDIOMAS_INICIAIS: Idioma[] = [
//   { id: uid(), idioma: "Inglês", nivel: "Avançado" },
//   { id: uid(), idioma: "Espanhol", nivel: "Intermediário" },
// ];

// /* ------------------------------------------------------------------ */
// /* Componente                                                        */
// /* ------------------------------------------------------------------ */

// export default function ConstrutorCurriculo() {
//   const [etapaAtual, setEtapaAtual] = useState<Etapa>("pessoal");
//   const [info, setInfo] = useState<InfoPessoal>(INFO_INICIAL);
//   const [resumo, setResumo] = useState<string>(RESUMO_INICIAL);
//   const [skills, setSkills] = useState<string[]>(SKILLS_INICIAIS);
//   const [skillInput, setSkillInput] = useState<string>("");
//   const [experiencias, setExperiencias] = useState<Experiencia[]>(
//     EXPERIENCIAS_INICIAIS,
//   );
//   const [formacoes, setFormacoes] = useState<Formacao[]>(FORMACOES_INICIAIS);
//   const [linguaMaterna, setLinguaMaterna] = useState<string>("Português");
//   const [idiomas, setIdiomas] = useState<Idioma[]>(IDIOMAS_INICIAIS);

//   /* placeholder — sem lógica no header (mantém apenas as que já existem) */
//   const handleVoltar = () => {};

//   /* --- info pessoal --- */
//   const atualizarInfo = (campo: keyof InfoPessoal, valor: string) =>
//     setInfo((prev) => ({ ...prev, [campo]: valor }));

//   /* --- skills --- */
//   const adicionarSkill = () => {
//     const valor = skillInput.trim();
//     if (!valor) return;
//     if (!skills.some((s) => s.toLowerCase() === valor.toLowerCase())) {
//       setSkills((prev) => [...prev, valor]);
//     }
//     setSkillInput("");
//   };
//   const removerSkill = (idx: number) =>
//     setSkills((prev) => prev.filter((_, i) => i !== idx));
//   const onSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" || e.key === ",") {
//       e.preventDefault();
//       adicionarSkill();
//     }
//   };

//   /* --- experiências --- */
//   const adicionarExperiencia = () =>
//     setExperiencias((prev) => [
//       ...prev,
//       {
//         id: uid(),
//         funcao: "",
//         empresa: "",
//         modalidade: "Presencial",
//         inicio: "",
//         fim: "",
//         atual: false,
//         descricao: "",
//       },
//     ]);
//   const removerExperiencia = (id: string) =>
//     setExperiencias((prev) => prev.filter((e) => e.id !== id));
//   const atualizarExperiencia = <K extends keyof Experiencia>(
//     id: string,
//     campo: K,
//     valor: Experiencia[K],
//   ) =>
//     setExperiencias((prev) =>
//       prev.map((e) => (e.id === id ? { ...e, [campo]: valor } : e)),
//     );

//   /* --- formação --- */
//   const adicionarFormacao = () =>
//     setFormacoes((prev) => [
//       ...prev,
//       {
//         id: uid(),
//         curso: "",
//         instituicao: "",
//         cidade: "",
//         estado: "",
//         inicio: "",
//         fim: "",
//         atual: false,
//         descricao: "",
//       },
//     ]);
//   const removerFormacao = (id: string) =>
//     setFormacoes((prev) => prev.filter((f) => f.id !== id));
//   const atualizarFormacao = <K extends keyof Formacao>(
//     id: string,
//     campo: K,
//     valor: Formacao[K],
//   ) =>
//     setFormacoes((prev) =>
//       prev.map((f) => (f.id === id ? { ...f, [campo]: valor } : f)),
//     );

//   /* --- idiomas --- */
//   const adicionarIdioma = () =>
//     setIdiomas((prev) => [
//       ...prev,
//       { id: uid(), idioma: "", nivel: "Intermediário" },
//     ]);
//   const removerIdioma = (id: string) =>
//     setIdiomas((prev) => prev.filter((l) => l.id !== id));
//   const atualizarIdioma = <K extends keyof Idioma>(
//     id: string,
//     campo: K,
//     valor: Idioma[K],
//   ) =>
//     setIdiomas((prev) =>
//       prev.map((l) => (l.id === id ? { ...l, [campo]: valor } : l)),
//     );

//   const endereco = montarEndereco(info);
//   const temIdiomas = Boolean(linguaMaterna.trim()) || idiomas.length > 0;

//   /* ---------------------------------------------------------------- */
//   /* Render                                                          */
//   /* ---------------------------------------------------------------- */

//   return (
//     <div className="flex flex-col w-full h-screen min-h-[640px] font-sans text-slate-800 bg-slate-50 overflow-hidden antialiased">
//       {/* ============================= HEADER ============================= */}
//       <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 z-20 shrink-0">
//         <div className="flex items-center gap-3.5 min-w-0">
//           <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0B2F6B] text-white font-serif font-bold text-base shadow-sm tracking-tight">
//             CV
//           </div>
//           <button
//             onClick={handleVoltar}
//             type="button"
//             aria-label="Voltar"
//             className="flex items-center justify-center p-2 rounded-full text-slate-500 bg-transparent hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
//           >
//             <IconeVoltar className="w-5 h-5" />
//           </button>
//           <input
//             type="text"
//             defaultValue="Desenvolvedor Full-Stack"
//             aria-label="Nome do currículo"
//             className="font-sans text-lg font-bold text-[#0B2F6B] bg-transparent border-b-2 border-transparent outline-none px-1 py-0.5 w-64 min-w-0 transition-colors hover:border-slate-300 focus:border-[#0B2F6B]"
//           />
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             type="button"
//             className="inline-flex items-center gap-2 px-4 py-2 font-sans text-sm font-medium text-slate-600 bg-transparent rounded-lg cursor-pointer transition-colors hover:bg-slate-100 hover:text-slate-900"
//           >
//             <IconeSalvar className="w-4 h-4" /> Salvar
//           </button>
//           <button
//             type="button"
//             className="inline-flex items-center gap-2 px-4 py-2 font-sans text-sm font-medium text-white bg-[#0B2F6B] rounded-lg cursor-pointer transition-colors hover:bg-[#08224e] shadow-sm"
//           >
//             <IconeDownload className="w-4 h-4" /> Exportar PDF
//           </button>
//         </div>
//       </header>

//       {/* ============================== ABAS ============================== */}
//       <nav
//         role="tablist"
//         className="flex gap-2 px-6 py-3 bg-white border-b border-slate-200 overflow-x-auto shrink-0 scrollbar-thin"
//       >
//         {ETAPAS.map(({ id, label, Icone }) => (
//           <button
//             key={id}
//             type="button"
//             role="tab"
//             aria-selected={id === etapaAtual}
//             onClick={() => setEtapaAtual(id)}
//             className={`inline-flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-full border font-sans font-semibold text-[13px] whitespace-nowrap cursor-pointer transition-colors ${
//               id === etapaAtual
//                 ? "bg-blue-50 border-blue-200 text-[#0B2F6B]"
//                 : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700"
//             }`}
//           >
//             <Icone className="w-4 h-4" />
//             {label}
//           </button>
//         ))}
//       </nav>

//       {/* ===================== ÁREA DE TRABALHO ===================== */}
//       <div className="flex-1 flex min-h-0 overflow-hidden">
//         {/* ---------------------- FORMULÁRIO ---------------------- */}
//         <aside className="w-full max-w-[560px] bg-white border-r border-slate-200 overflow-y-auto">
//           <div
//             className="p-8 pb-16 transition-opacity duration-300 ease-in-out"
//             key={etapaAtual}
//           >
//             {/* ETAPA: Pessoal */}
//             {etapaAtual === "pessoal" && (
//               <section>
//                 <div className="flex items-baseline gap-3 mb-5">
//                   <span className="font-mono text-xs font-medium text-[#0B2F6B] tracking-wide">
//                     01
//                   </span>
//                   <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800">
//                     Informações pessoais
//                   </h2>
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                     Nome completo
//                   </label>
//                   <input
//                     className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                     value={info.nome}
//                     placeholder="Seu nome"
//                     onChange={(e) => atualizarInfo("nome", e.target.value)}
//                   />
//                 </div>

//                 <div className="grid grid-cols-3 gap-3 mt-3">
//                   <div className="flex flex-col gap-1.5 col-span-2">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       Rua
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.rua}
//                       placeholder="Rua / Avenida"
//                       onChange={(e) => atualizarInfo("rua", e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       Número
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.numero}
//                       placeholder="000"
//                       onChange={(e) => atualizarInfo("numero", e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5 col-span-2 mt-3">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       Bairro
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.bairro}
//                       placeholder="Bairro"
//                       onChange={(e) => atualizarInfo("bairro", e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5 mt-3">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       Estado
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.estado}
//                       placeholder="UF"
//                       onChange={(e) => atualizarInfo("estado", e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3 mt-3">
//                   <div className="flex flex-col gap-1.5">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       Celular
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.celular}
//                       placeholder="(00) 00000-0000"
//                       onChange={(e) => atualizarInfo("celular", e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       E-mail
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.email}
//                       placeholder="voce@email.com"
//                       onChange={(e) => atualizarInfo("email", e.target.value)}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5 mt-3">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       LinkedIn
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.linkedin}
//                       placeholder="linkedin.com/in/voce"
//                       onChange={(e) =>
//                         atualizarInfo("linkedin", e.target.value)
//                       }
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1.5 mt-3">
//                     <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                       GitHub
//                     </label>
//                     <input
//                       className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={info.github}
//                       placeholder="github.com/voce"
//                       onChange={(e) => atualizarInfo("github", e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </section>
//             )}

//             {/* ETAPA: Resumo */}
//             {etapaAtual === "resumo" && (
//               <section>
//                 <div className="flex items-baseline gap-3 mb-5">
//                   <span className="font-mono text-xs font-medium text-[#0B2F6B] tracking-wide">
//                     02
//                   </span>
//                   <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800">
//                     Resumo / Sobre mim
//                   </h2>
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                     Um parágrafo sobre você
//                   </label>
//                   <textarea
//                     className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20 resize-y min-h-[64px] leading-relaxed"
//                     rows={6}
//                     value={resumo}
//                     placeholder="Quem é você como profissional, suas forças e o que busca."
//                     onChange={(e) => setResumo(e.target.value)}
//                   />
//                 </div>
//               </section>
//             )}

//             {/* ETAPA: Habilidades */}
//             {etapaAtual === "habilidades" && (
//               <section>
//                 <div className="flex items-baseline gap-3 mb-5">
//                   <span className="font-mono text-xs font-medium text-[#0B2F6B] tracking-wide">
//                     03
//                   </span>
//                   <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800">
//                     Conhecimentos / Habilidades
//                   </h2>
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                     Digite e pressione{" "}
//                     <kbd className="font-mono text-[9.5px] bg-slate-100 border border-slate-300 rounded px-1 text-slate-600">
//                       Enter
//                     </kbd>{" "}
//                     para adicionar
//                   </label>
//                   <div className="flex gap-2">
//                     <input
//                       className="flex-1 font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                       value={skillInput}
//                       placeholder="Ex.: JavaScript"
//                       onChange={(e) => setSkillInput(e.target.value)}
//                       onKeyDown={onSkillKeyDown}
//                     />
//                     <button
//                       className="w-10 flex items-center justify-center rounded-lg border border-[#0B2F6B] bg-blue-50 text-[#0B2F6B] cursor-pointer transition-colors hover:bg-blue-100 active:scale-95"
//                       onClick={adicionarSkill}
//                       type="button"
//                       aria-label="Adicionar habilidade"
//                     >
//                       <IconePlus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {skills.map((s, i) => (
//                     <span
//                       className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-[#0B2F6B] bg-blue-50 border border-blue-200 rounded-md py-1 pl-2.5 pr-1.5 transition-all"
//                       key={`${s}-${i}`}
//                     >
//                       {s}
//                       <button
//                         className="border-none bg-transparent text-blue-400 text-[15px] leading-none cursor-pointer px-px transition-colors hover:text-[#0B2F6B]"
//                         onClick={() => removerSkill(i)}
//                         type="button"
//                         aria-label={`Remover ${s}`}
//                       >
//                         ×
//                       </button>
//                     </span>
//                   ))}
//                   {skills.length === 0 && (
//                     <span className="text-[12.5px] text-slate-500 italic">
//                       Nenhuma habilidade adicionada ainda.
//                     </span>
//                   )}
//                 </div>
//               </section>
//             )}

//             {/* ETAPA: Experiências */}
//             {etapaAtual === "experiencia" && (
//               <section>
//                 <div className="flex items-baseline gap-3 mb-5">
//                   <span className="font-mono text-xs font-medium text-[#0B2F6B] tracking-wide">
//                     04
//                   </span>
//                   <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800">
//                     Experiências
//                   </h2>
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   {experiencias.map((exp, i) => (
//                     <div
//                       className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all"
//                       key={exp.id}
//                     >
//                       <div className="flex items-center justify-between mb-3">
//                         <span className="font-mono text-[10px] tracking-wide uppercase text-[#0B2F6B]">
//                           Experiência {String(i + 1).padStart(2, "0")}
//                         </span>
//                         <button
//                           className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-400 cursor-pointer transition-all hover:text-red-500 hover:border-red-300 hover:bg-red-50"
//                           onClick={() => removerExperiencia(exp.id)}
//                           type="button"
//                           aria-label="Remover experiência"
//                         >
//                           <IconeLixeira className="w-4 h-4" />
//                         </button>
//                       </div>
//                       <div className="flex flex-col gap-1.5">
//                         <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                           Função / Cargo
//                         </label>
//                         <input
//                           className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                           value={exp.funcao}
//                           placeholder="Ex.: Desenvolvedor Front-End"
//                           onChange={(e) =>
//                             atualizarExperiencia(
//                               exp.id,
//                               "funcao",
//                               e.target.value,
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="grid grid-cols-3 gap-3 mt-3">
//                         <div className="flex flex-col gap-1.5 col-span-2">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Empresa / Instituição
//                           </label>
//                           <input
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                             value={exp.empresa}
//                             placeholder="Nome da empresa"
//                             onChange={(e) =>
//                               atualizarExperiencia(
//                                 exp.id,
//                                 "empresa",
//                                 e.target.value,
//                               )
//                             }
//                           />
//                         </div>
//                         <div className="flex flex-col gap-1.5">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Modalidade
//                           </label>
//                           <div className="relative">
//                             <select
//                               className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none cursor-pointer outline-none transition-all hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                               value={exp.modalidade}
//                               onChange={(e) =>
//                                 atualizarExperiencia(
//                                   exp.id,
//                                   "modalidade",
//                                   e.target.value as Modalidade,
//                                 )
//                               }
//                             >
//                               {MODALIDADES.map((m) => (
//                                 <option key={m} value={m}>
//                                   {m}
//                                 </option>
//                               ))}
//                             </select>
//                             <IconeSeta className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-2 gap-3 mt-3">
//                         <div className="flex flex-col gap-1.5">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Início
//                           </label>
//                           <input
//                             type="month"
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                             value={exp.inicio}
//                             onChange={(e) =>
//                               atualizarExperiencia(
//                                 exp.id,
//                                 "inicio",
//                                 e.target.value,
//                               )
//                             }
//                           />
//                         </div>
//                         <div className="flex flex-col gap-1.5">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Fim
//                           </label>
//                           <input
//                             type="month"
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
//                             value={exp.fim}
//                             disabled={exp.atual}
//                             onChange={(e) =>
//                               atualizarExperiencia(
//                                 exp.id,
//                                 "fim",
//                                 e.target.value,
//                               )
//                             }
//                           />
//                         </div>
//                       </div>
//                       <label className="inline-flex items-center gap-2 mt-3 text-[13px] text-slate-600 cursor-pointer select-none">
//                         <input
//                           type="checkbox"
//                           className="w-4 h-4 text-[#0B2F6B] bg-white border-slate-300 rounded cursor-pointer focus:ring-[#0B2F6B]"
//                           checked={exp.atual}
//                           onChange={(e) =>
//                             atualizarExperiencia(
//                               exp.id,
//                               "atual",
//                               e.target.checked,
//                             )
//                           }
//                         />
//                         Trabalho aqui atualmente
//                       </label>
//                       <div className="flex flex-col gap-1.5 mt-3">
//                         <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                           Descrição
//                         </label>
//                         <textarea
//                           className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20 resize-y min-h-[64px] leading-relaxed"
//                           rows={3}
//                           value={exp.descricao}
//                           placeholder="O que você fez, tecnologias e resultados."
//                           onChange={(e) =>
//                             atualizarExperiencia(
//                               exp.id,
//                               "descricao",
//                               e.target.value,
//                             )
//                           }
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   className="flex items-center justify-center gap-2 w-full mt-4 p-3 font-sans text-[13px] font-semibold text-slate-500 bg-transparent border-2 border-dashed border-slate-300 rounded-xl cursor-pointer transition-colors hover:bg-blue-50 hover:border-[#0B2F6B] hover:text-[#0B2F6B]"
//                   onClick={adicionarExperiencia}
//                   type="button"
//                 >
//                   <IconePlus className="w-4 h-4" /> Adicionar experiência
//                 </button>
//               </section>
//             )}

//             {/* ETAPA: Formação */}
//             {etapaAtual === "formacao" && (
//               <section>
//                 <div className="flex items-baseline gap-3 mb-5">
//                   <span className="font-mono text-xs font-medium text-[#0B2F6B] tracking-wide">
//                     05
//                   </span>
//                   <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800">
//                     Formação
//                   </h2>
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   {formacoes.map((f, i) => (
//                     <div
//                       className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all"
//                       key={f.id}
//                     >
//                       <div className="flex items-center justify-between mb-3">
//                         <span className="font-mono text-[10px] tracking-wide uppercase text-[#0B2F6B]">
//                           Formação {String(i + 1).padStart(2, "0")}
//                         </span>
//                         <button
//                           className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-400 cursor-pointer transition-all hover:text-red-500 hover:border-red-300 hover:bg-red-50"
//                           onClick={() => removerFormacao(f.id)}
//                           type="button"
//                           aria-label="Remover formação"
//                         >
//                           <IconeLixeira className="w-4 h-4" />
//                         </button>
//                       </div>
//                       <div className="flex flex-col gap-1.5">
//                         <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                           Curso
//                         </label>
//                         <input
//                           className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                           value={f.curso}
//                           placeholder="Ex.: Ciência da Computação"
//                           onChange={(e) =>
//                             atualizarFormacao(f.id, "curso", e.target.value)
//                           }
//                         />
//                       </div>
//                       <div className="flex flex-col gap-1.5 mt-3">
//                         <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                           Instituição
//                         </label>
//                         <input
//                           className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                           value={f.instituicao}
//                           placeholder="Nome da instituição"
//                           onChange={(e) =>
//                             atualizarFormacao(
//                               f.id,
//                               "instituicao",
//                               e.target.value,
//                             )
//                           }
//                         />
//                       </div>
//                       <div className="grid grid-cols-3 gap-3 mt-3">
//                         <div className="flex flex-col gap-1.5 col-span-2">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Cidade
//                           </label>
//                           <input
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                             value={f.cidade}
//                             placeholder="Cidade"
//                             onChange={(e) =>
//                               atualizarFormacao(f.id, "cidade", e.target.value)
//                             }
//                           />
//                         </div>
//                         <div className="flex flex-col gap-1.5">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Estado
//                           </label>
//                           <input
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                             value={f.estado}
//                             placeholder="UF"
//                             onChange={(e) =>
//                               atualizarFormacao(f.id, "estado", e.target.value)
//                             }
//                           />
//                         </div>
//                       </div>
//                       <div className="grid grid-cols-2 gap-3 mt-3">
//                         <div className="flex flex-col gap-1.5">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Início
//                           </label>
//                           <input
//                             type="month"
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                             value={f.inicio}
//                             onChange={(e) =>
//                               atualizarFormacao(f.id, "inicio", e.target.value)
//                             }
//                           />
//                         </div>
//                         <div className="flex flex-col gap-1.5">
//                           <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                             Conclusão
//                           </label>
//                           <input
//                             type="month"
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20 disabled:opacity-50 disabled:cursor-not-allowed"
//                             value={f.fim}
//                             disabled={f.atual}
//                             onChange={(e) =>
//                               atualizarFormacao(f.id, "fim", e.target.value)
//                             }
//                           />
//                         </div>
//                       </div>
//                       <label className="inline-flex items-center gap-2 mt-3 text-[13px] text-slate-600 cursor-pointer select-none">
//                         <input
//                           type="checkbox"
//                           className="w-4 h-4 text-[#0B2F6B] bg-white border-slate-300 rounded cursor-pointer focus:ring-[#0B2F6B]"
//                           checked={f.atual}
//                           onChange={(e) =>
//                             atualizarFormacao(f.id, "atual", e.target.checked)
//                           }
//                         />
//                         Cursando atualmente
//                       </label>
//                       <div className="flex flex-col gap-1.5 mt-3">
//                         <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                           Breve descrição
//                         </label>
//                         <textarea
//                           className="w-full font-sans text-[13.5px] text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20 resize-y min-h-[64px] leading-relaxed"
//                           rows={3}
//                           value={f.descricao}
//                           placeholder="Ênfases, projetos, atividades relevantes."
//                           onChange={(e) =>
//                             atualizarFormacao(f.id, "descricao", e.target.value)
//                           }
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   className="flex items-center justify-center gap-2 w-full mt-4 p-3 font-sans text-[13px] font-semibold text-slate-500 bg-transparent border-2 border-dashed border-slate-300 rounded-xl cursor-pointer transition-colors hover:bg-blue-50 hover:border-[#0B2F6B] hover:text-[#0B2F6B]"
//                   onClick={adicionarFormacao}
//                   type="button"
//                 >
//                   <IconePlus className="w-4 h-4" /> Adicionar formação
//                 </button>
//               </section>
//             )}

//             {/* ETAPA: Idiomas */}
//             {etapaAtual === "idiomas" && (
//               <section>
//                 <div className="flex items-baseline gap-3 mb-5">
//                   <span className="font-mono text-xs font-medium text-[#0B2F6B] tracking-wide">
//                     06
//                   </span>
//                   <h2 className="font-sans font-bold text-sm tracking-wider uppercase text-slate-800">
//                     Idiomas
//                   </h2>
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                     Língua materna
//                   </label>
//                   <input
//                     className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                     value={linguaMaterna}
//                     placeholder="Ex.: Português"
//                     onChange={(e) => setLinguaMaterna(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1.5 mt-3">
//                   <label className="font-mono text-[10px] tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
//                     Outros idiomas e nível de fluência
//                   </label>
//                   <div className="flex flex-col gap-2.5">
//                     {idiomas.map((lang) => (
//                       <div className="flex gap-2 items-center" key={lang.id}>
//                         <input
//                           className="flex-1 min-w-0 font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                           value={lang.idioma}
//                           placeholder="Idioma (ex.: Inglês)"
//                           onChange={(e) =>
//                             atualizarIdioma(lang.id, "idioma", e.target.value)
//                           }
//                         />
//                         <div className="relative shrink-0 w-[156px]">
//                           <select
//                             className="w-full font-sans text-[13.5px] text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 pr-8 appearance-none cursor-pointer outline-none transition-all hover:border-slate-300 focus:bg-white focus:border-[#0B2F6B] focus:ring-2 focus:ring-[#0B2F6B]/20"
//                             value={lang.nivel}
//                             onChange={(e) =>
//                               atualizarIdioma(
//                                 lang.id,
//                                 "nivel",
//                                 e.target.value as NivelFluencia,
//                               )
//                             }
//                           >
//                             {NIVEIS.map((n) => (
//                               <option key={n} value={n}>
//                                 {n}
//                               </option>
//                             ))}
//                           </select>
//                           <IconeSeta className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                         </div>
//                         <button
//                           className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-400 cursor-pointer transition-all hover:text-red-500 hover:border-red-300 hover:bg-red-50"
//                           onClick={() => removerIdioma(lang.id)}
//                           type="button"
//                           aria-label="Remover idioma"
//                         >
//                           <IconeLixeira className="w-4 h-4" />
//                         </button>
//                       </div>
//                     ))}
//                     {idiomas.length === 0 && (
//                       <span className="text-[12.5px] text-slate-500 italic">
//                         Nenhum idioma adicionado ainda.
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   className="flex items-center justify-center gap-2 w-full mt-4 p-3 font-sans text-[13px] font-semibold text-slate-500 bg-transparent border-2 border-dashed border-slate-300 rounded-xl cursor-pointer transition-colors hover:bg-blue-50 hover:border-[#0B2F6B] hover:text-[#0B2F6B]"
//                   onClick={adicionarIdioma}
//                   type="button"
//                 >
//                   <IconePlus className="w-4 h-4" /> Adicionar idioma
//                 </button>
//               </section>
//             )}
//           </div>
//         </aside>

//         {/* ------------------------ PREVIEW ------------------------ */}
//         <main className="flex-1 min-w-0 bg-slate-100 overflow-y-auto p-10 flex flex-col items-center">
//           <div className="w-full max-w-[760px] bg-white text-slate-900 rounded-sm p-14 shadow-xl border border-slate-200 shrink-0 font-serif">
//             {/* Cabeçalho */}
//             <header>
//               <h2 className="font-serif font-bold text-4xl text-slate-900 tracking-tight leading-none">
//                 {info.nome || "Seu Nome"}
//               </h2>
//               <div className="w-12 h-1 bg-[#0B2F6B] rounded-full my-4" />
//               <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13.5px] text-slate-600">
//                 {endereco && (
//                   <span className="inline-flex items-center gap-1.5">
//                     <IconePin className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
//                     {endereco}
//                   </span>
//                 )}
//                 {info.celular && (
//                   <span className="inline-flex items-center gap-1.5">
//                     <IconeFone className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
//                     {info.celular}
//                   </span>
//                 )}
//                 {info.email && (
//                   <span className="inline-flex items-center gap-1.5">
//                     <IconeMail className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
//                     {info.email}
//                   </span>
//                 )}
//                 {info.linkedin && (
//                   <span className="inline-flex items-center gap-1.5">
//                     <IconeLinkedin className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
//                     {info.linkedin}
//                   </span>
//                 )}
//                 {info.github && (
//                   <span className="inline-flex items-center gap-1.5">
//                     <IconeGithub className="w-3.5 h-3.5 text-[#0B2F6B]" />{" "}
//                     {info.github}
//                   </span>
//                 )}
//               </div>
//             </header>

//             {/* Sobre mim */}
//             {resumo.trim() && (
//               <section className="mt-8">
//                 <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-slate-900 pb-2 mb-4 border-b border-slate-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
//                   Sobre mim
//                 </h3>
//                 <p className="text-sm leading-relaxed text-slate-700 text-justify">
//                   {resumo}
//                 </p>
//               </section>
//             )}

//             {/* Conhecimentos */}
//             {skills.length > 0 && (
//               <section className="mt-8">
//                 <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-slate-900 pb-2 mb-4 border-b border-slate-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
//                   Conhecimentos
//                 </h3>
//                 <p className="font-mono text-xs leading-loose text-slate-800">
//                   {skills.map((s, i) => (
//                     <React.Fragment key={`cv-${s}-${i}`}>
//                       {i > 0 && (
//                         <span className="text-[#0B2F6B] font-medium mx-1">
//                           {" "}
//                           |{" "}
//                         </span>
//                       )}
//                       <span>{s}</span>
//                     </React.Fragment>
//                   ))}
//                 </p>
//               </section>
//             )}

//             {/* Experiência */}
//             {experiencias.length > 0 && (
//               <section className="mt-8">
//                 <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-slate-900 pb-2 mb-4 border-b border-slate-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
//                   Experiência
//                 </h3>
//                 <div className="relative pl-5 before:absolute before:left-1 before:top-1.5 before:bottom-1.5 before:w-[1.5px] before:bg-slate-200 space-y-6">
//                   {experiencias.map((exp) => {
//                     const periodo = montarPeriodo(
//                       exp.inicio,
//                       exp.fim,
//                       exp.atual,
//                       "Atual",
//                     );
//                     return (
//                       <article
//                         className="relative before:absolute before:-left-5 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-white before:border-[2.5px] before:border-[#0B2F6B]"
//                         key={`cv-exp-${exp.id}`}
//                       >
//                         <div className="flex items-baseline justify-between gap-3 flex-wrap">
//                           <h4 className="font-sans font-bold text-base text-slate-900">
//                             {exp.funcao || "Função"}
//                           </h4>
//                           {periodo && (
//                             <span className="font-mono text-[11px] text-slate-500 whitespace-nowrap">
//                               {periodo}
//                             </span>
//                           )}
//                         </div>
//                         <div className="text-[13.5px] font-semibold text-[#0B2F6B] mt-0.5">
//                           {exp.empresa || "Empresa"}
//                           <span className="mx-1.5 text-slate-400">·</span>
//                           <span className="text-slate-600 font-medium">
//                             {exp.modalidade}
//                           </span>
//                         </div>
//                         {exp.descricao.trim() && (
//                           <p className="text-sm leading-relaxed text-slate-700 mt-2 text-justify">
//                             {exp.descricao}
//                           </p>
//                         )}
//                       </article>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}

//             {/* Formação */}
//             {formacoes.length > 0 && (
//               <section className="mt-8">
//                 <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-slate-900 pb-2 mb-4 border-b border-slate-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
//                   Formação
//                 </h3>
//                 <div className="relative pl-5 before:absolute before:left-1 before:top-1.5 before:bottom-1.5 before:w-[1.5px] before:bg-slate-200 space-y-6">
//                   {formacoes.map((f) => {
//                     const periodo = montarPeriodo(
//                       f.inicio,
//                       f.fim,
//                       f.atual,
//                       "Cursando",
//                     );
//                     const local = [f.cidade, f.estado]
//                       .filter(Boolean)
//                       .join(", ");
//                     return (
//                       <article
//                         className="relative before:absolute before:-left-5 before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-white before:border-[2.5px] before:border-[#0B2F6B]"
//                         key={`cv-form-${f.id}`}
//                       >
//                         <div className="flex items-baseline justify-between gap-3 flex-wrap">
//                           <h4 className="font-sans font-bold text-base text-slate-900">
//                             {f.curso || "Curso"}
//                           </h4>
//                           {periodo && (
//                             <span className="font-mono text-[11px] text-slate-500 whitespace-nowrap">
//                               {periodo}
//                             </span>
//                           )}
//                         </div>
//                         <div className="text-[13.5px] font-semibold text-[#0B2F6B] mt-0.5">
//                           {f.instituicao || "Instituição"}
//                           {local && (
//                             <>
//                               <span className="mx-1.5 text-slate-400">·</span>
//                               <span className="text-slate-600 font-medium">
//                                 {local}
//                               </span>
//                             </>
//                           )}
//                         </div>
//                         {f.descricao.trim() && (
//                           <p className="text-sm leading-relaxed text-slate-700 mt-2 text-justify">
//                             {f.descricao}
//                           </p>
//                         )}
//                       </article>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}

//             {/* Idiomas */}
//             {temIdiomas && (
//               <section className="mt-8">
//                 <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-slate-900 pb-2 mb-4 border-b border-slate-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-[1.5px] after:w-10 after:h-[1.5px] after:bg-[#0B2F6B]">
//                   Idiomas
//                 </h3>
//                 <div className="flex flex-col gap-2">
//                   {linguaMaterna.trim() && (
//                     <div className="flex items-baseline gap-2 text-sm">
//                       <span className="font-semibold text-slate-900">
//                         {linguaMaterna}
//                       </span>
//                       <span className="text-slate-300">—</span>
//                       <span className="text-slate-600">Língua materna</span>
//                     </div>
//                   )}
//                   {idiomas.map((lang) =>
//                     lang.idioma.trim() ? (
//                       <div
//                         className="flex items-baseline gap-2 text-sm"
//                         key={`cv-lang-${lang.id}`}
//                       >
//                         <span className="font-semibold text-slate-900">
//                           {lang.idioma}
//                         </span>
//                         <span className="text-slate-300">—</span>
//                         <span className="text-slate-600">{lang.nivel}</span>
//                       </div>
//                     ) : null,
//                   )}
//                 </div>
//               </section>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
