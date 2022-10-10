import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

function CartPage() {
  const { cart, clearCart, getTotal } = useCartContext()
  const [total, setTotal] = useState(getTotal())
  const [isModal, setModal] = useState(false)

  const [buyer, setBuyer] = useState({
    name: 'Santiago',
    email: 'santidenicolas@gmail.com',
    phone: '1112345678',
    address: 'CABA'
  })

  const orderHandler = () => {
    setModal(true)
  }

  const orderFinishHandler = () => {
    const order = {
      buyer,
      items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
      date: new Date(),
      total
    }

    console.log(buyer)

    if (buyer.name === '' && buyer.email === '' && buyer.phone === '' && buyer.address === '')
      return toast('Por favor complete todos los campos')

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({id}) => console.log(id))

    clearCart()
    setTotal(0)

    toast("El pedido se ha procesado con exito!")
    setModal(false)
  }

  const onAddHandler = () => {
    console.log(cart)
    setTotal(getTotal())
  }

  return (
    <main className='relative'>
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
      {
        (isModal) ?
        <div className='rounded-lg w-3/4 max-w-xl absolute top-10 left-0 right-0 m-auto border-2 border-slate-900 bg-slate-50 p-4 box-border flex flex-col gap-3'>
          <h3 className='bold italic text-lg'>Completa tus datos para tu compra</h3>
          <label className='w-full'>
            Nombre:
            <input type="text" className='w-full border outline-none rounded p-1' placeholder='Tu Nombre' onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}/>
          </label>
          <label className='w-full'>
            Email:
            <input type="text" className='w-full border outline-none rounded p-1' placeholder='tunombre@gmail.com' onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}/>
          </label>
          <label className='w-full'>
            Teléfono:
            <input type="text" className='w-full border outline-none rounded p-1' placeholder='11 1234-5678' onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}/>
          </label>
          <label className='w-full'>
            Dirección:
            <input type="text" className='w-full border outline-none rounded p-1' placeholder='Tu dirección 1234' onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}/>
          </label>
          <button onClick={orderFinishHandler} className='flex items-center justify-center px-5 py-2 text-white rounded-lg bg-slate-900'>Finalizar Compra</button>
        </div>:
        null 
      }      
    </main>
  )
}

export default CartPage