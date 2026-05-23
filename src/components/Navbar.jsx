import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaShoppingCart,
  FaSearch,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaHeart,
  FaClipboardList,
} from "react-icons/fa";

function Navbar({
  search = "",
  setSearch = () => {},
}) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const darkMode =
    localStorage.getItem("theme") === "dark";

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  const toggleTheme = () => {
    if (darkMode) {
      localStorage.setItem("theme", "light");

      document.body.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");

      document.body.classList.add("dark");
    }

    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <h2 className="logo">
          ShopEase
        </h2>
      </div>

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <button
        className="mobile-menu-btn"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </button>

      <div
        className={`nav-links ${
          menuOpen ? "active-menu" : ""
        }`}
      >
        <Link to="/products">
          Products
        </Link>

        <Link
          className="wishlist-link"
          to="/wishlist"
        >
          <FaHeart />

          Wishlist
        </Link>

        <Link
          className="orders-link"
          to="/orders"
        >
          <FaClipboardList />

          Orders
        </Link>

        <Link
          className="cart-link"
          to="/cart"
        >
          <FaShoppingCart />

          <span className="cart-count">
            {cart.length}
          </span>
        </Link>

        <Link
          className="profile-link"
          to="/profile"
        >
          <FaUserCircle />

          Profile
        </Link>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          <FaSignOutAlt />

          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;