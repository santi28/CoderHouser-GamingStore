import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

function CartPage() {
  const { cart, getTotal } = useCartContext()

  return (
    <div className='flex flex-col w-full max-w-4xl gap-6 px-5 m-auto mt-4'>
      <h2 className='text-2xl font-bold'>Carrito ({ cart.length })</h2>
      <div className='flex flex-col gap-4'>
        { 
          (cart.length > 0) ?
            cart.map(product => <CartItem product={product}/>) : 
            <div className='flex flex-col items-center justify-center w-full gap-2'>
              <h3 className='text-lg italic'>Todavia no agregaste productos</h3>
              <Link to="/" className='flex items-center justify-center flex-1 px-5 py-2 text-white rounded-lg bg-slate-900'>Ir a comprar</Link>
            </div>
        }
      </div>
      { (getTotal() !== 0) ? <p className='w-full text-lg italic text-right'>Total: ${getTotal()}</p> : null }
    </div>
  )
}

export default CartPage