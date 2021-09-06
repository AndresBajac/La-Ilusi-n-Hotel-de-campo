import React from 'react';
import { ItemList } from './ItemList';
import {Card, Button} from 'react-bootstrap'
import cartIcon from '../../resources/icons/carritoCompra.png';

export const ItemListContainer = (props) => {


    return (
        <Card id="cardPrincipal">
        <Card.Img  variant="top" src={cartIcon} />
        <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text >
            <p>{props.greeting}</p>
            <p>{props.dirección}</p>    
            </Card.Text>
            <Button variant="primary">Conocenos</Button>
        </Card.Body>
        </Card>
    )
}