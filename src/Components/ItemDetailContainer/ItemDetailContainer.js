import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import {Habitaciones} from '../ItemContainer/ItemList';
import Loading from '../Loading/Loading';


function getListRooms (){
    return new Promise ((resolve,reject) => {
      resolve(Habitaciones)
    })
}
const ItemDetailContainer = () => {

    const [Loader, setLoader] = useState(true);

    const [listRooms, setListRooms] = useState([]);

    useEffect(() => {

        setTimeout(() => {
           const roomList = getListRooms();

           roomList.then((rooms) => setListRooms(rooms)).catch((err) => console.log(err))

           setLoader(false)
        }, 3000)

    }, [])

    return(
        <div>
             <div className="TiendaContainer">
           <h2 className="TiendaTitulo">Detalles del Producto</h2>
           <hr className="TiendaHr"/>
        </div>
           <div className="ItemListDetail">
               {Loader === true ? <Loading/> : listRooms.map((item) => (<ItemDetail
                 id={item.id}
                 item ={item}
               />))}
           </div>

        </div>
    )
}

export default ItemDetailContainer