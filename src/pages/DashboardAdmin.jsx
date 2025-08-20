import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardAdmin = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Dashboard Administrador</h1>
        <button style={styles.logoutBtn} onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </header>

      <main style={styles.main}>
        <div style={styles.card} onClick={() => navigate("/trabajadores")}>
          <h2>Gestionar Trabajadores</h2>
          <p>Agregar, editar o eliminar trabajadores.</p>
        </div>

        <div style={styles.card}>
          <h2>Inventario</h2>
          <p>Gestionar productos y stock.</p>
        </div>

        <div style={styles.card}>
          <h2>Reportes</h2>
          <p>Visualizar estadísticas y reportes de la empresa.</p>
        </div>
        {/* boton para agragar un personal */}
        <div style={styles.card} onClick={() => navigate("/agregar-personal")}>
          <h2>Agregar Personal</h2>
          <p>Registrar un nuevo trabajador o administrador</p>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#131313",
    color: "#fff",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  logoutBtn: {
    backgroundColor: "#1561F0",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#2B2B2B",
    padding: "20px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
};

export default DashboardAdmin;
