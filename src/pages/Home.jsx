import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif" }}>
      <h1>Bienvenido al Sistema de Asistencias</h1>

      <button 
        onClick={() => navigate("/login")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          background: "#1561F0",
          color: "white",
          border: "none"
        }}
      >
        Ingresar
      </button>

      {/* Cuadro vacío */}
      <div 
        style={{
          marginTop: "20px",
          width: "250px",
          height: "150px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9"
        }}
      ></div>
    </div>
  );
}
