import Item from './Item';

function ItemListContainer({ greeting }) {
  return (
    <>
      <Item 
        img="images/gaming.jpg"
        alt="Texto alternativo para una imagen"
        title="Un Producto Cualquiera"
        price="$400">
        Esto es un prodcuto cualquiera que se puede comprar por react
      </Item>
      <h1 className="py-4 text-2xl font-bold text-center">{ greeting || 'Aqui va el catalogo' }</h1>
    </>
  )
}

export default ItemListContainer