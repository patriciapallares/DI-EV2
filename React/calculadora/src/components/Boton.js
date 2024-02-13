import React from "react";
import "../styles/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  // etiqueta de apertura y de cierre
  // template literals
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      // funcion anónima
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
