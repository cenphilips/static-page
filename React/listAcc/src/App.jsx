import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MainLayout */}
        <Route element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;