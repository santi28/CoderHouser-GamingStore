/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Item from "./Item"

function ItemList() {
  const { category } = useParams();
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    getDocs(queryCollection)
      .then(res => res.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      .then(pretty => setProductos(pretty.filter(product => product.categories.includes(category))))
  }, [category])

  return (
    <div className="grid w-full grid-cols-1 gap-3 px-5 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
      {
        productos.map(producto =>
          <Item
            key={producto.id}
            id={producto.id}
            img={producto.img}
            title={producto.title}
            price={producto.price}>
              {producto.description}
          </Item>
        ) 
      }
      { (productos.length <= 0) ? <p>Cargando productos</p> : null }
    </div>
  )
}

export default ItemList