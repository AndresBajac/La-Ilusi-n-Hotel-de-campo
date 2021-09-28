import React from 'react'
import Item from "./Item"
import './ItemList.css'


const ItemList = ({products, setCartItem}) => {
  return (
      <div >
          <div className="TiendaContainer">
              <h2 className="TiendaTitulo">Bienvenido a la naturaleza pura </h2>
              <hr className="TiendaHr" />
          </div>
          <div className="ItemList">
          {products?.map((product) => <Item product={product} key={product.id} setCartItem={setCartItem}/> )
          }

          </div>

      </div>
  )
}

export default ItemList