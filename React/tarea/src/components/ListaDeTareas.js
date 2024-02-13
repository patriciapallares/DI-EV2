import React from "react";
import "../styles/ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import { useState } from "react";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      // agregar la tarea al principio del array + spread lololol
      const tareasActualizads = [tarea, ...tareas];
      setTareas(tareasActualizads);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizads = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizads);
  };

  const completarTarea = (id) => {
    const tareasActualizads = tareas.map((tarea) => {
      if (tarea.id === id) {
        // toggle
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizads);
  };
  return (
    // Fragmentos
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            key={tarea.id}
            id={tarea.id}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
