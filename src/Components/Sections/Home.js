import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ImgPortada from '../../Assets/running.jpg';
import { products } from '../ItemListContainer/ItemListContainer';
import Item from '../ItemListContainer/Item';
import Loading from '../Loading/Loading';
import './Home.css'


const Home = ({ product }) => {
  const [Loader, setLoader] = useState(true);

  const bestSeller = products.slice(0, 3);

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
      <div className="contenedor-principalHome" style={{ backgroundImage: `url(${ImgPortada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
        <div className="contenedor-infoHome">
          <h2 className="contenedor-titulo">Hacia tus vacaciones soñadas</h2>
        </div>
      </div>
      {//SECCION DOS
      }
      <div className="contenedor-ventas">
        <h2 className="contenedor-subtitulo">Tendencias en Habitaciones</h2>
        <hr />
        <div className="ItemList">
          {Loader === true ?
            <Loading /> :
            bestSeller.map((product) => <Item product={product} key={product.id} />)
          }
        </div>

        <Link to={"/tienda"}>
          <Button className="contenedor-btn" label="Ver toda la tienda" />
        </Link>
      </div>

    </div>

  )


}

export default Home