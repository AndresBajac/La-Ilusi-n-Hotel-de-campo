import React from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {

    return (

    <div>
        <div className="contenedor-principal">
        <div className="contenedor-info">
            <h2 className="contenedor-titulo">Tus vacaciones soñadas</h2>
            <a href="">Ver habitaciones</a>
    </div>
        </div>
         
        <ItemList />
  
    
        </div>
    )
}

export default ItemListContainer