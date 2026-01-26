
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const tituloItem = "Bienvenido a Aventum";


  return (
    <BrowserRouter>      
       <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer tituloItem={tituloItem} />} />
        <Route path='/category/:type' element={<ItemListContainer tituloItem={tituloItem} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />

      </Routes>
       
    </BrowserRouter>
  );
}

export default App
