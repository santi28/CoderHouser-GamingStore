import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCartContext } from '../contexts/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ id, img, title, categories, price, description, stock }) {
  const navigate = useNavigate()
  const { cart, addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(cart.find(product => product.id === id)?.quantity ?? 0)

  const onAddHandler = (gettedQuantity) => {
    // En caso de restarse la cantidad, directamente se guarda en el carrito
    if ((cart.find(product => product.id === id)?.quantity ?? 0) !== 0 && quantity >= gettedQuantity) {
      addToCart({ id, img, title, categories, price, description, stock }, gettedQuantity)
      toast("Carrito actualizado!")
    }

    setQuantity(gettedQuantity)
  }

  const buyNow = () => {
    addToCart({ id, img, title, categories, price, description, stock }, 1);
    navigate("/cart")
  }

  const addToCartHandler = () => {
    addToCart({ id, img, title, categories, price, description, stock }, quantity)
    toast('Producto añadido al carrito!')
  }

  return (
    <div className="grid w-full grid-cols-12 grid-rows-2 gap-2 overflow-hidden">
      <img src={img} alt="ALT" className="col-start-1 col-end-9 rounded-xl"/>
      <div className="flex flex-col col-span-11 col-start-9 gap-4 px-5 py-4 border top-5 border-slate-300 rounded-xl h-fit">
        <h2 className="text-2xl font-bold">{ title }</h2>
        <div className="flex flex-row flex-wrap gap-3">
          { categories.map((tag, index) => <span key={index} className="px-3 py-1 text-white rounded-lg bg-slate-900">{tag}</span>) }          
        </div>
        <span className="text-5xl font-light">${price}</span>
        <p>{description}</p>
        <div className='flex flex-col w-full gap-4'>
          <ItemCount className="flex-1" stock={stock} onAdd={onAddHandler} initial={quantity}/>
          { quantity > 0 ? <button onClick={() => addToCartHandler()} className="flex items-center justify-center flex-1 py-2 text-white rounded-lg bg-slate-900">Añadir al carrito</button> : null }
          <button onClick={buyNow} className="flex items-center justify-center flex-1 py-2 text-white rounded-lg bg-slate-900">Comprar ahora!</button>
        </div>
      </div>
      {/* <img src="/images/gaming.jpg" alt="ALT" className="flex-1" />
      <div className="w-32">
        <h2>Titulo del producto</h2>
      </div> */}
    </div>
  )
}

export default ItemDetail

