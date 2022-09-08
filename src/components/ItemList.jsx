/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import { useEffect } from "react"

import Item from "./Item"

function ItemList() {
  const catalogo = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productos = [
        { id: 1, img: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: "Thumbnail", title: "Producto 1", price: "$400", children: "Descripción del producto 1" },
        { id: 2, img: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: "Thumbnail", title: "Producto 2", price: "$500", children: "Descripción del producto 2" },
        { id: 3, img: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: "Thumbnail", title: "Producto 3", price: "$600", children: "Descripción del producto 3" },
        { id: 4, img: 'https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: "Thumbnail", title: "Producto 4", price: "$700", children: "Descripción del producto 4" },
      ]

      resolve(productos)
    }, 1000)
  })

  const [productos, setProductos] = useState([])

  useEffect(() => {
    catalogo
      .then(gettedProducts => {
        setProductos(gettedProducts)
      })
      .catch(err => console.err(err))
  }, [])

  return (
    <div className="grid w-full grid-cols-1 gap-3 px-5 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
      {
        productos.map(producto =>
          <Item
            key={producto.id}
            img={producto.img}
            alt={producto.alt}
            title={producto.title}
            price={producto.price}>
              {producto.children}
          </Item>
        ) 
      }
    </div>
  )
}

export default ItemList