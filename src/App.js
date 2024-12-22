import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import About from "./pages/about/Index";
import Cart from "./pages/cart/Index";
import Contact from "./pages/contact/Index";
import Home from "./pages/home/index";
import Men from "./pages/men";
import ProductDetail from "./pages/product";
import Search from "./pages/search";
import Women from "./pages/women";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />

          <Route path="/women" element={<Women />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
