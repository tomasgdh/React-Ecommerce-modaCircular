// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ResponsiveAppBar from './components/NavBar/NavBar2'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
//import DetailPage from "/pages/DetailPage/DetailPage";
//import CategoryPage from "/pages/CategoryPage/CategoryPage";

//Styles
import './App.css'

const App = () => {

  return (
    <Router>
      <div className="App">
      <ResponsiveAppBar/>
      <br/>
      <ItemListContainer greeting={"¡Bienvenidos a la Tienda!"}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/*<Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
  */}</Routes>
        </div>
    </Router>
  )
}

export default App
