import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import NavBar from '../src/Components/Navbar/NavBar'
import Home from './Components/Sections/Home'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartView from '../src/Components/Cart/CartView'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
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
              <ItemDetailContainer/>
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