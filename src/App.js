import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import NavBar from '../src/Components/Navbar/NavBar'
import Home from './Components/Sections/Home'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartView from '../src/Components/Cart/CartView'
import Footer from './Components/Footer/Footer';

function App() {

  const [cartItem, setCartItem] = useState(0);

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar cartItem={cartItem} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tienda">
              <ItemListContainer />
            </Route>
            <Route exact path='/tienda/categoria/:catId'>
              <ItemListContainer />
            </Route>
            <Route exacy path='/tienda/detalle/:itemId'>
              <ItemDetailContainer setCartItem={setCartItem}/>
            </Route>
            <Route exact path='/cart' >
              <CartView />
            </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
  </>
);
}

export default App;