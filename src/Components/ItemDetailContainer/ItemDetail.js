import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './ItemDetail.css'
import '../ItemCount/ItemCount.css'

const ItemDetail = ({ product }) => {


    const [cart, setCart] = useState(true);

    const [itemCount, setItemCount] = useState();

    const [valor, setValor] = useState('');

    const getValue = (e) => {
        setValor(e.target.value)
        console.log(valor);
    }

    const handleOnAdd = () => {
        setCart(false);
    };

    const FinalizarCompra = () => {

        //APARECE EL CARRITO
        const onClick = () => {
            setCart(true);
        };

        return (
            <div>
                <Button function={onClick} label="Volver" className="btnAddCart"> </Button>
                <Link to="/tienda" className="link">
                    <Button label="Seguir Comprando" className="btnAddCart"></Button>
                </Link>
                <Link to="/cart" className="link">
                    <Button label="Finalizar Compra" className="btnAddCart"></Button>
                </Link>
            </div>
        );
    };

    return (
        <div>
            <div className="ItemContainerDetail">
                {/* ITEM DESCRIPCION */}
                <div className="ItemDescripcion">
                    <img src={product?.img} alt={product?.alt} />
                    <div className="itemContenedor">
                        <h3 className="ItemDetailNombre">{product?.nombre}</h3>
                        <p>Hasta 6 cuotas sin interes</p>
                        <b className="ItemDetail">Precio: ${product?.precio} {product?.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>}</b>
                        <select onChange={getValue} defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled>Selecciona tu mes de estadía</option>
                            <option value="E">Enero</option>
                            <option value="F">Febrero</option>
                            <option value="J">Junio</option>
                            <option value="Jl">Julio</option>
                            <option value="D">Diciembre</option>
                        </select>
                        {/* ITEM BOTON CONTADOR */}
                        {cart ? (
                            <ItemCount
                                stock={5}
                                products={product}
                                initial={0}
                                onAdd={handleOnAdd}
                                setItemCount={setItemCount}
                            />
                        ) : (
                            <FinalizarCompra />
                        )}

                    </div>

                </div>
                {/* ITEM DETALLES */}
                <div className="detallesContenedor">
                    <div className="detalles">
                        <h4 className="detallesTitulo">DETALLES</h4>
                        <p className="detallesInfo"><span>{product?.descripcion}</span></p>
                    </div>
                    <div className="detalles">
                        <h4 className="ItemTitulo">MATERIAL: </h4>
                        <p className="detallesInfo"><span>{product?.material}</span></p>
                    </div>
                </div>
                {/* FIN ITEM DETALLES */}
            </div>
        </div>

    )


}



export default ItemDetail