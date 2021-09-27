import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import ImgRunning2 from '../../Assets/running2.jpg';
import './ItemListContainer.css'
import Loading from '../Loading/Loading'


export const products = [

    {
        id: '13',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-flash-entrenamiento-greystone-gris-270020w21greygr-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/campera-rompeviento-flash-entrenamiento-greystone-gris-270020w21greygr-2.jpg',
        nombre: 'Chaqueta Rompe Viento M',
        descripcion: `campera FLASH con capucha, diseñada para darlo todo en tus entrenamientos.
    Cordón de ajuste visible.
    Bolsillo de frente con cierre.
    Bolsillos laterales con botones.
    Cintura y puños elásticos.`,
        material: '100% Poliéster',
        alt: 'Chaqueta rompe vientos femenina',
        sexo: 'hombre',
        categoria: 'chaqueta',
        precio: 17000,
        stock: 14
    },
    {
        id: '14',
        img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-running-own-the-run-gris-100020gc7869001-1.jpg',
        img2: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/r/e/remera-adidas-running-own-the-run-gris-100020gc7869001-2.jpg',
        nombre: 'Camiseta Entrenamiento M',
        descripcion: `Tenés el cajón lleno de remeras que no te sirven.
    Demasiado gruesas o finas.
    Muy ajustadas o excesivamente holgadas.
    Olvidate de esas incomodidades y ponete la remera ADIDAS Own the Run.
    Se ha confeccionado con materiales reciclados Primegreen como parte de nuestro compromiso con la sostenibilidad y para ofrecerte la máxima comodidad de principio a fin de la carrera.
    No te conformes con menos.
    El tejido transpirable AEROREADY mantiene la piel fresca y seca.
    Los detalles reflectantes te permiten correr con seguridad al amanecer o al atardecer.
    Logo ADIDAS y detalles en estampado reflectivos.`,
        material: '100% Poliéster',
        alt: 'Chaqueta rompe vientos femenina',
        sexo: 'hombre',
        categoria: 'camiseta',
        precio: 5199,
        stock: 16
    }





]

function getItems() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

const ItemListContainer = ({setCartItem}) => {
    const [Loader, setLoader] = useState(true);

    const { catId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //USO SETTIMEOUT PARA SIMULAR PEDIDO API
        setTimeout(() => {
            const dress = getItems(products);
            
            dress
                .then(res => {
                   
                    //SI USO UNA CATEGORIA ME RENDERIZA ESA CATEGORIA
                    if (catId) {
                        const catFiltrado = res.filter(prod => prod.categoria === catId);
                        setProducts(catFiltrado)
                    } else { //SINO ME RENDERIZA TODO EL ARRAY
                        setProducts(res)
                    }

                })
                .catch(err => console.log(err))
                .finally(() => {
                    //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
                    setLoader(false)
                })

        }, 2000);

    }, [catId,products])
    
    return (

        <div className="tienda-contenedor">
            <div className="contenedor-principal" style={{ backgroundImage: `url(${ImgRunning2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
                <div className="contenedor-infoTienda">
                    <h2 className="contenedor-titulo">Tienda</h2>
                </div>
            </div>

            <div>
                {Loader === true ? <Loading/> : <ItemList  products={products} setCartItem={setCartItem}/>}
            </div>
        </div>


    )
}

export default ItemListContainer