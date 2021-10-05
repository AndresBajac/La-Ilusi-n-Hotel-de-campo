import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import ImgRunning2 from '../../Assets/running2.jpg';
import './ItemListContainer.css'
import Loading from '../Loading/Loading'
// import Single from '../../Assets/single.jpg'
// import Matrimonial from '../../Assets/matrimonial.jpg'
// import Familiar from '../../Assets/familiar.jpg'


// export const products = [

//     {
//         id: '01',
//         img: Single,
//         img2: '',
//         nombre: 'Refugio Dorado',
//         descripcion: `Con vistas a un pequeño bosque de algarrobos, sus ventanas están orientadas a la puesta de Sol, generando un hermoso atardecer que tiñe de dorado las copas de los árboles`,
//         material: 'Cama-sommier individual, ropa blanca, placard empotrado, aire acondicionado.',
//         alt: 'Habitación individual',
//         sexo: 'hombre',
//         categoria: 'Single',
//         precio: 6500,
//         stock: 5
//     },
//     {
//         id: '02',
//         img: Matrimonial,
//         img2: '',
//         nombre: 'Rancho Aparte',
//         descripcion: `Ideal para parejas, luna de miel, escapada de fin de semana o aniversarios.
//     Traquilidad y paz al extremo.
//     No tenés que preocuparte por nada.
//     Baño en suite.
//     Sabanas de seda y algodón Pyma para ofrecerte la máxima comodidad de principio a fin de tu estadía.
//     No te conformes con menos.`,
//         material: 'Seda y algodón Pyma',
//         alt: 'Habitación matrimonial',
//         sexo: 'indistinto',
//         categoria: 'Dobles',
//         precio: 9500,
//         stock: 3
//     },

//     {
//         id: '03',
//         img: Familiar ,
//         img2: '',
//         nombre: 'Manantial',
//         descripcion: `Ideal para familias con hijos, ya que posee una cama matrimonial y otras camas indiviales adaptables.
//     Traquilidad y paz al extremo.
//     No tenés que preocuparte por nada.
//     Baño en suite.
//     Frigobar.
//     Televisión satelital.
//     Juegos de mesa disponibles.`,
//         material: 'Seda y algodón Pyma',
//         alt: 'Habitación familiar',
//         sexo: 'indistinto',
//         categoria: 'Familiar',
//         precio: 12000,
//         stock: 2
//     }





// ]

// function getItems() {
//     return new Promise((resolve, reject) => {
//         resolve(products)
//     })
// }

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