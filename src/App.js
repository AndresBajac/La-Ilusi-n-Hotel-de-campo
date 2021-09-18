import './App.css';
import NavBar from '../src/Components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount.js'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App container-fluid no-gutters">
      <header className="row">
          <NavBar />
      </header>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;