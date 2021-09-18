import React from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'

// import { ItemList } from './ItemList';
// import {Card, Button} from 'react-bootstrap'
// import cartIcon from '../../resources/icons/carritoCompra.png';

// export const ItemListContainer = (props) => {


//     return (
//         <Card id="cardPrincipal">
//         <Card.Img  variant="top" src={cartIcon} />
//         <Card.Body>
//             <Card.Title>{props.titulo}</Card.Title>
//             <Card.Text >
//             <p>{props.greeting}</p>
//             <p>{props.dirección}</p>    
//             </Card.Text>
//             <Button variant="primary">Conocenos</Button>
//         </Card.Body>
//         </Card>
//     )
// }

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