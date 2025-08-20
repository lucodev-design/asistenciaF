import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/components/Login";
import Trabajadores from "../src/pages/Trabajadores";
import DashboardAdmin from "../src/pages/DashboardAdmin";
import AgregarPersonal from "../src/pages/AgregarPesonal";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trabajadores" element={<Trabajadores />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/agregar-personal" element={<AgregarPersonal />} />
      </Routes>
  );
}
