import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Button from '../Button/Button';
import './Cart.css'

const ItemCheck = ({items}) => {

    const { deleteItem  } = useContext(CartContext)

    return (
        <>
            <div key={items?.id} className="product-list">
                <div className="product-img" >
                    <img src={items?.img}  alt={items?.alt}/>
                </div>
                <div className="product-info" >
                    <h3> {items?.nombre} </h3>
                    <h4> Unidades: {items?.quantity} </h4>
                    <h5> Precio $ {items?.precio} </h5>                    
                </div>
                <hr className="product-hr"/>
                <div className="product-price" >
                    <h3> Total a pagar </h3>
                    <p> $ {Number(items.precio) * Number(items.quantity)} </p>
                    <Button
                        function={() => deleteItem(items?.id)}
                        label="Eliminar Producto"
                        className="btn-borrar" />
                </div>
            </div>


        </>
    )
}

export default ItemCheck