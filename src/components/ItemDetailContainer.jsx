/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

import { getFirestore, getDoc, doc } from 'firebase/firestore'

function ItemDetailContainer() {
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    const query = getFirestore();
    const queryDOC = doc(query, 'productos', id)

    getDoc(queryDOC)
      .then(res => {
        setProduct({ id: res.id, ...res.data() });
        setIsLoading(false);
      })
  }, [id])

  return (
    <div className='px-5 py-6 m-auto max-w-7xl'>
      {
        !isLoading ? 
          (product) ? <ItemDetail {...product}/> : <p>No se encontró el producto</p> :
          <p>Cargando...</p>
      }
    </div>
  )
}

export default ItemDetailContainer