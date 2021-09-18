import { useState, useEffect } from 'react'
import React from 'react'
import Item from "./Item"
import './ItemList.css'


export const Habitaciones = [
    
  {
      id:'0',
      img: '' ,
      nombre: 'Quebracho Colorado', 
      descripcion:'habitación cálida, matrimonial, con baño en suite', 
      alt:'quebracho',
      precio: "4399",
      noches : "5",
  },
  {
      id:'1', 
      img: '',
      nombre: 'Manantial',
      descripcion:'habitación doble con vista al estanque',
      alt:'estanque',
      precio: "4299" , 
      noches: "4"
  },
  {
    id:'2', 
    img: '',
    nombre: 'El Molino',
    descripcion:'Glamping en los pies del molino, envuelto en la naturaleza y con vista a las estrellas',
    alt:'molino',
    precio: "4000" , 
    noches: "6"
  },
  {
  id:'3', 
  img: '',
  nombre: 'Impenetrable',
  descripcion:'Glamping aventurero, aire acondicionado, baño seco y paz infinita',
  alt:'impenetrable',
  precio: "5000" , 
  noches: "3"
  }
]

function getListRooms (){
  return new Promise ((resolve,reject) => {
    resolve(Habitaciones);


  })
}

const ItemList = () => {
  const [Loader, setLoader] = useState(true);
  
  const [listRooms,setListRooms] = useState([]);

  useEffect(() =>{

      setTimeout(() => {
        const roomList = getListRooms();

        roomList.then((rooms) => {
        setListRooms(rooms)
       })

       setLoader(false)
      }, 2000);
    
  }, [])



  return (
    <div className="container my-4 sm:mb-6">
      {listRooms.length === 0 ? (
        <p className="col-full">Por el momento, no hay habitaciones a alquilar</p>
      ) : (
        listRooms.map((room) => (
          <Item room={room} />
        ))
      )}
    </div>
  );
};


export default ItemList