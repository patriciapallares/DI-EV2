import React from "react";
import "../styles/Pantalla.css";

// En el vídeo lo hace con arrow function
// desestructuración
function Pantalla({ input }) {
  return <div className="input">{input}</div>;
}

export default Pantalla;
