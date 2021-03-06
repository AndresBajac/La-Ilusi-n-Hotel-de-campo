import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ImgRunning2 from '../../Assets/running2.jpg';
import './ItemListContainer.css'
import Loading from '../Loading/Loading'

const ItemListContainer = ({setCartItem}) => {
    const [Loader, setLoader] = useState(true);

    const { catId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(!catId) {
            setLoader(true)
            getDocs(collection(db, 'products')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error al encontrar productos', error)
            }).finally(() => {
                setLoader(false)
            })
        } else {
            setLoader(true)
            getDocs(query(collection(db, 'products'), where('categoria', '==', catId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error al encontrar productos', error)
            }).finally(() => {
                setLoader(false)
            })
        }      
    }, [catId])
    
        return (

            <div className="tienda-contenedor">
                <div className="contenedor-principal" style={{ backgroundImage: `url(${ImgRunning2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
                    <div className="contenedor-infoTienda">
                        <h2 className="contenedor-titulo">Tienda</h2>
                    </div>
                </div>
    
                <div>
                    {Loader === true ? <Loading /> : <ItemList products={products} setCartItem={setCartItem} />}
                </div>
            </div>
    
    
        )
    }
    
export default ItemListContainer