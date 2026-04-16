import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
