import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCheck from './ItemCheck';
import Button from '../Button/Button';
import './Cart.css'

const CartView = () => {

    const { carrito, clearCart, precioTotal, cantidadElementosDelCarrito } = useContext(CartContext);

    const ContenidoCarrito = () => {

        return (

            <div className="cart">
                <h2 className="cart-titulo">Sus compras</h2>
                <hr />
                <div className="cart-contenedor">
                    {carrito.map((products) => (
                        <div key={products?.id} className="product-cart">
                            <ItemCheck
                                products={products}
                            />
                        </div>
                    ))}
                    <div className="total-contenedor">
                        <h3>Precio Total</h3>
                        <p>$ {precioTotal()}</p>
                        <Link to={'/checkout'}><Button className="btn-compra" label="Finalizar la compra"></Button></Link>
                    </div>
                </div>
                <Button function={clearCart} className="btn-delete" label="Eliminar todos los productos del carrito" />
            </div>
        )

    }

    const CarritoVacio = () => {

        return (

            <div className="cart">
                <h2 className="cart-titulo">Carrito Vacio</h2>
                <hr />
                <p className="cart-titulo">¿Porque no visitas nuestra tienda?</p>
                <Link to={'/tienda'}>
                    <Button className="contenedor-btn" label="Ir a Tienda" />
                </Link>

            </div>

        )
    }

    return (
        <>
            {(cantidadElementosDelCarrito() !== 0) ? <ContenidoCarrito /> : <CarritoVacio />}
        </>
    )
}

export default CartView