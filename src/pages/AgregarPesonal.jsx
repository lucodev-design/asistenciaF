import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgregarPersonal = () => {
  const [form, setForm] = useState({
    usuario: "",
    password: "",
    rol: "trabajador"
  });
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/asistencia-backend/addUsuario.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Respuesta backend:", data);

      if (data.success) {
        setMensaje("✅ Personal agregado correctamente");
        setForm({ usuario: "", password: "", rol: "trabajador" });
      } else {
        setMensaje("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <div style={{ padding: "30px", color: "#fff" }}>
      <h2>Agregar Personal</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
        <input type="text" name="usuario" placeholder="Usuario" value={form.usuario} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
        <select name="rol" value={form.rol} onChange={handleChange}>
          <option value="trabajador">Trabajador</option>
          <option value="admin">Administrador</option>
        </select>
        <button type="submit" style={{ backgroundColor: "#1561F0", color: "#fff", padding: "10px", borderRadius: "8px", fontWeight: "bold" }}>Agregar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      <button onClick={() => navigate("/admin")} style={{ marginTop: "20px" }}>Volver al Dashboard</button>
    </div>
  );
};

export default AgregarPersonal;
