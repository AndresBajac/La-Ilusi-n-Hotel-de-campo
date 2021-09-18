import React from 'react';

import './Item.css';

const Item = ({room}) => {
  
 return (
    <div className="card col-four">
        <div className="img-container">
            <img src={room.img} className="img-cover" />
        </div>
        <h1 className="title">{room.nombre}</h1>
        <p className="price">{`$${room.precio}`}</p>
        <p className="descripcion">{room.descripcion}</p>
    </div>
  );
};

export default Item