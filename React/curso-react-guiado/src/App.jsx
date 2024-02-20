import "./App.css";
import Card from "./components/Card";
// import ShowHide from "./components/ShowHide";
import vehicles from "./data/vehicles";

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card titulo={v.name} descripcion={v.description} key={'d'} />;
  });

  return (
    <div className="App">
      <div className="container">{vehicleList}</div>

      {/* Min 30:18 */}
      {/* <ShowHide /> */}
    </div>
  );
}

export default App;
