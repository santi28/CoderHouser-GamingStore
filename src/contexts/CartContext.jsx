import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext('');

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState([])

  const clearCart = () => setCart([])
  const isInCart = (id) => cart.find(product => product.id === id) ? true : false
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

  const addToCart = (product, quantity = 1) => {
    const newCart = cart.filter(gettedProduct => gettedProduct.id !== product.id)
    newCart.push({ ...product, quantity })
    setCart(newCart)
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addToCart }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider;