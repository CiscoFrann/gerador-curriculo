import { useState } from "react";
import LoginForm from "../../components/LoginForm/inedx";
import RegisterForm from "../../components/RegisterForm";

function Auth() {
  const [activeTab, setactiveTab] = useState<"login" | "register">("login");
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 lg:w-[60%] bg-[#012169]  flex-col justify-center p-16 items-center gap-8">
        <div className="w-full max-w-[90%] flex flex-col gap-8 p-10 items-start">
          <h1 className="text-white text-3xl font-bold  ">
            The Carreer Architect
          </h1>
          <h2 className="text-white text-5xl font-bold">
            Sua jornada profissional começa aqui
          </h2>
          <p className="text-[#82A0F5] text-2xl ">
            Projete seu futuro com ferramentas de design editorial que
            transforma sua trajetória em uma narrativa de autoridade.
          </p>
          <div className="flex gap-16">
            <div>
              <p className="font-bold text-5xl text-green-400">500k+</p>
              <p className="text-[#82A0F5] font bold uppercase mt-3 opacity-80">
                carreiras Construídas
              </p>
            </div>
            <div>
              <p className="font-bold text-5xl text-green-400">98%</p>
              <p className="text-[#82A0F5] font bold uppercase mt-3 opacity-80">
                Taxa de Sucesso
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-md flex flex-col gap-8 p-10">
          <div className="bg-[#E6E6EB] p-1.5 rounded-2xl flex shadow-sm self-center w-full ">
            <button
              className={`flex-1 py-4 px-8 m-1 rounded-xl font-bold hover:scale-105 cursor-pointer transition-all duration-200 ${activeTab === "login" ? "bg-white text-[#1B3A7E] shadow-md" : "bg-[#E6E6EB] text-gray-500 "}  `}
              onClick={() => setactiveTab("login")}
            >
              Entrar
            </button>
            <button
              className={`flex-1 py-4 px-8 m-1 rounded-xl font-bold hover:scale-105 cursor-pointer transition-all duration-200 ${activeTab === "register" ? "bg-white text-[#1B3A7E] shadow-md" : "bg-[#E6E6EB] text-gray-500 "}  `}
              onClick={() => setactiveTab("register")}
            >
              Criar Conta
            </button>
          </div>

          <div className="flex flex-col gap-4 text-left">
            {activeTab === "login" ? (
              <h1 className="text-black text-5xl font-bold leading-tight">
                Bem-vindo de volta
              </h1>
            ) : (
              <h1 className="text-black text-5xl font-bold leading-tight">
                Cadastre seus dados
              </h1>
            )}

            {activeTab === "login" && (
              <p className="text-gray-600 text-lg leading-relaxed">
                Insira suas credenciais para acessar sua conta profissional.
              </p>
            )}
          </div>

          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}

          {/* <div className="flex gap-4">
            <button className="flex-1 bg-[#E6E6EB] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition">
              <span>🟢</span> Google
            </button>

            <button className="flex-1 bg-[#E6E6EB] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition">
              <span>🔵</span> LinkedIn
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Auth;
