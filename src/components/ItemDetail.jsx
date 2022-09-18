import ItemCount from './ItemCount';

function ItemDetail({ img, title, categories, price, description, stock }) {
  return (
    <div className="grid w-full grid-cols-12 grid-rows-2 gap-2 overflow-hidden">
      <img src={img} alt="ALT" className="col-start-1 col-end-9 rounded-xl"/>
      <div className="flex flex-col col-span-11 col-start-9 gap-4 px-5 py-4 border top-5 border-slate-300 rounded-xl h-fit">
        <h2 className="text-2xl font-bold">{ title }</h2>
        <div className="flex flex-row flex-wrap gap-3">
          { categories.map(tag => <span className="px-3 py-1 text-white rounded-lg bg-slate-900">{tag}</span>) }          
        </div>
        <span className="text-5xl font-light">{price}</span>
        <p>{description}</p>
        <div className='flex w-full gap-4'>
          <ItemCount className="w-40" stock={stock}/>
          <button className="flex-1 text-white rounded-lg bg-slate-900">Comprar ahora!</button>
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