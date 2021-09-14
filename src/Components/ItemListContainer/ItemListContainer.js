import React from 'react';
import { useState, useEffect } from 'react';

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

const lista = [
    {id:'1', name:'', description:'', stock:''},
    {id:'2', name:'', description:'', stock:''},
    {id:'3', name:'', description:'', stock:''}]
    
    function getList (){
        return new Promise ((resolve, reject) =>{
            setTimeout(()=> resolve(lista), 2000)
        })}

    useEffect (() => {
        const list = getList()

        list.then(list => {

        })
    }, [] )
        
    function findFood(what){
        const list = getList()
        list.then(list =>{console.log(list)}, err =>{console.log(err)}).catch(reason => console.log(reason))}findFood('lista')