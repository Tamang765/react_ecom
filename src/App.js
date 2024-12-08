import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import About from "./pages/about/Index";
import Contact from "./pages/contact/Index";
import Home from "./pages/home/index";
import ProductDetail from "./pages/product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
