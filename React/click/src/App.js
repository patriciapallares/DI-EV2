import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import gato from "./images/cat.jpg";
import { useState } from "react";

function App() {
  // implementar el estado: Hooks
  // funciones de React que permiten usar caracteristicas con componentes
  // usamos el Hook useState y entre paréntesis asignamos el valor inicial

  const [numClicks, setNumClicks] = useState(0);

  // arrow function. se asigna a una constante. en este caso la función no toma ningún parámetro
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={gato} alt="Logo de la web" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto={"Click"}
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto={"Reiniciar"}
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
