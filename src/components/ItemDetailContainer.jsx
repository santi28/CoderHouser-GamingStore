import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState({})

  const catalogo = new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = {
        img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
        title: 'IPhone 12',
        tags: ['Telefono', 'IPhone', 'Apple'],
        price: '450.000',
        description: 'Es un iphone nada más',
        stock: 23
      }

      resolve(product)
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
  }, [])

  return (
    <div className='px-5 py-6 m-auto max-w-7xl'>
      {
        !isLoading ?
        <ItemDetail {...product}/> 
        : <p>Cargando...</p>
      }
    </div>
  )
}

export default ItemDetailContainer