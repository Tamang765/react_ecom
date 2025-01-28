import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import AuthGuard from "./layout/AuthGuard";
import Guard from "./layout/Guard";
import About from "./pages/about/Index";
import Cart from "./pages/cart/Index";
import ChangePassword from "./pages/changePassword";
import Contact from "./pages/contact/Index";
import Home from "./pages/home/index";
import NewMen from "./pages/newMen";
import ProductDetail from "./pages/product";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Women from "./pages/women";

function App() {
  return (
    <AuthGuard>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/men" element={<NewMen />} />
          <Route path="/change-password" element={<ChangePassword />} />


          <Route path="/women" element={<Women />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={
            <Guard>
              <Cart />
            </Guard>
            } />
        </Route>
      </Routes>
    </AuthGuard>
  );
}

export default App;
