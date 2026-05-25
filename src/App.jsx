import React, {
  useEffect,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";

import "./styles/app.css";

function App() {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(
          JSON.parse(storedUser)
        );
      } catch (error) {
        localStorage.removeItem(
          "user"
        );

        setUser(null);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}

        <Route
          path="/"
          element={
            user ? (
              <Navigate
                to="/products"
              />
            ) : (
              <Login />
            )
          }
        />

        {/* PRODUCTS */}

        <Route
          path="/products"
          element={
            user ? (
              <Products />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* CART */}

        <Route
          path="/cart"
          element={
            user ? (
              <Cart />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* SUCCESS */}

        <Route
          path="/success"
          element={
            user ? (
              <Success />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* ORDERS */}

        <Route
          path="/orders"
          element={
            user ? (
              <Orders />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* WISHLIST */}

        <Route
          path="/wishlist"
          element={
            user ? (
              <Wishlist />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={
            user ? (
              <Profile />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* FALLBACK */}

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;