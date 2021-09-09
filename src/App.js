import './App.css';
import NavBar from '../src/Components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.js'

function App() {
  return (
    <div className="App container-fluid no-gutters">
      <header className="row">
          <NavBar />
      </header>
      <ItemListContainer titulo={"HOTEL DE CAMPO"} greeting={"La Ilusión"} dirección={"Ruta provincial 45, km 30"} />
      <ItemCount max={10} min={0} />
    </div>
  );
}

export default App;