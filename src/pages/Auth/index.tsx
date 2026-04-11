function Auth() {
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
          <div className="bg-[#E6E6EB] p-1.5 rounded-2xl flex shadow-sm self-center w-full">
            <button className="flex-1 py-4 px-8 m-1 rounded-xl font-bold hover:scale-105 cursor-pointer transition-all duration-200 bg-white text-black shadow-md">
              Entrar
            </button>
            <button className="flex-1 py-4 px-8 m-1 rounded-xl font-bold hover:scale-105 cursor-pointer transition-all duration-200 text-gray-500">
              Criar Conta
            </button>
          </div>

          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-black text-5xl font-bold leading-tight">
              Bem-vindo de volta
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              Insira suas credenciais para acessar sua conta profissional
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wide text-gray-600">
              E-MAIL PROFISSIONAL
            </label>
            <input
              type="e-mail"
              placeholder="nome@exemplo.com"
              className="bg-[#E6E6EB] w-full px-4 py-4 rounded-xl pl-8 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold tracking-wide text-gray-600">
                SENHA
              </label>
              <span className="text-blue-600 text-sm cursor-pointer hover:underline">
                Esqueci minha senha
              </span>
            </div>
            <input
              type="password"
              placeholder="********"
              className="bg-[#E6E6EB] w-full px-4 py-4 rounded-xl pl-8 outline-none"
            />
          </div>
          <button className="bg-[#0B3D91] text-white w-full p-4 cursor-pointer font-bold pl-4 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-200">
            Acessar Dashboard
          </button>

          <div className="flex items-center gap-4 text-gray-400 text-xs">
            <div className="flex-1 h-px bg-gray-300"></div>
            OU CONTINUE COM
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

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
