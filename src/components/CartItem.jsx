import React, { useState } from 'react'
import { HiTrash } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { useCartContext } from '../contexts/CartContext'
import ItemCount from './ItemCount'

function CartItem({ product }) {
  const { removeProduct, addToCart } = useCartContext()
  const [quantity, setQuantity] = useState(product.quantity)

  const onAddHandler = (quant) => {
    addToCart(product, quant)
    setQuantity(quant)
    toast("Carrito actualizado!")
  }

  return (
    <div className='flex gap-6'>
      <img alt={product.title} src={product.img} className='object-cover w-64 rounded-lg h-42' />
      <div className='flex flex-col flex-1 gap-2'>
        <div className='flex w-full'>
          <h3 className='flex-1 text-xl italic font-bold'>{ product.title }</h3>
          <span className='px-3 py-1 text-white rounded-md bg-slate-900'>${product.price} (${product.price * product.quantity})</span>
        </div>
        <div className='flex items-center gap-2'>
          <ItemCount className="w-36" stock={product.stock} onAdd={onAddHandler} initial={quantity}/>
          <button onClick={() => removeProduct(product.id)}><HiTrash className='text-3xl text-rose-600'/></button>
        </div>
      </div>
    </div>
  )
}

export default CartItem