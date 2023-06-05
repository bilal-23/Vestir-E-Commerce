import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/AllProducts";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import { useLoading } from "./context/LoadingContext";
import Loader from "./components/Loader/Loader";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useState, useEffect } from "react";
import BrandLogoAnimation from "./components/BrandLogoAnimation/BrandLogoAnimation";
import OrderConfirmed from "./pages/OrderConfirmed";

function App() {
  const { loading } = useLoading();
  const [brandLogoAnimation, setBrandLogoAnimation] = useState(false);

  useEffect(() => {
    if (!brandLogoAnimation) return;
    let timer = setTimeout(() => {
      setBrandLogoAnimation(false);
    }, 3600);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {brandLogoAnimation && <BrandLogoAnimation />}
      <Navbar />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/auth"
          element={
            <PrivateRoute reverseProtection={true}>
              <Auth />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-confirmed"
          element={
            <PrivateRoute>
              <OrderConfirmed />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
