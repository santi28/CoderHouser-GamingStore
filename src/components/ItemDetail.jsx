import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({ img, title, categories, price, description, stock }) {
  const [isAbleToBuy, setIsAbleToBuy] = useState(false);

  const onAddHandler = (quantity) => {
    console.log(quantity);
    setIsAbleToBuy(quantity > 0) // Habilitamos la opcion de compra si la cantidad supera a 0
  }

  return (
    <div className="grid w-full grid-cols-12 grid-rows-2 gap-2 overflow-hidden">
      <img src={img} alt="ALT" className="col-start-1 col-end-9 rounded-xl"/>
      <div className="flex flex-col col-span-11 col-start-9 gap-4 px-5 py-4 border top-5 border-slate-300 rounded-xl h-fit">
        <h2 className="text-2xl font-bold">{ title }</h2>
        <div className="flex flex-row flex-wrap gap-3">
          { categories.map((tag, index) => <span key={index} className="px-3 py-1 text-white rounded-lg bg-slate-900">{tag}</span>) }          
        </div>
        <span className="text-5xl font-light">{price}</span>
        <p>{description}</p>
        <div className='flex w-full gap-4'>
          <ItemCount className="flex-1" stock={stock} onAdd={onAddHandler} initial={0}/>
          { isAbleToBuy ? <Link to='/cart' className="flex items-center justify-center flex-1 text-white rounded-lg bg-slate-900">Comprar ahora!</Link> : null }
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