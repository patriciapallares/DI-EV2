import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos:</h1>
        <Testimonio
          nombre="Amaia"
          pais="España"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. "
          imagen="amaia"
        />
        <Testimonio
          nombre="Rayo"
          pais="Andorra"
          cargo="Ingeniera de Desarrollo"
          empresa="Google"
          testimonio="Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. "
          imagen="rayo"
        />
        <Testimonio
          nombre="Pam"
          pais="Catalunya"
          cargo="Developer"
          empresa="Apple"
          testimonio="Aprende los fundamentos de React en este curso desde cero. Crearás cuatro proyectos paso a paso y aprenderás los fundamentos para comenzar a crear aplicaciones web interactivas con React. "
          imagen="pam"
        />
      </div>
    </div>
  );
}

export default App;
