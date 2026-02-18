import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

//importando al proveedor
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import Error from './components/Error'
import Footer from "./components/Footer";

function App() {
  //const tituloItem = "Aventum";
  const location = useLocation();

  return (
    <CartProvider>
      <div className='app-content d-flex flex-column' style={{ minHeight: '100vh' }}>
        <Navbar/>
        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<ItemListContainer  />} />
            <Route path='/category/:type' element={<ItemListContainer  />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        {/* Footer solo si no es checkout */}
        {location.pathname !== "/checkout" && <Footer />}
      </div>
    </CartProvider>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
