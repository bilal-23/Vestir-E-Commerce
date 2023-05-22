import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
