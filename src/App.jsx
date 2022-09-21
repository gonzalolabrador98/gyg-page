import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import { Productos } from './pages/Productos';
import { Contacto } from './pages/Contacto';
import { SobreNosotros } from './pages/SobreNosotros';
import { Home } from './pages/Home';
import { Carrito } from './pages/Carrito';
import { ItemDetail } from './itemDetail/ItemDetail';
import { ProductosCategoria } from './pages/ProductosCategoria';
import { DarkModeContext } from './context/DarkModeContext';
import './App.css';
import 'animate.css';

export const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? 'darkMode' : 'lightMode'} h-full`}>
      <BrowserRouter>
        <Navbar />
        <div className="animate__animated animate__fadeIn h-full">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/productos" element={<Productos />}></Route>
            <Route
              path="/categoria/:id"
              element={<ProductosCategoria />}
            ></Route>
            <Route path="/item/:id" element={<ItemDetail />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/sobrenosotros" element={<SobreNosotros />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="*" element={<Productos />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
