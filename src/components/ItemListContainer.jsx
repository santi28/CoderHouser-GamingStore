function ItemListContainer({ greeting }) {
  return (
    <h1 className="py-4 text-2xl font-bold text-center">{ greeting || 'Aqui va el catalogo' }</h1>
  )
}

export default ItemListContainer