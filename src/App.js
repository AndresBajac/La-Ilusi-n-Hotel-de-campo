import './App.css';
import NavBar from '../src/Components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='root-container'>
      <NavBar name="" />
      <ItemListContainer titulo={"ESTUDIO CONTABLE"} greeting={"CLEMENTE ASOCIADOS"} dirección={"San Juan 1266"} />
    </div>
  );
}

export default App;