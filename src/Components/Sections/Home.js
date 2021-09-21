import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import {Habitaciones} from '../ItemListContainer/ItemList';
import Item from '../ItemListContainer/Item'
import Loading from '../Loading/Loading';
import './Home.css'
const Home = ({ item }) => {
  const [Loader, setLoader] = useState(true);

  const bestSeller = Habitaciones.slice(0, 3);

  useEffect(() => {
    setTimeout(() => {
      //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
      setLoader(false)
    }, 2000);

  }, [])

  return (
    <div>
      {//SECCION UNO
      }
      <div className="contenedor-principalHome" >
        <div className="contenedor-infoHome">
          <h2 className="contenedor-titulo">Tus vacaciones soñadas</h2>
        </div>
      </div>
      {//SECCION DOS
      }
      <div className="contenedor-ventas">
        <h2 className="contenedor-subtitulo">Habitaciones únicas en la zona</h2>
        <hr />
        <div className="ItemList">
          {Loader === true ?
            <Loading /> :
            bestSeller.map((item) => <Item id={item.id} room={item} />)
          }
        </div>

        <Link to={"/tienda"}>
          <Button className="contenedor-btn" label="Recorrer habitaciones" />
        </Link>
      </div>

    </div>

  )


}

export default Home