import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState({})

  const catalogo = new Promise((resolve, reject) => {
    setTimeout(() => {

      const productos = [
        { 
          id: 1,
          img: 'https://wallpaperaccess.com/full/3808117.png',
          alt: "HOIIV",
          title: "Hearts Of Iron IV",
          price: "$1000",
          description: "Cubre el periodo comprendido entre 1936 y 1948, y se centra en los acontecimientos que condujeron a la Segunda Guerra Mundial y a la guerra en sí; un juego de estrategia y guerra por excelencia.",
          categories: ['games'],
          stock: 1000
        },
        { 
          id: 2,
          img: 'https://i.pinimg.com/originals/38/7a/87/387a8794d1d879417615c9895b3b5d3d.jpg',
          alt: "ETS2",
          title: "Euro Truck Simulator 2",
          price: "$1099",
          description: "Comienzas con la compra de un camión y la elección de tu país. A partir de ahí, Euro Truck Simulator te llevará a transportar frutas, muebles o electrodomésticos a ciudades como Barcelona, París o Madrid.",
          categories: ['games'],
          stock: 1000
        },
        { 
          id: 3,
          img: 'https://wallpapercave.com/wp/wp7775348.jpg',
          alt: "Phasmo",
          title: "Phasmophobia",
          price: "$170",
          description: "La actividad paranormal va en aumento y depende de ti y de tu equipo utilizar todo el equipo de caza de fantasmas a tu disposición para reunir la mayor cantidad de evidencia posible.",
          categories: ['games'],
          stock: 1000
        },
        { 
          id: 4,
          img: 'https://images6.alphacoders.com/914/914690.png',
          alt: "RON",
          title: "Ready Or Not",
          price: "$1000",
          description: "Desarrollado por Void Interactive para PC, Ready Or Not te da libertad para que cumplas cada misión como desees, haciendo uso de una gran variedad de gadgets y armas propias de estos policías",
          categories: ['games'],
          stock: 1000
        },
        { 
          id: 5,
          img: 'https://wallpapercave.com/wp/wp7841598.jpg',
          alt: "RON",
          title: "PlayStation 5 (Black Edition)",
          price: "$298.999",
          description: "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
          categories: ['consoles'],
          stock: 32
        },
        { 
          id: 6,
          img: 'https://wallpaperaccess.com/full/2645305.jpg',
          alt: "RON",
          title: "XBox Series X",
          price: "$300.000",
          description: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.",
          categories: ['consoles'],
          stock: 12
        },
      ]

      resolve(productos.find(product => product.id === +id))
    }, 2000)
  })

  useEffect(() => {
    catalogo
      .then(gettedProduct => {
        setProduct(gettedProduct)
        setIsLoading(false)
      })
      .catch(err => console.err(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className='px-5 py-6 m-auto max-w-7xl'>
      {
        !isLoading ? 
        (product !== undefined) ? <ItemDetail {...product}/> : <p>No se encontró el producto</p>
        : <p>Cargando...</p>
      }
    </div>
  )
}

export default ItemDetailContainer