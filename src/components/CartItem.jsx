import React from 'react'
import { useState } from 'react'
import { HiTrash } from 'react-icons/hi'
import { useCartContext } from '../contexts/CartContext'
import ItemCount from './ItemCount'

function CartItem({ product }) {
  const { setNewQuantity, removeProduct } = useCartContext()
  const [quantity, setQuantity] = useState(product.quantity ?? 0)

  const onAddHandler = (event) => {
    setQuantity(event)
    setNewQuantity(product.id, event)
  }

  return (
    <div className='flex gap-6'>
      <img alt={product.title} src={product.img} className='object-cover w-64 rounded-lg h-42' />
      <div className='flex flex-col flex-1 gap-2'>
        <div className='flex w-full'>
          <h3 className='flex-1 text-xl italic font-bold'>{ product.title }</h3>
          <span className='px-3 py-1 text-white rounded-md bg-slate-900'>${product.price} (${product.price * quantity})</span>
        </div>
        <div className='flex items-center gap-2'>
          <ItemCount className="w-32" onAdd={onAddHandler} initial={quantity} stock={product.stock}/>
          <button onClick={() => removeProduct(product.id)}><HiTrash className='text-3xl text-rose-600'/></button>
        </div>
      </div>
    </div>
  )
}

export default CartItem