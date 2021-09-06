import React from 'react';
import cartIcon from '../../resources/icons/carritoCompra.png';
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <div className="cartIcon">
            <img className="" src={cartIcon} alt="carrito" />
        </div>
    )
}

export default CartWidget