import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from '../Loading/Loading';
import { db } from '../../services/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const [Loader, setLoader] = useState(true);

  const { itemId } = useParams();

  const [product, setProduct] = useState(undefined);


  useEffect(() => {

    setLoader(true)

    getDoc(doc(db, 'products', itemId)).then((querySnapshot) => {

      console.log({ id: querySnapshot.id, ...querySnapshot.data() })

      const product = { id: querySnapshot.id, ...querySnapshot.data() }

      setProduct(product)

    }).catch((error) => {

      console.log('Error al encontrar producto', error)

    }).finally(() => {

      setLoader(false)
    })
    return (() => {
      
      setProduct(undefined)
    })
    
  }, [itemId])

  return (
    <div className="tienda-contenedor">
      <div className="TiendaContainer">
        <h2 className="TiendaTitulo">Detalles del Producto</h2>
        <hr className="TiendaHr" />
      </div>
      <div className="ItemListDetail">
      {Loader ? <Loading /> : <ItemDetail product={product} itemid={itemId} />}
      </div>

    </div>
  )
}

export default ItemDetailContainer