import React from "react";

const Trabajadores = () => {
  return (
    <div style={styles.container}>
      <h1>Vista de Trabajadores</h1>
      <p>Aquí se mostrará la lista de trabajadores.</p>

      <div style={styles.lista}>
        {/* Aquí luego podemos mapear los trabajadores desde la base de datos */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#2B2B2B",
    color: "#fff",
    minHeight: "100vh",
  },
  lista: {
    marginTop: "20px",
    border: "2px solid #86868B",
    padding: "10px",
    borderRadius: "8px",
  },
};

export default Trabajadores;
