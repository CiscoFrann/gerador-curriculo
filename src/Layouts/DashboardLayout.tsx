import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#faf8ff] flex flex-row">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
