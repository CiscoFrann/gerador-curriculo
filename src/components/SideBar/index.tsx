import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="w-72 bg-white flex flex-col border-r border-slate-200 text-black ">
      <div className="p-6">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <nav className="mt-6">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/bao"
                className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors
              ${
                isActive
                  ? "bg-brand-blueAction/10 text-brand-blueAction" // Cor se estiver na página
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900" // Cor se estiver em outra página
              }
            `}
              >
                bao
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors
              ${
                isActive
                  ? "bg-brand-blueAction/10 text-brand-blueAction" // Cor se estiver na página
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900" // Cor se estiver em outra página
              }
            `}
              >
                Auth
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors
              ${
                isActive
                  ? "bg-[#C7CCE0] text-brand-blueAction" // Cor se estiver na página
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900" // Cor se estiver em outra página
              }
            `}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
