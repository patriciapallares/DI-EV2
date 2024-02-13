import React, { useState } from "react";
import "../styles/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const tareaNueva = {
      // paquete uuid
      id: uuidv4(),
      texto: input,
      completado: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}

export default TareaFormulario;
