import { NavLink } from "react-router-dom";
import { BookmarkCheck, FileText, LayoutDashboard } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-72 bg-white flex flex-col border-r border-slate-200 text-black ">
      <div className="p-6">
        <h1 className="font-bold text-2xl ml-4">Painel</h1>
        <nav className="mt-6">
          <ul className="flex flex-col gap-2 mt-10">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors
              ${
                isActive
                  ? "bg-[#C7CCE0] text-brand-blueAction"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }
            `}
              >
                <LayoutDashboard />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/bao"
                className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors
              ${
                isActive
                  ? "bg-brand-blueAction/10 text-brand-blueAction"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }
            `}
              >
                <BookmarkCheck />
                <span>Ilari-ê</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors
              ${
                isActive
                  ? "bg-brand-blueAction/10 text-brand-blueAction"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }
            `}
              >
                <FileText />
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
