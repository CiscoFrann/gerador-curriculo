//import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  //const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-row ">
      <aside className="w-72 bg-black flex flex-col text-white">
        <h1>oba</h1>
      </aside>
      <div className="flex-1 bg-amber-300">
        <header className="w-full h-16 bg-white">
          <h1>oba</h1>
        </header>
      </div>
    </div>
  );
}
