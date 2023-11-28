import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Carrito from "./components/Carrito/Carrito";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/CheckOut/CheckOut";
import ProductoDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ProductoListContainer from "./components/ItemListContainer/ItemListContainer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductoListContainer />} />
            <Route path="/producto/:id" element={<ProductoDetailContainer />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
