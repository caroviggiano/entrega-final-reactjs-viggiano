import React, {useState} from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFound from "./pages/NotFound/NotFound"
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  const [hasError, setHasError] = useState(true);

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          {hasError ? <Route path="*" element={<NotFound />} /> : null}
          {<Route path="/category/:categoryId" element={<CategoryPage />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
