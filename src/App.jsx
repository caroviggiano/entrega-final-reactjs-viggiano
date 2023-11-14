import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/CheckOut";
import ProductoDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ProductoListContainer from "./components/ItemListContainer/ItemListContainer";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductoListContainer />} />
          <Route path="/Producto/:id" element={<ProductoDetailContainer />} />
          <Route path="/productos" element={<ProductoListContainer />} />
          <Route path="/productos/:category" element={<ProductoListContainer />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
