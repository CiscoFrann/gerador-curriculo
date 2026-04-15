import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-4">
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

      <button
        className="bg-[#0B3D91] text-white w-full mt-2 p-4 cursor-pointer font-bold pl-4 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-200"
        onClick={() => navigate("/dashboard")}
      >
        Acessar Dashboard
      </button>

      <div className="flex items-center gap-4 text-gray-400 text-xs">
        <div className="flex-1 h-px bg-gray-300"></div>
        OU CONTINUE COM
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    </form>
  );
}

export default LoginForm;
