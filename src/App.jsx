/*import './App.css'*/
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const tituloItem = "Bienvenido a Aventum";
  const categoriaItem = "Cascos";

  return (
    <>
      <Navbar/>
      <ItemListContainer 
      tituloItem={tituloItem} 
      categoriaItem={categoriaItem} />

    </>
  )
}

export default App
