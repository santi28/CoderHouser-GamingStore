/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Item from "./Item"

function ItemList() {
  const { category } = useParams();

  const catalogo = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productos = [
        { 
          id: 1,
          img: 'https://wallpaperaccess.com/full/3808117.png',
          alt: "HOIIV",
          title: "Hearts Of Iron IV",
          price: "$1000",
          children: "Cubre el periodo comprendido entre 1936 y 1948, y se centra en los acontecimientos que condujeron a la Segunda Guerra Mundial y a la guerra en sí; un juego de estrategia y guerra por excelencia.",
          categories: ['games']
        },
        { 
          id: 2,
          img: 'https://i.pinimg.com/originals/38/7a/87/387a8794d1d879417615c9895b3b5d3d.jpg',
          alt: "ETS2",
          title: "Euro Truck Simulator 2",
          price: "$1099",
          children: "Comienzas con la compra de un camión y la elección de tu país. A partir de ahí, Euro Truck Simulator te llevará a transportar frutas, muebles o electrodomésticos a ciudades como Barcelona, París o Madrid.",
          categories: ['games']
        },
        { 
          id: 3,
          img: 'https://wallpapercave.com/wp/wp7775348.jpg',
          alt: "Phasmo",
          title: "Phasmophobia",
          price: "$170",
          children: "La actividad paranormal va en aumento y depende de ti y de tu equipo utilizar todo el equipo de caza de fantasmas a tu disposición para reunir la mayor cantidad de evidencia posible.",
          categories: ['games']
        },
        { 
          id: 4,
          img: 'https://images6.alphacoders.com/914/914690.png',
          alt: "RON",
          title: "Ready Or Not",
          price: "$1000",
          children: "Desarrollado por Void Interactive para PC, Ready Or Not te da libertad para que cumplas cada misión como desees, haciendo uso de una gran variedad de gadgets y armas propias de estos policías",
          categories: ['games']
        },
        { 
          id: 5,
          img: 'https://wallpapercave.com/wp/wp7841598.jpg',
          alt: "RON",
          title: "PlayStation 5 (Black Edition)",
          price: "$298.999",
          children: "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
          categories: ['consoles']
        },
        { 
          id: 6,
          img: 'https://wallpaperaccess.com/full/2645305.jpg',
          alt: "RON",
          title: "XBox Series X",
          price: "$300.000",
          children: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
          categories: ['consoles']
        },
      ]

      if (category === undefined) resolve(productos)
      resolve(productos.filter(product => product.categories.includes(category)))
    }, 500)
  })

  const [productos, setProductos] = useState([])

  useEffect(() => {
    catalogo
      .then(gettedProducts => {
        setProductos(gettedProducts)
      })
      .catch(err => console.err(err))
  }, [category])

  return (
    <div className="grid w-full grid-cols-1 gap-3 px-5 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
      {
        productos.map(producto =>
          <Item
            key={producto.id}
            id={producto.id}
            img={producto.img}
            alt={producto.alt}
            title={producto.title}
            price={producto.price}>
              {producto.children}
          </Item>
        ) 
      }
      { (productos.length <= 0) ? <p>Cargando productos</p> : null }
    </div>
  )
}

export default ItemList