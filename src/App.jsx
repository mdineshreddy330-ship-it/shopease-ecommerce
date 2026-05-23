import React from "react";

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
  const user =
    localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;