import React from "react";
// rfce
import "../styles/Card.css";

function Card({ titulo = "Título por defecto", descripcion }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default Card;
