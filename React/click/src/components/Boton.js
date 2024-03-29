import React from "react";
import "../styles/Boton.css";

function Boton({ texto, esBotonDeClick, manejarClick }) {
  // sintaxis de desestructuración
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
