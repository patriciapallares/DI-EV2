import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* <TareaFormulario /> */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
