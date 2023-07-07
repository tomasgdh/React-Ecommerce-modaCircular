// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ResponsiveAppBar from "./components/NavBar/NavBar";
// 5 - IMPORTO MI CONTEXT PROVIDER Y ENVUELVO LA APP (CHILDRENS)
import { CartProvider } from "./context/CartContext"
// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartCheckoutPage from "./pages/CartCheckoutPage/CartCheckoutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Styles
import "./App.css";

const App = () => {
  return (
	<CartProvider>
    <Router>
      <div className="App">		
        <ResponsiveAppBar />
		<br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/checkout" element={<CartCheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
