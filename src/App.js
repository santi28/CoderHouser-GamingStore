import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const onAddHandler = (event) => {
    console.log(`Contador en ${event}`)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a The Gaming Store!" />
      <ItemCount stock={5} onAdd={(event) => onAddHandler(event)}/>
    </div>
  );
}

export default App;
