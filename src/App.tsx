import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/builder" element={<Builder />} />
    </Routes>
  );
}

export default App;
