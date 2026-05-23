import React, { useState } from "react";

import Navbar from "../components/Navbar";

function Wishlist() {
  const [search, setSearch] = useState("");

  const [wishlist, setWishlist] = useState(
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || []
  );

  const removeWishlist = (id) => {
    const updatedWishlist =
      wishlist.filter(
        (item) => item.id !== id
      );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="wishlist-page">
        <h1 className="section-title">
          Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="empty-cart">
            <h2>
              Your Wishlist is Empty
            </h2>
          </div>
        ) : (
          <div className="products-grid">
            {wishlist.map((item) => (
              <div
                className="product-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="product-info">
                  <h3>{item.name}</h3>

                  <p>{item.category}</p>

                  <div className="price">
                    ₹{item.price}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeWishlist(
                        item.id
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;