import { CartProvider } from "./context/CartContext";
import MyRoutes from "./MyRoutes";
import { Toaster } from "react-hot-toast";
import 'flowbite/dist/flowbite.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <CartProvider>
      <Toaster position="top-center" />
      <MyRoutes />
    </CartProvider>
  );
}

export default App;