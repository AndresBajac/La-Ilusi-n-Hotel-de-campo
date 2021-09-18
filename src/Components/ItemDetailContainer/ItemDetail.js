import { useState } from "react";
// import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemListContainer/Item";
import './ItemDetail.css'


const ItemDetail = (Item) =>{

    const [count, setCount] = useState(0);


return(
            <div key={Item.id} className="ItemContainerDetail">
                    <img src={Item.img} alt={Item.alt}/>
                    <div className="ItemContenido">
                    <h3 className="ItemDetail">{Item.nombre}</h3>
                    <h4 className="ItemDetail">Descripcion:</h4>
                    <p className="ItemDetail">{Item.descripcion}</p>
                    <b className="ItemDetail">Precio: ${Item.precio} {Item.noches >= 3 ? <span>30% OFF</span> : <span>15% OFF</span>   }</b>
                    <hr/>
                    <div className="item-contador">
                    <ItemCount max={10} min={0}/>
                    <p className="ItemDetail">Stock Disponible : {Item.noches}</p>
                    <p className="ItemDetail">{count >= Item.noches ? 'Stock Maximo' : ''}</p>
                    </div>
            </div>
        </div>

)

}

export default ItemDetail