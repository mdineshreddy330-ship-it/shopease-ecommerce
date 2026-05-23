import React, { useState } from "react";

import productsData from "../data/products";

import ProductCard from "../components/ProductCard";

import Navbar from "../components/Navbar";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function Products() {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortType, setSortType] =
    useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    toast.success("Product Added To Cart");
  };

  const addToWishlist = (product) => {
    const wishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    toast.success(
      "Product Added To Wishlist"
    );
  };

  const categories = [
    "All",

    ...new Set(
      productsData.map(
        (product) => product.category
      )
    ),
  ];

  const filteredProducts =
    productsData
      .filter((product) => {
        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          selectedCategory === "All" ||
          product.category ===
            selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      })

      .sort((a, b) => {
        if (sortType === "low") {
          return a.price - b.price;
        }

        if (sortType === "high") {
          return b.price - a.price;
        }

        return 0;
      });

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="container">
        <h1 className="section-title">
          Trending Products
        </h1>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory ===
                category
                  ? "active-category"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="sort-box">
          <select
            onChange={(e) =>
              setSortType(e.target.value)
            }
          >
            <option value="">
              Sort Products
            </option>

            <option value="low">
              Price Low To High
            </option>

            <option value="high">
              Price High To Low
            </option>
          </select>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={
                addToWishlist
              }
            />
          ))}
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Products;