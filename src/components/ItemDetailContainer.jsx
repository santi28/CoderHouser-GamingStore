import { useState } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='px-5 py-6 m-auto max-w-7xl'>
      {
        !isLoading ? 
        <ItemDetail 
          img='https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg' 
          title='IPhone 12' 
          tags={['Telefono', 'IPhone', 'Apple']}
          price="450.000"
          description="Es un iphone nada más"
          stock={23}/> 
        : <p>Cargando...</p>
      }
    </div>
  )
}

export default ItemDetailContainer