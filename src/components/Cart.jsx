import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

function CartPage() {
  const { cart, clearCart, getTotal } = useCartContext()
  const [total, setTotal] = useState(getTotal())

  const order = {
    buyer: {
      name: 'Santiago',
      email: 'santidenicolas@gmail.com',
      phone: '1112345678',
      address: 'CABA'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    date: new Date(),
    total
  }

  const orderHandler = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({id}) => console.log(id))

    clearCart()
    console.log(order)
  }

  const onAddHandler = () => {
    console.log(cart)
    setTotal(getTotal())
  }

  return (
    <div className='flex flex-col w-full max-w-4xl gap-6 px-5 m-auto mt-4'>
      <h2 className='text-2xl font-bold'>Carrito ({ cart.length })</h2>
      <div className='flex flex-col gap-4'>
        { 
          (cart.length > 0) ?
            cart.map(product => <CartItem key={product.id} product={product} onAdd={onAddHandler}/>) : 
            <div className='flex flex-col items-center justify-center w-full gap-2'>
              <h3 className='text-lg italic'>Todavia no agregaste productos</h3>
              <Link to="/" className='flex items-center justify-center flex-1 px-5 py-2 text-white rounded-lg bg-slate-900'>Ir a comprar</Link>
            </div>
        }
      </div>
      { 
        (total !== 0) ?
          <div className='flex items-center justify-end gap-5'>
            <p className='text-lg italic'>Total: ${total}</p>
            <button onClick={orderHandler} className='flex items-center justify-center px-5 py-2 text-white rounded-lg bg-slate-900'>Finalizar compra</button>
          </div>:
          null 
      }
    </div>
  )
}

export default CartPage