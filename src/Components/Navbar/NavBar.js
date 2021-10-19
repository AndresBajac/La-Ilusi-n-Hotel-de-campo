
import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react';
import './NavBar.css'

const NavBar = () => {

    const {carrito} = useContext(CartContext)

  return (
  <header>
    <nav className="Menu">
       <Link to={"/"}><h2 className="Menu-titulo"> La Ilusión - Hotel de Campo </h2></Link>
          <div className="Menu-item">
              <ul className="menu-lista">
                  <li> <Link to={"/"} className="Menu-link">Inicio</Link></li>
                  <li> <Link to={"/sobre_nosotros"} className="Menu-link">Sobre Nosotros</Link></li>
                  <li> <Link to={"/tienda"} className="Menu-link tienda">Habitaciones</Link>
                      <ul className="sub-menu">
                          <li><Link to={"/tienda/Singles"} className="Menu-link">Singles</Link></li>
                          <li><Link to={"/tienda/categoria/Dobles"} className="Menu-link">Dobles</Link></li>
                          <li><Link to={"/tienda/categoria/Familiares"} className="Menu-link">Familiares</Link></li>
                      </ul>
                  </li> 
                   <li> <Link to={"/contacto"} className="Menu-link">Contacto</Link></li>

              </ul> 
          </div>
          { carrito ? <CartWidget /> : ''}
        </nav>
  </header>
      
          )

}

export default NavBar