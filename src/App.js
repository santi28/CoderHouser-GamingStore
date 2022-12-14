import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartPage from "./components/Cart.jsx";
import NavBar from "./components/NavBar";

import CartProvider from "./contexts/CartContext";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  // const onAddHandler = (event) => {
  //   console.log(`Contador en ${event}`)
  // }

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categories/:category" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
