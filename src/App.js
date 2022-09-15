import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const onAddHandler = (event) => {
  //   console.log(`Contador en ${event}`)
  // }

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/categories/:category" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
